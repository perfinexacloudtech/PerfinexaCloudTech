"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Check, 
  ArrowRight, 
  Briefcase, 
  Settings, 
  Monitor, 
  GraduationCap 
} from "lucide-react";
import Navbar from "@/components/common/Navbar";

// Register GSAP ScrollTrigger safely for Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- TYPES & DATA ---

interface FeatureTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ContentItem {
  badge: string;
  title: string;
  desc: string;
  cardTitle: string;
  cardTag: string;
  cardImageColor: string;
  cardSubtext: string;
}

const featureTabs: FeatureTab[] = [
  { id: "consulting", label: "Consulting", icon: <Briefcase size={16} /> },
  { id: "crm", label: "CRM Customisation", icon: <Settings size={16} /> },
  { id: "web", label: "Web Dev", icon: <Monitor size={16} /> },
  { id: "learning", label: "L&D", icon: <GraduationCap size={16} /> },
];

const featureContent: Record<string, ContentItem> = {
  consulting: {
    badge: "STRATEGY",
    title: "Salesforce Consulting & Implementation",
    desc: "Providing expert guidance and support throughout the entire process. Our team of experienced consultants works closely with you to understand your business requirements and tailor a Salesforce solution that aligns with your goals.",
    cardTitle: "Implementation Roadmap",
    cardTag: "Phase 1",
    cardImageColor: "bg-blue-200",
    cardSubtext: "Aligning business goals with technical execution."
  },
  crm: {
    badge: "OPTIMIZATION",
    title: "Salesforce CRM Customisation",
    desc: "Services to ensure your system is perfectly aligned with your unique business processes. Our team of skilled developers works closely with you to identify your specific needs and customize Salesforce to meet those requirements.",
    cardTitle: "Workflow Automation",
    cardTag: "Active",
    cardImageColor: "bg-orange-200",
    cardSubtext: "Custom triggers ensuring process efficiency."
  },
  web: {
    badge: "DEVELOPMENT",
    title: "Web Development",
    desc: "Our team of web developers ensures that your website not only looks great but also functions seamlessly. We focus on creating websites that effectively communicate your brand message, engage your audience, and drive business growth.",
    cardTitle: "Frontend Interface",
    cardTag: "React",
    cardImageColor: "bg-purple-200",
    cardSubtext: "Responsive design for optimal user experience."
  },
  learning: {
    badge: "TRAINING",
    title: "Learning & Development",
    desc: "We believe in empowering professionals with the knowledge and skills they need to excel in the Salesforce ecosystem. Whether you are a beginner looking to enter the Salesforce world or an experienced professional aiming to enhance your expertise.",
    cardTitle: "Admin Certification",
    cardTag: "Verified",
    cardImageColor: "bg-green-200",
    cardSubtext: "Comprehensive training for your team."
  },
};

// --- NEW COMPONENT: Animated SVGs ---

const AnimatedFeatureSvg = ({ activeTab }: { activeTab: string }) => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".svg-elem", { clearProps: "all" });
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      switch (activeTab) {
        case "consulting":
          gsap.set(".cons-node", { scale: 0, opacity: 0 });
          tl.to(".cons-node-center", { scale: 1, opacity: 1, duration: 0.5 })
            .to(".cons-node-outer", { scale: 1, opacity: 1, stagger: 0.2 }, "-=0.2")
            .fromTo(".cons-line", { opacity: 0 }, { opacity: 0.6, duration: 0.8, stagger: 0.1 }, "-=0.5");
          break;
        case "crm":
          tl.fromTo(".crm-gear-center", { rotate: -180, scale: 0.5, opacity: 0 }, { rotate: 0, scale: 1, opacity: 1, duration: 1.2 })
            .fromTo(".crm-block", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.8");
          break;
        case "web":
           tl.fromTo(".web-browser", { scaleY: 0, transformOrigin: "bottom center", opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.6 })
             .fromTo(".web-element", { scaleX: 0, opacity:0 }, { scaleX: 1, opacity: 1, stagger: 0.2, ease: "power2.inOut" });
          break;
        case "learning":
           tl.fromTo(".learn-arrow", { scaleY: 0, transformOrigin: "bottom center", opacity: 0}, { scaleY: 1, opacity: 1, duration: 0.7})
             .fromTo(".learn-cap", { y: -50, opacity: 0, rotate: -20 }, { y: 0, opacity: 1, rotate: 0, ease: "bounce.out", duration: 1 }, "-=0.3");
          break;
      }
    }, svgRef);
    return () => ctx.revert();
  }, [activeTab]);

  const renderSvgContent = () => {
    const baseClasses = "w-full h-full text-[#070F3A]";
    // ... (Keep your existing SVG switch cases here, no changes needed to SVG code) ... 
    // Just ensure you paste the full switch statement from previous code here
    
    // For brevity in this snippet, I am assuming the SVG paths are the same as before.
    // If you need the SVG paths again, let me know!
    switch (activeTab) {
        case "consulting":
          return (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseClasses}>
              <circle cx="100" cy="100" r="30" className="cons-node cons-node-center svg-elem" fill="currentColor" opacity="0.1" />
              <circle cx="100" cy="100" r="15" className="cons-node cons-node-center svg-elem" fill="currentColor" />
              <path d="M100 100 L40 40" className="cons-line svg-elem" stroke="currentColor" strokeWidth="2" />
              <path d="M100 100 L160 40" className="cons-line svg-elem" stroke="currentColor" strokeWidth="2" />
              <path d="M100 100 L40 160" className="cons-line svg-elem" stroke="currentColor" strokeWidth="2" />
              <path d="M100 100 L160 160" className="cons-line svg-elem" stroke="currentColor" strokeWidth="2" />
              <circle cx="40" cy="40" r="8" className="cons-node cons-node-outer svg-elem" fill="#3b82f6" />
              <circle cx="160" cy="40" r="8" className="cons-node cons-node-outer svg-elem" fill="#3b82f6" />
              <circle cx="40" cy="160" r="8" className="cons-node cons-node-outer svg-elem" fill="#3b82f6" />
              <circle cx="160" cy="160" r="8" className="cons-node cons-node-outer svg-elem" fill="#3b82f6" />
            </svg>
          );
        case "crm":
          return (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseClasses}>
               <path className="crm-gear-center svg-elem" d="M100 60C77.9086 60 60 77.9086 60 100C60 122.091 77.9086 140 100 140C122.091 140 140 122.091 140 100C140 77.9086 122.091 60 100 60ZM80 100C80 88.9543 88.9543 80 100 80C111.046 80 120 88.9543 120 100C120 111.046 111.046 120 100 120C88.9543 120 80 111.046 80 100Z" fill="currentColor" opacity="0.8"/>
               <rect x="30" y="85" width="30" height="30" rx="4" className="crm-block svg-elem" fill="#3b82f6"/>
               <rect x="140" y="85" width="30" height="30" rx="4" className="crm-block svg-elem" fill="#3b82f6"/>
               <rect x="85" y="30" width="30" height="30" rx="4" className="crm-block svg-elem" fill="#3b82f6"/>
               <rect x="85" y="140" width="30" height="30" rx="4" className="crm-block svg-elem" fill="#3b82f6"/>
            </svg>
          );
          case "web":
          return (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseClasses}>
               <rect x="20" y="40" width="160" height="120" rx="8" className="web-browser svg-elem" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
               <rect x="20" y="40" width="160" height="24" rx="8" className="web-browser svg-elem" fill="currentColor" opacity="0.3"/>
               <circle cx="32" cy="52" r="4" fill="white"/>
               <circle cx="44" cy="52" r="4" fill="white"/>
               <circle cx="56" cy="52" r="4" fill="white"/>
               <rect x="40" y="80" width="60" height="12" rx="2" className="web-element svg-elem" fill="#3b82f6"/>
               <rect x="40" y="100" width="120" height="12" rx="2" className="web-element svg-elem" fill="#93c5fd"/>
               <rect x="40" y="120" width="100" height="12" rx="2" className="web-element svg-elem" fill="#93c5fd"/>
               <rect x="110" y="80" width="50" height="12" rx="2" className="web-element svg-elem" fill="#3b82f6"/>
            </svg>
          );
          case "learning":
          return (
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={baseClasses}>
                <path d="M40 160 L80 120 L110 140 L160 60" className="learn-arrow svg-elem" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M160 60 L130 60 M160 60 L160 90" className="learn-arrow svg-elem" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <g className="learn-cap svg-elem">
                  <path d="M100 20 L160 50 L100 80 L40 50 Z" fill="#3b82f6"/>
                  <path d="M160 50 V80 C160 80 130 100 100 100 C70 100 40 80 40 80 V50" fill="currentColor" opacity="0.8"/>
                  <rect x="150" y="45" width="4" height="40" fill="#FDBA36"/>
                  <circle cx="152" cy="90" r="6" fill="#FDBA36"/>
                </g>
            </svg>
          );
        default:
          return null;
      }
  };

  // CHANGE: Reduced padding on mobile (p-2 instead of p-8)
  return (
    <div ref={svgRef} className="w-full h-full p-2 md:p-8 flex items-center justify-center">
      {renderSvgContent()}
    </div>
  );
}

// --- MAIN COMPONENT ---

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#070F3A] text-white font-sans selection:bg-yellow-500 selection:text-black">
        <Navbar />
        
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#070F3A] pt-28 pb-20 px-4 md:pt-44 md:pb-20 md:px-8 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] pointer-events-none opacity-90">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#7FB5B5"
              d="M140,100 C160,120 180,80 200,100 L200,200 L100,200 C120,180 120,140 140,100 Z"
            />
            <path
              fill="#FDBA36"
              d="M120,30 C150,10 180,50 160,80 C140,110 100,100 80,70 C60,40 90,50 120,30 Z"
              transform="translate(20, -10)"
            />
            <path
              fill="none"
              stroke="#153F3E"
              strokeWidth="1.5"
              d="M90,75 C70,120 130,140 160,80"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 py-4 md:py-0">
          <h1 className="text-white text-4xl md:text-8xl font-serif font-medium mb-4 tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      <FeaturesSection />
    
    </main>
  );
}

// 1. FEATURES SECTION (Services)
function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<string>("consulting");
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP Animation when tab changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [contentRef.current, imageRef.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, [activeTab]);

  const activeContent = featureContent[activeTab];

  return (
    <section className="py-4 px-4 md:py-10 md:px-6 max-w-5xl mx-auto">
      <p className="text-slate-400 text-center text-lg py-4 md:py-8 md:text-xl">
        Helping businesses scale digitally with smart, reliable solutions designed to connect with customers and accelerate growth.
      </p>
      
      {/* Tabs Container - Responsive Fix Applied Here */}
      <div className="
        grid grid-cols-2 gap-2 p-2 mb-12 mx-auto
        w-full max-w-lg md:w-fit md:max-w-none md:flex md:justify-center
        bg-white/10 backdrop-blur-sm border border-white/10
        rounded-3xl md:rounded-full
      ">
        {featureTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative z-10 flex items-center justify-center gap-2 
              px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-300
              rounded-2xl md:rounded-full
              ${
                activeTab === tab.id
                  ? "bg-white shadow-sm text-[#070F3A]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {tab.icon}
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-4 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-black/20 text-slate-900">
        
        {/* Left Image Simulation (ANIMATED SVG COMPONENT HERE) */}
        <div ref={imageRef} className="relative aspect-video md:aspect-square bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center p-8 group border border-slate-100">
           {/* Background decorative elements */}
           <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50"></div>
           
           {/* RENDER THE ANIMATED SVG */}
           <AnimatedFeatureSvg activeTab={activeTab} />
        </div>

        {/* Right Text Content */}
        <div ref={contentRef}>
          <span className="inline-block px-3 py-1 rounded-full bg-[#070F3A]/10 text-[#070F3A] text-xs font-bold tracking-wider mb-2 md:mb-6 uppercase">
            {activeContent.badge}
          </span>
          <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-6 text-slate-900">
            {activeContent.title}
          </h3>
          <p className=" text-sm md:text-lg text-slate-600 leading-relaxed mb-8 text-justify">
            {activeContent.desc}
          </p>
          
          <button className="group flex items-center gap-2 text-[#070F3A] font-semibold hover:gap-3 transition-all">
            Learn more <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}