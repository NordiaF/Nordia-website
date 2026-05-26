import type { Document } from "@contentful/rich-text-types";
import type { Asset } from "contentful";

export type BlogFields = {
  title: string;
  slug?: string;
  excerpt?: string;
  content: Document;
  featuredImage?: Asset;
  category: string;
  author?: unknown;
  readTime?: number;
  publishedDate: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogEntry = {
  sys: { id: string };
  fields: BlogFields;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  featuredImageUrl: string | null;
  featuredImageAlt: string;
  category: string;
  readTime: number | null;
  publishedDate: string;
  seoTitle: string;
  seoDescription: string;
};

export type PaginatedBlogPosts = {
  items: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
