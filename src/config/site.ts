export const SITE_URL = "https://www.amazole.com.br";

export const CTA_LINK = "#AGENDAR-ENTREGA-LOGZ";

export const site = {
  name: "Amazolé",
  productName: "Amazolé Clareador Esfoliante Corporal",
  tagline: "Clareador esfoliante corporal",
  manufacturer: "Amazon Kaps",
  volume: "200g",
  price: {
    from: 149.9,
    to: 127.0,
  },
  ctaLabel: "Agendar minha entrega",
  ctaLink: CTA_LINK,
};

export type Kit = {
  id: string;
  units: number;
  label: string;
  price: number;
  unitPrice?: number;
  highlight?: string;
  featured?: boolean;
};

export const kits: Kit[] = [
  {
    id: "kit-1",
    units: 1,
    label: "1 unidade",
    price: 127.0,
    highlight: "Ideal para experimentar",
  },
  {
    id: "kit-2",
    units: 2,
    label: "2 unidades",
    price: 197.0,
    unitPrice: 98.5,
    highlight: "Melhor custo-benefício",
    featured: true,
  },
  {
    id: "kit-3",
    units: 3,
    label: "3 unidades",
    price: 267.0,
    unitPrice: 89.0,
    highlight: "Para manter o cuidado por mais tempo",
  },
];

export const heroBullets = [
  "Clareador esfoliante corporal",
  "Para axilas, virilhas, joelhos e cotovelos",
  "Ajuda no cuidado de manchas de acne e marcas de foliculite",
  "Dermatologicamente testado",
  "Hipoalergênico e livre de parabenos",
  "Produto adulto +18",
  "Pague somente na entrega",
];

export const trustSteps = [
  "Agende sua entrega",
  "Receba o produto",
  "Confira em casa",
  "Pague somente na entrega",
];

export const areas = [
  "Axilas",
  "Virilhas",
  "Joelhos",
  "Cotovelos",
  "Manchas de acne",
  "Marcas de foliculite",
];

export type Benefit = {
  title: string;
  text: string;
};

export const benefits: Benefit[] = [
  {
    title: "Clareador corporal",
    text: "Ajuda a clarear e uniformizar o tom da pele em áreas específicas do corpo.",
  },
  {
    title: "Esfoliação na rotina",
    text: "Remove células superficiais e impurezas, deixando a pele com sensação de cuidado e renovação.",
  },
  {
    title: "Para áreas de atrito",
    text: "Indicado para regiões como axilas, virilhas, joelhos e cotovelos.",
  },
  {
    title: "Ativos naturais",
    text: "Fórmula com Dolomita, Mulateiro, Óleo de Melaleuca e Argila Branca.",
  },
  {
    title: "Dermatologicamente testado",
    text: "Produto testado, hipoalergênico e livre de parabenos.",
  },
  {
    title: "Compra mais segura",
    text: "Você só paga quando receber o produto.",
  },
];

export type Active = {
  name: string;
  text: string;
};

export const actives: Active[] = [
  {
    name: "Dolomita",
    text: "Ingrediente usado em fórmulas de cuidado para clareamento gradual e esfoliação.",
  },
  {
    name: "Mulateiro",
    text: "Ativo natural da Amazônia usado em dermocosméticos.",
  },
  {
    name: "Óleo de Melaleuca",
    text: "Ingrediente conhecido no cuidado de peles com tendência à oleosidade e impurezas.",
  },
  {
    name: "Argila Branca",
    text: "Muito usada em cuidados de limpeza, suavidade e renovação da pele.",
  },
];

export const howToUseSteps = [
  "Lave a área com água e sabonete suave.",
  "Com a pele úmida, aplique o esfoliante.",
  "Faça movimentos circulares suaves.",
  "Enxágue, retirando o produto com água.",
  "Hidrate a pele após o uso.",
  "Se usar durante o dia em área exposta, aplique protetor solar.",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Preciso pagar antes?",
    answer: "Não. O pagamento é feito somente na entrega.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Dinheiro, Pix ou cartão.",
  },
  {
    question: "O produto é clareador?",
    answer: "Sim. O Amazolé é um clareador esfoliante corporal.",
  },
  {
    question: "Pode usar em quais áreas?",
    answer:
      "Pode ser usado em áreas como axilas, virilhas, joelhos e cotovelos, seguindo as instruções da embalagem.",
  },
  {
    question: "Serve para manchas de acne?",
    answer:
      "O produto é indicado para cuidado de manchas de acne e uniformização do tom da pele.",
  },
  {
    question: "Serve para foliculite?",
    answer:
      "O produto pode ser usado no cuidado de marcas relacionadas à foliculite, conforme descrição do produto.",
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
    question: "Qual o tamanho?",
    answer: "200g.",
  },
];

export const resultsDisclaimer =
  "Os resultados podem variar conforme o tipo de pele, frequência de uso e rotina de cuidados. Use conforme as instruções da embalagem.";

export const paymentNote = "Pagamento na entrega: dinheiro, Pix ou cartão.";
