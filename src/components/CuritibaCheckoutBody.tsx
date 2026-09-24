"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Truck, Wallet } from "lucide-react";
import { CheckoutForm } from "@/components/CheckoutForm";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { checkoutBannerCuritiba } from "@/config/images";
import {
  PRODUCT_NAME_CURITIBA,
  installmentOptionsCuritiba,
  type InstallmentOption,
} from "@/config/curitiba";

const summaryBullets = [
  { icon: Wallet, text: "Pagamento somente na entrega" },
  { icon: Truck, text: "Frete grátis e entrega em 24 horas úteis em Curitiba" },
  { icon: ShieldCheck, text: "Agendamento confirmado pelo WhatsApp antes do envio" },
];

type OrderSummaryProps = {
  selected: InstallmentOption;
  onSelectCount: (count: number) => void;
};

function OrderSummary({ selected, onSelectCount }: OrderSummaryProps) {
  return (
    <div className="rounded-card border border-border bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
        Resumo do pedido
      </p>
      <h2 className="mt-1 font-heading text-lg font-bold text-text">{PRODUCT_NAME_CURITIBA}</h2>

      <div className="mt-4 flex flex-wrap items-end gap-3">
        <span className="font-heading text-2xl font-bold text-magenta">R$ 127,00</span>
        <span className="text-sm text-text-secondary">à vista</span>
      </div>
      <p className="text-sm text-text-secondary">ou em até 12x no cartão</p>

      <ul className="mt-4 space-y-2.5">
        {summaryBullets.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-2 text-sm text-text">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={2} />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border pt-4">
        <label className="text-xs font-semibold uppercase tracking-wide text-text-secondary" htmlFor="installment-select">
          Simular parcelamento
        </label>
        <select
          id="installment-select"
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
          value={selected.count}
          onChange={(event) => onSelectCount(Number(event.target.value))}
        >
          {installmentOptionsCuritiba.map((option) => (
            <option key={option.count} value={option.count}>
              {option.count}x de {option.installmentLabel}
            </option>
          ))}
        </select>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-text-secondary">Valor final</span>
          <span className="font-heading font-bold text-text">{selected.totalLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function CuritibaCheckoutBody() {
  const [selected, setSelected] = useState<InstallmentOption>(installmentOptionsCuritiba[0]);

  function handleSelectCount(count: number) {
    const option = installmentOptionsCuritiba.find((item) => item.count === count);
    if (option) setSelected(option);
  }

  return (
    <div>
      <PhotoCard
        src={checkoutBannerCuritiba.src}
        alt={checkoutBannerCuritiba.alt}
        width={checkoutBannerCuritiba.width}
        height={checkoutBannerCuritiba.height}
        sizes="(min-width: 1024px) 1100px, 100vw"
        priority
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2">
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
            <CheckoutForm selectedInstallment={selected} />
          </div>
        </div>

        <div className="order-1 mt-8 lg:order-2 lg:mt-0 lg:sticky lg:top-24">
          <OrderSummary selected={selected} onSelectCount={handleSelectCount} />
        </div>
      </div>
    </div>
  );
}
