import Link from "next/link";
import { cn } from "@/lib/cn";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:brightness-95 active:scale-[0.98]";

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