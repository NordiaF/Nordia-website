import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import type { StaticImageData } from "next/image";

type SplitSectionProps = {
  header: string;
  body: string | string[] | React.ReactNode;
  link?: string;
  linkText?: string;
  image: StaticImageData | string;
  reverse?: boolean;
  imgBgColor?: string;
};

export default function SplitSection({
  header,
  body,
  link,
  linkText,
  image,
  imgBgColor,
  reverse = false,
}: SplitSectionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className="w-full sm:py-20 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid items-center gap-12 md:grid-cols-2 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className={reverse ? "md:order-2" : ""}>
            <h2 className="text-3xl sm:text-4xl font-bold font-primary">
              {header}
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-black/80">
              {paragraphs.map((paragraph, index) => {
                if (typeof paragraph === "string") {
                  return <p key={index}>{paragraph}</p>;
                }

                return <div key={index}>{paragraph}</div>;
              })}
            </div>

            {link && linkText && (
              <Link
                href={link}
                className="mt-6 inline-flex items-center gap-2 font-medium text-black hover:gap-3 transition-all"
              >
                {linkText}
                <BsArrowRight size={16} />
              </Link>
            )}
          </div>

          {/* Image */}
          <div className={`${reverse ? "md:order-1" : ""}`}>
            <div className="relative">
              {imgBgColor && (
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-2xl opacity-15 ${
                    reverse
                      ? "translate-x-3 -translate-y-3"
                      : "-translate-x-3 translate-y-3"
                  }`}
                  style={{ backgroundColor: imgBgColor }}
                />
              )}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={header}
                  width={600}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
