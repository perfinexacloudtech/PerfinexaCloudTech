"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="relative w-full py-24 px-6 bg-[#050505] overflow-hidden">
      
      {/* DOTTED BACKGROUND LAYER 
          - Uses your radial-gradient logic
          - Uses a mask-image to fade out the left and right sides
      */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundColor: "transparent",
          backgroundImage: "radial-gradient(#444cf7 0.5px, transparent 0.5px)",
          backgroundSize: "10px 10px",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* AMBIENT ORANGE GLOW (Matches your Screenshot) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mb-10">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">
            Perfinexa CloudTech
          </span>
          <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8">
          Let’s Turn Your <br />
          <span className="text-white">Dream Into Reality</span>
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
          We bring your vision to life with creativity and precision. <br className="hidden md:block" />
          Let’s make it happen together.
        </p>

        {/* Action Button */}
        <Link
          href="/#contact-section" 
          className="group flex items-center gap-3 text-blue-500 text-2xl font-semibold transition-all hover:text-blue-400"
        >
          <span>Book A Call</span>
          <div className="p-2 border border-blue-500/20 rounded-full group-hover:border-blue-500/50 group-hover:bg-orange-500/5 transition-all">
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </div>
    </section>
  );
}