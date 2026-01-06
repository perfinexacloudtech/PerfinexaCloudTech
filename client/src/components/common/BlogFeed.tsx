"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { format } from "date-fns";

// Receive blogs as a prop from the parent page
export default function BlogFeed({
  initialBlogs = [],
}: {
  initialBlogs: any[];
}) {
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/blogs/categories");
      const data: string[] = await res.json();

      setCategories(["All", ...data]);
    };

    fetchCategories();
  }, []);

  const filteredBlogs =
    activeCategory === "All"
      ? initialBlogs
      : initialBlogs.filter((blog) => blog.blogCategory === activeCategory);

  return (
    <>
      <Navbar />

      <section className="relative w-full bg-[#070F3A] pt-20 pb:20  px-4 md:pt-44 md:pb-20 md:px-8 overflow-hidden ">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] pointer-events-none opacity-90">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#7FB5B5"
              d="M140,100 C160,120 180,80 200,100 L200,200 L100,200 C120,180 120,140 140,100 Z"
            />
            <path
              fill="#FDBA36"
              d="M120,30 C150,10 180,50 160,80 C140,110 100,100 80,70 C60,40 90,50 120,30 Z"
              transform="translate(20, -10)"
            />
            <path
              fill="none"
              stroke="#153F3E"
              strokeWidth="1.5"
              d="M90,75 C70,120 130,140 160,80"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10  py-8 md:py-0">
          <h1 className="text-white text-4xl md:text-8xl font-serif font-medium mb-6 md:mb-12 tracking-tight">
            Blog
          </h1>

          {/* Filter Bar */}
          <div className="inline-flex items-center bg-transparent backdrop-blur-md border border-white/20 rounded-full p-1.5 pr-8 max-w-full overflow-x-auto no-scrollbar shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
      px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
      ${
        activeCategory === cat
          ? " backdrop-blur-lg text-white bg-white/10 shadow-sm"
          : "text-zinc-300 hover:text-white bg-transparent"
      }
    `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="bg-[#070F3A] min-h-screen">
        <div className="max-w-5xl mx-auto  px-4 lg:px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {filteredBlogs.map((blog: any) => (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.slug}
                className="group flex flex-col h-full bg-transparent backdrop-blur border border-zinc-200/20 rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Placeholder Image */}
                <div className="h-20 md:h-48 bg-zinc-100/10 w-full relative">
    
                </div>

                {/* Content */}
                <div className=" p-2 md:p-6 flex-1 flex flex-col">

                  <h2 className=" text-sm md:text-xl font-bold text-white mb-1 md:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Clean HTML tags from content for preview */}
                  <p className="text-zinc-500  text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-1 md:mb-4 flex-1">
                    {blog.content?.replace(/<[^>]*>?/gm, "") || ""}
                  </p>

                <div className="flex flex-col md:flex-row md:items-center gap-2 text-xs text-white/20 mb-3 font-medium border-t border-white/10 pt-3 mt-auto">
                    <span className="hidden md:block">{blog.authorName}</span>
                    <span className="hidden md:block">|</span>
                    <span>
                      {blog.createdAt
                        ? format(new Date(blog.createdAt), "MMM d, yyyy")
                        : "No Date"}
                    </span>
                  </div>
                 
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center  text-zinc-400">
              No blogs found for category "{activeCategory}".
            </div>
          )}
        </div>
      </section>
    </>
  );
}
