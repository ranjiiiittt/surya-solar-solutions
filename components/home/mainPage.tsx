// // components/home.tsx
// // Complete Home page sections: Hero, Services Snapshot, Process, Testimonials, CTA
// // Uses shadcn/ui Button+Card, Tailwind v3.4, and your brand colours.
// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { DollarSign, Leaf, Sun } from "lucide-react";
// import Link from "next/link";
// import { FC } from "react";

// const HomeComponent: FC = () => {
//   return (
//     <main className="space-y-32">
//       <HeroSection />
//       <ServicesSection />
//       <ProcessSection />
//       <TestimonialsSection />
//       <FinalCta />
//     </main>
//   );
// };

// export default HomeComponent;

// /* ── Hero ───────────────────────────────────────────── */
// function HeroSection() {
//   return (
//     <section className="container-wrapper flex flex-col items-center text-center py-24">
//       <h1 className="max-w-3xl text-5xl font-heading font-bold text-gray-900 mb-6 dark:text-gray-50">
//         Independent Solar Advice—No Pushy Sales, Just Real Savings
//       </h1>
//       <p className="max-w-2xl text-lg text-gray-600 mb-10 dark:text-gray-300">
//         We analyse your roof, incentives, and payback—totally free—so you can
//         decide if solar is right for your home or business.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <Button size="lg">
//           <Link href="/booking">Book Free Consultation</Link>
//         </Button>
//         <Button variant="outline" size="lg" asChild>
//           <Link href="#services">See How It Works</Link>
//         </Button>
//       </div>
//     </section>
//   );
// }

// /* ── Services Snapshot ─────────────────────────────── */
// const services = [
//   {
//     icon: Sun,
//     title: "Residential Consultation",
//     desc: "Custom roof & shading analysis with ROI timeline in plain English.",
//   },
//   {
//     icon: DollarSign,
//     title: "Proposal Review & Vendor Comparison",
//     desc: "Neutral scorecard so you avoid oversizing and overpricing.",
//   },
//   {
//     icon: Leaf,
//     title: "Post‑Install Performance Check",
//     desc: "Verify production vs. promise and boost system output.",
//   },
// ];

// function ServicesSection() {
//   return (
//     <section id="services" className="container-wrapper py-16">
//       <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
//         Our Core Services
//       </h2>
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map(({ icon: Icon, title, desc }) => (
//           <Card key={title} className="hover:shadow-lg transition-shadow">
//             <CardHeader className="flex items-center space-x-4">
//               <Icon className="h-8 w-8 text-brand" />
//               <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-50">
//                 {title}
//               </h3>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
//                 {desc}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ── Process ───────────────────────────────────────── */
// const steps = [
//   { num: 1, label: "Share usage & roof details" },
//   { num: 2, label: "Roof & sun analysis" },
//   { num: 3, label: "Savings + incentive report" },
//   { num: 4, label: "Vendor proposal review" },
//   { num: 5, label: "Decision support & timeline" },
// ];

// function ProcessSection() {
//   return (
//     <section id="process" className="container-wrapper py-16">
//       <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
//         How Our Process Works
//       </h2>
//       <ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
//         {steps.map(({ num, label }) => (
//           <li key={num} className="mb-10 ml-6">
//             <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs">
//               {num}
//             </span>
//             <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
//               {label}
//             </p>
//           </li>
//         ))}
//       </ol>
//     </section>
//   );
// }

// /* ── Testimonials ──────────────────────────────────── */
// const testimonials = [
//   {
//     quote:
//       "Thanks to SuryaRun we avoided a $4k upsell and sized our system perfectly.",
//     name: "Maya K.",
//     location: "Harrisburg, PA",
//   },
//   {
//     quote: "Their neutral proposal review saved us hours of research.",
//     name: "Daniel R.",
//     location: "Albany, NY",
//   },
// ];

// function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="container-wrapper py-16">
//       <h2 className="text-3xl font-heading font-semibold mb-12 text-center text-gray-900 dark:text-gray-50">
//         What Clients Say
//       </h2>
//       <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
//         {testimonials.map(({ quote, name, location }) => (
//           <Card
//             key={name}
//             className="bg-gray-50 dark:bg-gray-900 border-none shadow-none"
//           >
//             <CardContent className="p-6">
//               <p className="italic text-gray-700 dark:text-gray-300 mb-4">
//                 “{quote}”
//               </p>
//               <p className="font-semibold text-brand">{name}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {location}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ── Final CTA band ────────────────────────────────── */
// function FinalCta() {
//   return (
//     <section className="py-24 bg-brand text-white text-center">
//       <h2 className="text-4xl font-heading font-semibold mb-6">
//         Ready to see your solar fit?
//       </h2>
//       <p className="text-lg mb-8 max-w-xl mx-auto">
//         Book your free consultation and get a personalised savings report in
//         24 hours.
//       </p>
//       <Button
//         size="lg"
//         variant="outline"
//         asChild
//         className="text-brand bg-white hover:bg-gray-100"
//       >
//         <Link href="#book">Book Free Consultation</Link>
//       </Button>
//     </section>
//   );
// }

"use client";

// import React, { useMemo, useState } from "react";
// import { BackgroundGradient } from "../ui/background-gradient";
// import Link from "next/link";
// import { Button as UIButton } from "@/components/ui/button";
// import Image from "next/image";

// /**
//  * SuryaRun Solar Solutions — High‑conversion landing (React + Tailwind)
//  * Zero external UI deps so it renders immediately.
//  *
//  * Copy pillars:
//  * 1) NYC‑specific expertise (DOB, ConEd, rooftops)  2) Money clarity (incentives, payback)
//  * 3) Proof (projects, reviews, guarantees)          4) Simple next step (quote in 48h)
//  */

// // Brand palette — refined for conversion
// export const brand = {
//   ink: "#0B1220", // body text / dark base
//   navy: "#0F2740", // hero dark
//   azure: "#1F6FFF", // primary CTA
//   aqua: "#12D1FF", // CTA highlight
//   gold: "#FFC247", // savings / accent
//   mint: "#2BB673", // eco / trust ticks
//   sand: "#F5F1EA", // warm surface
//   paper: "#FFFFFF", // cards
// };

// // --- Lightweight primitives (accessible, pretty) ---
// const Button = ({
//   children,
//   variant = "primary",
//   className = "",
//   ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   variant?: "primary" | "secondary" | "ghost";
// }) => {
//   const base =
//     "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold transition active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
//   const styles = {
//     primary: `bg-[linear-gradient(135deg,${brand.azure},${brand.aqua})] text-white shadow-[0_6px_20px_rgba(31,111,255,0.35)] hover:shadow-[0_8px_24px_rgba(31,111,255,0.45)] focus-visible:ring-[${brand.azure}]`,
//     secondary: `border border-black/10 bg-white text-${"slate-900"} hover:bg-slate-50 focus-visible:ring-[${brand.azure}]`,
//     ghost: `bg-transparent text-white/90 ring-1 ring-white/20 hover:bg-white/10 focus-visible:ring-white`,
//   } as const;
//   return (
//     <button {...props} className={`${base} ${styles[variant]} ${className}`}>
//       {children}
//     </button>
//   );
// };

// const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
//   <input
//     {...props}
//     className={`w-full rounded-xl border border-black/10 bg-white/95 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[${brand.azure}]`}
//   />
// );

// const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
//   <textarea
//     {...props}
//     className={`w-full rounded-xl border border-black/10 bg-white/95 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[${brand.azure}]`}
//   />
// );

// const Card = ({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div
//     className={`rounded-2xl border border-black/10 bg-white shadow-sm ${className}`}
//   >
//     {children}
//   </div>
// );

// const CardSection = ({
//   title,
//   eyebrow,
//   children,
//   className = "",
// }: {
//   title?: string;
//   eyebrow?: string;
//   children: React.ReactNode;
//   className?: string;
// }) => (
//   <div className={`p-6 ${className}`}>
//     {eyebrow && (
//       <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
//         {eyebrow}
//       </div>
//     )}
//     {title && (
//       <div className="mt-1 text-lg font-semibold text-slate-900">{title}</div>
//     )}
//     {children}
//   </div>
// );

// function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-label="SuryaRun logo"
//     >
//       <defs>
//         <linearGradient id="sunrise" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor={brand.gold} />
//           <stop offset="100%" stopColor={brand.azure} />
//         </linearGradient>
//       </defs>
//       <circle cx="18" cy="18" r="10" fill="url(#sunrise)" />
//       <path d="M6 38h38c3 0 5 2 5 5v3H1v-3c0-3 2-5 5-5Z" fill={brand.mint} />
//       <path d="M10 38h28l-6-12H16l-6 12Z" fill={brand.azure} />
//       <path d="M18 26h8M14 32h16M12 28h20" stroke="white" strokeWidth="2" />
//     </svg>
//   );
// }

// function SectionHeader({
//   title,
//   subtitle,
//   align = "left",
// }: {
//   title: string;
//   subtitle?: string;
//   align?: "left" | "center";
// }) {
//   return (
//     <div
//       className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
//       {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
//     </div>
//   );
// }

// function Check({ children }: { children: React.ReactNode }) {
//   return (
//     <li className="flex items-start gap-2 text-sm text-slate-700">
//       <span
//         className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full"
//         style={{ backgroundColor: brand.mint }}
//       >
//         <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//           <path
//             d="M10 3.5 5 9 2 6.5"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </svg>
//       </span>
//       <span>{children}</span>
//     </li>
//   );
// }

// export default function Landing() {
//   const [email, setEmail] = useState("");
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <div className="min-h-screen text-slate-900">
//       {/* Night→Day gradient backdrop */}
//       <div
//         className="pointer-events-none fixed inset-0 -z-10"
//         aria-hidden
//         style={{
//           background: `radial-gradient(1200px 500px at 10% -10%, ${brand.azure}22, transparent),linear-gradient(180deg, ${brand.navy}, ${brand.ink})`,
//         }}
//       />

//       {/* Header */}
//       <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(15,39,64,0.65)] backdrop-blur">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <a href="#" className="flex items-center gap-3">
//               {/* <BrandMark /> */}
//               <Image src="/logo-imagee.png" alt="logo" width={50} height={40} />

//               <div className="leading-tight">
//                 <div className="text-lg font-semibold text-white">SuryaRun</div>
//                 <div
//                   className="text-[11px] tracking-wide font-medium"
//                   style={{ color: brand.gold }}
//                 >
//                   SOLAR SOLUTIONS
//                 </div>
//               </div>
//             </a>
//             <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
//               <a href="#why" className="hover:text-white">
//                 Why us
//               </a>
//               <a href="#services" className="hover:text-white">
//                 Services
//               </a>
//               <a href="#incentives" className="hover:text-white">
//                 Incentives
//               </a>
//               <a href="#projects" className="hover:text-white">
//                 Projects
//               </a>
//               <a href="#contact" className="hover:text-white">
//                 Contact
//               </a>
//             </nav>
//             <div className="hidden sm:flex items-center gap-2">
//               <Button className="px-4 bg-white text-black rounded-3xl hover:bg-white">
//                 (917) 754‑7159
//               </Button>
//               {/* <Button className="px-4" aria-label="Get a free quote"> */}
//               <BackgroundGradient>
//                 <Button className="rounded-3xl">
//                   <Link href="/booking">Book Free Consultation</Link>
//                 </Button>
//               </BackgroundGradient>
//               {/* </Button> */}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="relative">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-10 py-16 md:grid-cols-2 md:py-24 items-center">
//             <div>
//               <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20">
//                 NYC • Queens • Brooklyn • The Bronx • Staten Island
//               </span>
//               <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-bold text-white">
//                 NYC solar that{" "}
//                 <span style={{ color: brand.gold }}>just works</span> — lower
//                 bills, higher home value.
//               </h1>
//               <p className="mt-4 text-lg text-white/85">
//                 We design, permit, and install high‑efficiency systems built for
//                 NYC rooftops. Clear pricing, zero pressure, proposal in 48
//                 hours.
//               </p>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   alert(`Thanks! We'll contact ${email} shortly.`);
//                 }}
//                 className="mt-6 flex max-w-md gap-3"
//               >
//                 <Input
//                   type="email"
//                   placeholder="you@email.com"
//                   aria-label="Your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <Button>See my savings</Button>
//               </form>
//               <ul className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-white/85">
//                 <Check>48‑hour custom proposal</Check>
//                 <Check>Licensed & insured electricians</Check>
//                 <Check>Low‑profile, code‑compliant installs</Check>
//                 <Check>Monitoring app + 25‑yr panel warranty</Check>
//               </ul>
//             </div>
//             <div className="md:justify-self-end">
//               <Card className="shadow-xl">
//                 <CardSection eyebrow="Savings snapshot">
//                   <div className="grid grid-cols-2 gap-4">
//                     <Stat label="Average bill cut" value="30–60%" />
//                     <Stat
//                       label="Federal ITC"
//                       value="30%"
//                       hint="Investment Tax Credit"
//                     />
//                     <Stat
//                       label="NY State credit"
//                       value="25%"
//                       hint="Up to $5,000"
//                     />
//                     <Stat label="Payback window" value="5–8 yrs" />
//                   </div>
//                 </CardSection>
//               </Card>
//               <div
//                 className="mt-6 rounded-2xl p-6 text-white"
//                 style={{
//                   background: `linear-gradient(135deg, ${brand.azure}22, ${brand.gold}22)`,
//                 }}
//               >
//                 <div className="text-sm">Want backup power?</div>
//                 <div className="text-xl font-semibold">
//                   Add battery storage for outages & peak rates
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY US */}
//       <section
//         id="why"
//         className="py-16 sm:py-20"
//         style={{ backgroundColor: brand.sand }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Built for New York City"
//             subtitle="From DOB permits to ConEd interconnects, we do the hard parts in‑house."
//             align="center"
//           />
//           <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 t: "NYC code expertise",
//                 d: "Permits, fire‑setbacks, landmarks, and utility paperwork—handled without drama.",
//               },
//               {
//                 t: "Roof‑smart design",
//                 d: "Ballasted arrays for flat roofs, micro‑inverters for shade, low‑profile racking.",
//               },
//               {
//                 t: "Transparent pricing",
//                 d: "Clear line items. No upsells. You keep 100% of the incentives.",
//               },
//               {
//                 t: "Warranties that matter",
//                 d: "25‑yr panel performance • 10‑yr workmanship • Local support from Queens.",
//               },
//             ].map((x, i) => (
//               <Card key={i} className="bg-white/95">
//                 <CardSection title={x.t}>
//                   <p className="text-slate-700">{x.d}</p>
//                 </CardSection>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="py-16 sm:py-20 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Services"
//             subtitle="Everything from first bill check to final inspection."
//           />
//           <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 t: "Residential Solar",
//                 points: [
//                   "Engineered for small rooftops",
//                   "Tier‑1 panels & inverters",
//                   "ConEd net‑metering setup",
//                 ],
//               },
//               {
//                 t: "Commercial Solar",
//                 points: [
//                   "Flat‑roof arrays & ballast",
//                   "Portfolio monitoring",
//                   "O&M contracts",
//                 ],
//               },
//               {
//                 t: "Battery Storage",
//                 points: [
//                   "Backup essentials during outages",
//                   "Peak‑rate shaving",
//                   "Time‑of‑use optimization",
//                 ],
//               },
//               {
//                 t: "EV Charging",
//                 points: [
//                   "Smart Level‑2 chargers",
//                   "Load management",
//                   "Indoor/Outdoor installs",
//                 ],
//               },
//             ].map((s, i) => (
//               <Card key={i}>
//                 <CardSection title={s.t}>
//                   <ul className="mt-2 space-y-2">
//                     {s.points.map((p, j) => (
//                       <Check key={j}>{p}</Check>
//                     ))}
//                   </ul>
//                 </CardSection>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* INCENTIVES */}
//       <section
//         id="incentives"
//         className="py-16 sm:py-20"
//         style={{
//           background: `linear-gradient(180deg, #ffffff, ${brand.sand})`,
//         }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Claim every dollar"
//             subtitle="We file the paperwork so you capture federal, state, and NYC incentives."
//           />
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 t: "Federal Investment Tax Credit",
//                 v: "30%",
//                 n: "Applies to total installed cost.",
//               },
//               {
//                 t: "NY State Solar Credit",
//                 v: "25%",
//                 n: "Up to $5,000 for residential systems.",
//               },
//               {
//                 t: "NYC Property Tax Abatement",
//                 v: "20%",
//                 n: "Spread over 4 years on property taxes.",
//               },
//             ].map((x, i) => (
//               <Card key={i}>
//                 <CardSection eyebrow={x.t}>
//                   <div
//                     className="text-4xl font-bold"
//                     style={{ color: brand.azure }}
//                   >
//                     {x.v}
//                   </div>
//                   <p className="mt-2 text-slate-700 text-sm">{x.n}</p>
//                 </CardSection>
//               </Card>
//             ))}
//           </div>
//           <p className="mt-6 text-xs text-slate-500">
//             * Incentives shown are typical but can change. We’ll confirm
//             eligibility with your address and utility.
//           </p>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="py-16 sm:py-20 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Recent installs"
//             subtitle="Across Queens, Brooklyn, and the Bronx."
//           />
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {[
//               "Astoria walk‑up roof",
//               "Bed‑Stuy brownstone",
//               "Jackson Heights co‑op",
//             ].map((name, i) => (
//               <div
//                 key={i}
//                 className="overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white to-slate-50"
//               >
//                 <div
//                   className="h-40 w-full"
//                   style={{
//                     background: `linear-gradient(135deg, ${brand.azure}33, ${brand.gold}22)`,
//                   }}
//                 />
//                 <div className="p-4">
//                   <div className="text-sm font-semibold text-slate-900">
//                     {name}
//                   </div>
//                   <div className="mt-1 text-xs text-slate-600">
//                     Low‑profile racking • Shade‑aware layout • DOB approved
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SOCIAL PROOF / REVIEWS */}
//       <section
//         className="py-16 sm:py-20"
//         style={{ backgroundColor: brand.sand }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="Customers see the difference"
//             subtitle="Local installs. Transparent process. Real savings."
//             align="center"
//           />
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 n: "A. Patel, Jackson Heights",
//                 q: "ConEd bills dropped ~45%. Permits handled end‑to‑end. Zero surprises.",
//               },
//               {
//                 n: "M. Rivera, Sunset Park",
//                 q: "Row‑house roof wasn’t straightforward—design fit perfectly; passed DOB first try.",
//               },
//               {
//                 n: "J. Chen, Flushing",
//                 q: "Added storage. Kept fridge & Wi‑Fi on during a summer outage.",
//               },
//             ].map((t, i) => (
//               <Card key={i} className="bg-white/95">
//                 <CardSection>
//                   <div className="text-base font-semibold text-slate-900">
//                     {t.n}
//                   </div>
//                   <div className="mt-2 text-slate-700">“{t.q}”</div>
//                 </CardSection>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GUARANTEES & FINANCING */}
//       <section className="py-16 sm:py-20 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-6 md:grid-cols-2">
//             <Card>
//               <CardSection
//                 eyebrow="Our guarantees"
//                 title="We stand behind every install"
//               >
//                 <ul className="mt-2 grid gap-2">
//                   <Check>25‑year panel performance warranty</Check>
//                   <Check>10‑year workmanship warranty</Check>
//                   <Check>Leak‑free roof guarantee on penetrations</Check>
//                   <Check>Live monitoring + proactive support</Check>
//                 </ul>
//               </CardSection>
//             </Card>
//             <Card>
//               <CardSection eyebrow="Flexible options" title="Pay your way">
//                 <ul className="mt-2 grid gap-2">
//                   <Check>Cash & loan options with competitive APRs</Check>
//                   <Check>$0‑down financing available on approval</Check>
//                   <Check>We help optimize incentives & deductions</Check>
//                 </ul>
//               </CardSection>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section
//         id="process"
//         className="py-16 sm:py-20"
//         style={{ backgroundColor: brand.sand }}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             title="How it works"
//             subtitle="From bill to bill‑cut in four steps."
//           />
//           <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 t: "1) Share your bill",
//                 d: "Upload a recent electric bill. We analyze usage & roof fit.",
//               },
//               {
//                 t: "2) Custom design",
//                 d: "Engineered layout, permits, and utility paperwork.",
//               },
//               {
//                 t: "3) Install day",
//                 d: "1–2 day install by licensed NYC electricians.",
//               },
//               {
//                 t: "4) Switch on",
//                 d: "Interconnection, monitoring app, and warranty handoff.",
//               },
//             ].map((s, i) => (
//               <li
//                 key={i}
//                 className="rounded-2xl border border-black/10 bg-white p-6"
//               >
//                 <div className="text-lg font-semibold text-slate-900">
//                   {s.t}
//                 </div>
//                 <p className="mt-2 text-slate-700">{s.d}</p>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* BIG CTA */}
//       <section
//         className="py-16 sm:py-24"
//         style={{
//           background: `linear-gradient(180deg, ${brand.navy}, ${brand.ink})`,
//         }}
//       >
//         <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
//           <h3 className="text-3xl sm:text-4xl font-bold">
//             Ready to see your savings?
//           </h3>
//           <p className="mt-3 text-white/85">
//             Send a recent bill. We’ll run the numbers and email a custom
//             proposal within 48 hours.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
//             <Button className="px-6">Get my free proposal</Button>
//             <Button variant="ghost" className="px-6">
//               Talk to an engineer
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="py-16 sm:py-20 bg-white">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-2">
//             <div>
//               <SectionHeader
//                 title="Contact us"
//                 subtitle="Based in Queens • Serving all five boroughs"
//               />
//               <ul className="mt-6 space-y-3 text-slate-700">
//                 <li>📍 Queens, New York</li>
//                 <li>📞 (347) 000‑0000</li>
//                 <li>✉️ hello@suryarunsolar.com</li>
//                 <li className="text-xs text-slate-500">
//                   Office hours: Mon–Sat, 9am–6pm
//                 </li>
//               </ul>
//             </div>
//             <Card className="shadow-xl">
//               <CardSection>
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     alert("Thanks! We’ll be in touch within 24–48 hours.");
//                   }}
//                   className="grid gap-4"
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <Input placeholder="Full name" required />
//                     <Input type="email" placeholder="Email" required />
//                   </div>
//                   <Input placeholder="Address (borough, ZIP)" />
//                   <Input placeholder="Monthly electric bill ($)" />
//                   <Textarea placeholder="Anything we should know?" rows={4} />
//                   <Button className="w-full">Request proposal</Button>
//                   <p className="text-xs text-slate-500">
//                     By submitting, you agree to be contacted about solar
//                     products and services.
//                   </p>
//                 </form>
//               </CardSection>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-black/10 bg-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <BrandMark className="h-7 w-7" />
//             <span className="font-semibold text-slate-900">
//               SuryaRun Solar Solutions
//             </span>
//           </div>
//           <div className="text-sm text-slate-600">
//             © {year} SuryaRun Solar Solutions. All rights reserved.
//           </div>
//           <div className="flex gap-3 text-sm">
//             <a href="#why" className="hover:underline">
//               Why us
//             </a>
//             <a href="#services" className="hover:underline">
//               Services
//             </a>
//             <a href="#incentives" className="hover:underline">
//               Incentives
//             </a>
//             <a href="#projects" className="hover:underline">
//               Projects
//             </a>
//             <a href="#contact" className="hover:underline">
//               Contact
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function Stat({
//   label,
//   value,
//   hint,
// }: {
//   label: string;
//   value: string;
//   hint?: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-black/10 bg-white p-5">
//       <div className="text-3xl font-bold" style={{ color: brand.azure }}>
//         {value}
//       </div>
//       <div className="mt-1 text-sm text-slate-600">{label}</div>
//       {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
//     </div>
//   );
// }

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button as UIButton } from "../ui/button";

/**
 * SuryaRun Solar — Consult‑First, Multi‑State High‑Conversion Landing (React + Tailwind)
 * No external UI deps. Copy and structure tuned for trust + bookings.
 *
 * Messaging pillars (driven by your brief):
 * 1) Consult‑first, no‑pressure honesty  2) Personalized home‑solar focus (flat & slanted roofs)
 * 3) Multi‑provider comparison (we match the right fit)  4) 24/7 availability on your schedule
 * 5) Multi‑state coverage: NY, NJ, TX, CA, CT  6) Decades of expertise and clear next step
 */

// — Brand palette
export const brand = {
  ink: "#0B1220",
  navy: "#0F2740",
  azure: "#1F6FFF",
  aqua: "#12D1FF",
  gold: "#FFC247",
  mint: "#2BB673",
  sand: "#F5F1EA",
  paper: "#FFFFFF",
};

// — Lightweight primitives
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold transition active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#1F6FFF,#12D1FF)] text-white shadow-[0_6px_20px_rgba(31,111,255,0.35)] hover:shadow-[0_8px_24px_rgba(31,111,255,0.45)] focus-visible:ring-[#1F6FFF]",
    secondary:
      "border border-black/10 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-[#1F6FFF]",
    ghost:
      "bg-transparent text-white/90 ring-1 ring-white/20 hover:bg-white/10 focus-visible:ring-white",
  } as const;
  return (
    <button {...props} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Link styled as button (avoid nesting Link inside button)
const LinkButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold transition active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#1F6FFF,#12D1FF)] text-white shadow-[0_6px_20px_rgba(31,111,255,0.35)] hover:shadow-[0_8px_24px_rgba(31,111,255,0.45)] focus-visible:ring-[#1F6FFF]",
    secondary:
      "border border-black/10 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-[#1F6FFF]",
    ghost:
      "bg-transparent text-white/90 ring-1 ring-white/20 hover:bg-white/10 focus-visible:ring-white",
  } as const;
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
};

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-black/10 bg-white/95 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1F6FFF]`}
  />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={`w-full rounded-xl border border-black/10 bg-white/95 px-3 py-2 text-sm shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1F6FFF]`}
  />
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full rounded-xl border border-black/10 bg-white/95 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1F6FFF]`}
  />
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-black/10 bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardSection = ({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`p-6 ${className}`}>
    {eyebrow && (
      <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
        {eyebrow}
      </div>
    )}
    {title && (
      <div className="mt-1 text-lg font-semibold text-slate-900">{title}</div>
    )}
    {children}
  </div>
);

function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SuryaRun logo"
    >
      <defs>
        <linearGradient id="sunrise" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={brand.gold} />
          <stop offset="100%" stopColor={brand.azure} />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="10" fill="url(#sunrise)" />
      <path d="M6 38h38c3 0 5 2 5 5v3H1v-3c0-3 2-5 5-5Z" fill={brand.mint} />
      <path d="M10 38h28l-6-12H16l-6 12Z" fill={brand.azure} />
      <path d="M18 26h8M14 32h16M12 28h20" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function SectionHeader({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-700">
      <span
        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full"
        style={{ backgroundColor: brand.mint }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M10 3.5 5 9 2 6.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/20">
      {children}
    </span>
  );
}

export default function Landing() {
  const [email, setEmail] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen text-slate-900">
      {/* Night→Day gradient backdrop */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
        style={{
          background: `radial-gradient(1200px 500px at 10% -10%, ${brand.azure}22, transparent),linear-gradient(180deg, ${brand.navy}, ${brand.ink})`,
        }}
      />

      {/* Header
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(15,39,64,0.65)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <Image src="/logo-imagee.png" alt="logo" width={50} height={40} />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-white">SuryaRun</div>
                <div
                  className="text-[11px] tracking-wide font-medium"
                  style={{ color: brand.gold }}
                >
                  SOLAR CONSULTING
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
              <a href="#why" className="hover:text-white">
                Why us
              </a>
              <a href="#home-solar" className="hover:text-white">
                Home solar
              </a>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#coverage" className="hover:text-white">
                Coverage
              </a>
              <a href="#process" className="hover:text-white">
                Process
              </a>
              <a href="#reviews" className="hover:text-white">
                Reviews
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>

            <div className="hidden sm:flex items-center gap-2">
              <Button className="px-4 bg-white text-black rounded-3xl hover:bg-white">
                (917) 754‑7159
              </Button>
              <LinkButton href="/booking" className="rounded-3xl">
                Book Free Consultation
              </LinkButton>
            </div>
          </div>
        </div>
      </header> */}

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-16 md:grid-cols-2 md:py-24 items-center">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge>NY • NJ • TX • CA • CT</Badge>
                <Badge>24/7 scheduling</Badge>
                <Badge>No‑pressure consultation</Badge>
              </div>

              <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-bold text-white">
                Honest, consult‑first solar
                <span style={{ color: brand.gold }}>
                  {" "}
                  tailored to your home
                </span>
                .
              </h1>

              <p className="mt-4 text-lg text-white/85">
                We work with the top solar company to design the perfect system
                for your roof—flat or slanted. Transparent numbers, expert
                guidance, and no pressure—ever.
              </p>

              <BackgroundGradient>
                <UIButton className="rounded-3xl">
                  <Link href="/booking">Book Free Consultation</Link>
                </UIButton>
              </BackgroundGradient>

              <ul className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-white/85">
                <Check>
                  <p className="text-white/85">
                    Personalized design for your roof{" "}
                  </p>
                </Check>
                <Check>
                  {" "}
                  <p className="text-white/85">
                    Partnered with the top solar company{" "}
                  </p>
                </Check>
                <Check>
                  {" "}
                  <p className="text-white/85">
                    Home‑solar specialists (our core)
                  </p>
                </Check>
                <Check>
                  {" "}
                  <p className="text-white/85">
                    Proposal in 48 hours • 24/7 availability
                  </p>
                </Check>
              </ul>
            </div>

            <div className="md:justify-self-end w-full">
              <Card className="shadow-xl">
                <CardSection eyebrow="Quick snapshot">
                  <div className="grid grid-cols-2 gap-4">
                    <Stat label="Typical bill reduction" value="20–60%" />
                    <Stat
                      label="Federal ITC"
                      value="30%"
                      hint="Investment Tax Credit"
                    />
                    <Stat
                      label="Home focus"
                      value="Primary"
                      hint="Most projects are residential"
                    />
                    <Stat label="Roof types" value="Slanted" />
                  </div>
                </CardSection>
              </Card>

              <div
                className="mt-6 rounded-2xl p-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${brand.azure}22, ${brand.gold}22)`,
                }}
              >
                <div className="text-sm">Need commercial or storage?</div>
                <div className="text-xl font-semibold">
                  We also do businesses, batteries & EV charging
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why"
        className="py-16 sm:py-20"
        style={{ backgroundColor: brand.sand }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Consult‑first. Provider‑agnostic. Built around you."
            subtitle="We guide you with honest answers, compare multiple providers, and design a solution that fits your roof, budget, and goals."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Honesty above all",
                d: "No sales pressure. If solar isn’t right, we’ll say so and explain why.",
              },
              {
                t: "Personalized design",
                d: "Flat or slanted roofs, shade, snow‑load—engineered layouts that protect your roof.",
              },
              {
                t: "Top-rated partnership",
                d: "We work with the top solar company to design the best system for your home—built for performance and savings.",
              },
              {
                t: "Decades of expertise",
                d: "From consultation to interconnection, we’ve done this for years across 5 states.",
              },
            ].map((x, i) => (
              <Card key={i} className="bg-white/95">
                <CardSection title={x.t}>
                  <p className="text-slate-700">{x.d}</p>
                </CardSection>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOME SOLAR FOCUS */}
      <section id="home-solar" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Home solar, done right"
            subtitle="It’s our main service because it’s what we’ve delivered the most. Expect cleaner installs, clear pricing, and consistent savings potential."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              // {
              //   t: "Flat roofs",
              //   d: "Ballasted or low‑penetration racking to keep your roof integrity intact.",
              // },
              {
                t: "Slanted roofs",
                d: "Low‑profile arrays, shade‑aware layouts, and neat conduit runs.",
              },
              {
                t: "Monitoring & support",
                d: "Track production in an app. We’re here when you need us, long after install.",
              },
            ].map((x, i) => (
              <Card key={i}>
                <CardSection title={x.t}>
                  <p className="text-slate-700">{x.d}</p>
                </CardSection>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 sm:py-20"
        style={{
          background: `linear-gradient(180deg, #ffffff, ${brand.sand})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Services"
            subtitle="Everything from first bill check to final inspection—on your schedule."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Residential Solar",
                points: [
                  "Personalized roof design",
                  "Tier‑1 panels & inverters",
                  "Net‑metering where available",
                ],
              },
              // {
              //   t: "Commercial Solar",
              //   points: [
              //     "Flat‑roof arrays & ballast",
              //     "Portfolio monitoring",
              //     "O&M contracts",
              //   ],
              // },
              {
                t: "Battery Storage",
                points: [
                  "Backup during outages",
                  "Peak‑rate shaving",
                  "Time‑of‑use optimization",
                ],
              },
              {
                t: "EV Charging",
                points: [
                  "Smart Level‑2 chargers",
                  "Load management",
                  "Indoor/Outdoor installs",
                ],
              },
            ].map((s, i) => (
              <Card key={i}>
                <CardSection title={s.t}>
                  <ul className="mt-2 space-y-2">
                    {s.points.map((p, j) => (
                      <Check key={j}>{p}</Check>
                    ))}
                  </ul>
                </CardSection>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INCENTIVES */}
      <section id="incentives" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Claim every dollar"
            subtitle="We’ll confirm eligibility and file paperwork so you capture federal, state, and utility incentives in your area."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Federal Investment Tax Credit",
                v: "30%",
                n: "Based on total installed cost.",
              },
              {
                t: "State & utility programs",
                v: "Varies",
                n: "NY, NJ, CA, CT, TX—benefits differ by address and utility.",
              },
              {
                t: "Financing options",
                v: "$0‑down",
                n: "On approval. We’ll help you evaluate true lifetime cost.",
              },
            ].map((x, i) => (
              <Card key={i}>
                <CardSection eyebrow={x.t}>
                  <div
                    className="text-4xl font-bold"
                    style={{ color: brand.azure }}
                  >
                    {x.v}
                  </div>
                  <p className="mt-2 text-slate-700 text-sm">{x.n}</p>
                </CardSection>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            * Incentives change. We’ll verify your eligibility during
            consultation.
          </p>
        </div>
      </section>

      {/* COVERAGE */}
      <section
        id="coverage"
        className="py-16 sm:py-20"
        style={{ backgroundColor: brand.sand }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Where we work"
            subtitle="Proudly serving homeowners and businesses across New York, New Jersey, Texas, California, and Connecticut."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {[
              {
                s: "New York",
                n: "Urban rooftops, brownstones, co‑ops, and suburbs.",
              },
              {
                s: "New Jersey",
                n: "Detached homes, townhomes, and small businesses.",
              },
              {
                s: "Texas",
                n: "Sun‑rich markets with storage and TOU opportunities.",
              },
              {
                s: "California",
                n: "High‑efficiency arrays and storage to offset peak rates.",
              },
              {
                s: "Connecticut",
                n: "Residential focus with tailored designs for roof types.",
              },
            ].map((x, i) => (
              <Card key={i} className="bg-white/95">
                <CardSection eyebrow={x.s}>
                  <p className="text-slate-700 text-sm">{x.n}</p>
                </CardSection>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How it works"
            subtitle="Consult‑first, from bill to bill‑cut in four clear steps."
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "1) Quick consult",
                d: "Tell us your goals and share a recent bill. Book 24/7 at your preferred time.",
              },
              {
                t: "2) Roof & usage analysis",
                d: "We assess your roof (flat/slanted), shade, and consumption to size your system.",
              },
              {
                t: "3) Best‑fit proposal",
                d: "We compare providers and financing to present clear, no‑pressure options.",
              },
              {
                t: "4) Install & support",
                d: "Permits, interconnection, monitoring—handled. We’re here long after switch‑on.",
              },
            ].map((s, i) => (
              <li
                key={i}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {s.t}
                </div>
                <p className="mt-2 text-slate-700">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NO‑PRESSURE PROMISE */}
      {/* <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: brand.sand }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <SectionHeader
                title="Our honesty promise"
                subtitle="We won’t push you into solar. Our job is to give you clear answers so you can decide with confidence."
              />
              <ul className="mt-6 grid gap-2">
                <Check>Transparent pricing and assumptions</Check>
                <Check>Clear payback math and what-ifs</Check>
                <Check>Pros and cons for your specific roof</Check>
                <Check>Move forward only if it makes sense</Check>
              </ul>
            </div>

            <Card className="bg-white/95">
              <CardSection
                eyebrow="Ways to talk"
                title="Pick a time that works for you"
              >
                <div className="grid gap-3">
                  <Button
                    className="w-full"
                    onClick={() => (window.location.href = "tel:+19177547159")}
                  >
                    Call us now
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() =>
                      (window.location.href = "mailto:hello@suryarunsolar.com")
                    }
                  >
                    Email us
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Book a free consultation
                  </Button>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  We’re available 24/7 and will meet at your preferred time—even
                  evenings and weekends.
                </p>
              </CardSection>
            </Card>
          </div>
        </div>
      </section> */}

      {/* REVIEWS / SOCIAL PROOF */}
      <section id="reviews" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Customers see the difference"
            subtitle="Personalized guidance. Clean installs. Real savings potential."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Homeowner in Queens, NY",
                q: "They told us honestly what made sense for our flat roof and what didn’t. Zero pressure—just facts.",
              },
              {
                n: "Homeowner in Edison, NJ",
                q: "Compared options across providers and explained the numbers clearly. Install was neat and quick.",
              },
              {
                n: "Homeowner in Plano, TX",
                q: "Added storage for outages. We booked at night and had a proposal within 48 hours.",
              },
            ].map((t, i) => (
              <Card key={i} className="bg-white/95">
                <CardSection>
                  <div className="text-base font-semibold text-slate-900">
                    {t.n}
                  </div>
                  <div className="mt-2 text-slate-700">“{t.q}”</div>
                </CardSection>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section
        className="py-16 sm:py-24"
        style={{
          background: `linear-gradient(180deg, ${brand.navy}, ${brand.ink})`,
        }}
      >
        <div className=" flex flex-col items-center gap-5  mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to see if solar is a fit?
          </h3>
          <p className="mt-3 text-white/85">
            Book a free consult—anytime, 24/7. We’ll run the numbers and email a
            personalized proposal within 48 hours.
          </p>
          <BackgroundGradient>
            <UIButton className="rounded-3xl">
              <Link href="/booking">Book Free Consultation</Link>
            </UIButton>
          </BackgroundGradient>
        </div>
      </section>

      {/* CONTACT */}
      {/* <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionHeader
                title="Contact us"
                subtitle="Serving NY, NJ, TX, CA, CT • 24/7 scheduling"
              />
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>📍 Queens, New York (HQ)</li>
                <li>📞 (917) 754‑7159</li>
                <li>✉️ hello@suryarunsolar.com</li>
                <li className="text-xs text-slate-500">
                  We’ll meet at your desired time—even evenings and weekends.
                </li>
              </ul>
            </div>
            <Card className="shadow-xl">
              <CardSection>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks! We’ll be in touch within 24–48 hours.");
                  }}
                  className="grid gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full name" required />
                    <Input type="email" placeholder="Email" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="City, State" />
                    <Input placeholder="Monthly electric bill ($)" />
                  </div>
                  <Textarea
                    placeholder="Roof type (flat/slanted), shade, goals (savings, backup, etc.)"
                    rows={4}
                  />
                  <Button className="w-full">Request proposal</Button>
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about solar
                    products and services.
                  </p>
                </form>
              </CardSection>
            </Card>
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className="py-16 sm:py-20"
        style={{ backgroundColor: brand.sand }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Honesty promise (kept) */}
            <div>
              <SectionHeader
                title="Our honesty promise"
                subtitle="We won’t push you into solar. Our job is to give you clear answers so you can decide with confidence."
              />
              <ul className="mt-6 grid gap-2">
                <Check>Transparent pricing and assumptions</Check>
                <Check>Clear payback math and what-ifs</Check>
                <Check>Pros and cons for your specific roof</Check>
                <Check>Move forward only if it makes sense</Check>
              </ul>
            </div>

            {/* Contact info (no form, no buttons) */}
            <Card className="bg-white/95 shadow-xl">
              <CardSection
                eyebrow="Contact us"
                title="Serving NY, NJ, TX, CA, CT • 24/7 scheduling"
              >
                <ul className="mt-2 space-y-3 text-slate-700">
                  <li>📍 Queens, New York (HQ)</li>
                  <li>
                    📞{" "}
                    <a
                      href="tel:+19177547159"
                      className="underline decoration-slate-300 hover:decoration-slate-500"
                    >
                      (917) 754-7159
                    </a>
                  </li>
                  <li>
                    ✉️{" "}
                    <a
                      href="mailto:bookings@suryarunsolarsolutions.com"
                      className="underline decoration-slate-300 hover:decoration-slate-500"
                    >
                      bookings@suryarunsolarsolutions.com
                    </a>
                  </li>
                  <li className="text-xs text-slate-500">
                    We’ll meet at your desired time—even evenings and weekends.
                  </li>
                </ul>
              </CardSection>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandMark className="h-7 w-7" />
            <span className="font-semibold text-slate-900">SuryaRun Solar</span>
          </div>
          <div className="text-sm text-slate-600">
            © {year} SuryaRun Solar. All rights reserved.
          </div>
          <div className="flex gap-3 text-sm">
            <a href="#why" className="hover:underline">
              Why us
            </a>
            <a href="#home-solar" className="hover:underline">
              Home solar
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#incentives" className="hover:underline">
              Incentives
            </a>
            <a href="#coverage" className="hover:underline">
              Coverage
            </a>
            <a href="#process" className="hover:underline">
              Process
            </a>
            <a href="#reviews" className="hover:underline">
              Reviews
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <div className="text-3xl font-bold" style={{ color: brand.azure }}>
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
    </div>
  );
}
