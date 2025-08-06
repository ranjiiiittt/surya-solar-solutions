// "use server";

// import { Resend } from "resend";
// import { z } from "zod";

// const resend = new Resend(process.env.RESEND_API_KEY!);

// const Lead = z.object({
//   name: z.string().min(2),
//   address: z.string().min(5),
//   email: z.string().email(),
//   phone: z.string().min(7),
//   preferredDate: z.string(),
//   preferredTime: z.string(),
// });

// export type LeadType = z.infer<typeof Lead>;

// export async function submitAppointment(form: LeadType) {
//   const parsed = Lead.safeParse(form);
//   if (!parsed.success) {
//     return { ok: false, error: "Validation failed on server" };
//   }

//   const { name, address, phone, email, preferredDate, preferredTime } =
//     parsed.data;
//   console.log(name, address, phone);
//   const key = process.env.RESEND_API_KEY!;
//   console.log("key", key);

//   const { id } = await resend.emails.send({
//     from: process.env.RESEND_FROM!,
//     to: "ranjitsubedi88@gmail.com",
//     subject: `New solar appointment – ${name}`,
//     text: `
// Name: ${name}
// Address: ${address}
// Email: ${email}
// Phone: ${phone}
// Preferred: ${preferredDate} at ${preferredTime}
//     `.trim(),
//   });
//   console.log("id", id);

//   await resend.emails.send({
//     from: process.env.RESEND_FROM!,
//     to: email, // visitor’s email
//     subject: "Thanks for requesting a solar consultation!",
//     text: `
// Hi ${name},

// Thanks for reaching out to SuryaRun Solar Solution!
// We’ve received your preferred slot (${preferredDate} at ${preferredTime}).
// We'll call you at ${phone} to confirm or reschedule if needed.

// — Team SuryaRun
//   `.trim(),
//   });

//   return { ok: true };
// }

"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitAppointment(form: {
  name: string;
  address: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM!, // e.g. "Leads <onboarding@resend.dev>"
      to: "ranjitsubedi108@gmail.com", // your inbox
      subject: `New solar appointment – ${form.name}`,
      text: `
Name: ${form.name}
Email: ${form.email}
Address: ${form.address}
Phone: ${form.phone}
Preferred: ${form.preferredDate} at ${form.preferredTime}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return { ok: false, error: error.message };
    }

    console.log("Resend message id:", data?.id); // ✅ should now log
    return { ok: true };
  } catch (err) {
    console.error("Server error:", err);
    return { ok: false, error: (err as Error).message };
  }
}
