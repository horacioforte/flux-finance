"use client";

import { useCallback, useMemo, useState } from "react";
import { BottomNav } from "@/components/bottom-nav";
import { Logo } from "@/components/logo";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";
import type { PendingTransaction } from "@/lib/pendencias-mock-data";
import {
  PENDENCIAS_REMAINING_START,
  PENDENCIAS_TOTAL_LOTE,
  pendenciasInitialTransactions,
} from "@/lib/pendencias-mock-data";

function ConfidenceBar({ pct }: { pct: number }) {
  const high = pct > 80;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] font-medium text-muted">
        <span>Confiança da IA</span>
        <span className={high ? "text-primary" : "text-warning"}>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-background">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            high ? "bg-primary" : "bg-warning"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function PendingCard({
  tx,
  isExiting,
  onApprove,
  onAlter,
  onSkip,
}: {
  tx: PendingTransaction;
  isExiting: boolean;
  onApprove: () => void;
  onAlter: () => void;
  onSkip: () => void;
}) {
  const badgeHigh = tx.aiConfidencePct > 80;

  return (
    <Card
      as="article"
      className={`overflow-hidden p-4 transition-all duration-300 ease-out ${
        isExiting
          ? "pointer-events-none scale-[0.97] opacity-0 blur-[0.5px] [transform:translateX(1rem)]"
          : ""
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="min-w-0 text-[13px] font-semibold leading-snug tracking-[0.02em] text-foreground">
          {tx.description}
        </h2>
        <p className="shrink-0 text-[15px] font-semibold tabular-nums tracking-[-0.02em] text-expense">
          {formatCurrency(tx.amount)}
        </p>
      </div>
      <p className="mb-4 text-xs font-medium text-muted">
        {tx.dateLabel} · {tx.bankLabel}
      </p>

      <ConfidenceBar pct={tx.aiConfidencePct} />

      <div className="mt-4 rounded-[12px] border border-border bg-background px-3 py-2.5">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[13px] font-medium leading-snug text-foreground">
            <span className="mr-1.5" aria-hidden>
              {tx.suggestionEmoji}
            </span>
            {tx.suggestedCategory}
          </p>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              badgeHigh ? "bg-success-bg text-primary" : "bg-warning-bg text-warning"
            }`}
          >
            {badgeHigh ? "Alta conf." : "Baixa conf."}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_1fr_auto] gap-2">
        <button
          type="button"
          onClick={onApprove}
          className="flex h-10 items-center justify-center rounded-[12px] bg-primary text-[12px] font-semibold text-white shadow-[0_2px_8px_rgba(0,200,150,0.28)] transition-colors hover:bg-primary-hover active:scale-[0.99]"
        >
          Aprovar
        </button>
        <button
          type="button"
          onClick={onAlter}
          className="flex h-10 items-center justify-center rounded-[12px] border border-warning/35 bg-warning-bg text-[12px] font-semibold text-warning transition-colors hover:border-warning/60 active:scale-[0.99]"
        >
          Alterar
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="flux-icon-btn flex size-10 items-center justify-center text-muted transition-colors hover:text-foreground"
          aria-label="Pular"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Card>
  );
}

export function PendenciasView() {
  const [items, setItems] = useState<PendingTransaction[]>(
    () => pendenciasInitialTransactions,
  );
  const [remaining, setRemaining] = useState(PENDENCIAS_REMAINING_START);
  const [exitingId, setExitingId] = useState<string | null>(null);

  const pctDone = useMemo(() => {
    const done = PENDENCIAS_TOTAL_LOTE - remaining;
    return Math.min(
      100,
      Math.max(0, Math.round((done / PENDENCIAS_TOTAL_LOTE) * 100)),
    );
  }, [remaining]);

  const handleApprove = useCallback((id: string) => {
    if (exitingId !== null) return;
    setExitingId(id);
    window.setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id));
      setRemaining((r) => Math.max(0, r - 1));
      setExitingId(null);
    }, 320);
  }, [exitingId]);

  const handleAlter = useCallback(() => {
    /* Placeholder — fluxo de edição futuro */
  }, []);

  const handleSkip = useCallback(() => {
    /* Placeholder — pular sem animar remoção */
  }, []);

  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-lg px-4 pb-28 pt-6 sm:max-w-2xl sm:px-6">
        <header className="mb-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <Logo />
            <h1 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
              Pendências
            </h1>
          </div>
          <p className="text-[13px] font-medium text-muted">
            Itaú Visa — Abril 2026
          </p>
        </header>

        <Card className="mb-4 p-4" as="section" aria-label="Progresso das pendências">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <p className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">
              {remaining}{" "}
              <span className="font-medium text-muted">restantes</span>
            </p>
            <p className="text-[13px] font-semibold text-primary">
              {pctDone}%{" "}
              <span className="font-medium text-muted">concluído</span>
            </p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-background">
            <div
              className="flux-pendencias-fill h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${pctDone}%` }}
            />
          </div>
        </Card>

        <div className="flex flex-col gap-3" role="list" aria-live="polite">
          {items.length === 0 ? (
            <Card className="p-8 text-center" as="div">
              <p className="text-[13px] font-medium text-muted">
                Nenhuma pendência nesta lista. Bom trabalho!
              </p>
            </Card>
          ) : (
            items.map((tx) => (
              <div key={tx.id} role="listitem">
                <PendingCard
                  tx={tx}
                  isExiting={exitingId === tx.id}
                  onApprove={() => handleApprove(tx.id)}
                  onAlter={handleAlter}
                  onSkip={handleSkip}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
