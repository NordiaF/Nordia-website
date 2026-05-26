import type { Metadata } from "next";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import AllBlogPostsScreen from "@/screens/allBlogPostsScreen";
import {
  DEFAULT_BLOG_PAGE_SIZE,
  getPaginatedBlogPosts,
} from "@/services/blogService";

export const dynamic = "force-dynamic";

type AllBlogPostsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export const metadata: Metadata = {
  title: "All Blog Posts",
  description: "Browse every blog post published by Nordia Foundation.",
};

function parsePage(value?: string) {
  const parsedValue = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
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

  return (
    <WebsiteLayout>
      <AllBlogPostsScreen paginatedPosts={paginatedPosts} />
    </WebsiteLayout>
  );
}
