"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  BarChart,
  Cpu,
  MoveRight,
  ArrowUpRight,
} from "lucide-react";

import { servicesData } from "@/data/serviceData";
import { OpenFormProps } from "@/types/model";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export const ServicesPage = ({ onOpen }: OpenFormProps) => {
  const containerRef = useRef<HTMLElement>(null);


  const router = useRouter();

  const servicesList = Object.entries(servicesData).map(([key, data]) => ({
    id: key,                  
    icon: data.icon,         
    title: data.hero.title,   
    desc: data.hero.description 
  }));

  const handleCardClick = (id: string) => {
    router.push(`/services/${id}`);
  };



 
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".header-anim", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".header-container",
          start: "top 80%",
        },
      });

      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-10 md:py-20 px-4 md:px-12 lg:px-24" id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="header-container flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-8">
          <div>
            <h2 className="header-anim text-2xl md:text-4xl font-bold text-[#4D2B8C] mb-4">
              IT Services We Offer
            </h2>
            <p className="header-anim text-gray-600 max-w-xl text-sm md:text-lg">
              We are a Nagpur-based IT company delivering software development,
              cloud, mobile, web, Salesforce, and digital marketing services for
              startups and enterprises across India.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon?.icon;
            return (
        <div
          key={index}
          onClick={() => handleCardClick(service.id)}
          className="service-card border-r border-b border-gray-200 p-4 md:p-10 hover:bg-gray-50 transition-colors group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
        {IconComponent ? (
           <IconComponent className="w-10 h-10 text-[#85409D]" /> 
        ) : null}
      </div>
            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4D2B8C] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-8 line-clamp-3">
              {service.desc}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold text-[#85409D] uppercase">
              explore
            </span>
          </div>
        </div>
          )})}
        </div>

        {/* Bottom Actions */}
        <div className=" mt-8 md:mt-16 flex  gap-2 md:gap-6">
          <button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-2 px-4 md:py-4 md:px-8 uppercase tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 transition-colors" onClick={onOpen}>
              Get Free IT Consultation
            <ArrowUpRight size={18} />
          </button>

        
        </div>
      </div>
    </section>
  );
};
