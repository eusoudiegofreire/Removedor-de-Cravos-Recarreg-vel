import { CTA_LINK, type FaqItem, popup } from "@/config/site";

export const belem = {
  city: "Belém",
  ctaLabel: "Agendar minha entrega",
  ctaLink: CTA_LINK,
};

/** Not rendered on this reorganized page (kept in case it's re-enabled later). */
export const popupBelem = {
  ...popup,
  coupon: "BELEM10",
  ctaLabel: "Agendar minha entrega em Belém com desconto",
};

export const heroPriceNoteBelem = [
  "1 unidade de 200g",
  "Frete grátis em Belém",
  "Dinheiro, Pix ou cartão na entrega",
];

export const areasBelem = [
  "Axilas",
  "Virilhas",
  "Joelhos",
  "Cotovelos",
  "Manchas de acne",
  "Marcas relacionadas à foliculite",
];

export const ofertaIncludesBelem = [
  "1 unidade de 200g",
  "Frete grátis em Belém",
  "Entrega em 24 horas úteis",
  "Pagamento somente na entrega",
];

export const faqItemsBelem: FaqItem[] = [
  {
    question: "Preciso pagar antecipadamente?",
    answer: "Não. Você paga somente quando receber o produto.",
  },
  {
    question: "O frete é grátis?",
    answer: "Sim. A entrega em Belém tem frete grátis.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "A entrega é feita em 24 horas úteis.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Dinheiro, Pix ou cartão, no momento da entrega.",
  },
  {
    question: "Como faço o agendamento?",
    answer:
      "Clique em “Agendar minha entrega” e preencha seus dados na Logzz. Ao concluir, você será direcionado à página de confirmação.",
  },
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
