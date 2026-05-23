import { CategoryDonut } from "@/components/category-donut";
import { KpiCard } from "@/components/kpi-card";
import { Logo } from "@/components/logo";
import { RecentTransactions } from "@/components/recent-transactions";
import {
  categories,
  kpis,
  recentTransactions,
} from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-lg px-4 pb-10 pt-6 sm:max-w-2xl sm:px-6 lg:max-w-4xl">
        <header className="mb-7 flex items-center justify-between gap-4">
          <Logo />
          <button
            type="button"
            className="flux-icon-btn flex size-10 items-center justify-center text-muted transition-colors hover:text-foreground"
            aria-label="Notificações"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>

        <p className="mb-6 text-[13px] leading-relaxed text-muted">
          Olá! Aqui está o resumo das suas finanças este mês.
        </p>

        <section
          className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
          aria-label="Indicadores financeiros"
        >
          <KpiCard variant="income" value={kpis.income} />
          <KpiCard variant="expense" value={kpis.expenses} />
          <KpiCard variant="balance" value={kpis.balance} />
        </section>

        <div className="flex flex-col gap-4">
          <CategoryDonut categories={[...categories]} />
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </div>
    </div>
  );
}
