// components/CourseDetailsClient.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { FiClock, FiCalendar, FiDollarSign, FiUser, FiBook, FiMapPin } from "react-icons/fi";
import type { CourseFull } from "@/types/Course";
import Image from "next/image";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25 },
};

export default function CourseDetailsClient({ courseData }: { courseData: CourseFull }) {
  const [openModule, setOpenModule] = useState<number | null>(0); // open first module by default
  const [openSection, setOpenSection] = useState<Record<number, number | null>>({});

  const toggleModule = (idx: number) => {
    setOpenModule((prev) => (prev === idx ? null : idx));
  };

  const toggleSection = (moduleIdx: number, sectionIdx: number) => {
    setOpenSection((prev) => ({
      ...prev,
      [moduleIdx]: prev[moduleIdx] === sectionIdx ? null : sectionIdx,
    }));
  };

  return (
    <div className="pt-16">
      <section className="pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className={`w-28 h-28 rounded-2xl ${courseData.color} flex items-center justify-center text-4xl`}>
                {/* <span>{courseData.emoji}</span> */}
                <Image src={courseData.emoji} width={100} height={100} alt="Course Image" ></Image>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">{courseData.title}</h1>
                <p className="text-gray-600 mt-2">{courseData.description}</p>
               
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiClock /> <strong>Length:</strong> <span className="ml-2">{courseData.details.length}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCalendar /> <strong>Schedule:</strong> <span className="ml-2">{courseData.details.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiDollarSign /> <strong>Cost:</strong> <span className="ml-2">{courseData.details.cost}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiUser /> <strong>Instructor:</strong> <span className="ml-2">{courseData.details.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiBook /> <strong>Syllabus:
                    </strong> 
                    <a
  href={courseData.details.syllabus}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
>
View Syllabus
</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiMapPin /> <strong>Location:</strong> <span className="ml-2">{courseData.details.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform' className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <HiSparkles /> Enroll Now
              </a>
            </div>
          </div>

          {/* Syllabus / Accordion */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>

            <div className="space-y-3">
              {courseData.modules.map((module, mIdx) => {
                const isOpen = openModule === mIdx;
                return (
                  <div key={mIdx} className="border rounded-lg overflow-hidden bg-white shadow">
                    <button
                      className="w-full text-left px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
                      onClick={() => toggleModule(mIdx)}
                    >
                      <div>
                        <div className="text-lg font-semibold">{module.title}</div>
                        {/* short preview */}
                        <div className="text-sm text-gray-500 mt-1">
                          {module.sections ? `${module.sections.length} section(s)` : `${module.topics?.length ?? 0} topics`}
                        </div>
                      </div>
                      <div className="text-gray-500">{isOpen ? "−" : "+"}</div>
                    </button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 overflow-hidden"
                      aria-hidden={!isOpen}
                    >
                      <div className="py-3">
                        {/* if module has sections (subtitle + topics) */}
                        {module.sections?.length ? (
                          module.sections.map((section, sIdx) => {
                            const isSectionOpen = openSection[mIdx] === sIdx;
                            return (
                              <div key={sIdx} className="mb-3">
                                <button
                                  className="w-full text-left px-3 py-2 flex items-center justify-between bg-gray-100 rounded"
                                  onClick={() => toggleSection(mIdx, sIdx)}
                                >
                                  <div>
                                    <div className="font-medium">{section.subtitle}</div>
                                  </div>
                                  <div>{isSectionOpen ? "−" : "+"}</div>
                                </button>

                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: isSectionOpen ? "auto" : 0, opacity: isSectionOpen ? 1 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden mt-2 px-3"
                                >
                                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                    {section.topics.map((t, ti) => (
                                      <li key={ti}>{t}</li>
                                    ))}
                                  </ul>
                                </motion.div>
                              </div>
                            );
                          })
                        ) : (
                          // no sections, direct topics
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {module.topics?.map((t, ti) => (
                              <li key={ti}>{t}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course Details / Enrollment info */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Enrollment & Details</h3>
            <div className="text-gray-700">
              <p className="mb-2"><strong>Enrollment:</strong> {courseData.details.enrollment}</p>
              <p className="mb-2"><strong>Material:</strong> {courseData.details.material}</p>
              <p className="mb-0"><strong>Credit:</strong> {courseData.details.credit}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
