"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const nav = [
    { href: "#why", label: "Why us" },
    { href: "#home-solar", label: "Home solar" },
    { href: "#services", label: "Services" },
    { href: "#coverage", label: "Coverage" },
    { href: "#process", label: "Process" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <footer className=" bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 border-t border-black/10">
        {/* Main footer grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand + states */}
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-50">
                SuryaRun
              </div>
              <div className="text-[11px] tracking-wide font-medium">
                SOLAR CONSULTING
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              Consult-first, provider-agnostic solar guidance for homes &
              businesses.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["NY", "NJ", "TX", "CA", "CT"].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-[#1F6FFF]/30 bg-[#1F6FFF]/5 px-2.5 py-1 text-xs font-semibold text-[#1F6FFF]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-50 mb-3">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative inline-block text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {l.label}
                    {/* animated underline */}
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-slate-700 dark:bg-slate-300 transition-all duration-200 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social (single-color icons + hover effects) */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-50 mb-3">
              Follow us
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/p/Surya-Solar-Solution-LLC-61578721332270/",
                  label: "Facebook",
                },
                {
                  Icon: Instagram,
                  href: "https://instagram.com/suryarunsolar",
                  label: "Instagram",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/suryarun",
                  label: "LinkedIn",
                },
                { Icon: Twitter, href: "https://x.com/suryarun", label: "X" },
                {
                  Icon: Youtube,
                  href: "https://youtube.com/@suryarun",
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-black/10 shadow-sm transition hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40"
                  title={label}
                >
                  <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300 transition-transform duration-150 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar (inside footer) */}
        <div className="border-t border-black/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
            <div>
              © {new Date().getFullYear()} SuryaRun Solar Solutions. All rights
              reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <span aria-hidden>•</span>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Visible margin strip BELOW the footer, matching navbar color */}
      <div aria-hidden className="w-full h-9 mt-6 bg-[rgba(15,39,64,0.9)]" />
    </>
  );
}
