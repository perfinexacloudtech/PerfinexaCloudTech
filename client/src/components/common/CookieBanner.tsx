"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been recorded
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        // Small delay so it animates in smoothly without layout shift
        const timer = setTimeout(() => setIsVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked/unavailable
      setIsVisible(false);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem("cookieConsent", choice);
    } catch {
      // Ignore localStorage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#0F172A] text-white p-5 rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-purple-950/60 text-purple-300 shrink-0 border border-purple-800/40">
            <Cookie size={20} />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              We use cookies to improve your experience. Learn more in our{" "}
              <Link
                href="/cookie-policy"
                className="text-purple-300 underline underline-offset-2 hover:text-white transition-colors font-medium"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="px-5 py-2 rounded-lg text-xs font-bold bg-[#4c1d95] hover:bg-[#3b0764] text-white shadow-md transition-all cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
