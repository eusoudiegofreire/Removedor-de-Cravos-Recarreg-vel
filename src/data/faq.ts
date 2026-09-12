export const faqs = [
  {
    q: "Preciso pagar antes?",
    a: "Não. O pagamento é feito somente na entrega.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Dinheiro, Pix ou cartão.",
  },
  {
    q: "Em quanto tempo recebo?",
    a: "A entrega é feita em até 24 horas.",
  },
  {
    q: "O frete é grátis?",
    a: "Sim, o frete é grátis.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, o produto possui garantia de 7 dias.",
  },
  {
    q: "O produto é recarregável?",
    a: "Sim, ele é recarregável e acompanha cabo USB/carregador.",
  },
  {
    q: "Quantos níveis de intensidade possui?",
    a: "Possui 3 níveis de intensidade.",
  },
  {
    q: "O que ele ajuda a remover?",
    a: "Ajuda a remover cravos, oleosidade e impurezas da pele.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};
