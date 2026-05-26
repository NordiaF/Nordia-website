import { cn } from "@/lib/cn";

const categoryStyles: Record<string, string> = {
  Health: "bg-primary text-white",
  Education: "bg-[#FAA629] text-black",
  Energy: "bg-[#FAA629] text-black",
  Finance: "bg-info text-white",
};

const defaultStyle = "bg-info-light text-white";

export function getCategoryBadgeClass(category: string): string {
  return cn(
    "inline-flex rounded px-2.5 py-1 text-xs font-semibold",
    categoryStyles[category] ?? defaultStyle
  );
}
