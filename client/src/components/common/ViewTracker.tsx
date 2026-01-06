"use client";
import { useEffect } from "react";

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const key = `viewed-${slug}`;

    if (!localStorage.getItem(key)) {
      fetch("/api/blogs/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      localStorage.setItem(key, "true");
    }
  }, [slug]);

  return null;
}
