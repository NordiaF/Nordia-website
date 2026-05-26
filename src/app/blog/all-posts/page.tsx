import type { Metadata } from "next";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import AllBlogPostsScreen from "@/screens/allBlogPostsScreen";
import {
  DEFAULT_BLOG_PAGE_SIZE,
  getPaginatedBlogPosts,
} from "@/services/blogService";
import {
  BLOG_PAGE_DESCRIPTION,
  buildBlogListSchema,
  buildBlogMetadata,
} from "@/lib/seo/blog";

export const dynamic = "force-dynamic";

type AllBlogPostsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

function parsePage(value?: string) {
  const parsedValue = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
}

export async function generateMetadata({
  searchParams,
}: AllBlogPostsPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const page = parsePage(resolvedSearchParams.page);

  return buildBlogMetadata({
    title:
      page === 1
        ? "All Blog Posts | Nordia Foundation"
        : `All Blog Posts - Page ${page} | Nordia Foundation`,
    description: BLOG_PAGE_DESCRIPTION,
    path: page === 1 ? "/blog/all-posts" : `/blog/all-posts?page=${page}`,
  });
}

export default async function AllBlogPostsPage({
  searchParams,
}: AllBlogPostsPageProps) {
  const resolvedSearchParams = await searchParams;
  const page = parsePage(resolvedSearchParams.page);
  const paginatedPosts = await getPaginatedBlogPosts({
    page,
    pageSize: DEFAULT_BLOG_PAGE_SIZE,
  });
  const schema = buildBlogListSchema({
    title:
      page === 1
        ? "All Blog Posts | Nordia Foundation"
        : `All Blog Posts - Page ${page} | Nordia Foundation`,
    description: BLOG_PAGE_DESCRIPTION,
    path: page === 1 ? "/blog/all-posts" : `/blog/all-posts?page=${page}`,
    posts: paginatedPosts.items,
  });

  return (
    <WebsiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AllBlogPostsScreen paginatedPosts={paginatedPosts} />
    </WebsiteLayout>
  );
}
