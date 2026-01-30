"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        name: "Salesforce Development",
        href: "/services/salesforce-development-services/",
      },
      {
        name: "Software Development",
        href: "/services/software-development-services/",
      },
      {
        name: "Website Development",
        href: "/services/website-development-services/",
      },
      {
        name: "Digital Marketing SEO",
        href: "/services/digital-marketing-seo/",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development-services/",
      },
    ],
  },
  { name: "Blogs", href: "/blog" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    isMenuOpenRef.current = isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setActiveSubmenu(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  useGSAP(
    () => {
      const nav = navRef.current;
      if (!nav) return;

      let isHidden = false;

      // Initial show
      gsap.set(nav, { yPercent: 0 });

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (isMenuOpenRef.current) return;

          const currentScroll = self.scroll();

          if (currentScroll < 50) {
            if (isHidden) {
              gsap.to(nav, { yPercent: 0, duration: 0.25, overwrite: "auto" });
              isHidden = false;
            }
            setIsScrolled(false);
            return;
          }

          setIsScrolled(true);

          if (self.direction === 1 && !isHidden) {
            gsap.to(nav, {
              yPercent: -100,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
            setActiveSubmenu(null);
            isHidden = true;
          }

          if (self.direction === -1 && isHidden) {
            gsap.to(nav, {
              yPercent: 0,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
            isHidden = false;
          }
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: navRef },
  );

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 font-sans border-b ${
          isScrolled || isOpen
            ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
            : "bg-white border-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between py-4">
          <Link
            href="/"
            className="relative z-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="leading-none">
              <Image
                src="/perfinexacloudtech.png"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain w-[120px] md:w-[150px]"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 ${
                      activeSubmenu === link.name
                        ? "text-orange-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeSubmenu === link.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-600 text-[15px] font-medium hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && activeSubmenu === link.name && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-gray-100 rounded-xl shadow-xl p-2 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-200">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setActiveSubmenu(null)}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#2A1B5E] hover:text-white rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-3 px-6 flex items-center gap-2 transition-colors uppercase tracking-wide rounded-sm"
              >
                Contact
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden p-2 text-slate-800 focus:outline-none relative z-[60]"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span
                  className={`w-full h-[2px] bg-current rounded-full transform transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-px" : "translate-y-0"}`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transform transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-px" : "translate-y-0"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-[85px] left-0 right-0 bottom-0 z-40 lg:hidden flex flex-col px-6 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 bg-white/50">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col gap-2 shadow-2xl mt-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="flex flex-col border-b border-gray-100 last:border-none"
              >
                {item.submenu ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-slate-600 text-lg font-medium py-3 pl-2 hover:text-yellow-500 transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeSubmenu === item.name
                            ? "rotate-180 text-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeSubmenu === item.name
                          ? "max-h-[500px] opacity-100 mb-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col bg-gray-50 rounded-xl p-2 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 text-[15px] font-medium py-2.5 px-4 rounded-lg hover:bg-white hover:text-yellow-600 hover:shadow-sm transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 text-lg font-medium py-3 pl-2 hover:text-yellow-500 hover:pl-4 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3.5 rounded-full text-center font-bold mt-4 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="flex-grow" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
