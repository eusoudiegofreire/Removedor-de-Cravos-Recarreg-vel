import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JarIllustration } from "@/components/ProductArt";
import { heroBullets, site } from "@/config/site";

type HeroProps = {
  badge?: string;
  headline?: string;
  subheadline?: string;
  bullets?: string[];
  trustLine?: string;
  ctaLabel?: string;
  ctaLink?: string;
  paymentNote?: string;
};

export function Hero({
  badge = "Produto adulto +18",
  headline = "Clareador corporal para áreas escurecidas e manchas na pele",
  subheadline = "Amazolé combina ação clareadora e esfoliante para ajudar a uniformizar o tom da pele em áreas como axilas, virilhas, joelhos e cotovelos.",
  bullets = heroBullets,
  trustLine = "Você recebe primeiro e paga somente quando o produto chegar.",
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
  paymentNote = "Pagamento na entrega: dinheiro, Pix ou cartão.",
}: HeroProps = {}) {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-button bg-magenta-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-magenta-dark">
            {badge}
          </span>

          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-text sm:text-4xl lg:text-[2.75rem]">
            {headline}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {subheadline}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-text sm:text-[15px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={3} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-end gap-3">
            <span className="text-base text-text-secondary line-through">
              De R$ 149,90
            </span>
            <span className="font-heading text-3xl font-extrabold text-magenta sm:text-4xl">
              R$ 127,00
            </span>
          </div>

          <p className="mt-2 text-sm font-medium text-green">{trustLine}</p>

          <div className="mt-6">
            <Button href={ctaLink} size="lg" className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
            <p className="mt-3 text-xs text-text-secondary">{paymentNote}</p>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-6 -z-10 rounded-full bg-turquoise/10 blur-2xl" />
            <JarIllustration variant="open" className="w-full drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
