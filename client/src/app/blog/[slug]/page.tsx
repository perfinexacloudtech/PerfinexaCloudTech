import connectDB from "@/lib/db";
import Blog from "@/models/blogs";
import BlogLayout from "@/components/common/BlogLayout";
import ViewTracker from "@/components/common/ViewTracker";
import { notFound } from "next/navigation";
import { getBlogSchema } from "@/lib/seo";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  await connectDB();

  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) return notFound();

  const serializedBlog = {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
    updatedAt: blog.updatedAt?.toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogSchema(serializedBlog)),
        }}
      />

      <ViewTracker slug={blog.slug} />
      <BlogLayout data={serializedBlog} />
    </>
  );
}
