

import React from 'react'; // Ensure React is imported
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';

{/*const ZenDots = localFont({
  src: "./fonts/ZenDots.tff",
  variable: "--font-zen-dots",
  weight: "100 900",
});*/}

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CircuitKraft",
  description: "No.1 blog for tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{ fontFamily: 'Zen Dots' }}
        className={`mx-auto container bg-gray-50 dark:bg-[#192428] dark:text-white text-gray-800 antialiased`}
      >
        <ThemeProvider attribute="class">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
