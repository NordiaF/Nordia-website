import Image, { type StaticImageData } from "next/image";
import Typography from "@/utils/Typography";
import BlackButton from "@/components/buttons/BlackButton";
import { cn } from "@/lib/cn";

export type ImpactSnapshotSectionProps = {
  title: string;
  quote: string;
  description: React.ReactNode;
  buttonText: string;
  buttonHref: string;
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  image1Alt?: string;
  image2Alt?: string;
  className?: string;
};

export default function ImpactSnapshotSection({
  title,
  quote,
  description,
  buttonText,
  buttonHref,
  image1,
  image2,
  image1Alt,
  image2Alt,
  className,
}: ImpactSnapshotSectionProps) {
  return (
    <section
      className={cn(
        "w-full overflow-hidden rounded-md border border-white/30 bg-[#549FD7] p-6 md:p-10",
        className,
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        {/* Left: text */}
        <div className="flex flex-col">
          <Typography.H1 className="text-[22px] leading-tight text-white sm:text-[64px]">
            {title}
          </Typography.H1>

          <Typography.BigText className="mt-4 font-light italic text-white/95 text-[15px] sm:text-[18px]">
            &ldquo;{quote}&rdquo;
          </Typography.BigText>

          {description}

          <div className="mt-6 w-full">
            <BlackButton href={buttonHref}>{buttonText}</BlackButton>
          </div>
        </div>

        {/* Right: two stacked images */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-sm border border-white/20">
            <Image
              src={image1}
              alt={image1Alt ?? title}
              className="h-auto w-full object-cover"
              width={600}
              height={360}
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-white/20">
            <Image
              src={image2}
              alt={image2Alt ?? title}
              className="h-auto w-full object-cover"
              width={600}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
