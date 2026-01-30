"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Code2,
  Trophy,
  BrainCircuit,
  Laptop,
  HeartPulse,
  Banknote,
  Home,
  ShoppingBag,
  BookOpen,
  Rocket,
  Phone,
  CheckCircle,
  Download,
  ArrowRight,
  X,
  Loader2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INTERNSHIP_PROGRAMS = [
  {
    id: 1,
    title: "MERN Stack Internship",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Live full-stack projects", "Internship certificate"],
    buttonColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 2,
    title: "Java Full Stack Internship",
    tags: ["Core Java", "Spring Boot", "REST APIs"],
    features: ["Enterprise-level applications", "Real production exposure"],
    buttonColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 3,
    title: "Salesforce Training & Internship",
    tags: ["Admin Concepts", "Developer Concepts"],
    features: ["CRM customization", "Industry-use cases"],
    buttonColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: 4,
    title: "Digital Marketing Internship",
    tags: ["SEO", "Google Ads", "Analytics"],
    features: ["Real client campaigns", "Performance-based learning"],
    buttonColor: "bg-amber-500 hover:bg-amber-600",
  },
];

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && mainContainerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".hero-content", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });

        gsap.from(".program-card", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".programs-grid", start: "top 80%" },
        });

        gsap.from(".process-step", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: { trigger: ".process-section", start: "top 75%" },
        });
      }, mainContainerRef);

      return () => ctx.revert();
    }
  }, [loading]);

  if (loading) return <UnifiedSkeletonLoader />;

  return (
    <div
      ref={mainContainerRef}
      className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200 relative overflow-x-hidden"
    >
      <Toaster position="top-center" />

      <SlideInForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <section className="relative pt-28 pb-10 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="hero-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold tracking-wider uppercase mb-8 border border-purple-200">
          <span className="w-2 h-2  text-xs md:text-base rounded-full bg-purple-600 animate-pulse"></span>
          Nagpur's Premier IT Training
        </div>

        <h2 className="hero-content text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Learn, Build & Intern with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600 italic">
            Real-World Projects
          </span>
        </h2>

        <p className="hero-content max-w-2xl mx-auto text-sm md:text-xl text-slate-600 mb-4 md:mb-10 leading-relaxed">
          Bridge the gap between academics and industry. Join our comprehensive
          L&D program designed for the modern tech landscape.
        </p>

        <div className="">
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center justify-center gap-2 bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 text md:px-8 md:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-purple-200 transform hover:-translate-y-1"
          >
            Apply for Internship <Rocket className=" hidden md:block" />
          </button>
        </div>
      </section>

      <section className="process-section py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              The Journey to Career Excellence
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10 transform translate-y-2"></div>
            <ProcessStep
              icon={<BrainCircuit className="w-8 h-8 text-purple-700" />}
              step="01"
              title="Skill Training"
              desc="Master the latest tech stacks with industry-expert instructors."
            />
            <ProcessStep
              icon={<Code2 className="w-8 h-8 text-purple-700" />}
              step="02"
              title="Project Development"
              desc="Apply your knowledge on live, production-grade applications."
            />
            <ProcessStep
              icon={<Briefcase className="w-8 h-8 text-purple-700" />}
              step="03"
              title="Internship"
              desc="Work within a professional team and gain workplace exposure."
            />
            <ProcessStep
              icon={<Trophy className="w-8 h-8 text-purple-700" />}
              step="04"
              title="Career Support"
              desc="Placement assistance and interview preparation sessions."
            />
          </div>
        </div>
      </section>

      <section className=" py-10 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
              Focus Industry Sectors
            </h2>
            <p className=" text-xs md:text-base text-slate-600">
              Gain experience in domains that are shaping the future global
              economy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard
              icon={<Laptop className="w-6 h-6 text-purple-700" />}
              title="Information Technology"
              desc="Full-stack development, cloud architecture, and cybersecurity solutions."
            />
            <SectorCard
              icon={<HeartPulse className="w-6 h-6 text-purple-700" />}
              title="Healthcare"
              desc="Patient management systems and data-driven diagnostic tools."
            />
            <SectorCard
              icon={<Banknote className="w-6 h-6 text-purple-700" />}
              title="FinTech"
              desc="Digital payment gateways, blockchain, and financial analytics."
            />
            <SectorCard
              icon={<Home className="w-6 h-6 text-purple-700" />}
              title="Real Estate"
              desc="CRM systems for property management and virtual tour integration."
            />
            <SectorCard
              icon={<ShoppingBag className="w-6 h-6 text-purple-700" />}
              title="E-Commerce"
              desc="Inventory management and AI-driven customer personalization."
            />
            <SectorCard
              icon={<BookOpen className="w-6 h-6 text-purple-700" />}
              title="Education"
              desc="Learning management systems and interactive educational portals."
            />
          </div>
        </div>
      </section>

      <section className=" py-10 md:py-20 bg-[#fffbeb]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Join Our Program?
            </h2>
            <div className="space-y-6">
              <FeatureItem
                icon={<Code2 />}
                title="Live Industry Projects"
                desc="No toy projects. You'll contribute to code that actually goes into production for real clients."
              />
              <FeatureItem
                icon={<BrainCircuit />}
                title="1-on-1 Mentorship"
                desc="Direct access to senior developers from Top IT firms in Nagpur for guidance."
              />
              <FeatureItem
                icon={<CheckCircle />}
                title="Globally Recognized Certification"
                desc="Earn a completion certificate valid across the tech industry worldwide."
              />
            </div>
          </div>
          <div className="bg-[#4c1d95] text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                Program Details
              </h3>
              <div className="mb-8">
                <p className="text-purple-200 text-sm font-bold uppercase tracking-wider mb-3">
                  Who Can Join
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Final Year Students", "Freshers", "Career Switchers"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-purple-800/50 border border-purple-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="mb-8">
                <p className="text-purple-200 text-sm font-bold uppercase tracking-wider mb-3">
                  Duration & Location
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 bg-yellow-500 rounded text-purple-900">
                      <Briefcase size={16} />
                    </span>
                    <span className="font-medium">
                      6 Months Intensive Program
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 bg-yellow-500 rounded text-purple-900">
                      <Home size={16} />
                    </span>
                    <span className="font-medium">
                      Offline in Nagpur (Sadar)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-grid min-h-screen bg-slate-50  py-10 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Featured Internship Programs
          </h2>
          <p className=" text-sm md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Choose your specialization and kickstart your professional career
            with hands-on experience in Nagpur's top IT ecosystem.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-8">
          {INTERNSHIP_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="program-card bg-white rounded-3xl px-6 py-4 md:p-6 shadow-sm border border-slate-100 flex flex-col h-full transform will-change-transform hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className=" text-sm md:text-xl font-bold text-slate-800 mb-2 md:mb-6 min-h-[3.5rem] flex items-center">
                {program.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#7e22ce] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="  space-y-2 md:space-y-4 mb-4 md:mb-8 flex-grow">
                {program.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-xs gap-1 md:gap-3 md:text-sm text-slate-600 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-[#9333ea] shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsFormOpen(true)}
                className={`w-full py-2 md:py-3.5 rounded-full text-white font-bold shadow-md transition-colors flex items-center justify-center gap-2 group ${program.buttonColor}`}
              >
                Apply
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-[#5b21b6] rounded-4xl md:rounded-[2.5rem] px-4 py-6 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-5xl font-bold mb-4">
              Start Your Career with
              <br />
              Real Industry Experience
            </h2>
            <p className="text-purple-200  text-xs md:text-sm mb-4 md:mb-10 max-w-2xl mx-auto">
              Limited slots available for the upcoming cohort in Nagpur. Don't
              miss your chance to work with the best.
            </p>
            <div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold px-4 py-2 md:px-8 md:py-4 rounded-full transition-colors shadow-lg text-xs md:text-sm "
              >
                Book Your Slot Now
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SlideInForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        display: "block",
      });
      gsap.to(formRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        display: "none",
      });
      gsap.to(formRef.current, {
        x: "100%",
        opacity: 0.5,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) throw new Error("Failed to send");

      const data = await response.json();
      toast.success(
        "Application sent successfully! We will contact you shortly.",
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(onClose, 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity"
      ></div>

      <div
        ref={formRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white z-50 shadow-2xl overflow-y-auto transform translate-x-full"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Apply Now</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className={`w-full p-3 rounded-lg border ${errors.firstName ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-purple-500 outline-none transition-all`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full p-3 rounded-lg border ${errors.email ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-purple-500 outline-none transition-all`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none transition-all bg-white"
              >
                <option value="">Select an Internship Program</option>
                <option value="MERN Stack">MERN Stack Internship</option>
                <option value="Java Full Stack">
                  Java Full Stack Internship
                </option>
                <option value="Salesforce">Salesforce Training</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Consultation">General Consultation</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full p-3 rounded-lg border ${errors.message ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none`}
                placeholder="Tell us about your background and goals..."
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-purple-800 hover:bg-purple-900 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  Sending... <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ProcessStep({
  icon,
  step,
  title,
  desc,
}: {
  icon: any;
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="process-step flex flex-col items-center text-center group">
      <div className=" w-14 h-14 md:w-20 md:h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all border border-yellow-100">
        {icon}
      </div>
      <span className="text-yellow-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
        Step {step}
      </span>
      <h3 className=" text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
        {title}
      </h3>
      <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-[250px]">
        {desc}
      </p>
    </div>
  );
}

function SectorCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-2 md:mb-6 text-purple-700">
        {icon}
      </div>
      <h3 className=" text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
        {title}
      </h3>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
      <div className="w-12 h-12 shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div>
        <h3 className=" text-sm md:text-lg font-bold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function UnifiedSkeletonLoader() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8 animate-pulse max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-4 mb-20">
        <div className="h-6 w-48 bg-slate-200 rounded-full"></div>
        <div className="h-16 w-3/4 bg-slate-200 rounded-lg"></div>
        <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
        <div className="flex gap-4 mt-6">
          <div className="h-12 w-40 bg-slate-200 rounded-full"></div>
          <div className="h-12 w-40 bg-slate-200 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 h-[400px] border border-slate-100 flex flex-col"
          >
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-6"></div>
            <div className="flex gap-2 mb-8">
              <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
              <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
            </div>
            <div className="space-y-4 mb-auto">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
            <div className="h-12 bg-slate-200 rounded-full w-full mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
