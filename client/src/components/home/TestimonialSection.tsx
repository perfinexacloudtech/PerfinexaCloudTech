'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialSection = () => {
  // 1. The Data: Add as many clients as you want here
  const testimonials = [
    {
      id: 1,
      name: "Das Caneart",
      // Using a placeholder image for demonstration
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

  // State to track the active testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for Next/Prev buttons
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-8">
          
          {/* Title Section */}
          <div>
            <h2 className=" text-2xl md:text-4xl font-bold text-gray-900 mb-4">What Our Client Says</h2>
            <p className="text-gray-600 max-w-xl text-sm md:text-lg">
             Perfinexa Cloudtech delivers trusted IT and software solutions for businesses in Nagpur.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-gray-400 font-medium mr-4">Client Reviews</span>
            
            <button 
              onClick={handlePrev}
              className=" w-10 h-10 md:w-12 md:h-12  border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className=" w-10 h-10 md:w-12 md:h-12  border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors active:scale-95"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* --- Content Row (The Slider) --- */}
        <div className="relative overflow-hidden min-h-[300px]">
          {/* We use a 'key' here to force React to re-trigger the animation 
            whenever the index changes.
          */}
          <div 
            key={currentIndex}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start animate-in fade-in slide-in-from-right-4 duration-500"
          >
            
            {/* Left: Image */}
            <div className=" w-[150px] lg:w-[250px] shrink-0 flex items-center">
              <div className="rounded-full aspect-square relative overflow-hidden  bg-gray-100">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="md:flex-1 py-2  md:py-4">
              <blockquote className="text-xs md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium mb-2 md:mb-8">
                "{activeTestimonial.quote}"
              </blockquote>
              
           
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;