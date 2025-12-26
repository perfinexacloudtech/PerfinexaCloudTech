// "use client";

// import { useEffect, useState,useRef } from "react";
// import dynamic from "next/dynamic";
// import { Menu, X } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Silk = dynamic(() => import("@/component/UI/Silk"), {
//   ssr: false,
//   loading: () => null,
// });

// export default function HeroSection() {
//   const [bgReady, setBgReady] = useState(false);
//   const [enableBG, setEnableBG] = useState(true);
//   const [open, setOpen] = useState(false);

//   /* ✅ Fallback trigger if Silk has no onLoad */
//   useEffect(() => {
//     if (!enableBG) return;
//     const t = setTimeout(() => setBgReady(true), 400);
//     return () => clearTimeout(t);
//   }, [enableBG]);



//   return (
//     <section className="relative h-svh md:dvh lg:h-screen w-full overflow-hidden text-white">


//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {/* 🔹 Instant fallback (NO FLASH) */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br 
//             from-[#2b0cff] via-[#4016EB] to-[#12004d]
//             transition-opacity duration-700
//             ${bgReady ? "opacity-0" : "opacity-100"}
//           `}
//         />

//         {/* 🔹 Animated Silk */}
//         {enableBG && (
//           <div
//             className={`absolute inset-0 transition-opacity duration-700
//               ${bgReady ? "opacity-100" : "opacity-0"}
//             `}
//           >
//             <Silk
//               speed={5}
//               scale={1}
//               color="#4016EB"
//               noiseIntensity={1.5}
//               rotation={0}
//             />
//           </div>
//         )}
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div
//         className={`relative z-10 transition-all duration-700
//           ${bgReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//         `}
//       >
//         {/* ================= NAVBAR ================= */}
//         <div className="w-full flex justify-center mt-6 relative z-50">
//           <div
//             className="
//           rounded-3xl
//           border border-white/30
//           backdrop-blur-xl
//           bg-white/10
//           max-w-[900px] w-[90%]
//           overflow-hidden
//         "
//           >
//             {/* HEADER ROW (FIXED) */}
//             <div className="flex items-center justify-between px-6 py-3">
//               <h1 className="md:text-lg font-semibold tracking-wide">
//                 Perfinexa CloudTech
//               </h1>

//               {/* DESKTOP MENU */}
//               <div className="hidden md:flex items-center gap-10 text-sm font-medium">
//                 <a className="hover:text-purple-200 transition cursor-pointer">
//                   Home
//                 </a>
//                 <a className="hover:text-purple-200 transition cursor-pointer">
//                   About
//                 </a>
//                 <a className="hover:text-purple-200 transition cursor-pointer">
//                   Contact
//                 </a>
//               </div>

//               {/* MOBILE TOGGLE */}
//               <button
//                 className="md:hidden"
//                 onClick={() => setOpen(!open)}
//                 aria-label="Toggle Menu"
//               >
//                 {open ? <X size={22} /> : <Menu size={22} />}
//               </button>
//             </div>

//             {/* MOBILE MENU (EXPANDS BELOW, NOT FLEX) */}
//             {/* MOBILE MENU */}
//             <div
//               className={`
//     md:hidden
//     flex  items-center gap-4
//     overflow-hidden px-4 md:px-0
//     transition-all duration-300 ease-in-out
//     ${open ? "max-h-60 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
//     border-t border-white/20
//   `}
//             >
//               <a
//                 onClick={() => setOpen(false)}
//                 className="hover:text-purple-300 transition cursor-pointer border px-4 py-1 bg-white text-black"
//               >
//                 Home
//               </a>
//               <a
//                 onClick={() => setOpen(false)}
//                 className="hover:text-purple-300 transition cursor-pointer"
//               >
//                 About
//               </a>
//               <a
//                 onClick={() => setOpen(false)}
//                 className="hover:text-purple-300 transition cursor-pointer"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ================= HERO TEXT ================= */}
//         <div className="max-w-4xl mx-auto text-center mt-16 px-6">
//           <p className="text-purple-200 text-[10px] md:text-lg">
//             Where Ideas Turn Into Real Products
//           </p>

//           <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2">
//             We build scalable digital solutions and train learners through real
//             client projects.
//           </h2>

//           <p className="text-purple-200 mt-4 text-sm md:text-lg">
//             Smart Automation, Cloud Solutions, and Real-World Tech Training.
//           </p>

//           <div className="flex justify-center gap-4 mt-4 md:mt-8">
//             <button className="bg-white text-black text-sm font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-200 transition">
//               Work With Us
//             </button>

//             <button className="border border-white text-sm px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-white/20 backdrop-blur-md transition">
//               Join Training
//             </button>
//           </div>
//         </div>

//         {/* ================= FEATURES ================= */}
//         <div className=" sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-20 px-6 pb-20" >
//           {[
//             {
//               icon: "⚡",
//               title: "Faster Product Delivery",
//               desc: "Turn your ideas into real products quickly with our streamlined development process.",
//             },
//             {
//               icon: "🚀",
//               title: "Upgrade to Modern Tools",
//               desc: "Move to cloud apps, dashboards, and automation tools that boost efficiency.",
//             },
//             {
//               icon: "🤖",
//               title: "Smarter AI Solutions",
//               desc: "Enhance your business with AI-driven workflows, automation, and insights.",
//             },
//             {
//               icon: "🛡️",
//               title: "Reliable & Secure Systems",
//               desc: "Your apps stay protected and stable with enterprise-level security.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
//             >
//               <div className=" text-xl md:text-3xl mb-3">{item.icon}</div>
//               <h3 className=" text-sm md:text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-xs md:text-sm text-purple-200">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import Navbar from '../common/Navbar'

const HeroSection = () => {
  return (
   <div className="relative h-svh md:min-h-screen w-full bg-[#030014] overflow-hidden flex flex-col items-center justify-center">
    <Navbar />
      
      {/* 1. The Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), 
                                      linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
                    backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Top Purple Glow (Radial Blur) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] 
                      bg-blue-600/45 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 3. Central Content (The Text) */}
      <div className="relative z-10 text-center px-4">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 inline-block">
           Cloud-first. AI-ready. Future-focused
        </span>
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
       Transforming ideas  <br /> into digital solutions
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-10">
         Cloud web AI automation and skills to scale businesses.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/5 transition">
            Learn Skills
          </button>
          <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
