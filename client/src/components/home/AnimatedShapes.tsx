"use client";

import { motion } from "framer-motion";

export default function AnimatedShapes() {
  return (
    <>
      <motion.div
        className="absolute rounded-full 
             w-6 h-6 sm:w-10 sm:h-10 md:w-20 md:h-20 bg-orange-400"
        style={{ top: "8%", left: "12%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div
        className="absolute rounded-full 
             w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-400"
        style={{ top: "5%", right: "10%" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute rounded-full 
             w-24 h-8 sm:w-32 sm:h-12 md:w-40 md:h-16 bg-green-400"
        style={{ bottom: "18%", right: "12%" }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute rounded-full 
             w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 bg-purple-500"
        style={{ bottom: "22%", left: "10%" }}
        animate={{ x: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
}
