

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { Blog } from "@/types/model";

const FALLBACK_IMAGE = "/images/default-thumbnail.jpg";

interface Props {
  trandingBlog: Blog[];
  loading?: boolean;
}

export default function TrandingBlogCard({
  trandingBlog = [],
  loading = false,
}: Props) {
  useEffect(() => {
    if (!loading && trandingBlog.length) {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [loading, trandingBlog]);

  const marqueeText =
    "Featured Work • Tech Updates • Insights & Blogs • ";

  return (
    <section className=" py-16 px-4">
      <div className="overflow-hidden border-y bg-slate-200 border-gray-800 py-4 mb-6 md:py-6 md:mb-14">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-2xl sm:text-5xl font-bold uppercase tracking-wide opacity-70"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

  <div
  className="
    border border-zinc-300
    flex md:grid  
    md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
    overflow-x-auto md:overflow-visible
    snap-x snap-mandatory
    scroll-smooth
    gap-4
  "
>
  {loading
    ? Array.from({ length: 5 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))
    : trandingBlog.map((blog) => (
        <Link
          key={blog._id}
          href={`/blog/${blog.slug}`}
          className="
            blog-card
            min-w-[80%] sm:min-w-[45%] md:min-w-0
            border border-zinc-300
            overflow-hidden
            snap-start
            transition-transform
            hover:scale-105
          "
        >
          {/* Thumbnail */}
          <div className="relative w-full aspect-[16/9] bg-[#2A1B5E]">
            <Image
              src={
                blog.thumbnailUrl?.startsWith(
                  "https://res.cloudinary.com"
                )
                  ? blog.thumbnailUrl
                  : FALLBACK_IMAGE
              }
              fill
              alt={blog.title}
              className="object-cover"
            />
            <span className="absolute top-2 left-2 text-blue-400 text-xs px-2 py-1 rounded">
              {blog.blogCategory}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 min-h-[130px] flex flex-col justify-between">
            <h3 className="font-semibold leading-snug line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              <span>{blog.authorName}</span> •{" "}
              {new Date(blog.createdAt).toLocaleDateString()} •{" "}
              {blog.views} views
            </p>
          </div>
        </Link>
      ))}
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
  );
}

export const SkeletonCard = () => (
  <div className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden animate-pulse">
    <div className="aspect-[16/9] bg-gray-700" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-700 rounded w-1/2" />
    </div>
  </div>
);
