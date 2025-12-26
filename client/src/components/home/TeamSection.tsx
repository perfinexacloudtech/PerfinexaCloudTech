"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Plus, X } from 'lucide-react';

// Define the shape of a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  img: string;
}

const team: TeamMember[] = [
  { id: 1, name: "Lucas Harris", role: "AI Expert", bio: "Skilled expert in neural networks and tailored AI systems.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, name: "Peter Johnson", role: "Founder of Etery", bio: "Leading the vision for next-gen AI automation workflows.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, name: "Daniel Lee", role: "Full-Stack Developer", bio: "Building scalable infrastructure for intelligent agents.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Sofia Martin", role: "Project Manager", bio: "Ensuring every AI implementation meets client goals.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
];

const TeamSection: React.FC = () => {
  // Fix: Explicitly type the ref for a section element
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  // GSAP Animation Logic
  useGSAP(() => {
    team.forEach((member) => {
      // Use the containerRef for scoped selection
      const panel = containerRef.current?.querySelector(`#panel-${member.id}`);
      
      if (panel) {
        if (activeId === member.id) {
          gsap.to(panel, {
            y: 0,
            duration: 0.6,
            ease: "power4.out",
          });
        } else {
          gsap.to(panel, {
            y: "100%",
            duration: 0.5,
            ease: "power2.in",
          });
        }
      }
    });
  }, [activeId]);

  // Magnetic Button Effect Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section 
      className="bg-black py-24 px-6 md:px-16 overflow-hidden" 
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter">Our Team</h2>
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed border-l border-white/10 pl-4">
            Skilled experts, not generic teams — we craft tailored AI systems that drive success and lasting impact.
          </p>
        </div>

        {/* Responsive Grid */}
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
  {team.map((member) => (
    <div 
      key={member.id} 
      className="relative aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/5 group"
    >
      {/* Background Image */}
      <img 
        src={member.img} 
        alt={member.name} 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      
      {/* Bottom Label - Reduced padding for mobile (p-4) */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex justify-between items-end bg-gradient-to-t from-black via-black/40 to-transparent z-10">
        <div className="max-w-[70%]">
          <h3 className="text-white text-sm md:text-xl font-bold truncate">{member.name}</h3>
          <p className="text-gray-400 text-[10px] md:text-sm truncate">{member.role}</p>
        </div>
        <button 
          onClick={() => setActiveId(member.id)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20"
        >
          <Plus className="text-white w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Animated Black Panel - Smaller padding for mobile (p-6) */}
      <div 
        id={`panel-${member.id}`}
        className="absolute inset-0 bg-black z-30 p-6 md:p-10 flex flex-col justify-between translate-y-full"
      >
        <div>
          <div className="flex justify-between items-start mb-4 md:mb-8">
            <div>
              <h3 className="text-white text-xl md:text-3xl font-bold tracking-tight">{member.name}</h3>
              <p className="text-blue-500 text-xs md:text-sm font-medium mt-1">{member.role}</p>
            </div>
            <button 
              onClick={() => setActiveId(null)}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <X className="text-white w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          <p className="text-gray-300 text-xs md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
            {member.bio}
          </p>
        </div>

        {/* Card Footer Icons */}
        <div className="flex gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer text-[10px] md:text-xs">𝕏</div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer text-[10px] md:text-xs">In</div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default TeamSection;