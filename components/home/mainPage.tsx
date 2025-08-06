// components/home.tsx
// Complete Home page sections: Hero, Services Snapshot, Process, Testimonials, CTA
// Uses shadcn/ui Button+Card, Tailwind v3.4, and your brand colours.
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign, Leaf, Sun } from "lucide-react";
import { FC } from "react";

const HomeComponent: FC = () => {
  return (
    <main className="space-y-32">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCta />
    </main>
  );
};

export default HomeComponent;

/* ── Hero ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="container-wrapper flex flex-col items-center text-center py-24">
      <h1 className="max-w-3xl text-5xl font-heading font-bold text-gray-900 mb-6 dark:text-gray-50">
        Independent Solar Advice—No Pushy Sales, Just Real Savings
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 mb-10 dark:text-gray-300">
        We analyse your roof, incentives, and payback—totally free—so you can
        decide if solar is right for your home or business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="#book">Book Free Consultation</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#services">See How It Works</Link>
        </Button>
      </div>
    </section>
  );
}

/* ── Services Snapshot ─────────────────────────────── */
const services = [
  {
    icon: Sun,
    title: "Residential Consultation",
    desc: "Custom roof & shading analysis with ROI timeline in plain English.",
  },
  {
    icon: DollarSign,
    title: "Proposal Review & Vendor Comparison",
    desc: "Neutral scorecard so you avoid oversizing and overpricing.",
  },
  {
    icon: Leaf,
    title: "Post‑Install Performance Check",
    desc: "Verify production vs. promise and boost system output.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="container-wrapper py-16">
      <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
        Our Core Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center space-x-4">
              <Icon className="h-8 w-8 text-brand" />
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-50">
                {title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ── Process ───────────────────────────────────────── */
const steps = [
  { num: 1, label: "Share usage & roof details" },
  { num: 2, label: "Roof & sun analysis" },
  { num: 3, label: "Savings + incentive report" },
  { num: 4, label: "Vendor proposal review" },
  { num: 5, label: "Decision support & timeline" },
];

function ProcessSection() {
  return (
    <section id="process" className="container-wrapper py-16">
      <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
        How Our Process Works
      </h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
        {steps.map(({ num, label }) => (
          <li key={num} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs">
              {num}
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
              {label}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── Testimonials ──────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Thanks to SuryaRun we avoided a $4k upsell and sized our system perfectly.",
    name: "Maya K.",
    location: "Harrisburg, PA",
  },
  {
    quote: "Their neutral proposal review saved us hours of research.",
    name: "Daniel R.",
    location: "Albany, NY",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="container-wrapper py-16">
      <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
        What Clients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map(({ quote, name, location }) => (
          <Card
            key={name}
            className="bg-gray-50 dark:bg-gray-900 border-none shadow-none"
          >
            <CardContent className="p-6">
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                “{quote}”
              </p>
              <p className="font-semibold text-brand">{name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {location}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ── Final CTA band ────────────────────────────────── */
function FinalCta() {
  return (
    <section className="py-24 bg-brand text-white text-center">
      <h2 className="text-4xl font-heading font-semibold mb-6">
        Ready to see your solar fit?
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Book your free consultation and get a personalised savings report in
        24 hours.
      </p>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="text-brand bg-white hover:bg-gray-100"
      >
        <Link href="#book">Book Free Consultation</Link>
      </Button>
    </section>
  );
}
