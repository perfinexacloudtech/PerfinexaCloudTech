import type { Metadata } from "next";

export function getPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const baseUrl = "https://www.perfinexacloudtech.com";
  const canonicalUrl = path
    ? `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
    : baseUrl;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Perfinexa CloudTech",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.png",
    },
  };
}

