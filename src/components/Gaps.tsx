import { CalendarClock, EyeOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/config/site";
import { texturaImage } from "@/config/images";

type GapCard = {
  title: string;
  text: string;
};

const defaultCards: GapCard[] = [
  {
    title: "Continuar tentando esconder",
    text: "Roupas, maquiagem ou evitar certas peças podem até disfarçar por um tempo, mas não resolvem a vontade de cuidar melhor da pele.",
  },
  {
    title: "Adiar o cuidado",
    text: "Quanto mais você deixa para depois, mais difícil fica criar uma rotina simples e constante de cuidado com áreas escurecidas e manchas na pele.",
  },
  {
    title: "Começar de forma simples",
    text: "Com o Clareador de Manchas, você recebe em casa, usa conforme as instruções da embalagem e paga somente quando o produto chegar.",
  },
];

const icons = [EyeOff, CalendarClock, Sparkles];

type GapsProps = {
  title?: string;
  text?: string;
  cards?: GapCard[];
  closing?: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export function Gaps({
  title = "O que acontece quando você continua deixando para depois?",
  text = "Manchas, áreas escurecidas e tom irregular da pele podem incomodar na rotina porque acabam limitando escolhas simples do dia a dia. O Clareador de Manchas foi pensado para quem quer começar uma rotina de cuidado corporal mais prática, com ação clareadora esfoliante e pagamento somente na entrega.",
  cards = defaultCards,
  closing = "Você não precisa pagar antes para começar. Agende sua entrega e receba o Clareador de Manchas no endereço informado.",
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
}: GapsProps = {}) {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Decisão" title={title} text={text} />

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="reveal order-2 space-y-4 lg:order-1">
          {cards.map((card, index) => {
            const Icon = icons[index];
            const isLast = index === cards.length - 1;
            return (
              <div
                key={card.title}
                className={`rounded-card border bg-white p-6 shadow-sm ${
                  isLast ? "border-turquoise" : "border-border"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    isLast
                      ? "bg-turquoise-soft text-turquoise-dark"
                      : "bg-offwhite text-text-secondary"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal order-1 lg:order-2">
          <PhotoCard
            src={texturaImage.src}
            alt={texturaImage.alt}
            width={texturaImage.width}
            height={texturaImage.height}
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      </div>

      <div className="reveal mx-auto mt-10 max-w-xl text-center">
        <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
          {closing}
        </p>
        <div className="mt-6 flex justify-center">
          <Button href={ctaLink} size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
