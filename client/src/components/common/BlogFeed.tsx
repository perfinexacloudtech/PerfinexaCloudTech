"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";

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

      <section className="relative w-full bg-[#2A1B5E] pt-20 pb-6  px-4 md:pt-30 md:pb-10 md:px-8 overflow-hidden ">
        <div className="max-w-5xl mx-auto relative z-10  py-8 md:py-4">
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

      <section className="bg-white min-h-screen py-6">
        <div className="max-w-5xl mx-auto  px-4 lg:px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 auto-rows-fr">
            {filteredBlogs.map((blog: any) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col h-full bg-transparent backdrop-blur border border-black/30 rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {blog.thumbnailUrl ? (
                  <Image
                    src={blog.thumbnailUrl}
                    width={150}
                    height={150}
                    alt={blog.title}
                    className="relative w-full aspect-[16/9] bg-[#2A1B5E] overflow-hidden"
                  />
                ) : (
                  <div className="w-full aspect-[16/9] bg-[#2A1B5E] flex items-center justify-center px-4">
                    <h3 className="text-white text-center text-lg font-semibold line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                )}

                <div className="p-2 md:p-4 flex flex-col flex-1">
                  <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-zinc-500 text-xs md:text-sm line-clamp-3 mb-2">
                    {blog.content?.replace(/<[^>]*>?/gm, "") || ""}
                  </p>

                 
                </div>
              </Link>
            ))}
          </div>

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
