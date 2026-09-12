import CTAButton from "./CTAButton";
import PriceTag from "./PriceTag";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-rose-metal py-16 text-center sm:py-20">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-glass/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-rose-light/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Agende sua entrega e pague somente quando receber
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
          Garanta o seu Removedor de Cravos Recarregável com frete grátis,
          entrega em até 24 horas e pagamento na entrega.
        </p>

        <div className="mt-7 flex justify-center">
          <PriceTag align="center" variant="onDark" />
        </div>

        <div className="mt-8">
          <CTAButton className="bg-white text-accent hover:bg-white/90 hover:text-accent-dark" />
          <p className="mt-4 text-sm text-white/85">
            Pagamento na entrega: dinheiro, Pix ou cartão.
          </p>
        </div>
      </div>
    </section>
  );
}
