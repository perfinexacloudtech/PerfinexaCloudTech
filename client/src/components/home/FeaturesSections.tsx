
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const cards = [
  {
    bg: "linear-gradient(135deg, #772e98, #8e4ba8)",
    icon: "📘",
    title: "Interactive Learning",
    desc1: "Learn by doing with live coding sessions and personalized mentorship.",
    desc2: "Gain in-depth knowledge of Salesforce, Java, MERN, and Python stacks.",
  },
  {
    bg: "linear-gradient(135deg, #deae40, #e8c165)",
    icon: "⚙️",
    title: "Live Projects & Workshops",
    desc1: "Work on real client-based projects and AI-driven applications.",
    desc2: "Attend workshops like Prompt Engineering and Hackathon challenges.",
  },
  {
    bg: "linear-gradient(135deg, rgba(13, 49, 141, 0.8), rgba(30, 75, 168, 0.8))",
    icon: "🌐",
    title: "Career Support & Community",
    desc1: "Join a community of developers, mentors, and recruiters.",
    desc2: "Get resume help, LinkedIn branding, and access to job referrals.",
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const sweepRef = useRef<HTMLDivElement | null>(null);
  const cardsControls = useAnimation();
  const sweepControls = useAnimation();
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Sweep duration (in seconds)
  const sweepDuration = 2.2;

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation once
            if (isDesktop) {
              // start sweep animation
              sweepControls.start({
                x: ["-110%", "110%"],
                opacity: [0.0, 1.0, 0.0],
                transition: { duration: sweepDuration, ease: "easeInOut" },
              });

              // Reveal cards one by one based on sweep timing
              const count = cards.length;
              cardsControls.start((index: number) => {
                const delay = (index * sweepDuration) / Math.max(1, count) + 0.08;
                return {
                  opacity: 1,
                  y: 0,
                  transition: { delay, duration: 0.6, ease: "easeOut" },
                };
              });
            } else {
              // Mobile: simple fade-in with small stagger
              cardsControls.start((index: number) => ({
                opacity: 1,
                y: 0,
                transition: { delay: 0.08 * index, duration: 0.45, ease: "easeOut" },
              }));
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isDesktop, cardsControls, sweepControls]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sweep bar (absolute) */}
        {/* Only visible on desktop via CSS - but we still control it with Framer */}
        <div className="pointer-events-none">
          <motion.div
            ref={sweepRef}
            animate={sweepControls}
            initial={{ x: "-110%", opacity: 0 }}
            className="absolute left-0 top-1/3 w-[80%] h-28 rounded-xl transform -translate-y-1/2
                       blur-3xl opacity-80 pointer-events-none
                       hidden lg:block"
            style={{
              // purple -> blue soft gradient
              background:
                "linear-gradient(90deg, rgba(119,46,152,0.20) 0%, rgba(13,49,141,0.22) 50%, rgba(119,46,152,0.12) 100%)",
              filter: "blur(28px)",
              mixBlendMode: "screen",
              // Slight glass effect
              boxShadow: "0 12px 40px rgba(34, 24, 63, 0.20)",
            }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              animate={cardsControls}
              initial={{ opacity: 0, y: 24 }}
              className="p-6 lg:p-8 rounded-2xl text-white min-h-[200px] lg:min-h-[220px] relative overflow-hidden"
              style={{
                background: card.bg,
                backgroundColor: card.bg.includes('rgba') ? 'transparent' : '',
                position: 'relative',
                zIndex: 1,
                isolation: 'isolate'
              }}
            >
              {/* Solid background layer */}
              <div 
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  background: card.bg.includes('rgba') 
                    ? 'linear-gradient(135deg, #0d318d, #1e4ba8)' // Fallback solid color
                    : 'transparent',
                }}
              ></div>
              
              {/* Bubble blur effects */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/15 backdrop-blur-sm"></div>
              {/* subtle lighter overlay to give glass depth */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.03))",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{card.icon}</span>
                  <div className="text-4xl sm:text-5xl mb-4 drop-shadow-lg">{card.icon}</div>
                </div>
                <p className="text-sm lg:text-base text-white/90 mb-3">{card.desc1}</p>
                <p className="text-sm lg:text-base text-white/90">{card.desc2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative faint glow at bottom-right to balance the sweep look */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-[-8%] bottom-[-6%] w-[40%] h-[36%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(closest-side, rgba(119,46,152,0.06), transparent)",
          filter: "blur(40px)",
        }}
      />
    </section>
  );
}
