import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/common/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import {  getOrganizationSchema } from "@/lib/seo";
import { getPageMetadata } from "@/lib/Metadata";
import Script from "next/script";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech",
  description: "A modern online learning platform built with Next.js, React, and Tailwind CSS",
  path: "/"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <body
    className={`${inter.variable} font-inter antialiased bg-green-50 overflow-visible`}
    suppressHydrationWarning={true}
  >

   
    <Analytics />
    <Toaster position="top-center" />

<SmoothScroll />

    <main>{children}</main>


    <Footer />
  </body>
</html>

  );
}
