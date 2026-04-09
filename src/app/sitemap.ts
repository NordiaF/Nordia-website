import type { MetadataRoute } from "next";

const baseUrl = "https://nordiafoundation.org";

const routes = [
  "",
  "/about",
  "/what-we-do",
  "/events-and-outreaches",
  "/contact",
  "/blog",
  "/power-your-productivity",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
