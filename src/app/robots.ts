import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://nordiafoundation.org",
    sitemap: "https://nordiafoundation.org/sitemap.xml",
  };
}
