"use client"; // Required for Next.js App Router

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OpenFormProps } from "@/types/model";
import Link from "next/link";

const HeroSection = ({ onOpen }: OpenFormProps) => {
  // TS Fix: explicit generic type
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Optimization: Using the selector string directly works because of 'scope'
      gsap.fromTo(
        ".hero-element",
        {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-svh md:min-h-calc[100vh-4rem] flex flex-col items-center justify-center overflow-hidden py-12 md:py-20"
      style={{
        backgroundColor: "#fff",
        backgroundImage: "radial-gradient(#FFA12B 0.75px, transparent 0.75px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="hero-element mb-4  opacity-0">
          <div className="relative inline-flex overflow-hidden rounded-full ">
            
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FFFBEB] px-4 py-1 text-[8px] md:px-6 md:py-2.5  md:text-xs  font-bold text-[#D97706] backdrop-blur-3xl tracking-[0.15em] uppercase shadow-sm">
              Cloud-First IT Company in Nagpur
            </span>
          </div>
        </div>

        <h1 className="hero-element opacity-0 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#4D2B8C] mb-8 leading-[1.1]">
          Transforming Businesses <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500">
            with Digital Solutions in Nagpur
          </span>
        </h1>

        <p className="hero-element opacity-0 text-slate-500 text-xs md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          We build scalable websites, custom software, cloud platforms, AI
          automation, and digital products that help businesses grow faster
          across Nagpur and India
        </p>

        <div className="hero-element opacity-0 flex flex-row justify-center gap-2 md:gap-4 w-full sm:w-auto">
          <button className=" px-4 py-2 md:px-8 md:py-4 rounded-full bg-[#0f172a] text-white font-semibold hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg shadow-slate-900/20" onClick={onOpen}>
            Get Free Consultation
          </button>
          <Link href="/learning-development/" className=" px-4 py-2 md:px-8 md:py-4 rounded-full border border-gray-200 text-slate-600 font-semibold hover:border-gray-400 hover:text-black hover:bg-gray-50 transition-all duration-300 bg-white shadow-sm hover:shadow-md">
            Learn Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
