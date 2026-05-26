import { mapBlogEntry } from "@/lib/contentful/mapBlogPost";
import type {
  BlogEntry,
  BlogPost,
  PaginatedBlogPosts,
} from "@/lib/contentful/types";
import {
  fetchContentfulEntryCollection,
  fetchContentfulEntries,
  fetchSingleContentfulEntry,
} from "@/services/contentfulService";

const BLOG_CONTENT_TYPE =
  process.env.CONTENTFUL_BLOG_CONTENT_TYPE?.trim() || "blog";
const BLOG_ENTRY_INCLUDE_DEPTH = 2;
export const DEFAULT_BLOG_PAGE_SIZE = 5;

type PaginatedBlogPostsOptions = {
  page?: number;
  pageSize?: number;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await fetchContentfulEntries<BlogEntry>({
      contentType: BLOG_CONTENT_TYPE,
      include: BLOG_ENTRY_INCLUDE_DEPTH,
    });
    return entries.map(mapBlogEntry);
  } catch (error) {
    console.error("Failed to fetch blog posts from Contentful:", error);
    return [];
  }
}

export async function getPaginatedBlogPosts({
  page = 1,
  pageSize = DEFAULT_BLOG_PAGE_SIZE,
}: PaginatedBlogPostsOptions = {}): Promise<PaginatedBlogPosts> {
  const safePage = Math.max(1, Math.floor(page));
  const safePageSize = Math.max(1, Math.floor(pageSize));
  const skip = (safePage - 1) * safePageSize;

  try {
    const response = await fetchContentfulEntryCollection<BlogEntry>({
      contentType: BLOG_CONTENT_TYPE,
      include: BLOG_ENTRY_INCLUDE_DEPTH,
      limit: safePageSize,
      skip,
    });

    return {
      items: response.items.map(mapBlogEntry),
      total: response.total,
      page: safePage,
      pageSize: safePageSize,
      totalPages: Math.max(1, Math.ceil(response.total / safePageSize)),
    };
  } catch (error) {
    console.error("Failed to fetch paginated blog posts from Contentful:", error);

    return {
      items: [],
      total: 0,
      page: safePage,
      pageSize: safePageSize,
      totalPages: 1,
    };
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const entry = await fetchSingleContentfulEntry<BlogEntry>({
      contentType: BLOG_CONTENT_TYPE,
      slug,
      include: BLOG_ENTRY_INCLUDE_DEPTH,
    });
    if (!entry) return null;

    return mapBlogEntry(entry);
  } catch (error) {
    console.error(`Failed to fetch blog post "${slug}" from Contentful:`, error);
    return null;
  }
}

export async function getSuggestedBlogPosts(
  currentSlug: string,
  limit = 3
): Promise<BlogPost[]> {
  const posts = await getBlogPosts();

  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
