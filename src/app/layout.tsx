import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Zap Shift",
  description: "Your next rider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#EAECED]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
