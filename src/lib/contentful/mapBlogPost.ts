import type { Asset } from "contentful";
import type { BlogEntry, BlogPost } from "./types";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function resolveAssetUrl(asset?: Asset): string | null {
  const url = asset?.fields?.file?.url;
  if (typeof url !== "string" || !url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
}

function resolveAssetAlt(asset?: Asset, fallback = ""): string {
  const description = asset?.fields?.description;
  if (typeof description === "string" && description.trim()) {
    return description;
  }
  const title = asset?.fields?.title;
  if (typeof title === "string" && title.trim()) {
    return title;
  }
  return fallback;
}

export function mapBlogEntry(entry: BlogEntry): BlogPost {
  const fields = entry.fields as BlogEntry["fields"];
  const title = fields.title;
  const slug = fields.slug?.trim() || slugify(title);

  return {
    id: entry.sys.id,
    title,
    slug,
    excerpt: fields.excerpt?.trim() ?? "",
    content: fields.content,
    featuredImageUrl: resolveAssetUrl(fields.featuredImage),
    featuredImageAlt: resolveAssetAlt(fields.featuredImage, title),
    category: fields.category,
    readTime: fields.readTime ?? null,
    publishedDate: fields.publishedDate,
    seoTitle: fields.seoTitle,
    seoDescription: fields.seoDescription,
  };
}
