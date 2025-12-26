"use client";

import Image from "next/image";
import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

type EventData = {
  title: string;
  speaker: string;
  role: string;
  date: string;
  img?: string;
};

export default function MasterclassSection() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // All 4 Courses Restored
  const events: EventData[] = [
    {
      title: "Become a Certified Salesforce Developer",
      speaker: "Bhushan Tekade",
      role: "Founder, Perfinexa CloudTech",
      date: "CRM, Apex, LWC, SOQL, Process Automation, Deployment",
      img: "images/1.jpg",
    },
    {
      title: "Master Java Full Stack Development",
      speaker: "Abhijeet Singh",
      role: "Working at TCS",
      date: "Core Java, Spring Boot, Hibernate, REST APIs, React, SQL, Microservices",
      img: "images/default.jpg",
    },
    {
      title: "Become a MERN Stack Developer",
      speaker: "Prashant Burde",
      role: "Co-Founder, Perfinexa CloudTech",
      date: "React, Node.js, Express, MongoDB, REST APIs, JWT, Deployment",
      img: "images/4.jpg",
    },
    {
      title: "Build Scalable Backend Applications with Django",
      speaker: "--------",
      role: "--------",
      date: "Python, Django, REST Framework, PostgreSQL, Deployment, Security",
      img: "images/3.jpg",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-16 px-4">
      <div className="text-center mb-10">
        <h3 className="text-sm tracking-wide text-gray-400">
          Perfinexa Learning Program
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Where Innovation Meets Success
        </h2>
      </div>

      {/* mobile carousel */}
      <div className="md:hidden overflow-x-auto flex space-x-4 pb-4 snap-x snap-mandatory">
        {events.map((e, i) => (
          <EventCard
            key={i}
            data={e}
            onRegister={() => setSelectedCourse(e.title)}
            className="min-w-[85%] snap-center"
          />
        ))}
      </div>

      {/* desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((e, i) => (
          <EventCard
            key={i}
            data={e}
            onRegister={() => setSelectedCourse(e.title)}
          />
        ))}
      </div>

      {/* Registration Popup */}
      {selectedCourse && (
        <RegistrationModal
          courseName={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
}

/** Registration Modal with GSAP Animations */
function RegistrationModal({
  courseName,
  onClose,
}: {
  courseName: string;
  onClose: () => void;
}) {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const btnRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    // Modal background fade in
    tl.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      // Form slide and bounce up
      .fromTo(
        formRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
        "-=0.2"
      );
  }, []);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  // GSAP Animation for the button
  gsap.to(btnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';

    const response = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // FIXED THESE TO MATCH HTML name="" ATTRIBUTES:
        name: data.userName,     // was data.fullName
        email: data.userEmail,   // was data.email
        stream: data.stream,     
        year: data.year,         
        reason: data.description, // was data.reason
        course: courseName,       // uses the prop passed to Modal
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert(`Successfully registered! Please check your email: ${data.userEmail}`);
      onClose();
    } else {
      alert(result.error || "Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Connection Error:", error);
    alert("Server is currently unreachable.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    >
      <div
        ref={formRef}
        className="bg-[#111] border border-gray-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white mb-1">
          Join the Masterclass
        </h2>
        <p className="text-gray-400 text-sm mb-6 border-l-2 border-blue-500 pl-3">
          Registering for:{" "}
          <span className="text-blue-400 font-semibold">{courseName}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Automatic Fetch Input (Hidden) */}
          <input type="hidden" name="selectedCourse" value={courseName} />

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
              Full Name
            </label>
            <input
              name="userName"
              required
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Stream
              </label>
              <select
                name="stream"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white outline-none"
              >
                <option>CS / IT</option>
                <option>Electronics</option>
                <option>Mechanical</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Year
              </label>
              <select
                name="year"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white outline-none"
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>Final Year</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
              Email Address
            </label>
            <input
              name="userEmail"
              type="email"
              required
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
              Why do you want to join?
            </label>
            <textarea
              name="description"
              rows={3}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-blue-500"
              placeholder="Briefly describe your interest..."
            ></textarea>
          </div>

          <button
            ref={btnRef}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-blue-900/20"
          >
            CONFIRM REGISTRATION
          </button>
        </form>
      </div>
    </div>
  );
}

/** EventCard Component */
function EventCard({
  data,
  className = "",
  onRegister,
}: {
  data: EventData;
  className?: string;
  onRegister: () => void;
}) {
  return (
    <div
      className={`bg-[#111] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-900 transition-all group ${className}`}
    >
      <div>
        <span className="text-[10px] bg-[#eaa300] text-black px-2 py-1 rounded font-bold tracking-tighter">
          🛡 CERTIFICATION COURSE
        </span>
        <h3 className="text-xl font-bold mt-4 leading-snug group-hover:text-blue-400 transition-colors">
          {data.title}
        </h3>

        <div className="flex items-center mt-6 mb-4 gap-4">
          <Image
            src={data.img ?? "/placeholder.png"}
            alt={data.speaker}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-800"
            width={56}
            height={56}
          />
          <div>
            <p className="font-semibold text-white">{data.speaker}</p>
            <p className="text-xs text-gray-500">{data.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="text-[11px] text-gray-400 py-3 border-y border-gray-800 mb-5 leading-relaxed">
          <span className="text-blue-500 font-bold uppercase">Syllabus:</span>{" "}
          {data.date}
        </div>
        <button
          onClick={onRegister}
          className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-3 rounded-lg font-bold text-sm transition-all transform active:scale-95"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
