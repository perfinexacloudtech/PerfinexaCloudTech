import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { getPageMetadata } from "@/lib/Metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/common/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
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
        className={`${roboto.variable} font-roboto antialiased bg-white overflow-visible`}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics gaId="G-ZM11PQYS6D" />
        <Analytics />
        <Toaster position="top-center" />

        <main>
          <Navbar />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
