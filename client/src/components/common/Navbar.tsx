"use client";

import React, { useState } from "react";
import Link from "next/link";
import {  ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const menuNav = [
  { title: "About", path: "/it-company-in-nagpur" },
  { title: "Services", path: "/services" },
  { title: "Blog", path: "/blog" },
];


  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] px-6">
      <div className=" max-w-2xl md:max-w-5xl mx-auto">
        <div className=" backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-blue-500 font-bold text-xl tracking-tight transition-colors group-hover:text-blue-400">
              Perfinexa CloudTech
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuNav.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-zinc-400 text-sm font-medium hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            ))}

          </div>

          <div className="hidden md:block">
            <Link
              href="/#contact-section"
              className="bg-blue-600 border border-white/10 hover:border-blue-500/50 hover:bg-zinc-800 text-white  px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all group"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4  backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {["About", "Services", "Blog"].map((item) => (
              <Link
                key={item}
                 href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-zinc-300 text-lg font-medium border-b border-white/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
               href="/#contact-section"
              className="bg-blue-500 text-black py-3 rounded-full text-center font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
