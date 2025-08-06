"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { submitAppointment } from "@/app/(actions)/submit-appointment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { z } from "zod";
import clsx from "clsx";

const FormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone is required"),
  preferredDate: z.string().min(1, "Pick a date"),
  preferredTime: z.string().min(1, "Pick a time"),
});
type FormData = z.infer<typeof FormSchema>;

export default function AppointmentForm({
  triggerLabel = "Book Free Consultation",
}: {
  triggerLabel?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const [pending, start] = useTransition();
  const [sent, setSent] = useState(false);

  async function onSubmit(data: FormData) {
    start(async () => {
      const res = await submitAppointment(data);
      if (res.ok) {
        setSent(true);
        reset();
      }
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg">{triggerLabel}</Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
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
              <Input placeholder="Name" {...register("name")} />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
              <Input placeholder="Address" {...register("address")} />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address.message}</p>
              )}
              {/* Email */}
              + <Input placeholder="Email" {...register("email")} />+{" "}
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
              <Input placeholder="Phone" {...register("phone")} />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
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
              {errors.preferredDate && (
                <p className="text-red-600 text-sm">
                  {errors.preferredDate.message}
                </p>
              )}
              {errors.preferredTime && (
                <p className="text-red-600 text-sm">
                  {errors.preferredTime.message}
                </p>
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
      </SheetContent>
    </Sheet>
  );
}
