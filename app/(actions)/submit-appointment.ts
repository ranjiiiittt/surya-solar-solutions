"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

// Match the client form keys exactly
const Lead = z.object({
  firstName: z.string().min(2),
  secondName: z.string().min(2),
  street: z.string().min(5),
  city: z.string().min(2),
  zipCode: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  averageMonthlyBill: z.enum([
    "$0-99",
    "$100-200",
    "$200-300",
    "$300-400",
    "$400-500",
    "$500+",
  ]),
  // Require checkbox to be true
  agreeToContact: z
    .boolean()
    .refine((v) => v === true, { message: "You must agree to be contacted." }),
});

export type LeadType = z.infer<typeof Lead>;

export async function submitAppointment(form: unknown) {
  const parsed = Lead.safeParse(form);
  if (!parsed.success) {
    console.error("Validation error:", parsed.error.flatten());
    return { ok: false, error: "Validation failed on server" };
  }

  const {
    firstName,
    secondName,
    street,
    city,
    zipCode,
    email,
    phone,
    preferredDate,
    preferredTime,
    averageMonthlyBill,
  } = parsed.data;

  const fullAddress = `${street}, ${city}, ${zipCode}`;

  // Debug (remove in prod)
  console.log("SUBMIT →", firstName, secondName, fullAddress, phone, email);

  const from = process.env.RESEND_FROM ?? "";
  const toOwner = process.env.RESEND_TO ?? "solarsaving.surya@gmail.com";

  const ownerSubject = `New solar appointment – ${firstName} ${secondName}`;
  const ownerText = `
New Solar Consultation Request

First Name: ${firstName}
Second Name: ${secondName}
Email: ${email}
Phone: ${phone}
Address: ${fullAddress}
Average Bill: ${averageMonthlyBill}
Preferred: ${preferredDate} at ${preferredTime}
  `.trim();

  const visitorSubject = "Thanks for booking your solar consultation!";
  const visitorText = `
Hi ${firstName},

Thank you for booking a free solar consultation with SuryaRun Solar Solutions.

We’ve received your preferred time: ${preferredDate} at ${preferredTime}, and your average monthly bill: ${averageMonthlyBill}.

We'll call you at ${phone} to confirm and go over next steps.

— Team SuryaRun
  `.trim();

  try {
    // Send to owner
    await resend.emails.send({
      from,
      to: toOwner,
      subject: ownerSubject,
      text: ownerText,
    });

    // Send confirmation to visitor
    await resend.emails.send({
      from,
      to: email,
      subject: visitorSubject,
      text: visitorText,
    });

    return { ok: true };
  } catch (err) {
    console.error("Resend error:", err);
    // Optional: include a safe message to show client
    return { ok: false, error: "Email failed to send. Please try again." };
  }
}
