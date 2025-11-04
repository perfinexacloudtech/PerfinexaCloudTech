// src/app/components/home/CommunityAvatars.tsx
"use client";

import { motion } from "framer-motion";

export default function CommunityAvatars() {
  const positions = [
    { top: "3rem", right: "9rem", bg: "bg-purple-500" },
    { top: "6rem", left: "3rem", bg: "bg-blue-500" },
    { bottom: "6rem", right: "6rem", bg: "bg-green-500" },
    { bottom: "3rem", left: "6rem", bg: "bg-yellow-400" },
    { top: "9rem", right: "3rem", bg: "bg-red-500" },
  ];

  return (
    <div className=" hidden md:block md:absolute inset-0 pointer-events-none" aria-hidden>
      {positions.map((avatar, index) => (
        <motion.div
          key={index}
          className={`absolute w-16 h-16 rounded-full border-4 border-white ${avatar.bg}`}
          style={{ top: (avatar as any).top, right: (avatar as any).right, left: (avatar as any).left, bottom: (avatar as any).bottom }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
