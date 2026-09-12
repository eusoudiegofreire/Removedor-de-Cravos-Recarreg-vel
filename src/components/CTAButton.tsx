import Link from "next/link";
import { CTA_LABEL, CTA_LINK } from "@/config/site";

type CTAButtonProps = {
  label?: string;
  className?: string;
  size?: "md" | "lg";
};

export default function CTAButton({
  label = CTA_LABEL,
  className = "",
  size = "lg",
}: CTAButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base sm:text-lg"
      : "px-6 py-3 text-sm sm:text-base";

  return (
    <Link
      href={CTA_LINK}
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent ${sizeClasses} font-bold text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-dark active:translate-y-0 ${className}`}
    >
      {label}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
