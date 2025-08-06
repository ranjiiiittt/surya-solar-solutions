// "use client";

// import Link from "next/link";
// import { FC, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // import clsx from "clsx";
// import Image from "next/image";

// const navLinks = [
//   { href: "#services", label: "Services" },
//   { href: "#process", label: "Process" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#about", label: "About" },
// ];
// import AppointmentForm from "@/components/appointment-form";

// <AppointmentForm triggerLabel="Book Free Consultation" />;

// const Navbar: FC = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-gray-950/80">
//       <nav className="container-wrapper flex h-16 items-center justify-between">
//         {/* ─ Logo ─────────────────────────────── */}
//         <Link href="/" className="text-xl font-heading font-bold text-brand">
//           <Image src="/logo.png" alt="logo" width={180} height={80} />
//         </Link>

//         {/* ─ Desktop links ───────────────────── */}
//         <ul className="hidden gap-8 md:flex">
//           {navLinks.map(({ href, label }) => (
//             <li key={href}>
//               <Link
//                 href={href}
//                 className="text-sm font-medium text-gray-700 transition-colors hover:text-brand dark:text-gray-300"
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* ─ Desktop CTA ─────────────────────── */}
//         <div className="hidden md:block">
//           <Button size="lg" asChild>
//             <Link href="#book">Book Free Consultation</Link>
//           </Button>
//         </div>

//         {/* ─ Mobile hamburger / sheet ────────── */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon" className="p-2">
//               {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               <span className="sr-only">Toggle navigation</span>
//             </Button>
//           </SheetTrigger>

//           <SheetContent side="left" className="flex flex-col space-y-6 pt-24">
//             {navLinks.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className="text-lg font-medium tracking-tight text-gray-700 hover:text-brand dark:text-gray-300"
//                 onClick={() => setOpen(false)}
//               >
//                 {label}
//               </Link>
//             ))}
//             <Button size="lg" asChild onClick={() => setOpen(false)}>
//               <Link href="#book">Book Free Consultation</Link>
//             </Button>
//           </SheetContent>
//         </Sheet>
//       </nav>
//     </header>
//   );
// };
// export default Navbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppointmentForm from "@/components/appointment-form";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-gray-950/80">
      <nav className="container-wrapper flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-heading font-bold text-brand">
          <Image src="/logo.png" alt="logo" width={180} height={80} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-brand dark:text-gray-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA (opens AppointmentForm) */}
        <div className="hidden md:block">
          <AppointmentForm />
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="p-2">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col space-y-6 pt-24">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-lg font-medium tracking-tight text-gray-700 hover:text-brand dark:text-gray-300"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <AppointmentForm
              triggerLabel="Book Free Consultation"
              onClick={() => setOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
