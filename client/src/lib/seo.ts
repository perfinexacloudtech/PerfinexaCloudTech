// /lib/seo.ts
import type { Metadata } from "next";
import { ORG_NAME, DOMAIN, CITY } from "@/lib/constant";
import { getPageMetadata } from "@/lib/Metadata"; // <-- You forgot this import

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: ORG_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    email: "perfinexacloudtech@gmail.com",
    telephone: "+91 9511961046",
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressCountry: "IN",
    },
    description:
      "Perfinexa CloudTech is a leading IT training institute offering Salesforce, MERN Stack, Java Full Stack & Python Full Stack training in Nagpur and online.",
    sameAs: [
      "https://www.instagram.com/perfinexa_technologies",
      "https://www.linkedin.com/company/perfinexacloudtech/posts/",
    ],
  };
}


export function getBlogSchema(blog: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: `${blog.title} - A ${blog.blogCategory} article by ${blog.authorName} at ${ORG_NAME}.`,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,

    author: {
      "@type": "Person",
      name: blog.authorName,
    },

    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${DOMAIN}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${blog.slug}`,
    },

    articleSection: blog.blogCategory,

    // Optional but safe
    isAccessibleForFree: true,
  };
}