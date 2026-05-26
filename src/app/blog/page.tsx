import type { Metadata } from "next";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import BlogScreen from "@/screens/blogScreen";
import { getPaginatedBlogPosts } from "@/services/blogService";
import {
  BLOG_PAGE_DESCRIPTION,
  buildBlogListSchema,
  buildBlogMetadata,
} from "@/lib/seo/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildBlogMetadata({
  title: "Nordia Foundation Blog",
  description: BLOG_PAGE_DESCRIPTION,
  path: "/blog",
});

export default async function BlogPage() {
  const paginatedPosts = await getPaginatedBlogPosts({ page: 1, pageSize: 5 });
  const posts = paginatedPosts.items;
  const schema = buildBlogListSchema({
    title: "Nordia Foundation Blog",
    description: BLOG_PAGE_DESCRIPTION,
    path: "/blog",
    posts,
  });

  return (
    <WebsiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogScreen posts={posts} />
    </WebsiteLayout>
  );
}
