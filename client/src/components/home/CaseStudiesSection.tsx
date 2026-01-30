"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CaseStudiesSection = () => {
  // 1. Data - Duplicated slightly to ensure we have enough content to scroll
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered analytics platform leverages artificial intelligence",
      date: "January 07 2024",
      author: "Amina",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Blockchain solution for decentralized finance security",
      date: "January 08 2024",
      author: "Amina",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Next-Gen cloud computing infrastructure upgrade",
      date: "January 09 2024",
      author: "Amina",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Cybersecurity protocols for enterprise banking",
      date: "January 10 2024",
      author: "Amina",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Sustainable energy monitoring dashboard",
      date: "January 11 2024",
      author: "Amina",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    }
  ];

  // 2. State & Refs
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  
  // Touch handling state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 3. Handle Responsiveness (Items per screen)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerScreen(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerScreen(2);
      } else {
        setItemsPerScreen(3);
      }
    };

    // Initial call
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 4. GSAP Animation Logic
  // This runs whenever currentIndex or itemsPerScreen changes
  useGSAP(() => {
    const totalItems = caseStudies.length;
    const maxIndex = totalItems - itemsPerScreen;
    
    // Ensure index doesn't go out of bounds (useful during resize)
    const safeIndex = Math.min(currentIndex, maxIndex > 0 ? maxIndex : 0);
    
    // Calculate movement percentage based on how many items are visible
    // e.g. if 3 items visible, 1 item is 33.33% width. We move xPercent by -33.33 * index.
    const percentMove = -(100 / itemsPerScreen) * safeIndex;

    gsap.to(sliderRef.current, {
      xPercent: percentMove,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex, itemsPerScreen]);

  // 5. Navigation Logic
  const handleNext = () => {
    const maxIndex = caseStudies.length - itemsPerScreen;
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop back to start
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop to end
      const maxIndex = caseStudies.length - itemsPerScreen;
      setCurrentIndex(maxIndex);
    }
  };

  // 6. Auto-Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerScreen]); // Re-bind when index changes to capture correct state

  // 7. Touch / Swipe Logic for Mobile
  // 7. Touch / Swipe Logic for Mobile
  
  // Add the type annotation here 👇
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  // And here 👇
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  // handleTouchEnd usually doesn't need 'e' in your logic, 
  // but if you added it, it would be the same type.
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } 

    if (distance < -minSwipeDistance) {
      handlePrev();
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };
  return (
    <section className="w-full bg-white py-10 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-8">
          <div className="">
            <h2 className=" text-xl md:text-4xl font-bold text-gray-900 mb-4">Our Case Studies</h2>
            <p className="text-gray-600 max-w-xl text-xs md:text-lg">
              M POWERED VENTURES supports startups and companies by providing world-class tech expertise.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className=" w-10 h-10 md:w-12 md:h-12  border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className=" w-10 h-10 md:w-12 md:h-12  border border-gray-300 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer active:scale-95"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* --- Track Container (Mask) --- */}
        <div 
          ref={containerRef}
          className="w-full overflow-hidden"
          // Add touch events for mobile swipe
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* --- Moving Slider Track --- */}
          <div 
            ref={sliderRef}
            className="flex w-full"
            // gap is handled via padding inside the item to allow smooth GSAP math
          >
            {caseStudies.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 px-4 transition-all duration-300"
                style={{ width: `${100 / itemsPerScreen}%` }} // Dynamic Width
              >
                <div className="flex flex-col group cursor-pointer h-full">
                  
                  {/* Image */}
                  <div className="relative w-full h-36 md:h-64 overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className=" text-sm md:text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex  items-center gap-3 mb-6">
                      <img 
                        src={item.authorImage} 
                        alt={item.author} 
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <p className="text-sm flex flex-col md:flex-row text-gray-500 font-medium truncate">
                        Posted by {item.author} <span className=" hidden md:block mx-1">|</span> {item.date}
                      </p>
                    </div>

                    <button className="mt-auto self-start border border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-3 px-6 text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                      See More 
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;