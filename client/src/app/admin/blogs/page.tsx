'use client'

import dynamic from 'next/dynamic'

const BlogEditor = dynamic(() => import('@/components/BlogEditor'), { 
  ssr: false,
  loading: () => <p className="text-white p-5">Loading Editor...</p>
})

export default function Page() {
  return (
    <div>
       <BlogEditor />
    </div>
  )
}