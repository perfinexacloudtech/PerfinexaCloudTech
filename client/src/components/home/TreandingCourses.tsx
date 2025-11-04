// src/app/components/home/TrendingCourses.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/app/utils/animation";
import {coursesData} from "@/data/courses"
import CourseCard from "./CourseCard";
import SectionTitle from "../UI/SectionTitle";
// import SectionTitle from "../ui/SectionTitle";

export default function TrendingCourses() {
  const trending = Object.entries(coursesData).slice(0, 3);

  return (
    <motion.section className="py-16 bg-gray-50" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Trending 
          <span className="bg-gradient-to-b bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #deae40, #772e98)" }}> Courses</span>
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12 justify-center">
          {trending.map(([slug, course], idx) => (
            <CourseCard key={slug} slug={slug} course={course} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
