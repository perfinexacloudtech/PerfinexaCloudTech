import HeroSection from "@/components/home/HeroSection";
import { getPageMetadata } from "@/lib/Metadata";
import Script from "next/script";
import MasterclassSection from "@/components/home/MasterCardSection";
import FeaturedNews from "@/components/home/FeatureNews";
import ServicePage from "@/components/home/ServicePage";
import AnimatedHero from "@/components/home/AnimatedHero";
import CallAction from "@/components/home/CallAction";
import RecentProjects from "@/components/home/recentProject";

export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech Pvt. Ltd – IT Company in Nagpur",
  description:
    "Leading IT company in Nagpur offering digital marketing, website development, software development, Salesforce solutions, app development in Nagpur.",
  path: "/",
});

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <ServicePage />
      <AnimatedHero />
      <RecentProjects />
      {/* <MasterclassSection /> */}
      <FeaturedNews />
      <CallAction />
    </div>
  );
}
