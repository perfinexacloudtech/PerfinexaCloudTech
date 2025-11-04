// src/app/components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedShapes from "./AnimatedShapes";
import { fadeInUp, staggerChildren } from "@/app/utils/animation";

export default function HeroSection() {
  return (
   <motion.section
  className="
    pt-16 pb-8 sm:pt-20 sm:pb-12
    bg-gradient-to-br from-blue-50 to-purple-50  
    min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]
    flex items-center 
    relative overflow-hidden
  "
  initial="initial"
  animate="animate"
  variants={staggerChildren}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-4 sm:py-8">
      
      {/* LEFT CONTENT */}
      <motion.div 
        className="order-2 lg:order-1 text-center lg:text-left px-4 sm:px-0"
        variants={fadeInUp}
      >
        <p className="text-sm sm:text-base md:text-xl font-medium mb-2 text-[#772e98]">
          Start Your Tech Journey
        </p>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Build your Future,{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #0d318d, #772e98)" }}>
            Smarter & Faster.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
          Industry-ready courses in{" "}
          <span className="font-semibold text-[#0d318d]">
            Salesforce | Java Full Stack | MERN | Python Django
          </span>
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
          Gain Live Project Experience, Mentorship, and Placement Support.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform?usp=header"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-lg"
            style={{ background: "linear-gradient(to right, #0d318d, #772e98)" }}
          >
            👉 Enroll Today
          </Link>

          <Link
            href="/courses"
            className="border-2 px-6 py-3 rounded-xl font-semibold hover:text-white transition-colors flex items-center justify-center gap-2 text-sm sm:text-lg"
            style={{ borderColor: "#0d318d", color: "#0d318d" }}
          >
            🔍 Explore Courses
          </Link>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-4 overflow-x-auto py-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0d318d0d]">
            💼 <span className="font-medium text-[#0d318d]">Live Projects</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#772e980d]">
            💬 <span className="font-medium text-[#772e98]">Mentorship</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#deae400d]">
            🤝 <span className="font-medium text-[#deae40]">Industry Connections</span>
          </div>
        </div>
        
        <p className="text-gray-600 font-medium text-sm sm:text-base hidden lg:block">
          Join the next generation of developers shaping India's tech future.
        </p>
      </motion.div>

      {/* RIGHT ANIMATION SECTION */}
      <motion.div 
        className="relative h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[480px] w-full flex justify-center items-center order-1 lg:order-2 px-4 sm:px-0"
        variants={fadeInUp}
      >
        <AnimatedShapes />

        <motion.div
          className="absolute w-16 h-16 sm:w-30 sm:h-30 md:w-50 md:h-50 
                     bg-white/20 backdrop-blur-sm rounded-2xl 
                     flex items-center justify-center text-4xl sm:text-6xl md:text-8xl 
                     border-2 border-white/30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👨‍💻
        </motion.div>
      </motion.div>

    </div>
  </div>
</motion.section>

  );
}
