import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-light/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <span className="font-display text-lg font-semibold text-ink sm:text-xl">
          Removedor de Cravos
        </span>
        <CTAButton size="md" label="Agendar entrega" className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
