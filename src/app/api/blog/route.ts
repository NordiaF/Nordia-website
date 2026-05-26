import { NextResponse } from "next/server";
import {
  DEFAULT_BLOG_PAGE_SIZE,
  getPaginatedBlogPosts,
} from "@/services/blogService";

function parsePositiveInteger(value: string | null, fallback: number) {
  if (!value) return fallback;

  const parsedValue = Number.parseInt(value, 10);

  return Number.isFinite(parsedValue) && parsedValue > 0
    ? parsedValue
    : fallback;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parsePositiveInteger(searchParams.get("page"), 1);
    const pageSize = parsePositiveInteger(
      searchParams.get("pageSize"),
      DEFAULT_BLOG_PAGE_SIZE
    );

    const posts = await getPaginatedBlogPosts({ page, pageSize });
    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to serve blog posts API response:", error);

    return NextResponse.json(
      { message: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
