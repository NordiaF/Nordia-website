import { createClient, type ContentfulClientApi } from "contentful";

function getEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getContentfulClient(
  preview = false
): ContentfulClientApi<undefined> {
  const spaceId = getEnv("CONTENTFUL_SPACE_ID");
  const environment = process.env.CONTENTFUL_ENVIRONMENT?.trim() || "master";
  const accessToken = preview
    ? getEnv("CONTENTFUL_PREVIEW_TOKEN")
    : getEnv("CONTENTFUL_ACCESS_TOKEN");

  return createClient({
    space: spaceId,
    environment,
    accessToken,
  });
}
