import React from 'react';
import Link from 'next/link';
import { Users, Box, Building2, ArrowUpRight } from 'lucide-react';

const DifferenceSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      title: "Tech Team",
      description: "We don't just advise—we build and manage everything for you."
    },
    {
      icon: <Box className="w-6 h-6 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      title: "Startup to Scale",
      description: " We help startups and businesses grow fast with scalable tech."
    },
    {
      icon: <Building2 className="w-6 h-6 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      title: "Enterprise-Grade Tech",
      description: "  We deliver high-quality, secure solutions for businesses of all sizes."
    }
  ];

  return (
    <section className="w-full bg-[#702C8B] text-white py-10 md:py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Top Header Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-12">
          
          {/* Heading with Underline */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              Why Choose Perfinexa Cloudtech
            </h2>
            {/* The small horizontal line */}
            <div className="h-1 w-20 bg-white rounded-full"></div>
          </div>

      
         
        </div>

        {/* --- Description Text --- */}
        <div className="max-w-3xl mb-10 md:mb-20">
          <p className="text-lg md:text-2xl text-gray-200 mb-6 font-medium">
            Perfinexa Cloudtech is not just another IT company in Nagpur — we build and deliver real digital solutions.
          </p>
          <p className="text-gray-400 leading-relaxed text-xs md:text-base">
            By focusing on speed, quality, and customer success, we go beyond normal IT services to deliver measurable results. Our team stays updated with the latest trends to build products that grow with your business.
          </p>
        </div>

        {/* --- Features Grid --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
  {features.map((feature, index) => (
    <div 
      key={index}
      // Logic: If it's the 3rd card (index 2), span 2 columns on mobile, else span 1.
      // On medium screens (md), force all cards to span 1 column.
      className={`bg-[#862ea8]  p-4 md:p-10 flex flex-col items-center text-center border border-transparent hover:border-blue-500/30 transition-colors duration-300 
        ${index === 2 ? 'col-span-2 md:col-span-1' : ''}
      `}
    >
      <div className="mb-6 p-4 bg-white/5 rounded-full">
        {feature.icon}
      </div>
      
      <h3 className=" text-sm md:text-xl font-bold text-white mb-4">
        {feature.title}
      </h3>
      
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default DifferenceSection;