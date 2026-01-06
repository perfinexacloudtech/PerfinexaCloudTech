import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/blogs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;
    console.log("API SLUG:", slug);

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      console.log("BLOG NOT FOUND IN DB");
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error("BLOG API ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
