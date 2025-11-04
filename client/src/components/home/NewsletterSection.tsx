// src/app/components/home/NewsletterSection.tsx
"use client";

import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import CommunityAvatars from "./CommunityAvatars";
import { fadeInUp, staggerChildren } from "@/app/utils/animation";
import toast from "react-hot-toast";
import { useTransition } from "react";
import Link from "next/link";

export default function NewsletterSection() {
  const [isPending, startTransition] = useTransition();

  return (
    <motion.section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d318d, #772e98)" }} initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div className="relative" variants={fadeInUp}>
            <HiSparkles className="absolute -top-4 -left-3 md:-left-4 text-2xl" style={{ color: "#deae40" }} />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              JOIN NOW
              <br />
              TO GET SPECIAL{" "}
              <span className="bg-gradient-to-r bg-clip-text text-transparent relative" style={{ backgroundImage: "linear-gradient(to right, #deae40, #fff)" }}>
                OFFER
              </span>
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                startTransition(async () => {
                  const formData = new FormData(e.target as HTMLFormElement);
                  const email = formData.get("email") as string;

                  if (!email) {
                    toast.error("Please enter your email address");
                    return;
                  }

                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-offer`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                      toast.success("🎉 Offer successful sent! Check your email for the brochure.");
                      (e.target as HTMLFormElement).reset();
                    } else {
                      toast.error(data.error || "❌ Failed to subscribe.");
                    }
                  } catch {
                    toast.error("⚠️ Network error. Please try again.");
                  }
                });
              }}
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 text-white">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-red-500 rounded-xl sm:rounded-l-xl sm:rounded-r-none text-base sm:text-lg focus:outline-none transition-all"
                  style={{ borderColor: "#d1d5db" }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#deae40")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#d1d5db")}
                  disabled={isPending}
                />

                <motion.button
                  type="submit"
                  disabled={isPending}
                  className={`text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl font-semibold transition-colors flex items-center justify-center gap-2 ${isPending ? "opacity-70 cursor-not-allowed" : ""}`}
                  style={{ backgroundColor: "#deae40" }}
                  whileHover={!isPending ? { backgroundColor: "#c49a36" } : {}}
                  whileTap={!isPending ? { scale: 0.95 } : {}}
                >
                  {isPending ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Claim Offer"}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div className=" hidden xl:block relative h-64 sm:h-80 lg:h-96 order-first lg:order-last" variants={fadeInUp}>
            <div className="absolute top-8 right-24 text-white text-lg font-medium transform rotate-12">Join community</div>
            <CommunityAvatars />
          </motion.div>
        </div>

       
      </div>
    </motion.section>
  );
}
