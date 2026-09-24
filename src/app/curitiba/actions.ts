"use server";

import { PRICE_CASH_RAW, PRODUCT_NAME_CURITIBA, installmentOptionsCuritiba } from "@/config/curitiba";
import {
  isValidCEPDigits,
  isValidCPF,
  isValidFullName,
  isValidPhoneDigits,
} from "@/lib/validation";

export type LeadSubmission = {
  name: string;
  phone: string;
  document: string | null;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  complement: string;
  installmentsCount: number;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  gclid: string | null;
  pageUrl: string;
};

export type LeadResult = { ok: true } | { ok: false; message: string };

const GENERIC_ERROR =
  "Não conseguimos enviar seu agendamento agora. Tente novamente ou chame no WhatsApp.";

export async function submitCuritibaLead(input: LeadSubmission): Promise<LeadResult> {
  if (
    !isValidFullName(input.name) ||
    !isValidPhoneDigits(input.phone) ||
    !isValidCEPDigits(input.zipCode) ||
    !input.street.trim() ||
    !input.number.trim() ||
    !input.district.trim()
  ) {
    return { ok: false, message: GENERIC_ERROR };
  }

  if (input.document && !isValidCPF(input.document)) {
    return { ok: false, message: GENERIC_ERROR };
  }

  const installmentOption = installmentOptionsCuritiba.find(
    (option) => option.count === input.installmentsCount,
  );
  if (!installmentOption) {
    return { ok: false, message: GENERIC_ERROR };
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL não configurada — agendamento de Curitiba não enviado.");
    return { ok: false, message: GENERIC_ERROR };
  }

  const payload = {
    source: "landing_page",
    city: "Curitiba",
    state: "PR",
    product_name: PRODUCT_NAME_CURITIBA,
    product_price_cash: PRICE_CASH_RAW,
    payment_installments_count: installmentOption.count,
    payment_installment_value: installmentOption.installmentRaw.toFixed(2),
    payment_total_value: installmentOption.totalRaw.toFixed(2),
    product_installments: `${installmentOption.count}x de ${installmentOption.installmentLabel}`,
    payment_method: "Pagamento na entrega",
    quantity: 1,
    client_name: input.name.trim(),
    client_phone: input.phone,
    client_document: input.document,
    client_zip_code: input.zipCode,
    client_address: input.street.trim(),
    client_address_number: input.number.trim(),
    client_address_district: input.district.trim(),
    client_address_comp: input.complement.trim() || null,
    client_address_city: "Curitiba",
    client_address_state: "PR",
    utm_source: input.utmSource,
    utm_medium: input.utmMedium,
    utm_campaign: input.utmCampaign,
    utm_content: input.utmContent,
    utm_term: input.utmTerm,
    gclid: input.gclid,
    page_url: input.pageUrl,
    created_at: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`n8n webhook respondeu ${response.status} para o agendamento de Curitiba.`);
      return { ok: false, message: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (error) {
    console.error("Falha ao enviar agendamento de Curitiba para o n8n.", error);
    return { ok: false, message: GENERIC_ERROR };
  }
}
