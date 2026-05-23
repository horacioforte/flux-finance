import { Card } from "@/components/ui/card";
import { formatCurrency, formatDate } from "@/lib/format";

type Transaction = {
  id: string;
  description: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
};

export function RecentTransactions({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">
          Transações recentes
        </h2>
        <button
          type="button"
          className="text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          Ver todas
        </button>
      </div>

      <ul>
        {transactions.map((tx, index) => {
          const isIncome = tx.type === "income";

          return (
            <li
              key={tx.id}
              className={`flex items-center gap-3 py-3.5 ${
                index > 0 ? "border-t border-border" : ""
              }`}
            >
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-[12px] text-[13px] font-semibold ${
                  isIncome
                    ? "bg-income/10 text-income"
                    : "bg-expense/10 text-expense"
                }`}
                aria-hidden
              >
                {tx.category.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-foreground">
                  {tx.description}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {tx.category} · {formatDate(tx.date)}
                </p>
              </div>
              <p
                className={`shrink-0 text-[13px] font-semibold tabular-nums tracking-[-0.01em] ${
                  isIncome ? "text-income" : "text-expense"
                }`}
              >
                {isIncome ? "+" : "−"}
                {formatCurrency(Math.abs(tx.amount))}
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
