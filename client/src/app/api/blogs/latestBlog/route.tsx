import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/blogs";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({})
      .select("title slug authorName createdAt thumbnailUrl blogCategory views")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    const serializedBlogs = blogs.map((blog: any) => ({
      _id: blog._id.toString(),
      title: blog.title,
      slug: blog.slug,
      authorName: blog.authorName,
      blogCategory: blog.blogCategory,
      views: blog.views ?? 0,
      createdAt: blog.createdAt?.toISOString(),
      thumbnailUrl: blog.thumbnailUrl || null, 
    }));

    return NextResponse.json(serializedBlogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
