"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { toast, Toaster } from "react-hot-toast";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    gsap.to(".submit-btn", { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Message sent successfully!');

      gsap.fromTo(formRef.current, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-6 border-t border-gray-900" id="contact-section">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              PERFINEXA CLOUDTECH PVT LTD
            </h2>
            <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
              Empowering the next generation of developers with industry-grade 
              training and mentorship. Innovation meets success through our 
              comprehensive learning programs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="hidden md:block">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hr@perfinexacloudtech@gmail.com</li>
                <li>+91 8767134732 </li>
                <li>Nagpur, Maharashtra, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div ref={formRef} className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px]"></div>
          
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-gray-500 font-bold">First Name</label>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#161616] border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-gray-500 font-bold">Last Name</label>
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#161616] border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase text-gray-500 font-bold">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#161616] border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase text-gray-500 font-bold">Subject</label>
              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#161616] border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase text-gray-500 font-bold">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className=" resize-none w-full bg-[#161616] border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="submit-btn w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2025 Perfinexa CloudTech. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}