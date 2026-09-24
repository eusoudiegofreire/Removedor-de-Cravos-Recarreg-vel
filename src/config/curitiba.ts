import type { FaqItem } from "@/config/site";
import type { InstallmentInfo } from "@/components/ui/PriceInstallments";

export const curitiba = {
  city: "Curitiba",
  state: "PR",
};

/** Every CTA on /curitiba links here instead of straight to the Logzz checkout. */
export const CHECKOUT_PATH = "/curitiba/checkout";

export const PRODUCT_NAME_CURITIBA = "Clareador de Manchas Amazon Kaps Cicatridiva 200g";

/**
 * Matches exactly what the Logzz checkout shows for this offer. If the
 * checkout price ever changes, update only this object — every component
 * that shows the price/installments reads from here.
 */
export const pricingCuritiba: InstallmentInfo = {
  count: 12,
  installmentPrice: "R$ 13,17",
  cashPrice: "R$ 127,00",
};

/** Exact strings expected by the n8n payload — kept separate from the display copy above. */
export const PRICE_CASH_RAW = "127.00";
export const INSTALLMENTS_PAYLOAD_LABEL = "12x de R$13,17";

export type InstallmentOption = {
  count: number;
  /** Per-installment amount, raw (for the webhook payload). */
  installmentRaw: number;
  /** Per-installment amount, formatted for display. */
  installmentLabel: string;
  /** count × installmentRaw, raw (for the webhook payload) — includes the card fee for 2x+. */
  totalRaw: number;
  /** Same total, formatted for display. */
  totalLabel: string;
};

/**
 * Matches exactly what the Logzz checkout's "Simular parcelamento" dropdown
 * shows for this offer (screenshotted by the user 2026-09-25) — the
 * per-installment fee schedule isn't a flat/computable rate, so these are
 * the real numbers, not derived from a formula. Update this whole table
 * together if the Logzz offer or its installment fees ever change.
 */
export const installmentOptionsCuritiba: InstallmentOption[] = [
  { count: 1, installmentRaw: 127.0, installmentLabel: "R$ 127,00", totalRaw: 127.0, totalLabel: "R$ 127,00" },
  { count: 2, installmentRaw: 72.42, installmentLabel: "R$ 72,42", totalRaw: 144.84, totalLabel: "R$ 144,84" },
  { count: 3, installmentRaw: 48.63, installmentLabel: "R$ 48,63", totalRaw: 145.89, totalLabel: "R$ 145,89" },
  { count: 4, installmentRaw: 36.83, installmentLabel: "R$ 36,83", totalRaw: 147.32, totalLabel: "R$ 147,32" },
  { count: 5, installmentRaw: 29.59, installmentLabel: "R$ 29,59", totalRaw: 147.95, totalLabel: "R$ 147,95" },
  { count: 6, installmentRaw: 24.85, installmentLabel: "R$ 24,85", totalRaw: 149.1, totalLabel: "R$ 149,10" },
  { count: 7, installmentRaw: 21.73, installmentLabel: "R$ 21,73", totalRaw: 152.11, totalLabel: "R$ 152,11" },
  { count: 8, installmentRaw: 19.16, installmentLabel: "R$ 19,16", totalRaw: 153.28, totalLabel: "R$ 153,28" },
  { count: 9, installmentRaw: 17.16, installmentLabel: "R$ 17,16", totalRaw: 154.44, totalLabel: "R$ 154,44" },
  { count: 10, installmentRaw: 15.56, installmentLabel: "R$ 15,56", totalRaw: 155.6, totalLabel: "R$ 155,60" },
  { count: 11, installmentRaw: 14.26, installmentLabel: "R$ 14,26", totalRaw: 156.86, totalLabel: "R$ 156,86" },
  { count: 12, installmentRaw: 13.17, installmentLabel: "R$ 13,17", totalRaw: 158.04, totalLabel: "R$ 158,04" },
];

/**
 * Turn this off to drop the CPF field from the form (step 1) and its FAQ
 * entry. Off by default: an optional CPF question ahead of a lead form can
 * cost conversion, and nothing downstream requires it to create the WhatsApp
 * confirmation + Logzz order.
 */
export const CPF_FIELD_ENABLED = false;

export const ctaLabelsCuritiba = {
  hero: "Fazer meu agendamento",
  resultados: "Agendar para meu bairro",
  oferta: "Agendar entrega em Curitiba",
  fechamento: "Fazer agendamento agora",
  formNext: "Continuar agendamento",
  formConfirm: "Confirmar endereço",
  formSubmit: "Confirmar meu agendamento",
};

export const heroPriceNoteCuritiba = ["Pagamento somente na entrega"];

export const areasCuritiba = [
  "Axilas",
  "Virilhas",
  "Joelhos",
  "Cotovelos",
  "Manchas de acne",
  "Marcas relacionadas à foliculite",
];

export const ofertaIncludesCuritiba = [
  "1 unidade de 200g",
  "Pagamento somente na entrega",
  "Confirmação pelo WhatsApp antes do envio",
];

const cpfFaqItem: FaqItem = {
  question: "Preciso informar CPF?",
  answer: "Quando solicitado, é usado apenas para o cadastro da entrega, se necessário.",
};

export const faqItemsCuritiba: FaqItem[] = [
  {
    question: "Preciso pagar antecipadamente?",
    answer: "Não. Você paga somente quando receber o produto.",
  },
  {
    question: "Como funciona o agendamento em Curitiba?",
    answer:
      "Você preenche seus dados aqui no site. Nossa equipe confirma tudo pelo WhatsApp antes de seguir com a entrega.",
  },
  {
    question: "Vocês entregam no meu bairro?",
    answer: "Confirmamos a disponibilidade para o seu endereço pelo WhatsApp após o envio do formulário.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Dinheiro, Pix ou cartão, no momento da entrega.",
  },
  ...(CPF_FIELD_ENABLED ? [cpfFaqItem] : []),
  {
    question: "Qual quantidade vou receber?",
    answer: "Uma unidade de 200g por R$ 127,00.",
  },
  {
    question: "É dermatologicamente testado?",
    answer: "Sim.",
  },
  {
    question: "É hipoalergênico?",
    answer: "Sim.",
  },
  {
    question: "É livre de parabenos?",
    answer: "Sim.",
  },
];
