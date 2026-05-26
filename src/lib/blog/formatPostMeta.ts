export function formatPublishedDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatReadTime(readTime: number | null): string {
  if (!readTime || readTime < 1) return "1 Min Read";
  return `${readTime} Min Read`;
}
