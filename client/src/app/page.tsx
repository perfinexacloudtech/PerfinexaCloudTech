import HeroSection from "@/components/home/HeroSection";
import { getPageMetadata } from "@/lib/Metadata";
import { getCoursesListSchema } from "@/lib/seo";
import Script from "next/script";
import MasterclassSection from "@/components/home/MasterCardSection";
import FeaturedNews from "@/components/home/FeatureNews";
import ServicePage from "@/components/home/ServicePage";
import AnimatedHero from "@/components/home/AnimatedHero";
import CallAction from "@/components/home/CallAction";
import RecentProjects from "@/components/home/recentProject";

export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech | Practical Tech Courses in Nagpur",
  description:
    "Join Perfinexa CloudTech for hybrid hands-on courses: Salesforce, MERN, Java & Python Full Stack. Local batches in Nagpur.",
  path: "/",
});

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Script id="courses-list-jsonld" type="application/ld+json">
        {JSON.stringify(getCoursesListSchema())}
      </Script>
      <HeroSection />
      <ServicePage />
      <AnimatedHero />
      <RecentProjects />
      <MasterclassSection />
      <FeaturedNews />
      <CallAction />
    </div>
  );
}
