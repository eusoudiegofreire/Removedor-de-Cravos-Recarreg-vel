import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "offwhite" | "white";
};

export function Section({ children, id, className = "", bg = "white" }: SectionProps) {
  const bgClass = bg === "offwhite" ? "bg-offwhite" : "bg-white";
  return (
    <section id={id} className={`${bgClass} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "turquoise" }: { children: ReactNode; tone?: "turquoise" | "magenta" | "green" }) {
  const toneClass =
    tone === "magenta"
      ? "bg-magenta-soft text-magenta-dark"
      : tone === "green"
      ? "bg-green-soft text-green"
      : "bg-turquoise-soft text-turquoise-dark";
  return (
    <span
      className={`inline-flex items-center rounded-button px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${toneClass}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  eyebrowTone?: "turquoise" | "magenta" | "green";
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`reveal max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
