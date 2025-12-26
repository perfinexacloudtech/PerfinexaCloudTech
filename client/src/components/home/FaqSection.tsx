"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What IT services does your company provide?",
    answer:
    " We offer end-to-end IT services, including web & mobile app development, CRM solutions, Salesforce consulting, custom software development, and enterprise automation."
  },
  {
    question: "Do you provide Salesforce services?",
    answer:
      "Yes. We specialize in Salesforce implementation, customization, integration, and support, including Sales Cloud, Service Cloud, and custom CRM solutions tailored to business needs.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
    " We work with modern and scalable technologies such as MERN Stack, Java, Python, Node.js, React, Next.js, and cloud-based architectures to deliver high-performance solutions."
  },
  {
    question: "Do you offer training programs for students and professionals?",
    answer:
      "Yes. We provide industry-focused training in Salesforce, MERN Stack, Java, Python, Web Development, and CRM systems, designed for students, freshers, and working professionals.",
  },
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes, we support startups, small businesses, and large enterprises with flexible and scalable IT solutions.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-3  mb-2 md:mb-4 text-white">
            Got Questions?
          </h2>

          <p className="text-gray-400 max-w-md md:mb-8 leading-relaxed">
            Discover answers to your questions about solar energy and our
            innovative solutions.
          </p>

          <div className=" hidden md:block relative w-full max-w-md">
            <Image
              src="/solar-illustration.png"
              alt="Solar FAQ"
              width={500}
              height={350}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT ACCORDION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-sm overflow-hidden bg-[#0f0f0f]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#151515] transition"
              >
                <span className="font-medium text-white text-left">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
