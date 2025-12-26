"use client";

import React from "react";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectCard = ({ children, className = "" }: ProjectCardProps) => (
  <div
    className={`bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative ${className}`}
  >
    {children}
  </div>
);

const RecentProjects = () => {
  return (
    <section className="bg-black text-white py-20 px-6 font-sans">
      {/* Header Section */}
      <div className="text-center mb-16">
        <button className="text-xs uppercase tracking-widest border border-zinc-700 px-4 py-1 rounded-full mb-4 text-zinc-400">
          Our Projects
        </button>
        <h2 className=" text-3xl md:text-5xl font-bold mb-4">
          Recent Projects
        </h2>
        <p className="text-zinc-400 text-sm md:text-lg">
          Take a look at some of our latest projects.
        </p>
      </div>

      {/* Responsive Grid System */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* FIRST CARD: Always Visible */}
        <ProjectCard>
          <div className="mb-6">
            <span className="text-[10px] text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded-full uppercase">
              Restaurant Plaza
            </span>
            <h3 className="text-3xl font-bold mt-4 text-blue-100">
              Run Your Restaurant Digitally
            </h3>
          </div>
          <div className="mt-auto">
            <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="video/resto.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Manage orders, tables, kitchen, inventory and online platforms
              from one smart system.
            </p>
          </div>
        </ProjectCard>

        {/* SECOND CARD: Hidden on mobile, flex on md and up */}
        <ProjectCard className="hidden md:flex">
          <div className="mb-6">
            <span className="text-[10px] text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full uppercase">
              Upcoming
            </span>
            <h3 className="text-3xl font-bold mt-4 text-orange-100">
              Project Beta
            </h3>
          </div>
          <div className="mt-auto">
            <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden relative">
              <div className="w-full h-full object-cover flex items-center justify-center text-zinc-500"> Coming Soon</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Advanced cloud integration for seamless enterprise operations.
            </p>
          </div>
        </ProjectCard>

        {/* THIRD CARD: Hidden on mobile, flex on md and up */}
        <ProjectCard className="hidden md:flex">
          <div className="mb-6">
            <span className="text-[10px] text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full uppercase">
              Upcoming
            </span>
            <h3 className="text-3xl font-bold mt-4 text-orange-100">
              Project Gamma
            </h3>
          </div>
          <div className="mt-auto">
            <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden relative">
              <div className="w-full h-full object-cover flex items-center justify-center text-zinc-500"> Coming Soon</div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              AI-driven analytics dashboard for real-time data monitoring.
            </p>
          </div>
        </ProjectCard>

      </div>
    </section>
  );
};

export default RecentProjects;