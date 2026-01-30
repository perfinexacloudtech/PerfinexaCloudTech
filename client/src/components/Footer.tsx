"use client";

import { ArrowUpRight, Loader2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nevLink = [
    {
      name:"About Us",
      path:"/about"        
    },
    {
      name:"Service",
      path:"#services"
    },
    {
      name:"Blogs",
      path:"/blog"
    }
  ]

    const servicesLink = [
    {
      name:"Software Developement",
      path:"/services/software-development-services/"        
    },
    {
      name:"Moblie Apps",
      path:"/services/mobile-app-development-services/"
    },
    {
      name:"Web Developement",
      path:"/services/website-development-services/"
    },
      {
      name:"AI Solution",
      path:"#"
    }
  ]


  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-offer`, {
        email,
      });

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className=" bg-[#0F172A] text-white pt-10 md:pt-16 pb-6 md:pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo & Join Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:gap-8 md:mb-16 border-b border-white/20 pb-6 md:pb-12">
          <div className="flex items-center gap-3 ">
            <div>
              <Image
                src="/perfinexacloudtech.png"
                alt="Perfinexa Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="h-12 w-[1px] bg-white/30 mx-4 hidden md:block"></div>
            <p className="max-w-sm text-sm  hidden md:block">
             Scalable Cloud & Software Solutions for Business Growth.
            </p>
          </div>

          <button className="bg-[#1e40af] hidden md:flex text-white hover:bg-blue-400  font-bold py-3 px-6 rounded-sm uppercase text-sm  items-center gap-2 transition-colors">
            Want To Join Us <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6 md:gap-12">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold  text-sm md:text-lg mb-4">
             Enter your email to receive information about our services.
            </h4>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault(); // Prevents page reload
                handleSubscribe(); // Calls your Axios logic
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required // This will now stop submission if empty
                className="w-full bg-transparent border py-2 mb-6 pl-2 rounded-md placeholder-blue-200 text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />

              <button
                type="submit" // Changed from onClick to type="submit"
                disabled={isSubmitting}
                className="bg-[#1e40af] hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-8 rounded-sm uppercase text-sm flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Now <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Useful Links</h4>
            <ul className=" space-y-2 md:space-y-4  text-sm">
              {nevLink.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-4  text-sm">
              {servicesLink.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-lg mb-6">Address</h4>
            <ul className="space-y-4  text-sm">
              <li className="flex gap-2">IN: +91 8767134732</li>
              <li className="mt-4">
                12,1st floor A-Wing, Mangalwari Complex, Sadar-Nagpur
              </li>
              <li className="flex gap-4 mt-6">
                <FaLinkedin
                  size={20}
                  className="cursor-pointer hover:text-white"
                  href="https://www.linkedin.com/company/perfinexacloudtech/posts/?feedView=all"
                />
              </li>
              <li className="mt-6 text-xs ">©2026 All Rights Reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
