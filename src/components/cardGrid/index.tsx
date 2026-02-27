import Typography from "@/utils/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export type CardGridItem = {
  title: string | React.ReactNode;
  description: string;
  cta?: string;
  href?: string;
  bg?: string; // tailwind bg class e.g. "bg-[#F6A623]"
  icon?: StaticImageData | string;
  textColor?: string;
};

export type CardGridProps = {
  cards: CardGridItem[];
  className?: string;
};

export default function CardGrid({ cards, className }: CardGridProps) {
  return (
    <section className={`w-full ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <article
              key={i}
              className={`rounded-md p-8 text-center text-white shadow-sm`}
              style={{ backgroundColor: card.bg }}
            >
              {card.icon && (
                <div className="mx-auto flex h-12 w-12 items-center justify-center">
                  <Image
                    src={card.icon}
                    width={60}
                    height={60}
                    alt={`${card.title}-img`}
                  />
                </div>
              )}

              <div className="mt-4 text-xl font-semibold font-primary">
                {card.title}
              </div>

              <Typography.BigText
                className={`mt-3 text-sm leading-6 ${card.textColor === "black" ? "text-black" : "text-white/90"}`}
              >
                {card.description}
              </Typography.BigText>

              {card.cta && card.href && (
                <div className="mt-6">
                  <Link
                    href={card.href}
                    className="inline-flex w-full items-center justify-center rounded bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {card.cta}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
