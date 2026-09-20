"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { ProductImage } from "@/config/images";

type PhotoLightboxProps = {
  images: ProductImage[];
  className?: string;
  itemClassName?: string;
  sizes?: string;
};

/** Tap-to-enlarge gallery: thumbnails open a full-size modal with an accessible close. */
export function PhotoLightbox({
  images,
  className = "",
  itemClassName = "",
  sizes = "100vw",
}: PhotoLightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const open = useCallback((index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openIndex, close]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className={className}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={(event) => open(index, event.currentTarget)}
            aria-haspopup="dialog"
            aria-label={`Ampliar imagem: ${image.alt}`}
            className={`overflow-hidden rounded-card border border-border bg-white shadow-sm transition-[translate,scale,box-shadow] duration-300 ease-snappy hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.99] active:duration-100 ${itemClassName}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={sizes}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={close}
            className="absolute inset-0 cursor-default bg-text/70 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="relative z-10 max-h-[90dvh] w-full max-w-lg overflow-hidden rounded-card bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Fechar imagem ampliada"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-text shadow-sm transition-colors duration-200 hover:bg-white"
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="100vw"
              className="max-h-[90dvh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
