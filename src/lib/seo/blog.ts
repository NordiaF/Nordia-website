import type { Metadata } from "next";
import type { BlogPost } from "@/lib/contentful/types";

export const SITE_URL = "https://nordiafoundation.org";
export const SITE_NAME = "Nordia Foundation";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const BLOG_PAGE_DESCRIPTION =
  "Explore Nordia Foundation blog posts on education, health, finance, energy, and community impact.";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function resolveBlogImage(post?: BlogPost | null) {
  return post?.featuredImageUrl || DEFAULT_OG_IMAGE;
}

export function buildBlogMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const resolvedImage = image || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}

export function buildBlogListSchema({
  title,
  description,
  path,
  posts,
}: {
  title: string;
  description: string;
  path: string;
  posts: BlogPost[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: resolveBlogImage(post),
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    articleSection: post.category,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    publisher: {
      "@type": "NGO",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
  };
}
