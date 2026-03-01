import Link from "next/link";
import { cn } from "@/lib/cn";

type BlackButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function BlackButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: BlackButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] w-full";

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, className)}
    >
      {children}
    </button>
  );
}
