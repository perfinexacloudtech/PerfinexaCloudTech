"use client";

import React, { useRef } from "react";
import { Rocket, Briefcase, UserCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const containerRef = useRef(null);

  const stats = [
    {
      icon: <Rocket className="w-6 h-6" />,
      number: "5+",
      label: "Service Categories",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      number: "10+",
      label: "Technologies & Tools",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      number: "24/7",
      label: "Support & Assistance",
    },
  ];

  useGSAP(
    () => {
      const el = containerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".anim-label",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
      )
        .fromTo(
          ".anim-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".anim-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".anim-card",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#702C8B] text-white py-16 px-4 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 lg:gap-20 mb-10 md:mb-20">
          <div className="flex flex-col justify-start">
            <div className="anim-label flex items-center gap-4 mb-6">
              <span className="font-medium uppercase tracking-widest text-white/80 text-sm">
                About Us
              </span>
              <div className="h-[1px] w-12 bg-white/50"></div>
            </div>

            <h2 className="anim-heading text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Trusted IT <br />& Software Agency
            </h2>
          </div>

          <div className="pt-2 lg:pt-14">
            <h3 className="anim-text text-lg md:text-2xl font-semibold mb-6">
              Smart Digital Solutions for Modern Businesses
            </h3>

            <div className=" space-y-4  md:space-y-6  text-white/80 font-light leading-relaxed">
              <p className=" text-xs md:text-sm anim-text">
               Perfinexa CloudTech helps companies grow their businesses through secure, scalable, and future-ready digital solutions. We are a cloud-first IT company based in Nagpur that specializes in building websites, creating software, consulting for Salesforce, automating using AI, and developing enterprise solutions.
Our goal at Perfinexa CloudTech is simple: turn problems into solutions by leveraging technology in a way that improves how companies operating to get more done, have happier customers and make more money.
With years of practical experience in the field, we have developed technology, strategy, and innovation to create platforms that will be secure, fast, and ready for the future.
              </p> 
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`anim-card group border border-white/20  p-4 md:p-8 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-4 md:gap-6 hover:bg-white/10 hover:border-white/40 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default ${
                index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 border border-white/20 rounded-lg flex items-center justify-center shrink-0 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#702C8B]">
                {stat.icon}
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </h4>
                <p className="text-white/70 text-xs md:text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
