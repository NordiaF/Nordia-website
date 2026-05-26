"use client";

import { useEffect, useState } from "react";
import BlogScreen from "@/screens/blogScreen";
import type { BlogPost, PaginatedBlogPosts } from "@/lib/contentful/types";

export default function BlogPageClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const response = await fetch("/api/blog?page=1&pageSize=5", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Failed to load blog posts: ${response.status}`);
        }

        const data = (await response.json()) as PaginatedBlogPosts;

        if (isMounted) {
          setPosts(data.items);
        }
      } catch (error) {
        console.error("Failed to load blog posts from /api/blog:", error);
        if (isMounted) {
          setPosts([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return <BlogScreen posts={posts} isLoading={isLoading} />;
}
