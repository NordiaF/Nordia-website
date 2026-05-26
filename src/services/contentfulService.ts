import type { EntrySkeletonType } from "contentful";
import { getContentfulClient } from "@/lib/contentful/client";

export type ContentfulQueryOptions = {
  contentType: string;
  slug?: string;
  limit?: number;
  skip?: number;
  order?: string[];
  include?: number;
  preview?: boolean;
};

export type ContentfulCollectionResult<TEntry> = {
  items: TEntry[];
  total: number;
  skip: number;
  limit: number;
};

export async function fetchContentfulEntryCollection<TEntry>({
  contentType,
  slug,
  limit,
  skip,
  order = ["-fields.publishedDate"],
  include = 2,
  preview = false,
}: ContentfulQueryOptions): Promise<ContentfulCollectionResult<TEntry>> {
  const client = getContentfulClient(preview);
  const response = await client.getEntries<EntrySkeletonType>({
    content_type: contentType,
    order,
    include,
    ...(slug ? { "fields.slug": slug } : {}),
    ...(typeof limit === "number" ? { limit } : {}),
    ...(typeof skip === "number" ? { skip } : {}),
  });

  return {
    items: response.items as unknown as TEntry[],
    total: response.total,
    skip: response.skip,
    limit: response.limit,
  };
}

export async function fetchContentfulEntries<TEntry>({
  ...options
}: ContentfulQueryOptions): Promise<TEntry[]> {
  const response = await fetchContentfulEntryCollection<TEntry>(options);
  return response.items;
}

export async function fetchSingleContentfulEntry<TEntry>(
  options: ContentfulQueryOptions
): Promise<TEntry | null> {
  const [entry] = await fetchContentfulEntries<TEntry>({
    ...options,
    limit: 1,
  });

  return entry ?? null;
}
