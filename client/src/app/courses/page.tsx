'use client'

import { motion } from 'framer-motion'
import { coursesData } from '@/data/courses'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Type definition
interface Course {
  title: string;
  description?: string;
  slug: string;
  color: string;
  emoji: string;
  bestSeller?: boolean;
}

export default function CoursesPage() {
  const coursesArray: Course[] = Object.values(coursesData).slice(0, 6); // Get first 6 courses

  return (
    <div className="pt-16">
      {/* Header Section */}
      <motion.section 
        className="pt-10 sm:pt-16 pb-8 sm:pb-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 lg:mb-12"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-[#deae40] to-[#772e98] bg-clip-text text-transparent">
              Courses
            </span>
          </motion.h1>
          
        </div>
      </motion.section>

      {/* Courses Grid */}
      <motion.section 
        className="pb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coursesArray.map((course, index) => (
              <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
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
                      href={`/courses/${course.slug}`}
                      className="block w-full text-center text-white py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base"
                      style={{ background: "linear-gradient(to right, #0d318d, #772e98)" }}
                    >
                      👉 Enroll Now →
                    </Link>
                  </div>
                </motion.div>
                
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
