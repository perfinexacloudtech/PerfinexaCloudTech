"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Loader2,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INTERNSHIPS = [
  {
    id: 1,
    title: "MERN Stack Internship",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Live full-stack projects", "Internship certificate"],
  },
  {
    id: 2,
    title: "Java Full Stack Internship",
    tags: ["Core Java", "Spring Boot", "REST APIs"],
    features: ["Enterprise-level applications", "Real production exposure"],
  },
  {
    id: 3,
    title: "Salesforce Training",
    tags: ["Admin Concepts", "Developer Concepts"],
    features: ["CRM customization", "Industry-use cases"],
  },
  {
    id: 4,
    title: "Digital Marketing",
    tags: ["SEO", "Google Ads", "Analytics"],
    features: ["Real client campaigns", "Performance-based learning"],
  },
];

export default function ContactAndInternshipPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".internship-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#internships",
          start: "top 80%",
        },
      });

      gsap.from(".contact-left", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
      });
      gsap.from(".contact-form-card", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
      });

      gsap.from(".map-card", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: "#map-section", start: "top 85%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200"
    >
      <Toaster position="top-center" />

      <ContactSection />

      <section
        id="map-section"
        className="relative h-[450px] w-full bg-slate-200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d59529.94874070484!2d79.062252!3d21.1674443!3m2!1i1024!2i768!4f13.1!2m1!1sperfinexa%20cloudtech%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1769670576606!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.3)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0"
        ></iframe>
      </section>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "IT Services",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

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

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!response.ok) throw new Error("Failed to send");

      toast.success("Message sent successfully! We will contact you shortly.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "IT Services",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact <span className="italic text-[#4c1d95]">Us</span>
          </h1>
          <p className=" text-xs md:text-sm text-slate-500 mt-4 max-w-2xl mx-auto">
            Have questions about our IT services or internship programs? Our
            team is here to help you navigate your digital journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className=" hidden md:block contact-left md:space-y-10">
            <div>
              <h3 className=" react-lg md:text-2xl font-bold text-slate-900 mb-4">
                Send us a Message
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you’re looking to build a custom software solution or
                seeking an industry-standard internship, fill out the form and
                we’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Nagpur Office</h4>
                  <p className="text-slate-500 text-sm mt-1">
                    12,1st floor A-Wing, Mangalwari Complex, Sadar-Nagpur
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500 text-sm mt-1">
                    hr@perfinexacloudtech.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Support</h4>
                  <p className="text-slate-500 text-sm mt-1">+91 8767134732</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Mon - Sat: 10 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card bg-slate-50 p-4 md:p-8  rounded-sm md:rounded-[2rem] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2  gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full p-3 rounded-xl border ${errors.fullName ? "border-red-500" : "border-slate-200"} focus:ring-2 focus:ring-purple-600 outline-none transition-all bg-white`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full p-3 rounded-xl border ${errors.email ? "border-red-500" : "border-slate-200"} focus:ring-2 focus:ring-purple-600 outline-none transition-all bg-white`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className={`w-full p-3 rounded-xl border ${errors.phone ? "border-red-500" : "border-slate-200"} focus:ring-2 focus:ring-purple-600 outline-none transition-all bg-white`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none transition-all bg-white appearance-none cursor-pointer"
                    >
                      <option>IT Services</option>
                      <option>Internship Programs</option>
                      <option>General Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className={`w-full p-3 rounded-xl border ${errors.message ? "border-red-500" : "border-slate-200"} focus:ring-2 focus:ring-purple-600 outline-none transition-all bg-white resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#4c1d95] hover:bg-[#3b0764] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
