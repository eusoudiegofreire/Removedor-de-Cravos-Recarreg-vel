export const SITE_URL = "https://www.amazole.com.br";

export const CTA_LINK = "https://entrega.logzz.com.br/pay/de-r-14990-por-r-12700";

export const GOOGLE_ADS_ID = "AW-18455497981";
export const GOOGLE_ADS_CONVERSION = `${GOOGLE_ADS_ID}/waOcCMbCufocEP2ZouBE`;

export const site = {
  name: "Amazolé",
  productName: "Clareador de Manchas Esfoliante Corporal",
  tagline: "Clareador de manchas esfoliante corporal",
  manufacturer: "Amazon Kaps",
  volume: "200g",
  price: {
    from: 149.9,
    to: 127.0,
  },
  ctaLabel: "Agendar minha entrega",
  ctaLink: CTA_LINK,
};

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
    answer: "Sim. É um clareador de manchas esfoliante para o corpo.",
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

/**
 * Exit-intent popup. The wheel is a visual device only: every spin unlocks the
 * same 10%. Segments that are not the discount show real attributes of this
 * offer, never a bigger prize we don't grant.
 */
export type WheelSegment = {
  label: string;
  isDiscount: boolean;
};

export const wheelSegments: WheelSegment[] = [
  { label: "10% OFF", isDiscount: true },
  { label: "Pague na entrega", isDiscount: false },
  { label: "10% OFF", isDiscount: true },
  { label: "Sem pagar antes", isDiscount: false },
  { label: "10% OFF", isDiscount: true },
  { label: "Entrega agendada", isDiscount: false },
];

export const popup = {
  title: "Antes de sair, ganhe 10% de desconto",
  subtitle:
    "Gire a roleta e desbloqueie seu cupom para agendar sua entrega agora.",
  spinLabel: "Girar roleta",
  spinningLabel: "Girando...",
  wonTitle: "Parabéns! Você desbloqueou 10% de desconto.",
  couponLabel: "Seu cupom",
  coupon: "ENTREGA10",
  copyLabel: "Copiar cupom",
  copiedLabel: "Cupom copiado",
  couponNote: "Use este cupom no agendamento para garantir seu desconto.",
  validityLabel: "Cupom válido por",
  validityNote: "Cupom válido por 5 minutos.",
  expiredNote:
    "O tempo deste cupom acabou, mas você ainda pode agendar sua entrega.",
  ctaLabel: "Agendar minha entrega com desconto",
  fineprint: "Desconto aplicado conforme regras da oferta no agendamento.",
  closeLabel: "Fechar",
  validitySeconds: 300,
};
