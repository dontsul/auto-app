import React from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auto app",
  description:
    "Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
