export type InstallmentInfo = {
  count: number;
  installmentPrice: string;
  cashPrice: string;
};

type PriceInstallmentsProps = {
  info: InstallmentInfo;
  className?: string;
};

/**
 * Matches exactly what the Logzz checkout shows — never invent fees or
 * "sem juros" claims. Only the installment and the cash price are shown
 * here; the full breakdown (including the parceled total) lives in the
 * checkout itself.
 */
export function PriceInstallments({ info, className = "" }: PriceInstallmentsProps) {
  return (
    <div className={className}>
      <p className="font-heading text-2xl font-bold text-magenta sm:text-3xl">
        {info.cashPrice} à vista
      </p>
      <p className="mt-1 text-base font-medium text-text">
        ou {info.count}x de {info.installmentPrice} no cartão
      </p>
    </div>
  );
}
