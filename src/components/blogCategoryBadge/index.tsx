import { getCategoryBadgeClass } from "@/lib/blog/categoryStyles";

type BlogCategoryBadgeProps = {
  category: string;
};

export default function BlogCategoryBadge({ category }: BlogCategoryBadgeProps) {
  return <span className={getCategoryBadgeClass(category)}>{category}</span>;
}
