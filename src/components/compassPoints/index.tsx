import PrimaryButton from "@/components/buttons/PrimaryButton";
import Typography from "@/utils/Typography";
import { cn } from "@/lib/cn";

export type CompassPointItem = {
  letter: string;
  title: string;
  description: string;
  bgColor: string; // hex or any valid css color
  textColor?: string; // defaults based on background
};

export type CompassPointsProps = {
  heading: string;
  subheading?: string;
  items: CompassPointItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
};

function isLightColor(color?: string) {
  if (!color) return false;
  const hex = color.trim();
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex);
  if (!m) return false;
  let h = m[1];
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  // Relative luminance (approx). Higher means lighter.
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 170;
}

export default function CompassPoints({
  heading,
  subheading = "These Four Values Guide Everything We Do:",
  items,
  ctaText = "",
  ctaHref = "",
  className,
}: CompassPointsProps) {
  return (
    <section className={cn("w-full py-12", className)}>
      <div className="mx-auto w-[90%]">
        <div className="text-center">
          <Typography.H2 className="text-black sm:text-[36px] md:text-[44px]">{heading}</Typography.H2>
          {subheading ? (
            <Typography.BigText className="mt-2 md:text-[24px] text-black/70">
              {subheading}
            </Typography.BigText>
          ) : null}
        </div>

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => {
            const isLight = isLightColor(item.bgColor);
            const fg = item.textColor ?? (isLight ? "#000000" : "#ffffff");
            const muted = isLight ? "rgba(0,0,0,0.70)" : "rgba(255,255,255,0.70)";

            return (
              <article
                key={`${item.letter}-${item.title}`}
                className="px-6 py-8 text-center"
                style={{ backgroundColor: item.bgColor, color: fg }}
              >
                <Typography.H2 className="font-bold tracking-widest">
                  {item.letter}
                </Typography.H2>
                <Typography.H3 className="mt-3 text-sm font-semibold">{item.title}</Typography.H3>
                <Typography.Text className="mt-2 text-xs leading-5" style={{ color: muted }}>
                  {item.description}
                </Typography.Text>
              </article>
            );
          })}
        </div>

        {ctaText ? (
          <div className="mt-8 flex justify-center">
            <PrimaryButton
              href={ctaHref}
              className="w-full sm:w-[55%] rounded bg-[#F6BA63] px-10"
            >
              {ctaText}
            </PrimaryButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}

