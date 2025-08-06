// components/layout/footer.tsx
// Simple responsive footer using Tailwind + shadcn/ui Button (for social icons if desired)

import Link from "next/link";
import { Facebook, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-800 mt-24">
      <div className="container-wrapper py-12 grid gap-8 md:grid-cols-3">
        {/* ─ Left: Brand snippet ───────────────────── */}
        <div>
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-2">
            SuryaRun
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Independent solar consultation—helping homes & businesses cut costs
            and carbon since 2025.
          </p>
        </div>

        {/* ─ Center: Quick links ───────────────────── */}
        <div className="flex flex-col space-y-2">
          {[
            { href: "#services", label: "Services" },
            { href: "#process", label: "Process" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-brand transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* ─ Right: Contact & socials ───────────────── */}
        <div className="flex flex-col space-y-3">
          <p className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
            <Phone className="h-4 w-4 text-brand" />
            <span>+1 (347) 123‑4567</span>
          </p>
          <p className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
            <Mail className="h-4 w-4 text-brand" />
            <span>info@suryarun.com</span>
          </p>
          <div className="flex space-x-4 pt-2">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-brand dark:hover:text-brand"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-brand dark:hover:text-brand"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t bg-gray-100 dark:bg-gray-950 dark:border-gray-800 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} SuryaRun Solar Solution. All rights
        reserved.
      </div>
    </footer>
  );
}
