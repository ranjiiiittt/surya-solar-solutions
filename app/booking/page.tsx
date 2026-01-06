// app/book/page.tsx
import AppointmentForm from "@/components/appointment-form";
import { CheckCircle2, Shield, Clock, Sparkles } from "lucide-react";

export const metadata = { title: "Book Consultation" };

export default function Book() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F1EA] via-white to-[#F5F1EA]">
      {/* Announcement bar */}
      {/* <div className="w-full bg-[#FFC247] text-[#0B1220] text-center text-xs sm:text-sm font-medium py-2">
        Heads up: Solar incentives and utility programs can change. Book a free
        consult and we’ll confirm what you qualify for in your area.
      </div> */}

      <div className="container-wrapper py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT — Conversion copy */}
          <section className="space-y-6">
            <div className="inline-flex flex-wrap gap-2">
              <span className="rounded-full bg-[#0F2740] text-white px-3 py-1 text-xs font-semibold">
                No-pressure Consultation
              </span>
              <span className="rounded-full bg-[#1F6FFF]/10 text-[#1F6FFF] px-3 py-1 text-xs font-semibold">
                NY • NJ • TX • CA • CT
              </span>
              <span className="rounded-full bg-black/10 text-slate-900 px-3 py-1 text-xs font-semibold">
                24/7 scheduling
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight text-[#0F2740]">
              See if you can claim up to{" "}
              <span className="text-[#FFC247]">30% federal credit</span> and cut
              your electric bill.
            </h1>

            <p className="text-lg text-slate-700 max-w-2xl">
              We work with the top solar company and design a personalized
              system for your roof. Honest answers, clear savings math, and you
              choose if it makes sense.
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {[
                "Personalized savings report in 48 hours",
                "Engineered design for roofs",
                "Right-sized system from the top solar company so you never overpay.",
                "Long warranties (panels 25–30 yrs; brand-dependent)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-800"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm">
                <Shield className="h-4 w-4 text-slate-600" />
                No pushy sales—ever
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm">
                <Clock className="h-4 w-4 text-slate-600" />
                We meet on your schedule
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm">
                <Sparkles className="h-4 w-4 text-slate-600" />
                Home-solar specialists
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-xl">
              * Incentives vary by state, utility, and timing. We’ll verify
              eligibility during your free consultation. Your information is
              private—we never sell data.
            </p>
          </section>

          {/* RIGHT — Form in a card */}
          <aside className="lg:pl-6">
            <div className="rounded-3xl border border-black/10 bg-white/90 backdrop-blur shadow-2xl p-6 sm:p-8 sticky top-24">
              <AppointmentForm />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
