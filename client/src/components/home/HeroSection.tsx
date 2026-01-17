
// import Navbar from '../common/Navbar'

// const HeroSection = () => {
//   return (
//    <div className="relative h-svh md:min-h-screen w-full bg-[#030014] overflow-hidden flex flex-col items-center justify-center">
//     <Navbar />
      
//       {/* 1. The Grid Layer */}
//       <div className="absolute inset-0 z-0 opacity-30" 
//            style={{ backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), 
//                                       linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
//                     backgroundSize: '40px 40px' }}>
//       </div>

//       {/* 2. Top Purple Glow (Radial Blur) */}
//       <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] 
//                       bg-blue-600/45 rounded-full blur-[120px] pointer-events-none"></div>

//       {/* 3. Central Content (The Text) */}
//       <div className="relative z-10 text-center px-4">
//         <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 inline-block">
//            Cloud-first. AI-ready. Future-focused
//         </span>
//         <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
//        Transforming ideas  <br /> into digital solutions
//         </h1>
//         <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-10">
//          Cloud web AI automation and skills to scale businesses.
//         </p>
        
//         <div className="flex gap-4 justify-center">
//           <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/5 transition">
//             Learn Skills
//           </button>
//           <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
//             Consultation
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Star, Menu } from "lucide-react";

// // --- ANIMATION VARIANTS ---
// // Note: We use the same keys ("hidden", "visible") for parent and children
// // so the animation state propagates automatically.

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // Stagger effect for children
//       delayChildren: 0.2,
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom easing for "premium" feel
//   }
// };

// export default function SparkLandingPage() {
//   return (
//     // Use min-h-[100dvh] for mobile browsers (Dynamic Viewport Height)
//     <div className="relative w-full min-h-[100dvh] bg-[#050505] text-white overflow-x-hidden selection:bg-teal-500/30 font-sans">
      
//       {/* ==================== 
//           BACKGROUND EFFECTS 
//       ==================== */}
      
//       {/* Top Right "God Ray" */}
//       <div className="absolute top-0 right-0 w-[50vh] md:w-[800px] h-[50vh] md:h-[600px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />

//       {/* Bottom Teal "Aurora" */}
//       <div className="absolute bottom-0 left-0 right-0 h-[30vh] md:h-[500px] bg-gradient-to-t from-teal-500/20 via-teal-900/20 to-transparent blur-[60px] md:blur-[100px] pointer-events-none z-0" />
      
//       {/* Bottom Center Bright Spot */}
//       <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[200px] md:h-[300px] bg-teal-500/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />


//       {/* ==================== 
//           NAVBAR 
//       ==================== */}
//       <nav className="relative z-50 flex items-center justify-between px-4 md:px-6 py-6 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           {/* Note: changed to teal to match theme consistency */}
//           <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)]">
//             <span className="text-black font-bold text-xl">S</span>
//           </div>
//           <span className="text-xl font-bold tracking-wide">Spark</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
//           {["HOME", "ABOUT", "SERVICE", "PRICING", "BLOG"].map((link) => (
//             <a key={link} href="#" className="hover:text-teal-400 transition-colors">
//               {link}
//             </a>
//           ))}
//         </div>

//         {/* CTA & Mobile Menu */}
//         <div className="flex items-center gap-4">
//           <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-300 text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:-translate-y-0.5">
//             Book A Call
//           </button>
//           <button className="md:hidden text-white p-2">
//             <Menu size={24} />
//           </button>
//         </div>
//       </nav>


//       {/* ==================== 
//           HERO SECTION 
//       ==================== */}
//       {/* LAYOUT FIX:
//          - h-auto for mobile (lets content grow)
//          - min-h-[calc(100dvh-100px)] ensures it fills screen on mobile if content is short
//          - lg:h-[calc(100dvh-100px)] forces fixed height on desktop for that "dashboard" look
//       */}
//       <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto lg:h-[calc(100dvh-100px)] items-center">
        
//         {/* --- LEFT COLUMN (Headline) --- */}
//         <motion.div 
//           className="lg:col-span-7 flex flex-col justify-center h-full order-1"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Tag */}
//           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
//             <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
//             <span className="text-gray-400 text-sm tracking-wide font-medium">Welcome To Spark</span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1 
//             variants={itemVariants} 
//             className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400"
//           >
//             Empowering Brands <br />
//             With Impactful <br />
//             Design Solutions
//           </motion.h1>

//           {/* Social Proof (Desktop: Bottom Left) */}
//           <motion.div variants={itemVariants} className="mt-auto hidden lg:flex items-center gap-6 pt-10 lg:pt-20">
//             <div className="flex -space-x-4">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gray-700 overflow-hidden relative">
//                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>
            
//             <div className="flex flex-col">
//               <div className="flex text-yellow-400 gap-0.5 text-sm">
//                 {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
//                 ))}
//               </div>
//               <span className="text-sm text-gray-400 mt-1 font-medium">18.921 (reviews)</span>
//             </div>
//           </motion.div>
//         </motion.div>


//         {/* --- RIGHT COLUMN (Context + Actions + Portfolio) --- */}
//         <motion.div 
//           className="lg:col-span-5 flex flex-col h-full lg:pl-10 order-2"
//           variants={containerVariants}
//           initial="hidden" // Reset to ensure stagger works independently if needed
//           animate="visible"
//         >
//           {/* Spacer on Desktop */}
//           <div className="flex-1 hidden lg:block" />

//           {/* Subtext */}
//           <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
//             Experts in crafting transformative digital solutions, from pioneering web platforms to compelling brand narratives.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12 lg:mb-20">
//             <button className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-300 text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.2)]">
//               Let's Connect
//             </button>
//             <button className="flex-1 sm:flex-none px-8 py-3 border border-white/10 bg-white/5 text-white rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
//               Explore Service
//             </button>
//           </motion.div>

//           {/* Portfolio Preview */}
//           <motion.div variants={itemVariants} className="mt-auto">
//             <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
//                <span className="text-sm font-medium text-gray-300">See Our Portfolio</span>
//                <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
//             </div>
            
//             {/* Grid uses w-full to prevent overflow on mobile */}
//             <div className="grid grid-cols-3 gap-3 w-full">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="aspect-[4/5] bg-gray-800 rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer shadow-lg shadow-black/50">
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
//                   <img 
//                     src={`https://images.unsplash.com/photo-${item === 1 ? '1600607686527-6fb886090705' : item === 2 ? '1558655146-d09347e92766' : '1551288049-bebda4e38f71'}?w=300&q=80`} 
//                     alt="Portfolio" 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out z-0 opacity-80 group-hover:opacity-100" 
//                   />
//                   {/* Hover Overlay Icon */}
//                   <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
//                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                         <ArrowRight size={12} className="text-black" />
//                      </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
        
//         {/* --- MOBILE SOCIAL PROOF (Moved to bottom on mobile) --- */}
//         <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ delay: 1, duration: 1 }}
//             className="lg:hidden mt-8 order-3"
//         >
//            <div className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
//             <div className="flex -space-x-3">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-gray-700 overflow-hidden">
//                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>
//             <div className="flex flex-col">
//               <div className="flex text-yellow-400 gap-0.5 text-xs">
//                 {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                 ))}
//               </div>
//               <span className="text-xs text-gray-300 mt-1 font-medium">Trusted by 18k+ clients</span>
//             </div>
//           </div>
//         </motion.div>

//       </main>
//     </div>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { MoveRight } from "lucide-react";

// --- FONTS ---
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic"],
  variable: "--font-playfair" 
});

export default function PortfolioPage() {
  return (
    <div className={`${inter.variable} ${playfair.variable} min-h-screen w-full bg-white font-sans selection:bg-blue-100 text-slate-900 pb-20`}>
      
      {/* ==================== 
          NAVBAR 
      ==================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-2 py-2 rounded-full border border-slate-100 shadow-sm">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-blue-600 font-bold text-lg">
            श
          </div>
          
          {/* Links */}
          <div className="flex items-center px-2">
            {["Work", "Know Me", "Resume"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ==================== 
          MAIN CONTENT CONTAINER 
      ==================== */}
      {/* This creates the soft gradient background area */}
      <main className="mt-24 mx-auto max-w-7xl p-4 md:p-8 rounded-[3rem] bg-gradient-to-br from-blue-50 via-purple-50/50 to-blue-50 relative overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
        
        {/* Background decorative blurs */}
        <div className="absolute top-[-20%] left-[20%] w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 bg-purple-200/30 rounded-full blur-[80px] pointer-events-none" />

        {/* --- HERO TEXT --- */}
        <div className="text-center z-10 mb-16 mt-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.2]">
            Designing digital experiences that feel <br />
            <span className={`font-serif italic text-blue-600 ${playfair.className}`}>
              human & effortless
            </span>
          </h1>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl z-10">
          
          {/* CARD 1: Profile Text */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-white/50 flex flex-col justify-between h-[320px] relative group hover:shadow-md transition-shadow">
            <div className="absolute top-6 right-6">
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
                Know Me
              </span>
            </div>
            
            <div className="mt-auto">
              <h2 className="text-3xl font-bold text-slate-800">Shantanu</h2>
              <p className="text-slate-500 font-medium text-lg">Product Designer</p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-500">Open to Relocation</span>
            </div>
          </div>

          {/* CARD 2: Photo */}
          <div className="h-[320px] rounded-3xl overflow-hidden relative shadow-sm group">
            <Image 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80" // Placeholder for Shantanu's photo
              alt="Shantanu"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* CARD 3: Experience */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-white/50 flex flex-col h-[320px] hover:shadow-md transition-shadow relative">
             <div className="absolute top-6 right-6 flex gap-2">
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">B2C</span>
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">B2B SaaS</span>
            </div>

            <div className="mt-12">
               <h3 className="text-4xl font-bold text-slate-800">3+</h3>
               <p className="text-slate-500 font-medium text-lg mt-1">Years of Experience</p>
            </div>

            <div className="mt-auto flex gap-3">
               {/* Mock Logos */}
               <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">C</div>
               <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white text-xs font-bold">S</div>
               <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs font-bold">H</div>
               <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-bold">Q</div>
            </div>
            
            <p className="text-xs text-slate-400 font-medium mt-3">Fintech, Healthcare, Insurance</p>
          </div>

          {/* CARD 4: Recent Work */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-white/50 flex flex-col h-[320px] hover:shadow-md transition-shadow relative">
             <div className="absolute top-6 right-6">
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">Agentic AI</span>
            </div>

            <div className="mt-12">
               <h3 className="text-3xl font-bold text-slate-800">Recent</h3>
               <p className="text-slate-500 font-medium text-lg leading-tight mt-1">Building AI <br/> Experiences</p>
            </div>

            <div className="mt-auto flex gap-3">
               {/* Mock Logos */}
               <div className="w-8 h-8 rounded bg-red-400 flex items-center justify-center text-white text-[10px]">co+</div>
               <div className="w-8 h-8 rounded bg-blue-400 flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
               </div>
               <div className="w-8 h-8 rounded bg-cyan-500 flex items-center justify-center text-white text-[10px]">alexa</div>
            </div>

             <p className="text-xs text-slate-400 font-medium mt-3">Conversational Copilots</p>
          </div>

        </div>
      </main>
    </div>
  );
}