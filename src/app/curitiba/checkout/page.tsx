import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Truck, Wallet } from "lucide-react";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { checkoutBannerCuritiba, checkoutProdutoCuritiba } from "@/config/images";
import { PRODUCT_NAME_CURITIBA, pricingCuritiba } from "@/config/curitiba";

export const metadata: Metadata = {
  title: "Finalizar agendamento — Clareador de Manchas em Curitiba",
  description: "Preencha seus dados para agendar a entrega do Clareador de Manchas em Curitiba. Pague somente quando receber.",
  alternates: {
    canonical: "/curitiba/checkout",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const summaryBullets = [
  { icon: Wallet, text: "Pagamento somente na entrega" },
  { icon: Truck, text: "Frete grátis e entrega em 24 horas úteis em Curitiba" },
  { icon: ShieldCheck, text: "Agendamento confirmado pelo WhatsApp antes do envio" },
];

function OrderSummary() {
  return (
    <div className="mt-6 rounded-card border border-border bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
        Resumo do pedido
      </p>
      <h2 className="mt-1 font-heading text-lg font-bold text-text">{PRODUCT_NAME_CURITIBA}</h2>

      <div className="mt-4 flex flex-wrap items-end gap-3">
        <span className="font-heading text-2xl font-bold text-magenta">
          {pricingCuritiba.count}x de {pricingCuritiba.installmentPrice}
        </span>
        <span className="text-sm text-text-secondary">no cartão</span>
      </div>
      <p className="text-sm text-text-secondary">ou {pricingCuritiba.cashPrice} à vista</p>

      <ul className="mt-4 space-y-2.5">
        {summaryBullets.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-2 text-sm text-text">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={2} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CuritibaCheckoutPage() {
  return (
    <>
      <Header showCta={false} />
      <main className="bg-offwhite">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
            <div className="lg:sticky lg:top-24">
              <div className="lg:hidden">
                <PhotoCard
                  src={checkoutBannerCuritiba.src}
                  alt={checkoutBannerCuritiba.alt}
                  width={checkoutBannerCuritiba.width}
                  height={checkoutBannerCuritiba.height}
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="hidden lg:block">
                <PhotoCard
                  src={checkoutProdutoCuritiba.src}
                  alt={checkoutProdutoCuritiba.alt}
                  width={checkoutProdutoCuritiba.width}
                  height={checkoutProdutoCuritiba.height}
                  sizes="420px"
                  priority
                  className="mx-auto max-w-sm"
                />
              </div>

              <OrderSummary />
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="mx-auto flex items-center gap-2 lg:mx-0">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green" strokeWidth={2} />
                <p className="text-sm font-semibold text-green">
                  Você recebe primeiro e paga somente na entrega
                </p>
              </div>
              <h1 className="mt-3 font-heading text-2xl font-bold leading-tight text-text sm:text-3xl">
                Finalize seu agendamento em Curitiba
              </h1>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                Preencha seus dados em poucos passos.
              </p>

              <div className="mt-6">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
