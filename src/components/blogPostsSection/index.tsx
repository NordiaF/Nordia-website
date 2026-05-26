import Image from "next/image";
import Link from "next/link";
import BlogCategoryBadge from "@/components/blogCategoryBadge";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {
  formatPublishedDate,
  formatReadTime,
} from "@/lib/blog/formatPostMeta";
import type { BlogPost } from "@/lib/contentful/types";
import Typography from "@/utils/Typography";
import placeholderImage from "@/asset/images/missionImg.webp";

type BlogPostsSectionProps = {
  posts: BlogPost[];
  isLoading?: boolean;
};

function PostMeta({
  post,
  className = "",
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <p className={`text-sm font-medium text-black ${className}`}>
      {formatReadTime(post.readTime)} | {formatPublishedDate(post.publishedDate)}
    </p>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  const imageSrc = post.featuredImageUrl ?? placeholderImage.src;

  return (
    <article className="border border-black/10 bg-white p-5 shadow-[0_10px_35px_rgba(12,24,45,0.06)] sm:p-8">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={post.featuredImageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <BlogCategoryBadge category={post.category} />
        <PostMeta post={post} className="text-xs sm:text-sm" />
      </div>

      <Typography.H2 className="mt-5 text-[22px] leading-[1.3] text-[#262B44] sm:text-[30px]">
        {post.title}
      </Typography.H2>

      {post.excerpt ? (
        <Typography.BigText className="mt-4 max-w-2xl text-[15px] leading-8 text-black/70 sm:text-[16px]">
          {post.excerpt}
        </Typography.BigText>
      ) : null}

      <div className="mt-8">
        <PrimaryButton
          href={`/blog/${post.slug}`}
          className="min-w-52 rounded-none bg-[#F6BA63] px-8 py-4 text-[18px] font-bold text-[#1F2847]"
        >
          Read More &gt;
        </PrimaryButton>
      </div>
    </article>
  );
}

function PostListItem({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block px-6 py-6 transition-colors hover:bg-[#DDECF8] focus:bg-[#DDECF8] focus:outline-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BlogCategoryBadge category={post.category} />
        <PostMeta post={post} className="text-xs sm:text-sm" />
      </div>
      <Typography.H2 className="mt-5 max-w-[22rem] text-[18px] leading-[1.45] text-[#262B44] sm:text-[22px]">
        {post.title}
      </Typography.H2>
    </Link>
  );
}

export default function BlogPostsSection({
  posts,
  isLoading = false,
}: BlogPostsSectionProps) {
  if (isLoading) {
    return (
      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="border border-black/10 bg-white px-6 py-12 text-center shadow-[0_10px_35px_rgba(12,24,45,0.06)]">
          <Typography.H2 className="text-[24px] text-[#262B44]">
            Loading blog posts...
          </Typography.H2>
          <Typography.BigText className="mt-3 text-black/65">
            Fetching the latest posts from Contentful.
          </Typography.BigText>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="border border-black/10 bg-white px-6 py-12 text-center shadow-[0_10px_35px_rgba(12,24,45,0.06)]">
          <Typography.H2 className="text-[24px] text-[#262B44]">
            No blog posts found
          </Typography.H2>
          <Typography.BigText className="mt-3 text-black/65">
            This section is powered by Contentful. Publish blog entries there to
            populate the blog page.
          </Typography.BigText>
        </div>
      </section>
    );
  }

  const [featured, ...rest] = posts;
  const sidebarPosts = rest.slice(0, 4);

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.95fr)] xl:items-start">
        <div>
          <Typography.H2 className="text-[32px] font-bold text-[#262B44] sm:text-[40px]">
            Featured Post
          </Typography.H2>

          <div className="mt-8">
            <FeaturedPostCard post={featured} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <Typography.H2 className="text-[32px] font-bold text-[#262B44] sm:text-[40px]">
              All Posts
            </Typography.H2>
            {rest.length > 0 ? (
              <Link
                href="/blog/all-posts"
                className="text-base font-medium text-primary hover:underline"
              >
                See More
              </Link>
            ) : null}
          </div>

          {sidebarPosts.length > 0 ? (
            <div className="mt-8 divide-y divide-black/10 bg-white shadow-[0_10px_35px_rgba(12,24,45,0.04)]">
              {sidebarPosts.map((post) => (
                <PostListItem key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-black/10 bg-white px-6 py-10 text-center text-black/65 shadow-[0_10px_35px_rgba(12,24,45,0.04)]">
              More posts will appear here as soon as they are published.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
