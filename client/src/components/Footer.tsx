'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-10 bg-white border-t"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <Image src="/logo.png" alt="Logo" width={140} height={140} />
            <p className="text-gray-600 text-sm max-w-xs">
              Empowering students to build IT careers through practical & industry-focused training.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <Link href="/courses" className="text-gray-500 hover:text-gray-800 text-sm">Courses</Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-800 text-sm">About Us</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-800 text-sm">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 text-sm text-gray-600">
            <h3 className="font-semibold text-lg text-center md:text-left">Contact</h3>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 9511961046</p>
          <a 
  href="mailto:perfinexacloudtech@gmail.com" 
  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
>
  <FaEnvelope /> perfinexacloudtech@gmail.com
</a>

            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Office No. 12, 1st floor, Mangalwari Complex Sadar, Nagpur, Maharashtra</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <motion.a href="https://www.linkedin.com/company/perfinexacloudtech/posts/" whileHover={{ scale: 1.1 }}>
                <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-blue-600" />
              </motion.a>
              <motion.a href="https://www.instagram.com/perfinexa_technologies" whileHover={{ scale: 1.1 }}>
                <FaInstagram className="w-6 h-6 text-gray-500 hover:text-pink-600" />
              </motion.a>
              <motion.a href="https://wa.me/9511961046" whileHover={{ scale: 1.1 }}>
                <FaWhatsapp className="w-6 h-6 text-gray-500 hover:text-green-600" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <p className="text-center text-gray-400 text-sm mt-8">
          © {getYear} Perfinexa CloudTech. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
