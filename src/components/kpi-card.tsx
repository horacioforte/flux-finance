import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

type KpiVariant = "income" | "expense" | "balance";

const variantStyles: Record<
  KpiVariant,
  { accent: string; iconBg: string; label: string }
> = {
  income: {
    accent: "text-income",
    iconBg: "bg-income/10 text-income",
    label: "Receitas",
  },
  expense: {
    accent: "text-expense",
    iconBg: "bg-expense/10 text-expense",
    label: "Despesas",
  },
  balance: {
    accent: "text-foreground",
    iconBg: "bg-background text-muted",
    label: "Saldo",
  },
};

const icons: Record<KpiVariant, React.ReactNode> = {
  income: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 19V5M12 5L7 10M12 5L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  expense: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 5V19M12 19L7 14M12 19L17 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  balance: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="6"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export function KpiCard({
  variant,
  value,
}: {
  variant: KpiVariant;
  value: number;
}) {
  const style = variantStyles[variant];

  return (
    <Card as="article" className="flex min-w-0 flex-1 flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-medium text-muted">{style.label}</span>
        <span
          className={`flex size-8 items-center justify-center rounded-[10px] ${style.iconBg}`}
        >
          {icons[variant]}
        </span>
      </div>
      <p
        className={`text-xl font-semibold tracking-[-0.02em] ${style.accent}`}
      >
        {formatCurrency(value)}
      </p>
    </Card>
  );
}
