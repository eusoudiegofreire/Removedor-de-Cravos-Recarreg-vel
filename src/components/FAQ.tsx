"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-center text-2xl font-semibold text-ink sm:text-3xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-rose-light/70 bg-rose-baby/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink sm:text-base"
                >
                  {faq.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`shrink-0 text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
