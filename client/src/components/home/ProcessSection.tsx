'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { OpenFormProps } from '@/types/model';

export const ProcessSection = ({ onOpen }: OpenFormProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: "01", title: "Pitch Your Idea / Consultation", desc: "Tell us your vision or tech needs and we validate the concept." },
    { id: "02", title: "We Plan & Strategize", desc: "Our experts craft a roadmap tailored for you, covering architecture, stack, and timeline." },
    { id: "03", title: "We Build & Execute", desc: "MVP, website, app, AI automation, or Salesforce— we develop it with agile sprints." },
    { id: "04", title: "You Scale, We Stay", desc: "We support growth after launch with maintenance, upgrades, and scaling." }
  ];

useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);


  useGSAP(() => {
    steps.forEach((_, index) => {
      const isActive = activeStep === index;
      const cardSelector = `.step-card-${index}`;

      gsap.to(cardSelector, {
        backgroundColor: isActive ? "#0F358A" : "transparent",
      
        scale: isActive ? 1.05 : 1,
        boxShadow: isActive 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          : "none",
        border: isActive ? "1px solid transparent" : "1px solid transparent", 
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(`${cardSelector} .step-number`, {
        color: isActive ? "#93c5fd" : "#d1d5db", 
        duration: 0.3
      });

      gsap.to(`${cardSelector} .step-title`, {
        color: isActive ? "#ffffff" : "#111827", 
        duration: 0.3
      });

      gsap.to(`${cardSelector} .step-desc`, {
        color: isActive ? "#dbeafe" : "#6b7280", 
        duration: 0.3
      });
    });
  }, { scope: containerRef, dependencies: [activeStep] }); 

  return (
    <section id="process" ref={containerRef} className="w-full border-y-2 py-10 md:py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between  mb-6 md:mb-16">
           <div>
             <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-900 font-bold uppercase tracking-wide">How It Works</span>
                <div className="h-[1px] w-12 bg-gray-400"></div>
             </div>
             <p className=" text-xs md:text-sm text-gray-600 max-w-xl">
               Perfinexa supports startups and companies by providing world-class tech expertise through a structured journey.
             </p>
           </div>
           <button className="hidden md:flex items-center gap-2 border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"  onClick={onOpen}>
             Request A Consultation <ArrowUpRight size={14} />
           </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
           {steps.map((step, index) => (
        <div 
          key={index}
          onMouseEnter={() => {
            setActiveStep(index);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
         
          className={`step-card-${index} flex items-start gap-6 p-6 rounded-xl cursor-pointer border border-transparent hover:border-blue-100 transition-colors duration-300`}
        >
          <span className="step-number text-gray-300 font-bold text-xl mt-1">
            {`0${index + 1}`}
          </span>
          
          <div>
            <h4 className="step-title text-sm md:text-xl font-bold text-gray-900 mb-1">
              {step.title}
            </h4>
            
            <p className="step-desc text-gray-500 text-sm">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
          </div>

          <div className=" hidden md:block w-full lg:w-1/2 h-full min-h-[500px] relative">
            <div className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Team Strategy Meeting" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};