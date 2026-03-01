import Link from "next/link";
import Typography from "@/utils/Typography";
import { cn } from "@/lib/cn";

export type ActionTileItem = {
  label: string;
  href: string;
  Icon: React.ReactNode
  variant?: "primary" | "accent";
};

export type ActionTilesProps = {
  items: ActionTileItem[];
  className?: string;
};

export default function ActionTiles({ items, className }: ActionTilesProps) {
  return (
    <section className={cn("w-full py-16", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded md:grid-cols-3">
          {items.map((item) => {
            const isAccent = item.variant === "accent";
            const tileBg = isAccent ? "bg-accent" : "bg-info";
            const fg = isAccent ? "text-black" : "text-white";

            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "flex min-h-[110px] items-center justify-center px-8 py-8 text-center transition hover:brightness-95",
                  tileBg,
                  fg
                )}
              >
                <div className="flex flex-col items-center gap-3">
                  {item.Icon}
                  <Typography.H3 className={cn("font-medium", fg)}>
                    {item.label}
                  </Typography.H3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

