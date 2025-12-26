import FeatureCard from "@/components/UI/FreatureCard";

export default function WhyScaler() {
  return (
    <section className="w-full bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SEO-friendly heading */}
        <p className="text-center text-sm text-gray-400 font-medium">
          WHY SCALER
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mt-1 mb-12">
          What makes Scaler Special?
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <FeatureCard
            badge="AI-POWERED"
            title="24/7 AI learning companion"
            subtitle="That has your back always"
            className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-blue-700 to-blue-900"
          >
            <div className="w-full h-32 bg-black/20 rounded-lg mt-4"></div>
          </FeatureCard>

          {/* CARD 2 */}
          <FeatureCard
            badge="LIVE"
            title="Unlimited AI mock interviews"
            subtitle="with Scaler Companion"
            className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-red-600 to-red-800"
          >
            <div className="w-full h-32 bg-black/20 rounded-lg mt-4"></div>
          </FeatureCard>

          {/* CARD 3 */}
          <FeatureCard
            badge="GAIL, LLD & HLD"
            title="Learn and master system design that scale"
            className="lg:col-span-1"
          >
            <div className="w-full h-20 bg-gray-800 rounded-lg mt-4"></div>
          </FeatureCard>

          {/* CARD 4 */}
          <FeatureCard
            title="4.7"
            subtitle="AVG. LEARNER RATING"
            className="text-center flex flex-col justify-center items-center"
          >
            <div className="text-yellow-400 text-3xl mt-4">★★★★★</div>
          </FeatureCard>

          {/* CARD 5 */}
          <FeatureCard
            badge="RESUME BUILDER"
            title="AI-powered resume builder"
            subtitle="Boost your hiring chances"
          >
            <div className="w-full h-20 bg-gray-800 rounded-lg mt-4"></div>
          </FeatureCard>

          {/* CARD 6 */}
          <FeatureCard
            badge="FLEXIBILITY"
            title="Learning that adapts to your schedule"
          >
            <ul className="list-disc ml-4 mt-3 text-sm opacity-90">
              <li>Choose Schedule</li>
              <li>On-demand access</li>
              <li>Flexible deadlines</li>
            </ul>
          </FeatureCard>

          {/* CARD 7 */}
          <FeatureCard
            badge="PROJECTS"
            title="Work on hands-on live projects"
          >
            <ul className="list-disc ml-4 mt-3 text-sm opacity-90">
              <li>Hustle Streaming Platform</li>
              <li>File Sharing System</li>
              <li>Smart Online Orders</li>
            </ul>
          </FeatureCard>

          {/* CARD 8 */}
          <FeatureCard
            badge="PLACEMENTS"
            title="Dedicated placement support"
            subtitle="Resume polishing, interview preparation, recruiter access"
          >
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Amazon</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Uber</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Walmart</span>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}
