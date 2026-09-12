import Image from "next/image";
import CTAButton from "./CTAButton";
import PriceTag from "./PriceTag";

const included = [
  "1 Removedor de Cravos Recarregável",
  "Diferentes bicos/ponteiras",
  "Cabo USB/carregador",
  "Frete grátis",
  "Entrega em até 24 horas",
  "Pagamento somente na entrega",
  "Garantia de 7 dias",
];

export default function Offer() {
  return (
    <section className="bg-rose-baby/50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-center gap-8 rounded-[2.5rem] bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:p-12">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Image
              src="/images/produto-ponteiras.png"
              alt="Removedor de Cravos Recarregável com ponteiras inclusas na oferta"
              fill
              sizes="(min-width: 1024px) 384px, 80vw"
              className="rounded-3xl object-cover"
            />
          </div>

          <div>
            <p className="mb-3 inline-block rounded-full bg-rose-light/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-metal">
              Oferta especial com frete grátis
            </p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Removedor de Cravos Recarregável
            </h2>

            <div className="mt-5">
              <PriceTag />
            </div>

            <ul className="mt-6 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink sm:text-base">
                  <svg
                    width="18"
                    height="18"
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
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
