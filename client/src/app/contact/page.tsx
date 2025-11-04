'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiSparkles } from 'react-icons/hi'
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'
import toast from 'react-hot-toast'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    // Show success message
    toast.success('Message sent successfully!');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });

  } catch (error) {
    toast.error('Failed to send message. Please try again later.');
    // alert(error.message || 'Failed to send message. Please try again later.');
  }
};

  return (
    <div className="pt-16">
      {/* Contact Us Section */}
      <motion.section 
        className="pt-24 pb-16 min-h-screen flex items-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16"
            variants={fadeInUp}
          >
            Contact <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative">
              Us
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded"></div>
            </span>
          </motion.h1>

          {/* Contact Form */}
          <motion.div 
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl"
            variants={fadeInUp}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-8 right-8 w-32 h-32 border-2 border-purple-200 rounded-full opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-8 left-8 w-24 h-24 border-2 border-pink-200 rounded-full opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-16 left-16 w-16 h-16 border-2 border-purple-300 rounded-full opacity-30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* First Row */}
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerChildren}
              >
                <motion.div variants={fadeInUp}>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Second Row */}
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerChildren}
              >
                <motion.div variants={fadeInUp}>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 bg-white/80 backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUp}>
                <textarea 
                  name="message"
                  placeholder="Write Message" 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 bg-white/80 backdrop-blur-sm resize-none transition-colors"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                className="text-center relative"
                variants={fadeInUp}
              >
                <motion.button 
                  type="submit" 
                  className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="relative z-10"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    Send Message
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiSparkles className="absolute -top-2 -right-2 text-2xl text-yellow-400" />
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
