import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Blog from "@/models/blogs"
import slugify from "slugify"

export async function POST(req: Request) {
  try {
    const { title, content, authorName, blogCategory } = await req.json()

    if (!title || !content || !authorName || !blogCategory) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    await connectDB()

    const cleanTitle = title.trim()

    let slug = slugify(cleanTitle, {
      lower: true,
      strict: true
    })

    // ensure unique slug
    let count = 1
    while (await Blog.findOne({ slug })) {
      slug = `${slugify(cleanTitle, { lower: true, strict: true })}-${count}`
      count++
    }

    const blog = await Blog.create({
      title: cleanTitle,
      slug,
      content,
      authorName,
      blogCategory
    })

    return NextResponse.json({ blog }, { status: 201 })

  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}


export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const limitParam = searchParams.get("limit");
    const trending = searchParams.get("trending");
    const category = searchParams.get("category");

    let query = Blog.find({});

    // 🔥 TRENDING LOGIC
    if (trending === "true") {
      query = query.sort({ views: -1, createdAt: -1 });
    } else {
      query = query.sort({ createdAt: -1 });
    }

    // 🏷️ CATEGORY FILTER
    if (category) {
      query = query.where("blogCategory").equals(category);
    }

    // 🔢 LIMIT
    if (limitParam) {
      const limit = Number(limitParam);
      if (!isNaN(limit)) {
        query = query.limit(limit);
      }
    }

    const blogs = await query;

    return NextResponse.json(
      { success: true, data: blogs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
