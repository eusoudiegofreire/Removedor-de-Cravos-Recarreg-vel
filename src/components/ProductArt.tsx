type JarProps = {
  variant?: "closed" | "open";
  className?: string;
};

/** Placeholder illustration — replace with real product photography. */
export function JarIllustration({ variant = "closed", className = "" }: JarProps) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      role="img"
      aria-label={`Pote Amazolé ${variant === "open" ? "aberto" : "fechado"} (imagem ilustrativa)`}
    >
      <defs>
        <radialGradient id="jarShadow" cx="50%" cy="85%" r="60%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="jarBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f1f1" />
        </linearGradient>
        <linearGradient id="creamTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf8" />
          <stop offset="100%" stopColor="#f3ead9" />
        </linearGradient>
      </defs>

      <ellipse cx="180" cy="322" rx="110" ry="18" fill="url(#jarShadow)" />

      {variant === "closed" ? (
        <>
          <rect x="86" y="70" width="188" height="40" rx="10" fill="#00b8c8" />
          <rect x="86" y="70" width="188" height="12" rx="6" fill="#00939f" />
          <rect x="92" y="104" width="176" height="196" rx="26" fill="url(#jarBody)" stroke="#e8e2d6" strokeWidth="2" />
          <rect x="112" y="150" width="136" height="88" rx="14" fill="#c6008f" />
          <text
            x="180"
            y="188"
            textAnchor="middle"
            fontFamily="Manrope, sans-serif"
            fontWeight="800"
            fontSize="26"
            fill="#ffffff"
          >
            Amazolé
          </text>
          <text
            x="180"
            y="212"
            textAnchor="middle"
            fontFamily="Manrope, sans-serif"
            fontWeight="600"
            fontSize="12"
            fill="#ffffff"
            opacity="0.9"
          >
            CLAREADOR ESFOLIANTE
          </text>
        </>
      ) : (
        <>
          <rect x="92" y="140" width="176" height="160" rx="26" fill="url(#jarBody)" stroke="#e8e2d6" strokeWidth="2" />
          <rect x="112" y="182" width="136" height="72" rx="12" fill="#c6008f" opacity="0.92" />
          <text
            x="180"
            y="212"
            textAnchor="middle"
            fontFamily="Manrope, sans-serif"
            fontWeight="800"
            fontSize="20"
            fill="#ffffff"
          >
            Amazolé
          </text>
          <ellipse cx="180" cy="140" rx="88" ry="22" fill="url(#creamTop)" stroke="#e8e2d6" strokeWidth="2" />
          <path
            d="M120 132 Q150 118 180 130 Q210 142 240 128"
            fill="none"
            stroke="#e6d9bd"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <rect x="60" y="60" width="150" height="26" rx="8" fill="#00b8c8" transform="rotate(-8 60 60)" />
        </>
      )}
    </svg>
  );
}
