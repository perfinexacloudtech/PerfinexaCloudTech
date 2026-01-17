import Navbar from "@/components/common/Navbar";
import { getPageMetadata } from "@/lib/Metadata";
import Image from "next/image"; // Assuming you are using Next.js Image component


export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech Pvt. Ltd – IT Company in Nagpur",
  description:
    "Looking for reliable IT services in Nagpur. Perfinexa Cloud Tech is a offering web development, software solutions, SEO  to grow your business.",
  path: "/",
});


const Page = () => {
  return (
    <div className="bg-[#070F3A] min-h-screen">
      <Navbar />

      {/* --- HERO SECTION (Your Previous Code) --- */}
      <section className="relative w-full bg-[#070F3A] pt-20 pb-20 px-4 md:pt-44 md:pb-20 md:px-8 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] pointer-events-none opacity-90">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#7FB5B5"
              d="M140,100 C160,120 180,80 200,100 L200,200 L100,200 C120,180 120,140 140,100 Z"
            />
            <path
              fill="#FDBA36"
              d="M120,30 C150,10 180,50 160,80 C140,110 100,100 80,70 C60,40 90,50 120,30 Z"
              transform="translate(20, -10)"
            />
            <path
              fill="none"
              stroke="#153F3E"
              strokeWidth="1.5"
              d="M90,75 C70,120 130,140 160,80"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10  py-4 md:py-0">
          <h1 className="text-white text-4xl md:text-8xl font-serif font-medium mb-0 md:mb-12 tracking-tight">
            About
          </h1>
        </div>
      </section>

      {/* --- SECTION 1: OUR VALUES (Zig-Zag Layout) --- */}
      <section className=" px-4 md:px-8 pt-4 md:pt-0 pb-10 max-w-5xl mx-auto ">
        <div className="space-y-20 md:space-y-32">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden">
              {/* Replace src with your actual image path */}
              <Image
                src="/images/team/about-1.jpeg"
                alt="Team creating brands"
                className="object-cover w-full h-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-blue-600 font-semibold mb-2">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Go Digital. Grow Local Brands
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
               We help local businesses transition from offline to digital with powerful websites, smart systems, and automation. As a trusted IT company in Nagpur, we deliver reliable IT services in Nagpur, including Google-optimized websites, WhatsApp ordering, and lead management solutions that boost visibility, build trust, and increase customer conversions.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2 transition-colors"
              >
                Explore service <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Order change for mobile: Image usually looks better on top on mobile, 
                but based on your design, text is left on desktop. 
                We keep DOM order Text -> Image for desktop left-to-right flow. */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <span className="text-blue-600 font-semibold mb-2">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                We Care About Your Online Visibility
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
            Perfinexa Cloud Tech is a results-driven IT company in Nagpur offering expert IT services in Nagpur, including SEO, website development, digital marketing, and automation. We help businesses improve Google rankings, boost online visibility, and generate quality leads for long-term growth.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2 transition-colors"
              >
                View Case Studies <span>&rarr;</span>
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/team/about-2.jpeg"
                alt="Team creating brands"
                className="object-cover w-full h-full"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: EMPOWERING THE WORLD (3 Column Grid) --- */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Digital IT Solutions in Nagpur
            </h2>
            <p className="text-gray-500 leading-relaxed">
            Perfinexa Cloud Tech is a trusted IT company in Nagpur offering website development in Nagpur, SEO services, and digital marketing solutions to help local businesses grow online. We create smart, simple digital systems that boost visibility, save time, and attract more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group">
              <Image
               src="/images/team/team-1.jpeg"
                alt="Perfinexa Cloud Tech Team"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                width={150}
                height={150}
              />
            </div>
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group">
               <Image
               src="/images/team/team-2.jpeg"
                alt="Perfinexa Cloud Tech Team"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                width={150}
                height={150}
              />
            </div>
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group">
              <Image
               src="/images/team/team-1.jpeg"
                alt="Perfinexa Cloud Tech Team"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LEADERSHIP TEAM (4 Column Grid) --- */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
            Behind the Block
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-500">
            Working from all around the world to build the Web of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Member 1 */}
          <div className="flex flex-col">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <Image
                src="/images/team/bhushan-1.jpg"
                alt="Founder of Perfinexa Cloud Tech"
                className="object-cover w-full h-full grayscale "
                width={150}
                height={150}
              />
            </div>
            <h3 className="font-bold text-white text-lg">Bhushan Tekade</h3>
            <p className="text-gray-500 text-sm mb-3">Co-Founder & CEO</p>
            <div className="flex gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <Image
                src="/images/team/prakash-1.jpg"
                alt="Manager at Perfinexa Cloud Tech"
                 className="object-cover w-full h-full grayscale "
                width={150}
                height={150}
              />
            </div>
            <h3 className="font-bold text-white text-lg">Prakash Das</h3>
            <p className="text-gray-500 text-sm mb-3">Manager of Perfinexa cloudTech</p>
            <div className="flex gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <Image
                src="/images/team/prashant-1.jpeg"
                alt="MERN Stack Developer at Perfinexa Cloud Tech"
                 className="object-cover w-full h-full grayscale "
                width={150}
                height={150}
              />
            </div>
             <h3 className="font-bold text-white text-lg">Prashant Burde</h3>
            <p className="text-gray-500 text-sm mb-3">Mern Stack Developer</p>
            <div className="flex gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
             <Image
                src="/images/team/praful-1.jpeg"
                alt="python Developer at Perfinexa Cloud Tech"
                 className="object-cover w-full h-full grayscale "
                width={150}
                height={150}
              />
            </div>
            <h3 className="font-bold text-white text-lg">Praful Puri</h3>
            <p className="text-gray-500 text-sm mb-3"> Digital Marketing Executive</p>
            <div className="flex gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple Helper Component for Icons to keep the main code clean
const SocialIcon = ({ type }: { type: string }) => {
  if (type === "instagram") {
    return (
      <a
        href="#"
        className="text-[#070F3A] hover:text-purple-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    );
  }
  return (
    <a
      href="#"
      className="text-[#070F3A] hover:text-purple-600 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
  );
};

export default Page;
