import type { ReactNode } from "react";
import Typography from "@/utils/Typography";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { cn } from "@/lib/cn";

export type ApproachItem = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export type ApproachSectionProps = {
  heading: ReactNode;
  description: ReactNode;
  items: ApproachItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
};

export default function ApproachSection({
  heading,
  description,
  items,
  ctaText,
  ctaHref,
  className,
}: ApproachSectionProps) {
  return (
    <section className={cn("w-full bg-[#E2F0FB] py-14", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Typography.H1 className="text-[28px] sm:text-[32px] md:text-[36px] text-black">
            {heading}
          </Typography.H1>
          <Typography.BigText className="mt-3 mx-auto max-w-4xl text-[15px] sm:text-[24px] text-black/80">
            {description}
          </Typography.BigText>
        </div>

        <div className={`mt-10 grid grid-cols-1 gap-8 md:grid-cols-${items.length}`}>
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {item.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  {item.icon}
                </div>
              )}

              <Typography.H3 className="text-[18px] sm:text-[22px]">
                {item.title}
              </Typography.H3>

              <Typography.BigText className="mt-2 max-w-xs ">
                {item.description}
              </Typography.BigText>
            </article>
          ))}
        </div>

        {ctaText && ctaHref && (
          <div className="mt-10 flex justify-center">
            <PrimaryButton className="w-full sm:w-[60%] bg-[#F6BA63]" href={ctaHref}>
              {ctaText}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

