import Link from "next/link";

export type CardGridItem = {
  title: string;
  description: string;
  cta: string;
  href: string;
  bg: string; // tailwind bg class e.g. "bg-[#F6A623]"
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
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
          {cards.map((card) => (
            <article
              key={card.title}
              className={`${card.bg} rounded-md p-8 text-center text-white shadow-sm`}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <card.Icon
                  className="h-6 w-6 text-white"
                  aria-hidden={true}
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold font-primary">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/90">
                {card.description}
              </p>

              <div className="mt-6">
                <Link
                  href={card.href}
                  className="inline-flex w-full items-center justify-center rounded bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
