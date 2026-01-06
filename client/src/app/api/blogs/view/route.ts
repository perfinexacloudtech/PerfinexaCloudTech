import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/models/blogs";

export async function POST(req: Request) {
  const { slug } = await req.json();

  if (!slug) {
    return NextResponse.json({ error: "Slug required" }, { status: 400 });
  }

  await connectDB();

  await Blog.findOneAndUpdate(
    { slug },
    { $inc: { views: 1 } }
  );

  return NextResponse.json({ success: true });
}
