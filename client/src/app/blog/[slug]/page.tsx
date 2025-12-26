// app/blog/[slug]/page.tsx
import { blogs } from "@/data/blogs";
import BlogLayout from "@/components/common/BlogLayout";
import Script from "next/script";
import ScrollTop from "@/components/common/ScrollTop";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params;

  console.log("Slug received:", slug);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center mt-20 text-xl">Blog Not Found</div>
  }

  return (
    <div className="bg-black text-white">
      <Script
        id={`blog-jsonld-${blog.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} 
      />
      <ScrollTop />
      <BlogLayout data={blog} />
    </div>
  );
}
