"use client"

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data structure updated to show "Impact Metrics" instead of "Customer Quotes"
const impactMetrics = [
  {
    metric: "40+",
    label: "Process Hours Saved",
    description: "Our AI automation demos prove that small businesses can reclaim an entire work week every month.",
    icon: "⚡"
  },
  {
    metric: "100%",
    label: "Digital Accuracy",
    description: "Eliminating manual data entry errors through smart Salesforce and AI integrations.",
    icon: "🎯"
  },
  {
    metric: "24/7",
    label: "Automated Support",
    description: "AI Chatbots that handle customer inquiries even while the business owner sleeps.",
    icon: "🤖"
  },
  {
    metric: "10x",
    label: "Faster Onboarding",
    description: "Transforming manual paper-based workflows into instant digital experiences.",
    icon: "🚀"
  }
];

export default function ImpactScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Infinite Scroll Animation
    const scrollNode = scrollRef.current;
    if (!scrollNode) return;
    
    const totalWidth = scrollNode.scrollWidth;

    gsap.to(scrollNode, {
      x: `-${totalWidth / 2}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // 2. Number Counter Animation for the "Metric" text
    const counters = document.querySelectorAll(".metric-number");
    counters.forEach((counter) => {
      const targetValue = counter.getAttribute("data-target");
      gsap.from(counter, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        }
      });
    });
  }, { scope: containerRef });

  // Duplicate the array for a seamless loop
  const displayList = [...impactMetrics, ...impactMetrics];

  return (
    <section ref={containerRef} className="bg-black py-24 overflow-hidden relative">
      
      {/* 1. Header Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 relative z-30">
        <div>
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">Our Mission</span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
                Small Business, <br/><span className="text-gray-500">Big Impact.</span>
            </h2>
        </div>
        <p className="text-gray-400 max-w-[400px] text-sm md:text-base leading-relaxed">
          We help local businesses bridge the digital gap. Our AI-driven tools are designed to turn manual tasks into automated growth engines.
        </p>
      </div>

      {/* 2. The Auto-Scrolling Track */}
      <div className="relative w-full">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div 
          ref={scrollRef} 
          className="flex gap-6 whitespace-nowrap"
        >
          {displayList.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 border border-white/5 p-10 rounded-[32px] w-[85vw] md:w-[450px] shrink-0 whitespace-normal flex flex-col justify-between min-h-[350px] hover:bg-zinc-900 transition-colors group"
            >
              <div>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-white text-6xl font-bold mb-2 tracking-tighter flex items-baseline">
                    <span className="metric-number" data-target={item.metric.replace(/\D/g,'')}>{item.metric}</span>
                    <span className="text-blue-500 text-3xl ml-1">{item.metric.replace(/[0-9]/g, '')}</span>
                </h3>
                <p className="text-white text-xl font-semibold mb-4">{item.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Demo Project Outcome</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}