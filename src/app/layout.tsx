import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { nebulas } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bay Ultra Dry",
  description:
    "Bay Ultra Dry is a professional carpet, upholstery & flood restoration company in Tauranga, New Zealand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nebulas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}