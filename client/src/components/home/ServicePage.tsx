
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 1. Website & App Development: The Evolution ---
const WebAppEvolutionSVG = () => {
  const root = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    // Stage 1: Wireframe
    tl.fromTo(".wf-line", { drawSVG: 0, opacity: 0 }, { opacity: 0.4, stagger: 0.1, duration: 0.5 })
      // Stage 2: Design Fill
      .to(".ui-element", { fillOpacity: 1, opacity: 1, stagger: 0.1, duration: 0.5 })
      // Stage 3: Morph to Devices
      .to(".browser-app", { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" })
      // Stage 4: User Interaction
      .fromTo(".user-cursor", { x: -20, y: 20, opacity: 0 }, { x: 40, y: 40, opacity: 1, duration: 0.8 })
      .to(".button-pulse", { scale: 1.2, fill: "#3b82f6", duration: 0.3, yoyo: true, repeat: 1 });
  }, { scope: root });

  return (
    <div ref={root} className="w-full h-48 bg-zinc-900/30 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
      <svg width="200" height="120" viewBox="0 0 200 120">
        {/* Wireframe/Blueprint Stage */}
        <rect className="wf-line" x="20" y="20" width="120" height="80" rx="4" stroke="#555" fill="none" />
        <line className="wf-line" x1="30" y1="35" x2="130" y2="35" stroke="#444" />
        
        {/* Design Stage Elements */}
        <rect className="ui-element opacity-0" x="30" y="45" width="20" height="20" rx="2" fill="#333" />
        <rect className="ui-element opacity-0" x="55" y="45" width="75" height="5" rx="1" fill="#444" />
        <rect className="button-pulse ui-element opacity-0" x="55" y="55" width="30" height="10" rx="2" fill="#555" />

        {/* Device Stage */}
        <rect className="browser-app opacity-0 scale-75" x="150" y="40" width="30" height="55" rx="5" stroke="#3b82f6" fill="#111" />
        <circle className="user-cursor" cx="10" cy="10" r="4" fill="#fff" opacity="0" />
      </svg>
    </div>
  );
};

// --- 2. Salesforce: The Ecosystem ---
const SalesforceEcosystemSVG = () => {
  const root = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(".cloud-main", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" })
      .to(".cloud-main", { filter: "drop-shadow(0 0 8px #00A1E0)", duration: 1, yoyo: true, repeat: 1 })
      .from(".node-circle", { opacity: 0, scale: 0, stagger: 0.2, duration: 0.5 })
      .fromTo(".path-draw", { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: 2, ease: "none" }, "-=1")
      .to(".data-dot", { motionPath: { path: ".path-draw" }, duration: 2, repeat: -1, ease: "linear" }, "-=2");
  }, { scope: root });

  return (
    <div ref={root} className=" w-full h-48 bg-zinc-900/30 rounded-xl flex items-center justify-center border border-white/5">
      <svg width="200" height="150" viewBox="0 0 200 150">
        <circle className="path-draw" cx="100" cy="75" r="50" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="315" />
        {/* Central Cloud */}
        <path className="cloud-main" d="M100 55C90 55 85 62 85 67C80 67 75 75 82 80H118C125 75 120 67 115 67C115 62 110 55 100 55Z" fill="#00A1E0" />
        
        {/* Satellites (Sales, Service, etc) */}
        <circle className="node-circle" cx="100" cy="25" r="8" fill="#222" stroke="#00A1E0" />
        <circle className="node-circle" cx="150" cy="75" r="8" fill="#222" stroke="#00A1E0" />
        <circle className="node-circle" cx="100" cy="125" r="8" fill="#222" stroke="#00A1E0" />
        <circle className="node-circle" cx="50" cy="75" r="8" fill="#222" stroke="#00A1E0" />
        
        <circle className="data-dot" r="2" fill="#fff" />
      </svg>
    </div>
  );
};

// --- 3. AI Automation: The Brain & Logic ---
const AIBrainAutomationSVG = () => {
  const root = useRef(null);
  useGSAP(() => {
    gsap.to(".brain-core", { opacity: 0.5, scale: 1.1, duration: 1.5, yoyo: true, repeat: -1 });
    gsap.fromTo(".flow-line", { strokeDashoffset: 50 }, { strokeDashoffset: 0, duration: 1, stagger: 0.3, repeat: -1, ease: "none" });
    gsap.fromTo(".chat-bubble", { y: 10, opacity: 0 }, { y: 0, opacity: 1, stagger: 1, duration: 0.5, repeat: -1 });
  }, { scope: root });

  return (
    <div ref={root} className="w-full h-48 bg-zinc-900/30 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden">
      <svg width="220" height="140" viewBox="0 0 220 140">
        {/* Central AI Brain */}
        <rect className="brain-core" x="90" y="50" width="40" height="40" rx="8" fill="#6366f1" opacity="0.8" />
        <path d="M100 65 L120 65 M100 75 L120 75" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        
        {/* Connection Lines */}
        <line className="flow-line" x1="130" y1="70" x2="170" y2="70" stroke="#444" strokeDasharray="5,5" />
        <line className="flow-line" x1="90" y1="70" x2="50" y2="70" stroke="#444" strokeDasharray="5,5" />
        
        {/* Chat Panels */}
        <rect className="chat-bubble" x="20" y="60" width="30" height="20" rx="4" fill="#333" />
        <rect className="chat-bubble" x="170" y="60" width="30" height="20" rx="4" fill="#333" />
        
        {/* Human Icons */}
        <g opacity="0.5">
          <circle cx="110" cy="120" r="5" fill="#aaa" />
          <path d="M100 140 Q110 125 120 140" stroke="#aaa" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default function ExpertiseSection() {
  return (
  <section className="bg-black py-20 md:py-32 px-6 text-white w-full">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Our Services</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base">
            Strategic technology solutions designed to automate, integrate, and scale your business.
          </p>
        </div>
 
        {/* FIX 2: grid-rows-auto ensures the grid doesn't force extra height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {/* Card 1 */}
          {/* FIX 3: Added 'h-full' to make cards equal height and fill space */}
          <div className="flex flex-col h-full group border p-6 rounded-2xl border-blue-500/20 hover:border-blue-500/50 bg-zinc-900/10 transition-all duration-300">
            <WebAppEvolutionSVG />
            <h3 className="text-xl font-semibold mt-6 mb-2">Website & App Development</h3>
            {/* FIX 4: Added 'flex-grow' so the text fills the middle space */}
            <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
              High-performance websites and scalable web & mobile apps built for speed, SEO, and business growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full group border p-6 rounded-2xl border-blue-500/20 hover:border-blue-500/50 bg-zinc-900/10 transition-all duration-300">
            <SalesforceEcosystemSVG />
            <h3 className="text-xl font-semibold mt-6 mb-2">☁️ Salesforce Consulting</h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
              Custom Salesforce setup, automation, and integrations to boost sales and service performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full group border p-6 rounded-2xl border-blue-500/20 hover:border-blue-500/50 bg-zinc-900/10 transition-all duration-300">
            <AIBrainAutomationSVG />
            <h3 className="text-xl font-semibold mt-6 mb-2">🤖 AI Automation</h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
              Automate emails, chats, and reporting using intelligent AI workflows that integrate with your existing tools.
            </p>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Custom Integration", "Salesforce Setup", "Cloud Solutions", "UI/UX Design", "AI Chatbots","Data Analytics"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-zinc-500 text-xs hover:border-blue-500/50 transition-colors bg-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}