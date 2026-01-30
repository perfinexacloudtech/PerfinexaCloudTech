"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/serviceData";

export default function ServiceContent({ slug }: { slug: string }) {
  const containerRef = useRef(null);

  const service = servicesData[slug as keyof typeof servicesData];

  useLayoutEffect(() => {
    if (!service) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );

      ScrollTrigger.batch(".process-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "power3.out",
            },
          );
        },
        once: true,
      });

      ScrollTrigger.batch(".feature-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
          );
        },
        once: true,
      });

      gsap.fromTo(
        ".why-choose-item",
        { x: -30, opacity: 0 },
        {
          scrollTrigger: { trigger: "#why-choose", start: "top 80%" },
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
        },
      );
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [service]);

  if (!service) return null;

  return (
    <main
      ref={containerRef}
      className="bg-[#2A1B5E] min-h-screen font-sans text-white"
    >
      <section className="relative w-full min-h-[60vh] md:min-h-[85vh] flex items-center px-4 md:px-12 lg:px-24 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-t from-[#120b2e] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl hero-content opacity-0">
          {" "}
          <span className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            {service.hero.tag}
          </span>
          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
            {service.hero.title}
          </h1>
          <p className=" text-sm md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {service.hero.description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2">
              Get a Quote <ArrowRight size={18} />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white/10 transition backdrop-blur-md">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl text-black font-bold">The 4D Approach</h2>
            <div className="h-[px] grow bg-linear-to-r from-purple-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-6">
            {service.timeline?.map((step, i) => (
              <div
                key={i}
                className="process-card bg-[#1e163b] p-6 rounded-2xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300 opacity-0"
              >
                <span className="absolute top-4 right-6 text-6xl font-bold text-white/5 select-none group-hover:text-purple-500/10 transition-colors">
                  0{i + 1}
                </span>

                <div className="w-10 h-10 mb-6 text-purple-400">
                  <div className="w-full h-full border-2 border-purple-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className=" text-sm md:text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-purple-500 w-1/4 group-hover:w-full transition-all duration-700 delay-100 ease-out`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className=" py-10 md:py-24 px-4 md:px-12 lg:px-24 bg-[#702C8B]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className=" text-2xl md:text-4xl font-bold mb-4">
              Features & Capabilities
            </h2>
            <p className=" text-xs md:text-sm text-gray-400 max-w-2xl mx-auto">
              Our technical expertise spans across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-6">
            {service.deliverables?.map((item, i) => (
              <div
                key={i}
                className="feature-card bg-white p-4 md:p-8 rounded-xl border border-white/5 transition-all duration-300 group"
              >
                <div className="mb-6 text-amber-500">
                  <CheckCircle2
                    size={38}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-3 text-black">
                  {item.title}
                </h3>

                <ul className="text-gray-400 text-sm leading-relaxed list-disc ml-5">
                  {(item.desc as string[])?.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        className=" py-10 md:py-24 px-4 md:px-12 lg:px-24 bg-[#120b2e]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className=" text-2xl md:text-4xl font-bold mb-12">
              Why Choose Our <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                {service.hero.tag} Approach?
              </span>
            </h2>

            <div className="space-y-10">
              {service.benefits?.map((benefit, i) => (
                <div key={i} className="why-choose-item flex gap-6 opacity-0">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h4 className=" text-sm md:text-xl font-bold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-3xl translate-x-4 translate-y-4"></div>
            <div className="relative bg-[#1a123d] p-4 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <div className=" w-8 h-8 md:w-16 md:h-16 bg-[#251b4d] rounded-sm md:rounded-2xl flex items-center justify-center mb-8 text-purple-500">
                <Quote
                  size={32}
                  fill="currentColor"
                  className="hidden md:block"
                />
                <Quote size={18} fill="currentColor" className="md:hidden" />
              </div>
              <p className=" text-sm md:text-xl text-gray-300 italic mb-8 leading-relaxed font-light">
                "{service.hero.title} transformed our digital presence. Within 3
                months, our efficiency doubled."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500"></div>
                <div>
                  <div className="font-bold text-white">Bhushan Tekade</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    CEO - Perfinexa CloudTech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. TECH STACK --- */}
      <section className=" py-10 md:py-20 bg-white border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {service.techStack?.map((tech, i) => (
              <div
                key={i}
                className="group p-4 border rounded-full  flex flex-col items-center justify-center gap-3 "
              >
                <div className="text-gray-400 transition-colors">
                  <tech.icon size={32} className="hidden md:block" />
                  <tech.icon size={18} className=" md:hidden" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        {hasServiceCards(service) && service.serviceCards.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.serviceCards.map((card) => (
                  <div
                    key={card.id}
                    className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg
              ${
                card.highlight
                  ? "border-orange-500 scale-[1.02] ring-1 ring-orange-500"
                  : "border-gray-200"
              }`}
                  >
                    {card.highlight && (
                      <span className="self-start mb-3 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                        Most Popular
                      </span>
                    )}

                    <h3 className="text-xl font-semibold text-gray-900">
                      {card.title}
                    </h3>

                    <div className="mt-4 mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {card.price}
                      </span>
                      {card.price !== "Contact Us" && (
                        <span className="ml-1 text-sm text-gray-500">
                          / project
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mb-4">{card.bestFor}</p>

                    <button
                      className={`w-full rounded-lg py-2.5 text-sm font-medium transition mb-6
                ${
                  card.highlight
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                    >
                      Get Started
                    </button>

                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <p className="text-sm font-medium mb-4 text-gray-900">
                        FEATURES:
                      </p>

                      <ul className="space-y-3 mb-6">
                        {card.features?.map((f, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span
                              className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px]
                        ${
                          f.value === false
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                            >
                              {f.value === false ? "✕" : "✓"}
                            </span>

                            <span className="text-gray-600">
                              <strong className="text-gray-900">
                                {f.label}
                              </strong>
                              {typeof f.value === "string" && `: ${f.value}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center pt-4 border-t text-sm text-gray-500">
                      ⏱ Delivery:
                      <span className="ml-1 font-medium text-gray-900">
                        {card.deliveryTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

function hasServiceCards(service: any): service is { serviceCards: any[] } {
  return "serviceCards" in service && Array.isArray(service.serviceCards);
}
