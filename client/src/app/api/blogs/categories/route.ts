import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Blog from "@/models/blogs"

export async function GET() {
  try {
    await connectDB()

    const categories = await Blog.distinct("blogCategory")

    return NextResponse.json(categories, { status: 200 })
  } catch (error) {
    console.error("Category fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    )
  }
}
