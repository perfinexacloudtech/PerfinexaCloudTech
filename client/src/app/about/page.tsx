'use client'

import { motion } from 'framer-motion'
import { FaLinkedin , FaGraduationCap, FaCertificate, FaBook, FaUsers, FaLaptop } from 'react-icons/fa'

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
const educationIcons = [
  { icon: FaGraduationCap, label: 'Quality Education' },
  { icon: FaCertificate, label: 'Certified Courses' },
  { icon: FaBook, label: 'Study Material' },
  { icon: FaLaptop, label: 'Smart Learning' },
];



export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* About Us Section */}
      <motion.section 
        className="pt-24 pb-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16"
            variants={fadeInUp}
          >
            About <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent relative">
              Us
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded"></div>
            </span>
          </motion.h1>

          {/* Vision and Mission */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision and Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We are a cutting-edge online learning platform, providing students from all over the world access 
              to high-quality education. With a passion for innovation and a commitment to excellence, we aim 
              to revolutionize the way people learn and grow.
            </p>
          </motion.div>

          {/* Stats Banner */}
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white text-center mb-16 relative overflow-hidden"
            variants={fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-8 right-8 w-32 h-32 border-2 border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-8 left-8 w-24 h-24 border-2 border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-16 left-16 w-16 h-16 border-2 border-white/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-tight"
                variants={fadeInUp}
              >
               Perfinexa Learning & Development Hub
Empowering careers with industry-focused training & real-world tech skills.
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
                variants={staggerChildren}
              >
                {educationIcons.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                    >
                      <item.icon className="text-3xl" />
                    </motion.div>
                    <span className="font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Team Description */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We're proud to have a talented and dedicated team behind our platform. Our team members bring a 
              diverse range of skills and experiences to the table, but they all share a passion for education 
              and a commitment to making a positive impact on the world.
            </p>
          </motion.div>

          {/* Team Member */}
          <motion.div 
            className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-8 relative overflow-hidden"
            variants={fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-8 right-8 w-32 h-32 border-2 border-gray-300/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-8 right-16 w-24 h-24 border-2 border-gray-300/50 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div 
  className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
>
  <img 
    src="/bhushan_profie.jpg" 
    alt="Bhushan Tekade"
    className="w-full h-full object-cover"
  />
</div>
              <div className="flex-1 text-center md:text-left">
                <h3 
                  className="text-3xl font-bold text-gray-900 mb-1"
                 
                >
                  Bhushan Tekade
                </h3>
                <span>CEO & Co-Founder, Perfinexa CloudTech</span>
                <motion.div 
                  className="flex justify-center md:justify-start space-x-4 mt-4"
                  variants={staggerChildren}
                >
                  <motion.a 
                    href="https://www.linkedin.com/in/bhushantekade1999/" 
                    className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin  className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}
