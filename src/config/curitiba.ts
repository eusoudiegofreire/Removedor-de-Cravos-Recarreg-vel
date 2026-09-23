import type { FaqItem } from "@/config/site";
import type { InstallmentInfo } from "@/components/ui/PriceInstallments";

export const curitiba = {
  city: "Curitiba",
  state: "PR",
};

/** Anchor id the CTAs scroll to instead of linking straight to the Logzz checkout. */
export const FORM_ANCHOR = "agendamento";

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
