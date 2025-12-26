"use client"

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const testimonials = [
  {
    name: "Jesse Leigh",
    role: "CEO & Founder",
    text: "The best investment solution for our business! AI technologies not only save time, but also increase efficiency.",
    img: "https://i.pravatar.cc/150?u=jesse"
  },
  {
    name: "Amy Louise",
    role: "Customer Success Manager",
    text: "Thanks to their team, our internal processes were optimized, resulting in significant better results for my work.",
    img: "https://i.pravatar.cc/150?u=amy"
  },
  {
    name: "Michael Joseph",
    role: "Head of Content",
    text: "The best investment solution for our business! AI technologies not only save time, but also increase efficiency.",
    img: "https://i.pravatar.cc/150?u=mike"
  },
  {
    name: "Benjamin Daul",
    role: "Head of Engineering",
    text: "Thanks to their team, our internal processes were optimized, resulting in significant savings and better results.",
    img: "https://i.pravatar.cc/150?u=ben"
  }
];

export default function ClientsScroller() {
  const scrollRef = useRef(null);

  // Use GSAP for the infinite auto-scroll
useGSAP(() => {
    // 2. TypeScript now knows scrollNode is either HTMLDivElement or null
    const scrollNode = scrollRef.current;
    
    if (!scrollNode) return;

    // 3. Use xPercent for a cleaner, type-safe calculation
    gsap.to(scrollNode, {
        xPercent: -50, 
        duration: 25,
        ease: "none",
        repeat: -1,
    });
}, { scope: scrollRef });

  // Duplicate the array for a seamless loop
  const displayList = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-24 overflow-hidden relative">
      
      {/* 1. Header Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 relative z-30">
        <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter">
          Our Clients
        </h2>
        <p className="text-gray-400 max-w-[300px] text-sm md:text-base leading-relaxed">
          Tangible results, not empty claims — we build efficient AI tools that scale, optimize, and save valuable hours.
        </p>
      </div>

      {/* 2. The Auto-Scrolling Track with Side Shades */}
      <div className="side-shades relative w-full">
        <div 
          ref={scrollRef} 
          className="flex gap-6 whitespace-nowrap pl-6 md:pl-16"
        >
          {displayList.map((item, index) => (
            <div 
              key={index} 
              className="etery-card w-[85vw] md:w-[480px] shrink-0 whitespace-normal flex flex-col justify-between min-h-[320px]"
            >
              {/* Quote Icon */}
              <div className="text-white text-5xl font-serif mb-6">“</div>
              
              {/* Testimonial Text */}
              <p className="text-white text-xl md:text-2xl font-medium leading-snug mb-10">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-xl object-cover grayscale" />
                  <div>
                    <h4 className="text-white font-bold text-base">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>
                {/* Social Icon (X) */}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-white text-xs">𝕏</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}