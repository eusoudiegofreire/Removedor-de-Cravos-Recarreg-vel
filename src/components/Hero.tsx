import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { PriceInstallments, type InstallmentInfo } from "@/components/ui/PriceInstallments";
import { heroBullets, site } from "@/config/site";
import { heroImage } from "@/config/images";

type HeroProps = {
  badge?: string;
  headline?: string;
  subheadline?: string;
  bullets?: string[];
  /** Short chips shown right under the price (e.g. "Frete grátis"). Empty by default. */
  priceNote?: string[];
  /** When set, replaces the default "De R$149,90 / R$127,00" block. */
  installments?: InstallmentInfo;
  /** Omitted when empty — the compact layout leans on priceNote instead. */
  trustLine?: string;
  ctaLabel?: string;
  ctaLink?: string;
  ctaVariant?: "primary" | "secondary";
  paymentNote?: string;
  /** "compact" shrinks the image and drops the bullet list, for mobile-first offer pages. */
  layout?: "default" | "compact";
};

export function Hero({
  badge = "Produto adulto +18",
  headline = "Clareador corporal para áreas escurecidas e manchas na pele",
  subheadline = "O Clareador de Manchas combina ação clareadora e esfoliante para ajudar a uniformizar o tom da pele em áreas como axilas, virilhas, joelhos e cotovelos.",
  bullets = heroBullets,
  priceNote = [],
  installments,
  trustLine = "Você recebe primeiro e paga somente quando o produto chegar.",
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
  ctaVariant = "primary",
  paymentNote = "Pagamento na entrega: dinheiro, Pix ou cartão.",
  layout = "default",
}: HeroProps = {}) {
  const compact = layout === "compact";

  return (
    <section className="bg-offwhite">
      <div
        className={`mx-auto grid w-full max-w-6xl grid-cols-1 items-center px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20 ${
          compact ? "gap-6" : "gap-10"
        }`}
      >
        <div className={`enter ${compact ? "order-1" : "order-2 lg:order-1"}`}>
          <span className="inline-flex items-center rounded-button bg-magenta-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-magenta-dark">
            {badge}
          </span>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-[2.75rem]">
            {headline}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {subheadline}
          </p>

          {bullets.length > 0 ? (
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-text sm:text-[15px]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={3} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className={compact ? "mt-5" : "mt-7"}>
            {installments ? (
              <PriceInstallments info={installments} />
            ) : (
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-base text-text-secondary line-through">
                  De R$ 149,90
                </span>
                <span className="font-heading text-3xl font-bold text-magenta sm:text-4xl">
                  R$ 127,00
                </span>
              </div>
            )}
          </div>

          {priceNote.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {priceNote.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-button bg-turquoise-soft px-3 py-1.5 text-sm font-semibold text-turquoise-dark"
                >
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {trustLine ? (
            <p className="mt-2 text-sm font-medium text-green">{trustLine}</p>
          ) : null}

          <div className="mt-6">
            <Button href={ctaLink} variant={ctaVariant} size="lg" className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
            {paymentNote ? (
              <p className="mt-3 text-sm text-text-secondary">{paymentNote}</p>
            ) : null}
          </div>
        </div>

        <div className={`flex justify-center ${compact ? "order-2" : "order-1 lg:order-2"}`}>
          <div
            className={`enter enter-delay relative w-full ${
              compact ? "max-w-[220px] sm:max-w-[260px] lg:max-w-md" : "max-w-md"
            }`}
          >
            <div className="absolute -inset-6 -z-10 rounded-full bg-turquoise/10 blur-2xl" />
            <PhotoCard
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              sizes={compact ? "(min-width: 1024px) 480px, 260px" : "(min-width: 1024px) 480px, 90vw"}
              priority
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
