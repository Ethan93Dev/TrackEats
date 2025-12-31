import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavWrapper from "./components/NavWrapper";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrackEats",
  description: "Simple, no-BS calorie tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          text-zinc-900
          bg-white
          min-h-screen
        `}
      >
        <NavWrapper />
        {/* Using max-w-md for a clean, tight "No-BS" column or max-w-6xl for standard */}
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
