"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "../ui/background-gradient";
import { brand } from "../home/mainPage";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(15,39,64,0.9)] backdrop-blur shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop links */}
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

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <Button className="px-4 bg-white text-black rounded-3xl hover:bg-white">
              <a
                href="tel:+19177547159"
                aria-label="Call SuryaRun (917) 754-7159"
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

          {/* Mobile controls (visible below sm) */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+19177547159"
              aria-label="Call SuryaRun (917) 754-7159"
              className="rounded-full border border-white/20 p-2 text-white/90"
            >
              <Phone className="h-5 w-5" />
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85%] sm:w-80 bg-[rgba(15,39,64,0.97)] text-white"
              >
                <nav className="mt-10 flex flex-col space-y-4 text-base">
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

                  <div className="pt-6">
                    <Button
                      asChild
                      className="w-full rounded-3xl bg-white text-black hover:bg-white/90"
                    >
                      <Link href="/booking">Book Free Consultation</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
