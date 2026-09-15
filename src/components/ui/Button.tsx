import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-heading font-bold text-center transition-[background-color,color,border-color,box-shadow,translate,scale] duration-200 ease-snappy hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-100";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-turquoise text-white shadow-[0_10px_24px_-8px_rgba(0,184,200,0.55)] hover:bg-turquoise-dark hover:shadow-[0_14px_28px_-8px_rgba(0,184,200,0.6)]",
  secondary:
    "bg-magenta text-white shadow-[0_10px_24px_-8px_rgba(198,0,143,0.45)] hover:bg-magenta-dark hover:shadow-[0_14px_28px_-8px_rgba(198,0,143,0.5)]",
  outline:
    "bg-white text-text border border-border hover:border-turquoise hover:text-turquoise",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
