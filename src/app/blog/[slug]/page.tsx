import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebsiteLayout from "@/components/layouts/WebsiteLayout";
import BlogPostScreen from "@/screens/blogPostScreen";
import {
  getBlogPostBySlug,
  getSuggestedBlogPosts,
} from "@/services/blogService";
import {
  buildBlogMetadata,
  buildBlogPostingSchema,
  resolveBlogImage,
} from "@/lib/seo/blog";

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
    return {
      title: "Post Not Found | Nordia Foundation",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seoTitle = post.seoTitle || post.title;
  const seoDescription = post.seoDescription || post.excerpt;
  const metadata = buildBlogMetadata({
    title: seoTitle,
    description: seoDescription,
    path: `/blog/${post.slug}`,
    image: resolveBlogImage(post),
    type: "article",
  });

  return {
    ...metadata,
    keywords: [post.category, "Nordia Foundation blog", "community impact"],
    openGraph: {
      ...metadata.openGraph,
      publishedTime: post.publishedDate,
      section: post.category,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const suggestedPosts = await getSuggestedBlogPosts(slug, 3);
  const schema = buildBlogPostingSchema(post);

  return (
    <WebsiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPostScreen post={post} suggestedPosts={suggestedPosts} />
    </WebsiteLayout>
  );
}
