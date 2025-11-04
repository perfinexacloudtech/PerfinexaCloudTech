// src/app/components/home/CourseCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CourseFull } from "../../types/Course";
import { fadeInUp } from "@/app/utils/animation";
import Image from "next/image";

export default function CourseCard({
  slug,
  course,
  index,
}: {
  slug: string;
  course: CourseFull;
  index: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`h-48 relative flex-shrink-0 bg-gradient-to-br ${
          course.color || "from-blue-500 to-cyan-500"
        }`}
      >
        {index === 0 && (
          <div className="absolute top-4 left-4 bg-gray-900/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            Most Popular
          </div>
        )}
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <Image
            src={course.emoji}
            width={50}
            height={50}
            alt="Course Image"
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-sm lg:text-base text-gray-700 font-medium mb-2">
          {course.description}
        </p>

        <Link
          href={`/courses/${slug}`}
          className="block w-full text-center text-white py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base"
          style={{ background: "linear-gradient(to right, #0d318d, #772e98)" }}
        >
          👉 Enroll Now →
        </Link>
      </div>
    </motion.div>
  );
}
