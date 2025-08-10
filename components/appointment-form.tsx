"use client";

import { submitAppointment } from "@/app/(actions)/submit-appointment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

/* --- constants --- */
const BILL_OPTIONS = [
  "$0-99",
  "$100-200",
  "$200-300",
  "$300-400",
  "$400-500",
  "$500+",
] as const;

/* --- schema matches server exactly --- */
const FormSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  secondName: z.string().min(2, "Second Name is required"),
  street: z.string().min(5, "Street is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(3, "Zip Code is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone is required"),
  preferredDate: z.string().min(1, "Pick a date"),
  preferredTime: z.string().min(1, "Pick a time"),
  averageMonthlyBill: z.enum(BILL_OPTIONS),
  agreeToContact: z
    .boolean()
    .refine((v) => v === true, { message: "You must agree to be contacted." }),
});

type FormData = z.infer<typeof FormSchema>;

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agreeToContact: false,
    },
  });

  const [pending, start] = useTransition();
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setServerError(null);
    start(async () => {
      // ✅ send EXACT keys to the server — no renaming
      const res = await submitAppointment(data);
      if (res.ok) {
        setSent(true);
        reset();
      } else {
        setServerError(res.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <div>
      {sent ? (
        <p className="text-green-600 mt-10">
          Thanks! We’ll call you soon to confirm.
        </p>
      ) : (
        <>
          <h2 className="text-xl font-heading font-semibold mb-6">
            Free Consultation Request
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Average Monthly Bill */}
            <div className="space-y-1.5">
              <Label>Average Monthly Bill</Label>
              <Controller
                name="averageMonthlyBill"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BILL_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.averageMonthlyBill && (
                <p className="text-red-600 text-sm">
                  {errors.averageMonthlyBill.message}
                </p>
              )}
            </div>

            {/* Names */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="First Name" {...register("firstName")} />
                {errors.firstName && (
                  <p className="text-red-600 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <Input placeholder="Second Name" {...register("secondName")} />
                {errors.secondName && (
                  <p className="text-red-600 text-sm">
                    {errors.secondName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <Input placeholder="Street" {...register("street")} />
            {errors.street && (
              <p className="text-red-600 text-sm">{errors.street.message}</p>
            )}

            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="City" {...register("city")} />
                {errors.city && (
                  <p className="text-red-600 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div className="flex-1">
                <Input placeholder="Zip Code" {...register("zipCode")} />
                {errors.zipCode && (
                  <p className="text-red-600 text-sm">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="Email" {...register("email")} />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="flex-1">
                <Input placeholder="Phone" {...register("phone")} />
                {errors.phone && (
                  <p className="text-red-600 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Preferred time */}
            <div className="flex gap-4">
              <Input
                type="date"
                {...register("preferredDate")}
                className="flex-1"
              />
              <Input
                type="time"
                {...register("preferredTime")}
                className="flex-1"
              />
            </div>
            {(errors.preferredDate || errors.preferredTime) && (
              <p className="text-red-600 text-sm">
                {errors.preferredDate?.message || errors.preferredTime?.message}
              </p>
            )}

            {/* Consent */}
            <div className="flex items-center space-x-2">
              <Controller
                control={control}
                name="agreeToContact"
                render={({ field }) => (
                  <Checkbox
                    id="agree"
                    checked={field.value ?? false}
                    onCheckedChange={(v) => field.onChange(v === true)}
                  />
                )}
              />
              <Label htmlFor="agree">
                I agree to receive a call, message or email about the
                consultation.
              </Label>
            </div>
            {errors.agreeToContact && (
              <p className="text-red-600 text-sm">
                {errors.agreeToContact.message}
              </p>
            )}

            {serverError && (
              <p className="text-red-600 text-sm">{serverError}</p>
            )}

            <Button
              type="submit"
              disabled={pending}
              className={clsx("w-full", { "opacity-70": pending })}
            >
              {pending ? "Sending…" : "Submit"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
