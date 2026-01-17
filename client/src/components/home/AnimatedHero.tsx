"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHighlightHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    // Create the ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",      // Start when the top of section hits top of viewport
        end: "+=150%",         // Scroll distance (1.5x the screen height)
        pin: true,             // "Freeze" the section in place while animating
        scrub: 0.75,           // Smoothly follows the scroll thumb
        anticipatePin: 1,
      },
    });

    tl.to(words, {
      color: "#ffffff",
      stagger: 0.1,
      ease: "none",
    });
  }, { scope: sectionRef });

  const text = "We help businesses unlock growth with web, apps, AI, and Salesforce. As a new startup, we turn bold ideas into intelligent, scalable digital solutions that work.";

  return (
    <main className="bg-black text-white selection:bg-purple-500/30">
      


      {/* 2. ANIMATION SECTION */}
      <section 
        ref={sectionRef} 
        className="h-svh w-full flex flex-col items-center justify-center px-6 md:px-12 text-center overflow-hidden"
      >
        {/* Avatar Stack */}
        <div className="flex items-center -space-x-3 mb-8 md:mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 border-black overflow-hidden bg-zinc-900 shadow-2xl">
               <img 
                src={`images/${i}.jpg`} 
                alt="Expert" 
                className="w-full h-full object-cover grayscale"
               />
            </div>
          ))}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-2 border-black bg-[#111] flex items-center justify-center text-zinc-500 text-2xl font-light">
            +
          </div>
        </div>

        {/* Highlight Text */}
        <h2
          ref={textRef}
          className="text-[1.85rem] leading-[1.25] sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight max-w-6xl"
        >
          {text.split(" ").map((word, index) => (
            <span 
              key={index} 
              className="word text-white/15 inline-block mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Glow Effect */}
        <div className="absolute -z-10 w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      </section>

   
      
    </main>
  );
}