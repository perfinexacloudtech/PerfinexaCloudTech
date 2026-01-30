import connectDB from "@/lib/db";
import Blog from "@/models/blogs";
import TrandingBlogCard from "../common/TrandingBlogCard";

export const revalidate = 300;

export default async function FeaturedNews() {
  await connectDB();

  const blogs = await Blog.find({})
    .select("title slug content authorName createdAt thumbnail")
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  const serializedBlogs = blogs.map(blog => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
  }));

  return <TrandingBlogCard trandingBlog={serializedBlogs} />;
}
