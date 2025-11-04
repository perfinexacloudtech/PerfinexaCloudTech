'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCalendar, FiUser, FiSearch, FiEdit, FiPlus } from 'react-icons/fi'
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

// CloudTech blog posts - in a real app, this would come from a database
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Salesforce Development',
    excerpt: 'Learn the fundamentals of Salesforce development and how to build your first Lightning Web Component with hands-on examples.',
    author: 'CloudTech Team',
    date: '2024-10-29',
    category: 'Salesforce',
    readTime: '8 min read',
    image: '🧭'
  },
  {
    id: 2,
    title: 'Java Spring Boot Best Practices',
    excerpt: 'Discover the best practices for building scalable applications with Java Spring Boot framework and microservices architecture.',
    author: 'CloudTech Team',
    date: '2024-10-28',
    category: 'Java',
    readTime: '10 min read',
    image: '💻'
  },
  {
    id: 3,
    title: 'MERN Stack Project: Building a Real-Time Chat App',
    excerpt: 'Step-by-step guide to building a real-time chat application using MongoDB, Express.js, React, and Node.js.',
    author: 'CloudTech Team',
    date: '2024-10-27',
    category: 'MERN',
    readTime: '12 min read',
    image: '🌐'
  },
  {
    id: 4,
    title: 'Python Django REST API Development',
    excerpt: 'Complete guide to building robust REST APIs with Django REST Framework and implementing authentication.',
    author: 'CloudTech Team',
    date: '2024-10-26',
    category: 'Python',
    readTime: '9 min read',
    image: '🐍'
  },
  {
    id: 5,
    title: 'Career Transition: From Non-Tech to Developer',
    excerpt: 'Success stories and practical tips for making a successful career transition into tech with CloudTech programs.',
    author: 'CloudTech Team',
    date: '2024-10-25',
    category: 'Career',
    readTime: '6 min read',
    image: '🚀'
  },
  {
    id: 6,
    title: 'Industry Trends: What Employers Want in 2024',
    excerpt: 'Latest industry insights on the most in-demand tech skills and how CloudTech prepares you for the job market.',
    author: 'CloudTech Team',
    date: '2024-10-24',
    category: 'Industry',
    readTime: '7 min read',
    image: '📈'
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  const categories = ['All Categories', 'Salesforce', 'Java', 'MERN', 'Python', 'Career', 'Industry']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-16">
      {/* Header Section */}
      <motion.section 
        className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <HiSparkles className="w-12 h-12" style={{color: '#deae40'}} />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              CloudTech <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #0d318d, #772e98)'}}>Blog</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Latest tech insights, tutorials, and career guidance from our experts
            </p>
          </motion.div>

          {/* Admin Controls */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12"
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 border-2 border-gray-300 rounded-xl focus:outline-none transition-colors"
                  onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#0d318d'}
                  onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#d1d5db'}
                />
              </div>
              
              {/* Category Filter */}
              <select 
                className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium focus:outline-none bg-white"
                onFocus={(e) => (e.target as HTMLSelectElement).style.borderColor = '#0d318d'}
                onBlur={(e) => (e.target as HTMLSelectElement).style.borderColor = '#d1d5db'}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Admin Add Post Button */}
            <motion.a
              href="/admin"
              className="text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2"
              style={{background: 'linear-gradient(to right, #0d318d, #772e98)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlus className="w-5 h-5" />
              Admin Panel
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Post Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl relative overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {post.image}
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FiUser className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{post.readTime}</span>
                  </div>

                  {/* Admin Edit Button */}
                  <div className="flex justify-between items-center">
                    <motion.button 
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read More →
                    </motion.button>
                    <motion.button 
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiEdit className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              variants={fadeInUp}
            >
              <p className="text-xl text-gray-600">No articles found matching your search.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section 
        className="py-16"
        style={{background: 'linear-gradient(135deg, #0d318d, #772e98)'}}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <HiSparkles className="w-12 h-12 mx-auto mb-6" style={{color: '#deae40'}} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Updated with CloudTech
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest tech tutorials, career tips, and course updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-xl text-lg focus:outline-none"
                onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#deae40'}
              />
              <motion.button 
                className="text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                style={{backgroundColor: '#deae40'}}
                whileHover={{ scale: 1.05, backgroundColor: '#c49a36' }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
