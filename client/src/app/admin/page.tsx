'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaEye, FaTrash, FaEdit } from 'react-icons/fa'

interface Article {
  id: string
  title: string
  content: string
  author: string
  date: string
  published: boolean
}

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'Getting Started with Salesforce Development',
      content: 'Learn the fundamentals of Salesforce development and how to build your first Lightning Web Component...',
      author: 'CloudTech Team',
      date: '2024-10-29',
      published: true
    },
    {
      id: '2',
      title: 'Java Spring Boot Best Practices',
      content: 'Discover the best practices for building scalable applications with Java Spring Boot framework...',
      author: 'CloudTech Team',
      date: '2024-10-28',
      published: true
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'CloudTech Team'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingArticle) {
      // Update existing article
      setArticles(articles.map(article => 
        article.id === editingArticle.id 
          ? { ...article, ...formData, date: new Date().toISOString().split('T')[0] }
          : article
      ))
      setEditingArticle(null)
    } else {
      // Create new article
      const newArticle: Article = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        published: true
      }
      setArticles([newArticle, ...articles])
    }
    
    setFormData({ title: '', content: '', author: 'CloudTech Team' })
    setShowForm(false)
  }

  const handleEdit = (article: Article) => {
    setEditingArticle(article)
    setFormData({
      title: article.title,
      content: article.content,
      author: article.author
    })
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(article => article.id !== id))
    }
  }

  const togglePublished = (id: string) => {
    setArticles(articles.map(article => 
      article.id === id 
        ? { ...article, published: !article.published }
        : article
    ))
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-12" style={{background: 'linear-gradient(135deg, #0d318d, #772e98)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-white/80">Manage articles and content for CloudTech</p>
            </div>
            <motion.button
              onClick={() => {
                setShowForm(!showForm)
                setEditingArticle(null)
                setFormData({ title: '', content: '', author: 'CloudTech Team' })
              }}
              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUpload className="w-4 h-4" />
              {showForm ? 'Cancel' : 'New Article'}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingArticle ? 'Edit Article' : 'Create New Article'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Article Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  placeholder="Enter article title..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  placeholder="Author name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  required
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  placeholder="Write your article content here..."
                />
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  className="text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                  style={{background: 'linear-gradient(to right, #0d318d, #772e98)'}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {editingArticle ? 'Update Article' : 'Publish Article'}
                </motion.button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingArticle(null)
                    setFormData({ title: '', content: '', author: 'CloudTech Team' })
                  }}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Articles List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Published Articles ({articles.length})</h2>
          
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {article.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 line-clamp-2">{article.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <motion.button
                    onClick={() => togglePublished(article.id)}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={article.published ? 'Unpublish' : 'Publish'}
                  >
                    <FaEye className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleEdit(article)}
                    className="p-2 text-gray-600 hover:text-yellow-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Edit"
                  >
                    <FaEdit className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleDelete(article.id)}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Delete"
                  >
                    <FaTrash className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles yet. Create your first article!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
