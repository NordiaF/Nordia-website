import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import Typography from "@/utils/Typography";
import { cn } from "@/lib/cn";

export type PromiseSectionProps = {
  title: string;
  body: React.ReactNode;
  image: StaticImageData | string;
  bgColor?: string;
  textColor: string;
  backgroundImg?: StaticImageData | string;
  className?: string;
  reverse?: boolean;
};

export default function PromiseSection({
  title,
  body,
  image,
  textColor,
  bgColor,
  backgroundImg,
  className,
  reverse = false,
}: PromiseSectionProps) {
  const backgroundImageUrl =
    typeof backgroundImg === "string" ? backgroundImg : backgroundImg?.src;

  const sectionStyle: CSSProperties = bgColor
    ? { backgroundColor: bgColor }
    : backgroundImageUrl
      ? { backgroundImage: `url(${backgroundImageUrl})` }
      : {};

  return (
    <section
      className={cn(
        "w-full py-10 rounded-[6px] bg-cover overflow-hidden",
        className,
      )}
      style={sectionStyle}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-20 rounded-2xl bg-transparent px-6 md:flex-row md:items-center md:px-10">
        <div className={`flex-1 ${reverse ? "md:order-1" : ""}`}>
          <div className="overflow-hidden rounded-2xl bg-black/5">
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className={`flex-1 ${textColor === "black" ? "text-black" : "text-white"}`}
        >
          <Typography.H1 className="mb-3 text-[28px] sm:text-[32px] md:text-[36px]">
            {title}
          </Typography.H1>

          {body}
        </div>
      </div>
    </section>
  );
}
