import Image from "next/image";
import Link from "next/link";
import headingBg from "@/asset/images/headingBg.png";
import placeholderImage from "@/asset/images/missionImg.webp";
import BlogCategoryBadge from "@/components/blogCategoryBadge";
import {
  formatPublishedDate,
  formatReadTime,
} from "@/lib/blog/formatPostMeta";
import type { PaginatedBlogPosts } from "@/lib/contentful/types";
import Typography from "@/utils/Typography";

type AllBlogPostsScreenProps = {
  paginatedPosts: PaginatedBlogPosts;
};

function buildPageHref(page: number) {
  return `/blog/all-posts?page=${page}`;
}

export default function AllBlogPostsScreen({
  paginatedPosts,
}: AllBlogPostsScreenProps) {
  const { items, page, totalPages } = paginatedPosts;

  return (
    <div className="pb-20">
      <div
        className="flex h-40 w-full items-center justify-center bg-cover bg-center md:h-[239px]"
        style={{ backgroundImage: `url(${headingBg.src})` }}
      >
        <Typography.H1 className="w-full p-5 text-center text-white md:text-[88px]">
          Blog
        </Typography.H1>
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-16 lg:px-8">
        <Typography.H2 className="text-center text-[32px] text-[#111827]">
          All Blog Posts
        </Typography.H2>

        {items.length > 0 ? (
          <div className="mt-12 space-y-10">
            {items.map((post) => {
              const imageSrc = post.featuredImageUrl ?? placeholderImage.src;

              return (
                <article
                  key={post.id}
                  className="grid gap-6 border-b border-black/10 pb-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-center"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative block aspect-[16/10] overflow-hidden bg-[#EDF2F7]"
                  >
                    <Image
                      src={imageSrc}
                      alt={post.featuredImageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </Link>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <BlogCategoryBadge category={post.category} />
                      <p className="font-primary text-xs font-medium text-black sm:text-sm">
                        {formatReadTime(post.readTime)} |{" "}
                        {formatPublishedDate(post.publishedDate)}
                      </p>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block">
                      <Typography.H2 className="mt-5 text-[28px] leading-[1.3] text-[#262B44] transition-colors hover:text-primary sm:text-[34px]">
                        {post.title}
                      </Typography.H2>
                    </Link>

                    {post.excerpt ? (
                      <Typography.BigText className="mt-4 max-w-3xl text-[15px] text-black/65 sm:text-[16px]">
                        {post.excerpt}
                      </Typography.BigText>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 border border-black/10 bg-white px-6 py-12 text-center shadow-[0_10px_35px_rgba(12,24,45,0.06)]">
            <Typography.H2 className="text-[24px] text-[#262B44]">
              No blog posts found
            </Typography.H2>
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={buildPageHref(Math.max(1, page - 1))}
              aria-disabled={page === 1}
              className={`font-primary inline-flex min-w-24 items-center justify-center border px-5 py-3 text-sm font-semibold transition-colors ${
                page === 1
                  ? "pointer-events-none border-black/10 text-black/30"
                  : "border-[#1F2847] text-[#1F2847] hover:bg-[#1F2847] hover:text-white"
              }`}
            >
              Previous
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === page;

                return (
                  <Link
                    key={pageNumber}
                    href={buildPageHref(pageNumber)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-primary inline-flex h-11 w-11 items-center justify-center border text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-[#1F2847] bg-[#1F2847] text-white"
                        : "border-black/10 text-[#1F2847] hover:border-[#1F2847]"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
            </div>

            <Link
              href={buildPageHref(Math.min(totalPages, page + 1))}
              aria-disabled={page === totalPages}
              className={`font-primary inline-flex min-w-24 items-center justify-center border px-5 py-3 text-sm font-semibold transition-colors ${
                page === totalPages
                  ? "pointer-events-none border-black/10 text-black/30"
                  : "border-[#1F2847] text-[#1F2847] hover:bg-[#1F2847] hover:text-white"
              }`}
            >
              Next
            </Link>
          </div>
        ) : null}
      </section>
    </div>
  );
}
