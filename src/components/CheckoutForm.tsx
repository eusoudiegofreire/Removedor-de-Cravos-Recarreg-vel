"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { submitCuritibaLead } from "@/app/curitiba/actions";
import { CPF_FIELD_ENABLED, ctaLabelsCuritiba, pricingCuritiba } from "@/config/curitiba";
import { track } from "@/lib/track";
import {
  formatCEP,
  formatCPF,
  formatPhoneBR,
  isValidCEPDigits,
  isValidCPF,
  isValidFullName,
  isValidPhoneDigits,
} from "@/lib/validation";

type FormData = {
  name: string;
  phone: string;
  document: string;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  complement: string;
};

const emptyForm: FormData = {
  name: "",
  phone: "",
  document: "",
  zipCode: "",
  street: "",
  number: "",
  district: "",
  complement: "",
};

type Utm = {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  gclid: string | null;
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/60 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20";
const labelClass = "text-sm font-semibold text-text";
const errorClass = "mt-1 text-xs font-medium text-magenta-dark";

export function CheckoutForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [utm] = useState<Utm>(() => {
    if (typeof window === "undefined") {
      return {
        utmSource: null,
        utmMedium: null,
        utmCampaign: null,
        utmContent: null,
        utmTerm: null,
        gclid: null,
      };
    }
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      utmContent: params.get("utm_content"),
      utmTerm: params.get("utm_term"),
      gclid: params.get("gclid"),
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep1(): boolean {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!isValidFullName(form.name)) {
      nextErrors.name = "Informe seu nome completo.";
    }
    if (!isValidPhoneDigits(form.phone)) {
      nextErrors.phone = "Informe um WhatsApp válido com DDD.";
    }
    if (CPF_FIELD_ENABLED && form.document.trim() && !isValidCPF(form.document)) {
      nextErrors.document = "CPF inválido.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStep2(): boolean {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!isValidCEPDigits(form.zipCode)) {
      nextErrors.zipCode = "Informe um CEP válido.";
    }
    if (!form.street.trim()) {
      nextErrors.street = "Informe a rua.";
    }
    if (!form.number.trim()) {
      nextErrors.number = "Informe o número.";
    }
    if (!form.district.trim()) {
      nextErrors.district = "Informe o bairro.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  }

  function goBack() {
    setSubmitError(null);
    setStep((prev) => (prev === 3 ? 2 : 1));
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitCuritibaLead({
        name: form.name.trim(),
        phone: form.phone,
        document: CPF_FIELD_ENABLED && form.document.trim() ? form.document : null,
        zipCode: form.zipCode,
        street: form.street,
        number: form.number,
        district: form.district,
        complement: form.complement,
        ...utm,
        pageUrl: window.location.href,
      });

      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }

      track("lead_solicitado_curitiba", {
        city: "Curitiba",
        product: "clareador_manchas_200g",
        value: 127,
      });
      // location.replace (not href, not router.push): swaps this checkout
      // page out of history instead of adding /obrigado on top of it, so the
      // back button skips it entirely — and it's a full navigation, which
      // /obrigado's inline conversion <script> needs to actually execute.
      window.location.replace("/obrigado");
    } catch {
      setSubmitError(
        "Não conseguimos enviar seu agendamento agora. Atualize a página e tente novamente, ou chame no WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-card border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-1.5 flex-1 rounded-full ${n <= step ? "bg-turquoise" : "bg-border"}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
        Etapa {step} de 3
      </p>

      {step === 1 ? (
        <div className="mt-5 space-y-4">
          <h2 className="font-heading text-lg font-bold text-text">Dados para o agendamento</h2>

          <div>
            <label className={labelClass} htmlFor="lead-name">
              Nome completo
            </label>
            <input
              id="lead-name"
              className={inputClass}
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              autoComplete="name"
            />
            {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="lead-phone">
              WhatsApp
            </label>
            <input
              id="lead-phone"
              className={inputClass}
              value={form.phone}
              onChange={(event) => update("phone", formatPhoneBR(event.target.value))}
              inputMode="tel"
              placeholder="(41) 91234-5678"
              autoComplete="tel"
            />
            {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
          </div>

          {CPF_FIELD_ENABLED ? (
            <div>
              <label className={labelClass} htmlFor="lead-document">
                CPF
              </label>
              <input
                id="lead-document"
                className={inputClass}
                value={form.document}
                onChange={(event) => update("document", formatCPF(event.target.value))}
                inputMode="numeric"
                placeholder="000.000.000-00"
              />
              <p className="mt-1 text-xs text-text-secondary">
                Usado apenas para cadastro da entrega, se necessário.
              </p>
              {errors.document ? <p className={errorClass}>{errors.document}</p> : null}
            </div>
          ) : null}

          <button
            type="button"
            onClick={goNext}
            className="w-full rounded-button bg-turquoise px-6 py-3 font-heading text-base font-semibold text-white transition-colors duration-200 ease-snappy hover:bg-turquoise-dark"
          >
            {ctaLabelsCuritiba.formNext}
          </button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-5 space-y-4">
          <h2 className="font-heading text-lg font-bold text-text">Endereço de entrega</h2>

          <div>
            <label className={labelClass} htmlFor="lead-zip">
              CEP
            </label>
            <input
              id="lead-zip"
              className={inputClass}
              value={form.zipCode}
              onChange={(event) => update("zipCode", formatCEP(event.target.value))}
              inputMode="numeric"
              placeholder="00000-000"
              autoFocus
            />
            {errors.zipCode ? <p className={errorClass}>{errors.zipCode}</p> : null}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_120px]">
            <div>
              <label className={labelClass} htmlFor="lead-street">
                Rua
              </label>
              <input
                id="lead-street"
                className={inputClass}
                value={form.street}
                onChange={(event) => update("street", event.target.value)}
                autoComplete="address-line1"
              />
              {errors.street ? <p className={errorClass}>{errors.street}</p> : null}
            </div>
            <div>
              <label className={labelClass} htmlFor="lead-number">
                Número
              </label>
              <input
                id="lead-number"
                className={inputClass}
                value={form.number}
                onChange={(event) => update("number", event.target.value)}
                inputMode="numeric"
              />
              {errors.number ? <p className={errorClass}>{errors.number}</p> : null}
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="lead-district">
              Bairro
            </label>
            <input
              id="lead-district"
              className={inputClass}
              value={form.district}
              onChange={(event) => update("district", event.target.value)}
            />
            {errors.district ? <p className={errorClass}>{errors.district}</p> : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="lead-complement">
              Complemento <span className="font-normal text-text-secondary">(opcional)</span>
            </label>
            <input
              id="lead-complement"
              className={inputClass}
              value={form.complement}
              onChange={(event) => update("complement", event.target.value)}
              placeholder="Apto, bloco, referência..."
            />
          </div>

          <p className="text-sm text-text-secondary">Cidade: Curitiba - PR</p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goBack}
              className="rounded-button border border-border bg-white px-6 py-3 font-heading text-base font-semibold text-text transition-colors duration-200 ease-snappy hover:border-turquoise hover:text-turquoise"
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex-1 rounded-button bg-turquoise px-6 py-3 font-heading text-base font-semibold text-white transition-colors duration-200 ease-snappy hover:bg-turquoise-dark"
            >
              {ctaLabelsCuritiba.formConfirm}
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-5 space-y-4">
          <h2 className="font-heading text-lg font-bold text-text">Confirme seu agendamento</h2>

          <div className="space-y-2 rounded-lg bg-offwhite p-4 text-sm text-text">
            <p>
              <span className="font-semibold">Produto:</span> Clareador de Manchas 200g
            </p>
            <p>
              <span className="font-semibold">Quantidade:</span> 1 unidade
            </p>
            <p>
              <span className="font-semibold">Valor:</span> {pricingCuritiba.cashPrice} à vista ou{" "}
              {pricingCuritiba.count}x de {pricingCuritiba.installmentPrice} no cartão
            </p>
            <p>
              <span className="font-semibold">Pagamento:</span> somente na entrega
            </p>
            <p>
              <span className="font-semibold">Cidade:</span> Curitiba - PR
            </p>
            <p className="pt-1 text-text-secondary">
              <span className="font-semibold text-text">Endereço:</span> {form.street}, {form.number}
              {form.complement ? ` - ${form.complement}` : ""} · {form.district} · CEP {form.zipCode}
            </p>
            <p className="text-text-secondary">
              <span className="font-semibold text-text">Contato:</span> {form.name} · {form.phone}
            </p>
          </div>

          <p className="flex items-start gap-2 text-sm font-medium text-green">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
            Seu agendamento será confirmado pelo WhatsApp antes do envio.
          </p>

          {submitError ? (
            <p className="rounded-lg bg-magenta-soft px-4 py-3 text-sm font-medium text-magenta-dark">
              {submitError}
            </p>
          ) : null}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={isSubmitting}
              className="rounded-button border border-border bg-white px-6 py-3 font-heading text-base font-semibold text-text transition-colors duration-200 ease-snappy hover:border-turquoise hover:text-turquoise disabled:opacity-50"
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 rounded-button bg-magenta px-6 py-3 font-heading text-base font-semibold text-white transition-colors duration-200 ease-snappy hover:bg-magenta-dark disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : ctaLabelsCuritiba.formSubmit}
            </button>
          </div>
        </div>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-text-secondary">
        Usamos seus dados apenas para confirmar este agendamento pelo WhatsApp.
      </p>
    </div>
  );
}
