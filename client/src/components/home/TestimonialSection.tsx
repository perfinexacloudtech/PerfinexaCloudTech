"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Das Caneart",
      image: "https://res.cloudinary.com/dmsgbzk6y/image/upload/v1769170452/das-canert_zcxilc.jpg",
      quote: "Excellent service and outstanding quality, Recently, our company Dascaneart got its website and system developed by Perfinexa CloudTech, and I’m extremely happy with the results. The team delivered a modern, smooth, and well-structured website along with a reliable system that perfectly matches our business requirements."
    },
    {
      id: 2,
      name: "Nirvana Jewels",
      image: "https://res.cloudinary.com/dmsgbzk6y/image/upload/v1769170788/nirvana-jewelers_xd70py.jpg ",
      quote: "Great business management system Perfinexa Cloudtech built a customized system for our jewellery shop that makes managing inventory, sales, and customer records easy and efficient. The system is user-friendly and perfectly suited to our business needs. Highly recommended for jewellery businesses looking to digitize their operations."
    },
    {
      id: 3,
      name: "Nagpure Computer",
      image: "https://res.cloudinary.com/dmsgbzk6y/image/upload/v1769170452/nagpure-typing-classes_kkndga.jpg",
      quote: "We are a Nagpure Typing Institute in Ramtek, and Perfinexa Cloudtech has developed a complete institute management system for us at the lowest price with a high-quality product. The system helps us efficiently manage student records, courses, batches, attendance, and daily administrative operations from a single platform. It is user-friendly, well-structured, and saves a lot of manual effort."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Memoized Nav Handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  // 2. Auto-Swipe Logic (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [handleNext]);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Row --- */}
        <div className="flex flex-row justify-between items-end mb-8 md:mb-16 gap-4">
          <div>
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              What Our Client Says
            </h2>
            <p className="text-gray-600 max-w-xl text-xs md:text-lg">
              Perfinexa Cloudtech delivers trusted IT solutions for businesses in Nagpur.
            </p>
          </div>

          {/* Navigation Arrows: REMOVED 'hidden' for mobile */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handlePrev}
              className="w-8 h-8 md:w-12 md:h-12 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors active:scale-90"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 md:w-12 md:h-12 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors active:scale-90"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* --- Content Row (The Slider) --- */}
        <div className="relative">
          <div
            key={currentIndex}
            className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-center md:items-start animate-in fade-in slide-in-from-right-8 duration-700"
          >
            {/* Left: Image (Centered on mobile) */}
            <div className="w-[100px] md:w-[150px] lg:w-[220px] shrink-0">
              <div className="rounded-full aspect-square relative overflow-hidden ring-4 ring-gray-50 shadow-xl">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                {activeTestimonial.name}
              </span>
              <blockquote className="text-sm md:text-lg lg:text-2xl text-gray-800 leading-relaxed font-medium italic">
                "{activeTestimonial.quote}"
              </blockquote>
            </div>
          </div>
          
          {/* Pagination dots for mobile visual feedback */}
          <div className="flex justify-center md:justify-start gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;