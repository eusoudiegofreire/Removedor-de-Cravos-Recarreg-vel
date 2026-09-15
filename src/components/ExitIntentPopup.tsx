"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Clock, Copy, Gift, X } from "lucide-react";
import { popup as popupCopy, site, wheelSegments } from "@/config/site";
import { track } from "@/lib/track";

const STORAGE_KEY = "amazole:exit-popup";
const ARM_DELAY_MS = 5_000;
const TOUCH_DELAY_MS = 25_000;
const TOUCH_SCROLL_RATIO = 0.55;
const SPIN_MS = 3_400;
const SEGMENT_ANGLE = 360 / wheelSegments.length;

const wheelBackground = `conic-gradient(${wheelSegments
  .map((segment, index) => {
    const color = segment.isDiscount ? "var(--color-turquoise)" : "#ffffff";
    return `${color} ${index * SEGMENT_ANGLE}deg ${(index + 1) * SEGMENT_ANGLE}deg`;
  })
  .join(", ")})`;

const discountIndexes = wheelSegments
  .map((segment, index) => (segment.isDiscount ? index : -1))
  .filter((index) => index >= 0);

function wasShownThisSession() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markShownThisSession() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage blocked (private mode): the popup just isn't remembered.
  }
}

function withCoupon(link: string, coupon: string) {
  const separator = link.includes("?") ? "&" : "?";
  return `${link}${separator}cupom=${encodeURIComponent(coupon)}`;
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

type Phase = "idle" | "spinning" | "won";

type ExitIntentPopupProps = {
  coupon?: string;
  ctaLabel?: string;
  ctaLink?: string;
  title?: string;
  subtitle?: string;
};

export function ExitIntentPopup({
  coupon = popupCopy.coupon,
  ctaLabel = popupCopy.ctaLabel,
  ctaLink = site.ctaLink,
  title = popupCopy.title,
  subtitle = popupCopy.subtitle,
}: ExitIntentPopupProps = {}) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [rotation, setRotation] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(popupCopy.validitySeconds);
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const phaseRef = useRef<Phase>("idle");

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const close = useCallback(() => {
    track("popup_fechado", { cupom: coupon, etapa: phaseRef.current });
    setOpen(false);
  }, [coupon]);

  // Trigger: exit intent on desktop, dwell time or scroll depth on touch.
  useEffect(() => {
    if (wasShownThisSession()) return;

    let armed = false;
    let fired = false;
    let touchTimer = 0;

    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    function handleMouseOut(event: MouseEvent) {
      if (event.relatedTarget) return;
      if (event.clientY > 0) return;
      show();
    }

    function handleScroll() {
      const viewed = window.scrollY + window.innerHeight;
      const ratio = viewed / document.documentElement.scrollHeight;
      if (ratio >= TOUCH_SCROLL_RATIO) show();
    }

    function cleanup() {
      window.clearTimeout(armTimer);
      window.clearTimeout(touchTimer);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    }

    function show() {
      if (fired || !armed) return;
      fired = true;
      markShownThisSession();
      setOpen(true);
      cleanup();
    }

    if (window.matchMedia("(pointer: coarse)").matches) {
      touchTimer = window.setTimeout(show, TOUCH_DELAY_MS);
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      document.addEventListener("mouseout", handleMouseOut);
    }

    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    track("popup_exibido", { cupom: coupon });
  }, [open, coupon]);

  // The 5 minute window starts counting when the popup appears, not on page
  // load. The popup opens at most once per session, so there is nothing to
  // reset here.
  useEffect(() => {
    if (!open) return;

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => (current <= 1 ? 0 : current - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close]);

  const spin = useCallback(() => {
    if (phase !== "idle") return;

    track("roleta_girada", { cupom: coupon });
    setPhase("spinning");

    const landingIndex =
      discountIndexes[Math.floor(Math.random() * discountIndexes.length)];
    const landingCenter = landingIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const jitter = (Math.random() - 0.5) * (SEGMENT_ANGLE * 0.5);
    setRotation(360 * 5 + (360 - landingCenter) + jitter);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.setTimeout(() => setPhase("won"), reducedMotion ? 200 : SPIN_MS);
  }, [coupon, phase]);

  const copyCoupon = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(coupon);
      setCopied(true);
      track("cupom_copiado", { cupom: coupon });
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked: the code stays on screen to be copied by hand.
    }
  }, [coupon]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={close}
        className="enter absolute inset-0 cursor-default bg-text/60 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        className="enter relative z-10 max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-card border border-border bg-offwhite p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] sm:p-8"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label={popupCopy.closeLabel}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors duration-200 hover:bg-white hover:text-text"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>

        <div className="text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-button bg-magenta-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-magenta-dark">
              <Gift className="h-3.5 w-3.5" strokeWidth={2.5} />
              Desconto de saída
            </span>
          </div>

          <h2
            id="exit-popup-title"
            className="mt-4 font-heading text-xl font-extrabold leading-tight text-text sm:text-2xl"
          >
            {phase === "won" ? popupCopy.wonTitle : title}
          </h2>

          {phase === "won" ? null : (
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative mx-auto mt-6 aspect-square w-[210px] sm:w-[240px]">
          <div className="absolute left-1/2 top-[-4px] z-20 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[18px] border-x-transparent border-t-magenta" />

          <div
            className="absolute inset-0 rounded-full border-4 border-magenta shadow-[0_14px_34px_-14px_rgba(0,0,0,0.4)] transition-transform duration-[3400ms] ease-snappy"
            style={{ background: wheelBackground, transform: `rotate(${rotation}deg)` }}
          >
            {wheelSegments.map((segment, index) => (
              <div
                key={`${segment.label}-${index}`}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2}deg)`,
                }}
              >
                <span
                  className={`absolute left-1/2 top-2.5 w-[68px] -translate-x-1/2 text-center text-[10px] font-bold uppercase leading-tight ${
                    segment.isDiscount ? "text-white" : "text-text"
                  }`}
                >
                  {segment.label}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-magenta bg-white">
            <span className="font-heading text-sm font-extrabold text-magenta">
              10%
            </span>
          </div>
        </div>

        {phase === "won" ? (
          <div className="mt-6" aria-live="polite">
            <div className="rounded-card border-2 border-dashed border-magenta bg-white p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {popupCopy.couponLabel}
              </p>
              <p className="mt-1 font-heading text-2xl font-extrabold tracking-[0.2em] text-magenta">
                {coupon}
              </p>
              <button
                type="button"
                onClick={copyCoupon}
                className="mt-3 inline-flex items-center gap-2 rounded-button border border-border bg-offwhite px-4 py-2 text-xs font-bold text-text transition-colors duration-200 hover:border-turquoise hover:text-turquoise-dark"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    {popupCopy.copiedLabel}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {popupCopy.copyLabel}
                  </>
                )}
              </button>
            </div>

            <p className="mt-3 text-center text-sm leading-relaxed text-text-secondary">
              {popupCopy.couponNote}
            </p>

            <div className="mt-3 flex items-center justify-center gap-2 text-center text-sm">
              <Clock
                className="h-4 w-4 shrink-0 text-turquoise-dark"
                strokeWidth={2.5}
              />
              {secondsLeft > 0 ? (
                <span className="font-semibold text-text">
                  {popupCopy.validityLabel}{" "}
                  <span className="tabular-nums text-magenta">
                    {formatTime(secondsLeft)}
                  </span>
                </span>
              ) : (
                <span className="text-text-secondary">
                  {popupCopy.expiredNote}
                </span>
              )}
            </div>

            <a
              href={withCoupon(ctaLink, coupon)}
              rel="noopener noreferrer"
              onClick={() =>
                track("clique_agendamento_desconto", {
                  cupom: coupon,
                  segundos_restantes: secondsLeft,
                })
              }
              className="mt-5 flex w-full items-center justify-center rounded-button bg-turquoise px-6 py-4 text-center font-heading text-base font-bold text-white shadow-[0_10px_24px_-8px_rgba(0,184,200,0.55)] transition-[background-color,box-shadow,translate] duration-200 ease-snappy hover:-translate-y-0.5 hover:bg-turquoise-dark active:translate-y-0"
            >
              {ctaLabel}
            </a>

            <p className="mt-3 text-center text-[11px] leading-relaxed text-text-secondary">
              {popupCopy.fineprint}
            </p>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={spin}
              disabled={phase === "spinning"}
              className="w-full rounded-button bg-turquoise px-6 py-4 font-heading text-base font-bold text-white shadow-[0_10px_24px_-8px_rgba(0,184,200,0.55)] transition-[background-color,box-shadow,translate,opacity] duration-200 ease-snappy hover:-translate-y-0.5 hover:bg-turquoise-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {phase === "spinning" ? popupCopy.spinningLabel : popupCopy.spinLabel}
            </button>
            <p className="mt-3 text-xs leading-relaxed text-text-secondary">
              {popupCopy.wheelNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
