import { Card } from "@/components/ui/card";

export function SpreadsheetModeCard() {
  return (
    <Card className="flex items-center gap-3.5 p-4">
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-background text-xl"
        aria-hidden
      >
        🧠
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">
          Modo Planilha Atual
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted">
          IA categoriza com base no seu histórico
        </p>
      </div>
      <span className="inline-flex shrink-0 items-center rounded-full bg-success-bg px-2.5 py-1 text-[11px] font-semibold text-primary">
        Ativo
      </span>
    </Card>
  );
}
