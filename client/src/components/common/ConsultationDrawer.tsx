"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import toast from "react-hot-toast";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationDrawer({ isOpen, onClose }: DrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    const overlay = overlayRef.current;
    const fields = formRef.current?.querySelectorAll(".form-field-anim");

    if (isOpen) {
      gsap.to(overlay, { autoAlpha: 1, duration: 0.4 });
      gsap.to(panel, { x: "0%", duration: 0.5, ease: "power3.out" });

      if (fields) {
        gsap.fromTo(
          fields,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.2,
            ease: "back.out(1.2)",
          },
        );
      }
    } else {
      gsap.to(panel, { x: "100%", duration: 0.4, ease: "power3.in" });
      gsap.to(overlay, { autoAlpha: 0, duration: 0.4, delay: 0.1 });
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully!");

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.5 },
        );
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      if (onClose) {
        onClose();
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[99] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        ref={overlayRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 transition-opacity"
      />

      <div
        ref={panelRef}
        className="absolute top-0 right-0 h-full w-full md:w-[600px] bg-white border-l border-white/10 shadow-2xl transform translate-x-full overflow-y-auto"
      >
        <div className="min-h-full flex flex-col relative">
          <div className=" z-20  backdrop-blur-md px-6  md:px-12 py-4 border-b border-white/5 flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold ">Let's Talk</h2>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                We'd love to hear from you.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full  transition-all active:scale-95"
              aria-label="Close form"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-2 md:py-4 md:px-12 flex-grow">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6 pb-10"
            >
              <div className="grid grid-cols-2 gap-2 md:gap-5">
                <div className="space-y-2 form-field-anim opacity-0">
                  <label className="text-[11px] uppercase text-gray-500 font-bold tracking-wider ml-1">
                    First Name
                  </label>
                  <input
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full  border border-gray-800 rounded-sm md:rounded-xl p-2 md:p-4  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2 form-field-anim opacity-0">
                  <label className="text-[11px] uppercase text-gray-500 font-bold tracking-wider ml-1">
                    Last Name
                  </label>
                  <input
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-800 rounded-sm md:rounded-xl p-2 md:p-4  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2 form-field-anim opacity-0">
                <label className="text-[11px] uppercase text-gray-500 font-bold tracking-wider ml-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full  border border-gray-800 rounded-sm md:rounded-xl p-2 md:p-4  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2 form-field-anim opacity-0">
                <label className="text-[11px] uppercase text-gray-500 font-bold tracking-wider ml-1">
                  Subject
                </label>
                <input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full  border border-gray-800 rounded-sm md:rounded-xl p-2 md:p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Project Inquiry..."
                />
              </div>

              <div className=" space-x-0 md:space-y-2 form-field-anim opacity-0">
                <label className="text-[11px] uppercase text-gray-500 font-bold tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="resize-none w-full  border border-gray-800 rounded-sm md:rounded-xl p-2 md:p-4  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <div className=" pt-2 form-field-anim opacity-0">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#0F358A] text-white disabled:bg-gray-800 disabled:text-gray-500  font-bold py-4 md:py-5 rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
