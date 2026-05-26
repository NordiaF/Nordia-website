import type { EntrySkeletonType } from "contentful";
import { getContentfulClient } from "@/lib/contentful/client";

type ContentfulOrderField =
  | "fields.publishedDate"
  | "-fields.publishedDate"
  | "sys.createdAt"
  | "-sys.createdAt";

type ContentfulIncludeDepth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ContentfulQueryOptions = {
  contentType: string;
  slug?: string;
  limit?: number;
  skip?: number;
  order?: ContentfulOrderField[];
  include?: ContentfulIncludeDepth;
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
    // The SDK's generic order typing is narrower than the runtime API accepts.
    order: order as never,
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
