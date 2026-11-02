"use client";

import { ArrowUpRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nevLink = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Service",
      path: "/#services",
    },
    {
      name: "Blogs",
      path: "/blog",
    },
  ];

  const servicesLink = [
    {
      name: "Software Development",
      path: "/services/software-development-services/",
    },
    {
      name: "Mobile Apps",
      path: "/services/mobile-app-development-services/",
    },
    {
      name: "Web Development",
      path: "/services/website-development-services/",
    },
    {
      name: "AI Solution",
      path: "/#services",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
    {
      name: "Refund Policy",
      path: "/refund-policy",
    },
    {
      name: "Cookie Policy",
      path: "/cookie-policy",
    },
  ];

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      toast.error("Please agree to our Privacy Policy to subscribe.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/send-offer`, {
        email,
      });

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
      setConsent(false);
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
    <footer className="bg-[#0F172A] text-white pt-10 md:pt-16 pb-6 md:pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo & Join Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:gap-8 md:mb-16 border-b border-white/20 pb-6 md:pb-12">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/perfinexacloudtech.png"
                alt="Perfinexa Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="h-12 w-[1px] bg-white/30 mx-4 hidden md:block"></div>
            <p className="max-w-sm text-sm hidden md:block text-slate-300">
              Scalable Cloud & Software Solutions for Business Growth.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#1e40af] hidden md:flex text-white hover:bg-blue-400 font-bold py-3 px-6 rounded-sm uppercase text-sm items-center gap-2 transition-colors"
          >
            Want To Join Us <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="font-bold text-sm md:text-lg mb-4">
              Enter your email to receive information about our services.
            </h4>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                className="w-full bg-transparent border border-slate-700 py-2 mb-4 pl-3 rounded-md placeholder-blue-200 text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {/* Consent checkbox */}
              <div className="flex items-start gap-2.5 mb-5 text-xs text-slate-300">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-500 bg-transparent text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
                />
                <label htmlFor="newsletter-consent" className="cursor-pointer leading-tight text-slate-300">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-white">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="underline hover:text-white">
                    Terms
                  </Link>
                  , and consent to being contacted by Perfinexa CloudTech.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1e40af] hover:bg-blue-700 text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-sm uppercase text-sm flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Useful Links</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-slate-300">
              {nevLink.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-slate-300">
              {servicesLink.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-2 md:space-y-4 text-sm text-slate-300">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Address</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2">IN: +91 8767134732</li>
              <li className="mt-4">
                12, 1st floor A-Wing, Mangalwari Complex, Sadar-Nagpur
              </li>
              <li className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/perfinexacloudtech/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin
                    size={20}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.instagram.com/perfinexa_cloudtech/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={20}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61588109311172"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF
                    size={20}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line with Legal Links */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left leading-relaxed">
            &copy; 2026 Perfinexa CloudTech Pvt. Ltd. |{" "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>{" "}
            |{" "}
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>{" "}
            |{" "}
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </p>
          <p className="text-slate-400 text-center md:text-right">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
