'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiSparkles, HiCheckCircle } from 'react-icons/hi'
import { FiMail, FiUser, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap, FaCertificate, FaBook, FaUsers } from 'react-icons/fa'

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

const benefits = [
  { icon: FaGraduationCap, title: 'Expert Instructors', description: 'Learn from industry professionals' },
  { icon: FaCertificate, title: 'Certificates', description: 'Get certified upon completion' },
  { icon: FaBook, title: 'Comprehensive Content', description: 'In-depth course materials' },
  { icon: FaUsers, title: 'Community', description: 'Join our learning community' },
]

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Join form submitted:', formData)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-8 right-8 w-64 h-64 border-2 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-8 left-8 w-48 h-48 border-2 border-white/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div variants={fadeInUp}>
              <HiSparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              JOIN NOW TO GET
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                SPECIAL OFFER
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-purple-100"
              variants={fadeInUp}
            >
              Start your learning journey today and unlock unlimited possibilities
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
            variants={fadeInUp}
          >
            Why Join NextLearn?
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Form Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            variants={fadeInUp}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-8 right-8 w-32 h-32 border-2 border-purple-200 rounded-full opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8"
                variants={fadeInUp}
              >
                Start Your Learning Journey
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors"
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
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors"
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
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors"
                        required
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors"
                        required
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Third Row */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerChildren}
                >
                  <motion.div variants={fadeInUp}>
                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="text" 
                        name="location"
                        placeholder="Location" 
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors"
                        required
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <select 
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-purple-500 transition-colors bg-white"
                      required
                    >
                      <option value="">Select Your Interest</option>
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                      <option value="marketing">Marketing</option>
                      <option value="business">Business</option>
                      <option value="ai">Artificial Intelligence</option>
                    </select>
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="text-center pt-6"
                  variants={fadeInUp}
                >
                  <motion.button 
                    type="submit" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all text-lg relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <HiCheckCircle className="w-6 h-6" />
                      Join NextLearn Now
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
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
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
