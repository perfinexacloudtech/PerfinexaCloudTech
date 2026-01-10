import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/common/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { getPageMetadata } from "@/lib/Metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech",
  description:
    "A modern online learning platform built with Next.js, React, and Tailwind CSS",
  path: "/",
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

        {/* <SmoothScroll /> */}

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
