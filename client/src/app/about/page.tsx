"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '@/components/common/Navbar';

export default function AboutUsHero() {
  const container = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useGSAP(() => {
    gsap.to(orb1.current, {
      x: 80,
      y: 40,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(orb2.current, {
      x: -60,
      y: -30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full min-h-[50vh] bg-[#050505] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <Navbar />
   
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at 50% 0%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black 20%, transparent 80%)'
          }}
        />

        <div 
          ref={orb1}
          className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-blue-500/40 rounded-full blur-[100px]"
        />
        <div 
          ref={orb2}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/40 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter reveal">
          About Us
        </h1>
        
        <nav className="flex items-center justify-center gap-3 font-mono text-xs tracking-widest reveal">
          <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer">HOME</span>
          <span className="text-zinc-800">/</span>
          <span className="text-white">ABOUT US</span>
        </nav>
      </div>
      
    </section>
  );
}