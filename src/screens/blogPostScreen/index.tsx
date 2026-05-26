import Image from "next/image";
import Link from "next/link";
import BlogCategoryBadge from "@/components/blogCategoryBadge";
import RichTextContent from "@/components/richTextContent";
import {
  formatPublishedDate,
  formatReadTime,
} from "@/lib/blog/formatPostMeta";
import type { BlogPost } from "@/lib/contentful/types";
import Typography from "@/utils/Typography";
import placeholderImage from "@/asset/images/missionImg.webp";

type BlogPostScreenProps = {
  post: BlogPost;
  suggestedPosts?: BlogPost[];
};

function SuggestedPostCard({ post }: { post: BlogPost }) {
  const imageSrc = post.featuredImageUrl ?? placeholderImage.src;

  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group relative block aspect-[16/12] overflow-hidden bg-[#EDF2F7]"
      >
        <Image
          src={imageSrc}
          alt={post.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <BlogCategoryBadge category={post.category} />
        <p className="text-[11px] font-medium text-black/75">
          {formatReadTime(post.readTime)} | {formatPublishedDate(post.publishedDate)}
        </p>
      </div>

      <Link href={`/blog/${post.slug}`} className="block">
        <Typography.H3 className="mt-4 text-[24px] leading-[1.35] text-[#262B44] transition-colors hover:text-primary">
          {post.title}
        </Typography.H3>
      </Link>

      {post.excerpt ? (
        <Typography.Text className="mt-4 text-black/65">
          {post.excerpt}
        </Typography.Text>
      ) : null}
    </article>
  );
}

export default function BlogPostScreen({
  post,
  suggestedPosts = [],
}: BlogPostScreenProps) {
  const imageSrc = post.featuredImageUrl ?? placeholderImage.src;

  return (
    <article className="pb-16">
      <div className="mx-auto max-w-4xl px-6 pt-12">
        <Link
          href="/blog"
          className="text-sm font-medium text-info hover:underline"
        >
          &larr; Back to Blog
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <BlogCategoryBadge category={post.category} />
          <p className="text-sm text-black/55">
            {formatReadTime(post.readTime)} |{" "}
            {formatPublishedDate(post.publishedDate)}
          </p>
        </div>

        <Typography.H1 className="mt-6 text-[32px] leading-tight text-black sm:text-[40px]">
          {post.title}
        </Typography.H1>

        {post.excerpt ? (
          <Typography.BigText className="mt-4 text-[18px] leading-relaxed text-black/70">
            {post.excerpt}
          </Typography.BigText>
        ) : null}
      </div>

      <div className="relative mx-auto mt-10 aspect-[16/9] max-w-5xl px-6">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={post.featuredImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1024px"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-6">
        <RichTextContent document={post.content} />
      </div>

      {suggestedPosts.length > 0 ? (
        <section className="mx-auto mt-20 max-w-6xl border-t border-black/10 px-6 pt-14">
          <Typography.H2 className="text-[28px] text-[#111827] sm:text-[36px]">
            What to read next
          </Typography.H2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {suggestedPosts.map((suggestedPost) => (
              <SuggestedPostCard
                key={suggestedPost.id}
                post={suggestedPost}
              />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
