import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// 1) Configure each font and expose a CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // 👈  custom css var
  display: "swap", // removes FOIT
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuryaRun Solar Solution",
  description: "Independent solar consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
