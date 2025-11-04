'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FaGooglePlusG, FaFacebookF, FaTwitter, FaGraduationCap } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

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

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login form submitted:', formData)
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-md mx-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Login Card */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          variants={fadeInUp}
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-8 right-8 w-32 h-32 border-2 border-purple-100 rounded-full opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-8 left-8 w-24 h-24 border-2 border-blue-100 rounded-full opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            {/* Logo */}
            <motion.div 
              className="text-center mb-8"
              variants={fadeInUp}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <FaGraduationCap className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">NextLearn</span>
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
              <p className="text-gray-600">Sign in to continue your learning journey</p>
            </motion.div>

            {/* Social Login */}
            <motion.div 
              className="space-y-4 mb-8"
              variants={staggerChildren}
            >
              <motion.button 
                className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGooglePlusG className="w-5 h-5" />
                Continue with Google
              </motion.button>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button 
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFacebookF className="w-4 h-4" />
                  Facebook
                </motion.button>
                <motion.button 
                  className="flex items-center justify-center gap-2 bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaTwitter className="w-4 h-4" />
                  Twitter
                </motion.button>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div 
              className="relative mb-8"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with email</span>
              </div>
            </motion.div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between"
                variants={fadeInUp}
              >
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot Password?
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <HiSparkles className="w-5 h-5" />
                    Sign In
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </form>

            {/* Sign Up Link */}
            <motion.div 
              className="text-center mt-8"
              variants={fadeInUp}
            >
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/join" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Sign up for free
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-8 text-gray-500 text-sm"
          variants={fadeInUp}
        >
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
