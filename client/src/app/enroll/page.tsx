'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGraduationCap, FaCheckCircle, FaClock, FaUsers, FaCertificate } from 'react-icons/fa'
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

export default function EnrollPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16 relative overflow-hidden"
        style={{background: 'linear-gradient(135deg, #0d318d, #772e98)'}}
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div variants={fadeInUp}>
              <HiSparkles className="mx-auto text-4xl mb-4" style={{color: '#deae40'}} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Career with 
                <span className="block bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #deae40, #fff)'}}>
                  CloudTech
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Join thousands of students who have successfully transitioned into high-paying tech careers through our industry-focused programs.
              </p>
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl"
                style={{backgroundColor: '#deae40'}}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Start Your Journey Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose CloudTech */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span style={{color: '#772e98'}}>CloudTech?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach coding - we build careers. Here's what makes us different:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: "Industry-Ready Curriculum",
                description: "Learn the exact skills that top companies are hiring for, with curriculum designed by industry experts.",
                color: "#0d318d"
              },
              {
                icon: FaUsers,
                title: "Live Project Experience",
                description: "Work on real client projects and build a portfolio that showcases your abilities to potential employers.",
                color: "#772e98"
              },
              {
                icon: FaCertificate,
                title: "Placement Guarantee",
                description: "Get guaranteed job placement support with our network of 500+ hiring partners across India.",
                color: "#deae40"
              },
              {
                icon: FaClock,
                title: "Flexible Learning",
                description: "Study at your own pace with live sessions, recorded lectures, and 24/7 mentor support.",
                color: "#0d318d"
              },
              {
                icon: FaCheckCircle,
                title: "Certification",
                description: "Earn industry-recognized certificates that add credibility to your resume and LinkedIn profile.",
                color: "#772e98"
              },
              {
                icon: HiSparkles,
                title: "Community Support",
                description: "Join a thriving community of learners, mentors, and industry professionals for networking.",
                color: "#deae40"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="text-3xl mr-4" style={{color: feature.color}} />
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Course Tracks */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span style={{color: '#0d318d'}}>Career Track</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the program that aligns with your career goals and start your transformation today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "🧭 Salesforce Development Track",
                duration: "6 Months",
                level: "Beginner to Advanced",
                description: "Master Salesforce CRM, Apex programming, Lightning Web Components, and become a certified Salesforce developer.",
                highlights: [
                  "Salesforce Admin & Developer Certification prep",
                  "Real Salesforce org development experience",
                  "Lightning Web Components mastery",
                  "Integration with external systems",
                  "Job placement in Salesforce ecosystem"
                ],
                color: "#0d318d"
              },
              {
                title: "💻 Java Full Stack Development Track",
                duration: "8 Months",
                level: "Beginner to Expert",
                description: "Build enterprise-grade applications using Java, Spring Boot, React, and modern development practices.",
                highlights: [
                  "Core Java to Advanced Spring Boot",
                  "React.js frontend development",
                  "Database design and optimization",
                  "Microservices architecture",
                  "DevOps and cloud deployment"
                ],
                color: "#772e98"
              },
              {
                title: "🌐 MERN Stack Development Track",
                duration: "7 Months",
                level: "Beginner to Professional",
                description: "Create modern web applications using MongoDB, Express.js, React.js, and Node.js with AI integration.",
                highlights: [
                  "Full-stack JavaScript development",
                  "React.js with modern hooks and context",
                  "Node.js and Express.js backend",
                  "MongoDB database management",
                  "AI/ML integration in web apps"
                ],
                color: "#deae40"
              },
              {
                title: "🐍 Python Django Development Track",
                duration: "6 Months",
                level: "Beginner to Advanced",
                description: "Develop robust web applications and APIs using Python, Django, and modern Python ecosystem.",
                highlights: [
                  "Python fundamentals to advanced concepts",
                  "Django web framework mastery",
                  "REST API development",
                  "Database modeling and optimization",
                  "Data science integration"
                ],
                color: "#0d318d"
              }
            ].map((track, index) => (
              <motion.div
                key={track.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{track.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 rounded-full" style={{backgroundColor: `${track.color}20`, color: track.color}}>
                      {track.duration}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                      {track.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{track.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {track.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white py-3 rounded-xl font-semibold transition-all duration-300"
                  style={{backgroundColor: track.color}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll in This Track →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Success <span style={{color: '#deae40'}}>Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with CloudTech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Salesforce Developer at TCS",
                salary: "₹8.5 LPA",
                story: "From a non-tech background to landing a Salesforce developer role. CloudTech's mentorship made all the difference!",
                course: "Salesforce Development"
              },
              {
                name: "Rahul Kumar",
                role: "Full Stack Developer at Infosys",
                salary: "₹12 LPA",
                story: "The live projects and industry exposure helped me build confidence and land my dream job in just 6 months!",
                course: "Java Full Stack"
              },
              {
                name: "Anita Patel",
                role: "MERN Developer at Startup",
                salary: "₹15 LPA",
                story: "CloudTech's modern curriculum and AI integration training helped me join a cutting-edge startup!",
                course: "MERN Stack"
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                className="bg-gray-50 p-8 rounded-2xl"
                variants={fadeInUp}
              >
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">{story.name}</h4>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="font-semibold" style={{color: '#0d318d'}}>{story.salary}</p>
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <span className="text-sm px-3 py-1 rounded-full" style={{backgroundColor: '#772e9820', color: '#772e98'}}>
                  {story.course}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        style={{background: 'linear-gradient(135deg, #772e98, #deae40)'}}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for the perfect moment. The perfect moment is now. Join CloudTech and transform your career today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUt2aELXj23WCxr8pbreUI3S4naAkWbNG97zJbhX_PvOhL8Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Enroll Now - Limited Seats!
              </motion.a>
              
              <Link 
                href="/courses"
                className="text-white border-2 border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View All Courses
              </Link>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
              ⏰ Early Bird Discount: Save 30% if you enroll this month!
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
