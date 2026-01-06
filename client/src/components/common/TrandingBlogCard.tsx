import Link from "next/link";



export default function TrandingBlogCard({
  trandingBlog = [],
}: {
  trandingBlog: any[];
}) {
  return (
   <section className="bg-[#0B0B0B] text-white py-16 px-4 relative overflow-hidden">
   
         {/* MARQUEE */}
         <div className="whitespace-nowrap overflow-x-hidden border-y border-gray-800 py-6 mb-14">
           <div className="flex gap-10 text-3xl sm:text-5xl font-bold animate-marquee uppercase tracking-wide opacity-70">
             {Array(8).fill(null).map((_, i) => (
               <span key={i}>
                 Featured Work • Tech Updates • Insights & Blogs • Featured Work
               </span>
             ))}
           </div>
         </div>
   
         {/* RIGHT FADE */}
         <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#0B0B0B] to-transparent"></div>
   
         {/* BLOG CARDS */}
         <div className="overflow-x-auto sm:overflow-x-visible">
           <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
   
             {trandingBlog?.map((blog: any) => (
               <Link
                 key={blog._id}
                 href={`/blog/${blog.slug}`}
                 className="min-w-[250px] sm:min-w-0 bg-[#111] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition"
               >
                 {/* TOP VISUAL */}
                 <div className="h-40 w-full flex items-center justify-center news-card">
                   <span className="p-2 bg-black text-blue-500 font-bold shadow-2xl">
                     {blog.blogCategory}
                   </span>
                 </div>
   
                 {/* CONTENT */}
                 <div className="p-4 min-h-[140px] flex flex-col justify-between">
                   <h3 className="font-semibold leading-snug text-white line-clamp-2">
                     {blog.title}
                   </h3>
   
                   <p className="text-gray-400 text-xs mt-3">
                     <span className="text-white">{blog.authorName}</span> •{" "}
                     {new Date(blog.createdAt).toLocaleDateString()} •{" "}
                     {blog.views} views
                   </p>
                 </div>
               </Link>
             ))}
   
           </div>
         </div>
   
         {/* MARQUEE ANIMATION */}
         <style>{`
           @keyframes marquee {
             0% { transform: translateX(0); }
             100% { transform: translateX(-50%); }
           }
           .animate-marquee {
             animation: marquee 20s linear infinite;
           }
         `}</style>
       </section>
  )
}

