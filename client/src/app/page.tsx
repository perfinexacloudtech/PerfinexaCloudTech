"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSections";
import TrendingCourses from "@/components/home/TreandingCourses";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TrendingCourses />
      <NewsletterSection />
    </>
  );
}
