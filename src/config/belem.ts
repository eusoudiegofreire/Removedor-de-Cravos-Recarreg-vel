import { CTA_LINK, type FaqItem, popup } from "@/config/site";

export const belem = {
  city: "Belém",
  ctaLabel: "Agendar minha entrega em Belém",
  ctaLink: CTA_LINK,
};

export const popupBelem = {
  ...popup,
  coupon: "BELEM10",
  ctaLabel: "Agendar minha entrega em Belém com desconto",
};

export const heroBulletsBelem = [
  "Clareador esfoliante corporal",
  "Para axilas, virilhas, joelhos e cotovelos",
  "Indicado para cuidado de áreas escurecidas",
  "Dermatologicamente testado",
  "Hipoalergênico",
  "Livre de parabenos",
  "Produto adulto +18",
  "Pague somente quando receber em Belém",
];

export const areasBelem = [
  "Axilas",
  "Virilhas",
  "Joelhos",
  "Cotovelos",
  "Manchas de acne",
  "Marcas relacionadas à foliculite",
];

export const trustStepsBelem = [
  "Entrega em Belém",
  "Sem pagamento antecipado",
  "Pague ao receber",
  "Dinheiro, Pix ou cartão",
];

export const ofertaIncludesBelem = [
  "1 unidade Clareador de Manchas 200g",
  "Produto dermatologicamente testado",
  "Hipoalergênico",
  "Livre de parabenos",
  "Pagamento somente na entrega em Belém",
  "Dinheiro, Pix ou cartão",
];

export const faqItemsBelem: FaqItem[] = [
  {
    question: "Preciso pagar antes?",
    answer: "Não. O pagamento é feito somente na entrega.",
  },
  {
    question: "A entrega é em Belém?",
    answer: "Sim. A entrega é feita em Belém, no endereço informado no agendamento.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Dinheiro, Pix ou cartão.",
  },
  {
    question: "O produto é clareador?",
    answer: "Sim. É um clareador de manchas esfoliante para o corpo.",
  },
  {
    question: "Pode usar em quais áreas?",
    answer:
      "Pode ser usado em áreas como axilas, virilhas, joelhos e cotovelos, seguindo as instruções da embalagem.",
  },
  {
    question: "Tem proteção solar?",
    answer: "Não. Se usar durante o dia em área exposta, aplique protetor solar.",
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
  {
    question: "Qual o tamanho do produto?",
    answer: "200g.",
  },
];
