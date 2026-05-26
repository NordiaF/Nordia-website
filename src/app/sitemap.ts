import type { MetadataRoute } from "next";
import {
  DEFAULT_BLOG_PAGE_SIZE,
  getBlogPosts,
  getPaginatedBlogPosts,
} from "@/services/blogService";

const baseUrl = "https://nordiafoundation.org";

const routes = [
  "",
  "/about",
  "/what-we-do",
  "/events-and-outreaches",
  "/contact",
  "/blog",
  "/blog/all-posts",
  "/power-your-productivity",
];

function resolveLastModified(date: string) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}

function resolveChangeFrequency(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  return route === "" ? "weekly" : "monthly";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = await getBlogPosts();
  const paginatedPosts = await getPaginatedBlogPosts({
    page: 1,
    pageSize: DEFAULT_BLOG_PAGE_SIZE,
  });
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: resolveLastModified(post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const paginatedRoutes = Array.from(
    { length: Math.max(0, paginatedPosts.totalPages - 1) },
    (_, index) => ({
      url: `${baseUrl}/blog/all-posts?page=${index + 2}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: resolveChangeFrequency(route),
      priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
    })),
    ...paginatedRoutes,
    ...postRoutes,
  ];
}
