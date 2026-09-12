export const SITE_URL = "https://removedor-de-cravos.vercel.app";

export const CTA_LINK = "#AGENDAR-ENTREGA-LOGZ";
export const CTA_LABEL = "Agendar minha entrega";

export const site = {
  name: "Removedor de Cravos Recarregável",
  shortName: "Removedor de Cravos",
  description:
    "Removedor de Cravos Recarregável com sucção, 3 níveis de intensidade e diferentes ponteiras. Frete grátis, entrega em até 24 horas e pagamento somente na entrega.",
  price: {
    original: 175.0,
    current: 129.99,
    currency: "BRL",
  },
  locale: "pt_BR",
};

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
