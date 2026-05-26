import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import BlogPostScreen from "@/screens/blogPostScreen";
import {
  getBlogPostBySlug,
  getSuggestedBlogPosts,
} from "@/services/blogService";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const suggestedPosts = await getSuggestedBlogPosts(slug, 3);

  return (
    <WebsiteLayout>
      <BlogPostScreen post={post} suggestedPosts={suggestedPosts} />
    </WebsiteLayout>
  );
}
