import BlogFeed from '@/components/common/BlogFeed'

// Server-side Data Fetching
async function getBlogs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${apiUrl}/api/blogs`, {
      cache: 'no-store', // Ensures fresh data on every load
    })

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText)
      return { data: [] }
    }

    return res.json()
  } catch (error) {
    console.error("Error connecting to API:", error)
    return { data: [] }
  }
}

// Main Page Component
export default async function BlogPage() {
  // 1. Fetch data on the server
  const { data: blogs } = await getBlogs()

  // 2. Pass data to the Client Component
  return <BlogFeed initialBlogs={blogs} />
}