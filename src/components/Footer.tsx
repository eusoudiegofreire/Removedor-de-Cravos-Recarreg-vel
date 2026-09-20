import { resultsDisclaimer } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-text py-10 text-white/70">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <span className="font-heading text-lg font-bold text-white">
          Amazol<span className="text-turquoise">é</span>
        </span>

        <p className="mt-3 max-w-2xl text-xs leading-relaxed">
          {resultsDisclaimer}
        </p>

        <p className="mt-4 text-xs leading-relaxed">
          Clareador de Manchas Esfoliante Corporal · Fabricado por Amazon Kaps
          · Produto de uso adulto (+18). Consulte um dermatologista em caso de
          dúvidas sobre o uso.
        </p>

        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Amazolé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
