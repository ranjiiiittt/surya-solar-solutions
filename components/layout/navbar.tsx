"use client";

import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import Image from "next/image";
import { brand } from "../home/mainPage";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(15,39,64,0.9)] backdrop-blur shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-imagee.png" alt="logo" width={50} height={40} />
            <div className="leading-tight">
              <div className="text-lg font-semibold text-white">SuryaRun</div>
              <div
                className="text-[11px] tracking-wide font-medium"
                style={{ color: brand.gold }}
              >
                SOLAR SOLUTIONS
              </div>
            </div>
          </Link>

          {/* Updated nav links */}
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
              <a
                href="tel:+19177547159"
                aria-label="Call SuryaRun at (917) 754-7159"
              >
                (917) 754-7159
              </a>
            </Button>
            <BackgroundGradient>
              <Button className="rounded-3xl">
                <Link href="/booking">Book Free Consultation</Link>
              </Button>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </header>
  );
}
