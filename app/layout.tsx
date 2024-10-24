

import React from 'react'; // Ensure React is imported
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: 'Zen Dots' }}
        className={`mx-auto container bg-gray-50 text-gray-800 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
