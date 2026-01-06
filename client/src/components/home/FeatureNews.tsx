import TrandingBlogCard from "../common/TrandingBlogCard";

async function getBlogs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${apiUrl}/api/blogs?trending=true&limit=5`, {
      cache: "no-store", // Ensures fresh data on every load
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText);
      return { data: [] };
    }

    return res.json();
  } catch (error) {
    console.error("Error connecting to API:", error);
    return { data: [] };
  }
}

export default async function FeaturedNews() {
   const { data: blogs } = await getBlogs()

  return <TrandingBlogCard trandingBlog={blogs} />;
}
