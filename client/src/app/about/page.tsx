"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Rocket,
  Eye,
  Target,
  Monitor,
  Palette,
  Cloud,
  BarChart,
  Shield,
  Megaphone,
  CheckCircle,
  Users,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const features = [
  {
    icon: Rocket,
    title: "Our Mission",
    desc: "To empower startups and enterprises with cutting-edge IT solutions, cloud technologies, and creative excellence that enable sustainable growth in a digital-first world.",
    bg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become a globally trusted digital transformation company, where modern technology, cloud infrastructure, and human creativity come together to solve complex business challenges.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Target,
    title: "Our Goal",
    desc: "To deliver unmatched ROI and long-term value by maintaining a proven delivery record through continuous learning, innovation, and process optimization.",
    bg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
];

const services = [
  {
    icon: Monitor,
    title: "Salesforce Development",
    desc: "Custom Salesforce CRM solutions with automation and integrations to boost sales and customer engagement.",
  },
  {
    icon: Palette,
    title: "Software Development",
    desc: "Secure, scalable software solutions designed to streamline operations and accelerate growth.",
  },
  {
    icon: Cloud,
    title: "Website Development",
    desc: "Modern, fast, and SEO-optimized websites that turn visitors into customers.",
  },
  {
    icon: BarChart,
    title: "Digital Marketing & SEO",
    desc: "Data-driven strategies to rank higher on Google and generate quality leads.",
  },
  {
    icon: Megaphone,
    title: "Mobile App Development",
    desc: "High-performance Android and iOS apps built for scalability and great user experience",
  },
];

const domains = [
  {
    title: "Real Estate Tech",
    desc: "Property listings, CRM, virtual tours, booking & management systems.",
    img: "/domain/realestate-domain.jpg",
  },
  {
    title: "FinTech",
    desc: "Digital payments, banking apps, wallets, lending, blockchain, KYC systems.",
    img: "/domain/fintech-domain.jpg",
  },
  {
    title: "HealthTech",
    desc: "Telemedicine, hospital management, EHR systems, fitness & wellness apps.",
    img: "/domain/medical-domain.jpg",
  },
  {
    title: "EdTech",
    desc: "Online learning platforms, LMS, course marketplaces, exam & certification systems.",
    img: "/domain/Ed-tech-domain.jpg",
  },
  {
    title: "E-Commerce & Retail Tech",
    desc: "Online stores, marketplaces, inventory, order & payment systems.",
    img: "/domain/ecoomerce-domain.jpg",
  },
  {
    title: "Logistics & Supply Chain Tech",
    desc: "Fleet tracking, warehouse management, delivery & route optimization.",
    img: "/domain/logistic-domain.jpg",
  },
  {
    title: "HRTech & Enterprise Solutions",
    desc: "Payroll, recruitment systems, employee management, ERP & CRM tools.",
    img: "/domain/hrm-domain.jpg",
  },
];

const whyChoose = [
  {
    icon: CheckCircle,
    title: "Agile & Adaptive",
    desc: "We follow agile practices to quickly adapt to changing business needs and market trends.",
  },
  {
    icon: Users,
    title: "Dedicated Tech Team",
    desc: "A focused team works closely with you to plan, build, and scale your digital product.",
  },
  {
    icon: Zap,
    title: "Future-Proof Tech Stack",
    desc: "We use modern, stable, and scalable technologies designed for long-term growth.",
  },
];

const stats = [
  {
    label: "Delivery Speed",
    val: "Agile & Optimized",
    color: "text-[#fde047]",
  },
  {
    label: "Post-Launch Support",
    val: "Ongoing & Reliable",
    color: "text-green-400",
  },
  {
    label: "Cost Efficiency",
    val: "Value-Driven Development",
    color: "text-blue-400",
  },
  {
    label: "Technical Debt",
    val: "Clean & Scalable Code",
    color: "text-purple-400",
  },
];

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      ).fromTo(
        ".hero-quote",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.6",
      );

      gsap.fromTo(
        ".mission-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: "#mission-values", start: "top 85%" },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
        },
      );

      gsap.fromTo(
        ".identity-text",
        { x: -50, opacity: 0 },
        {
          scrollTrigger: { trigger: "#identity", start: "top 80%" },
          x: 0,
          opacity: 1,
          duration: 1,
        },
      );
      gsap.fromTo(
        ".identity-img",
        { x: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: "#identity", start: "top 80%" },
          x: 0,
          opacity: 1,
          duration: 1,
        },
      );

      gsap.fromTo(
        ".service-card-anim",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: "#offerings", start: "top 85%" },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
        },
      );

      gsap.fromTo(
        ".domain-card",
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: { trigger: "#domains", start: "top 80%" },
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
        },
      );

      gsap.fromTo(
        ".edge-list-item",
        { x: -30, opacity: 0 },
        {
          scrollTrigger: { trigger: "#edge", start: "top 80%" },
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
        },
      );
      gsap.fromTo(
        ".edge-card",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: { trigger: "#edge", start: "top 80%" },
          scale: 1,
          opacity: 1,
          duration: 0.8,
        },
      );
    }, mainRef);

    setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="font-sans text-slate-800 bg-[#2a1b5e] min-h-screen overflow-x-hidden selection:bg-[#fde047] selection:text-[#2a1b5e]"
    >
      <section className="relative w-full pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-[#2a1b5e] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-title text-3xl md:text-7xl font-bold mb-2 md:mb-8 leading-tight tracking-tight">
            Innovating for a <br />
            <span className="text-[#fde047]">Digital Tomorrow</span>
          </h1>

          <div className="hero-quote max-w-4xl mx-auto mt-14 mb-0 bg-white/5 p-2 md:p-8 rounded-r-lg border-l-4 border-[#fde047] backdrop-blur-sm">
            <p className="text-sm md:text-2xl italic text-gray-200 font-light">
              Perfinexa Cloudtech is a cloud-first IT company in Nagpur
              dedicated to building scalable, secure, and future-ready digital
              solutions for businesses across Nagpur and India. As technologies
              evolve, we continuously upgrade our skills and processes to
              deliver reliable, high-performance software, cloud platforms, and
              digital products that drive measurable business growth.
            </p>
          </div>
        </div>
      </section>

      <section
        id="mission-values"
        className="w-full py-10  md:py-20 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center">
            {features.map((f, i) => (
              <div key={i} className="mission-card flex flex-col items-center">
                <div
                  className={` p-2 md:p-6 rounded-md md:rounded-3xl mb-2 md:mb-6 ${f.bg} ${f.iconColor}`}
                >
                  <f.icon
                    size={36}
                    strokeWidth={2}
                    className="hidden md:block"
                  />
                  <f.icon size={22} strokeWidth={1} className="md:hidden " />
                </div>
                <h3 className=" text-xl md:text-2xl font-bold mb-2 md:mb-4 text-[#2a1b5e]">
                  {f.title}
                </h3>
                <p className="text-gray-500  text-xs md:text-sm md:text-base leading-relaxed max-w-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="identity"
        className="w-full py-10 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="identity-text">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[#2a1b5e] leading-tight">
              Who We Are & <br />
              <span className="text-[#f59e0b]">What We Do</span>
            </h2>
            <p className="text-gray-600 mb-4 md:mb-8 text-sm md:text-lg leading-relaxed">
              We are a team of experienced software engineers, cloud architects,
              UI/UX designers, and digital strategists based in Nagpur. With a
              problem-solving mindset, we help businesses design, build, and
              scale digital solutions that perform in real-world conditions.
              From custom software development and cloud migration to AI
              automation, Salesforce development, and SEO-friendly websites, we
              create technology that empowers teams and accelerates growth.
            </p>
            <div className="flex gap-2 md:gap-4">
              <button className="bg-[#4c2a9e] text-white px-4 py-1 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#3b217a] transition shadow-lg shadow-purple-900/20">
                Our History
              </button>
              <button className="border-2 border-[#4c2a9e] text-[#4c2a9e] px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                Team Culture
              </button>
            </div>
          </div>

          <div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-[8px] border-white bg-gray-200">
              <Image
                src="/images/team/about-1.jpeg"
                width={50}
                height={50}
                alt="owner image"
                className="w-full  object-cover md:hidden"
              ></Image>
              <Image
                src="/images/team/about-1.jpeg"
                width={100}
                height={100}
                alt="owner image"
                className="w-full  object-cover hidden md:block"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section
        id="offerings"
        className="w-full py-10 md:py-24 px-6 md:px-12 lg:px-24 bg-[#3c2578]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className=" text-2xl md:text-4xl font-bold text-[#fde047] mb-4">
              What We Are Offering
            </h2>
            <p className=" text-xs md:text-sm text-purple-200">
              Holistic services designed to accelerate your digital journey
            </p>
          </div>

          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveService(activeService === i ? null : i)}
                className={`service-card-anim group p-4 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer 
                  ${activeService === i ? "bg-[#5b3da6] border-[#fde047] -translate-y-2" : "bg-[#4d3291] border-white/10 hover:bg-[#5b3da6]"}`}
              >
                <div className="flex justify-between items-start">
                  <s.icon
                    className={`w-10 h-10 mb-6 transition-colors ${activeService === i ? "text-white" : "text-[#fde047]"}`}
                  />
                  {activeService === i && (
                    <span className="text-xs text-[#fde047] font-bold uppercase tracking-widest">
                      Active
                    </span>
                  )}
                </div>

                <h3 className=" text-sm md:text-xl font-bold mb-3 text-white">
                  {s.title}
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  {s.desc}
                </p>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${activeService === i ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/20" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-white text-sm">
                      We specialize in delivering high-impact{" "}
                      {s.title.toLowerCase()} tailored to your industry. Our
                      team ensures scalability and security at every step.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="domains"
        className="w-full py-10 md:py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className=" text-2xl md:text-4xl font-bold mb-4 text-[#2a1b5e]">
                Our Key Domains
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                We deliver industry-focused digital solutions tailored for
                startups and enterprises, specializing in custom software
                development, cloud platforms, mobile applications, and scalable
                IT solutions across fintech, healthcare, e-commerce, government,
                manufacturing, and real estate sectors.
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 animate-domain-scroll hover:[animation-play-state:paused]">
              {domains.map((d, i) => (
                <div
                  key={i}
                  className="min-w-[200px] h-[200px]  md:min-w-[360px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden relative bg-[#2a1b5e] shadow-xl"
                >
                  <Image
                    src={d.img}
                    alt={d.title}
                    width={150}
                    height={150}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0" />
                  <div className="absolute bottom-0 left-0 px-3 py-2 md:px-6 md:py-4 bg-[#3C2578]">
                    <h3 className=" text-sm md:text-2xl font-bold text-white mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-200 text-[8px] md:text-sm leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="edge"
        className="w-full py-10 md:py-24 px-6 md:px-12 lg:px-24 bg-[#1a103c] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#fde047] mb-3">
              Why Choose Perfinexa Cloudtech
            </h2>
            <p className=" text-xs md:text-smtext-gray-400">
              Perfinexa Cloudtech is a cloud-first IT company in Nagpur focused
              on building scalable, future-ready digital solutions for startups
              and growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {whyChoose.map((item, i) => (
                <div key={i} className="edge-list-item flex gap-6">
                  <div className="bg-[#4c2a9e] p-3 h-fit rounded-full text-white shadow-lg shadow-purple-900/50">
                    <item.icon size={24} className="hidden md:block" />
                    <item.icon size={16} className=" md:hidden " />
                  </div>
                  <div>
                    <h4 className=" text-sm md:text-xl font-bold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="edge-card bg-[#2e1d66] p-4 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="text-[#fde047] font-bold text-xl mb-4 md:mb-8 tracking-wide">
                Performance Comparison
              </h3>

              <div className="space-y-4">
                {stats.map((row, i) => (
                  <div
                    key={i}
                    className="bg-[#3b257a] p-2 md:p-5 rounded-xl flex justify-between items-center hover:bg-[#452b8f] transition duration-300"
                  >
                    <span className="text-gray-200 font-medium text-xs md:text-base">
                      {row.label}
                    </span>
                    <span
                      className={`font-bold text-sm md:text-base ${row.color}`}
                    >
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
