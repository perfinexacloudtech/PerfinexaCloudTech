import { OpenFormProps } from "@/types/model";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = ({ onOpen }: OpenFormProps) => {
  return (
    <section className="relative w-full py-10 md:py-24 px-6 md:px-12 bg-[#702C8B] overflow-hidden flex items-center justify-center">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Let’s Build Something <br />
          Amazing
          <span className="relative inline-block ml-3 px-2">
            <span className="absolute inset-0 bg-[#0F358A] rounded-sm -skew-x-6 transform scale-105 opacity-90"></span>
            <span className="relative z-10">Together</span>
          </span>
        </h2>

        <p className="text-sm md:text-xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
          Your business needs world-class tech. we’re here to provide it.
        </p>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-6">
          <button
            className="group bg-[#0F358A] text-white font-bold px-2 py-2 md:py-4 md:px-8  uppercase tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25"
            onClick={onOpen}
          >
            Pitch Your Idea
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </button>

          <button
            className="group bg-transparent border border-white/80 hover:bg-white hover:text-[#0a1f44] text-white font-bold px-2 py-2 md:py-4 md:px-8  uppercase tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 transition-all"
            onClick={onOpen}
          >
            Request A Consultation
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
