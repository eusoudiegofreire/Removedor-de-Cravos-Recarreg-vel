import Image from "next/image";
import CTAButton from "./CTAButton";
import PriceTag from "./PriceTag";

const badges = [
  "Frete grátis",
  "Entrega em até 24 horas",
  "Pague só na entrega",
  "Garantia de 7 dias",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-rose-baby">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-glass/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-rose-light/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="animate-fade-up order-2 lg:order-1">
          <p className="mb-4 inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-metal">
            Cuidado facial em casa
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Removedor de Cravos Recarregável para cuidar da pele em casa
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Ajuda a remover cravos, oleosidade e impurezas com sucção, 3
            níveis de intensidade e diferentes ponteiras. Receba em até 24
            horas, com frete grátis, e pague somente na entrega.
          </p>

          <div className="mt-7">
            <PriceTag />
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex min-w-0 items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 text-xs font-medium text-ink shadow-sm sm:text-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CTAButton />
            <p className="mt-3 text-sm text-ink-soft">
              Pagamento na entrega: dinheiro, Pix ou cartão.
            </p>
          </div>
        </div>

        <div className="animate-fade-up order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="animate-float absolute inset-4 rounded-[2.5rem] bg-white shadow-soft" />
            <Image
              src="/images/produto-kit-completo.png"
              alt="Removedor de Cravos Recarregável com as diferentes ponteiras inclusas"
              fill
              preload
              sizes="(min-width: 1024px) 448px, 90vw"
              className="relative rounded-[2.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
