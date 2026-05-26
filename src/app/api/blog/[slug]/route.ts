import { NextResponse } from "next/server";
import { getBlogPostBySlug } from "@/services/blogService";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  try {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to serve blog post API response:", error);

    return NextResponse.json(
      { message: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
