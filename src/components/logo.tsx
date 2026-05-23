export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary"
        aria-hidden
      >
        <span className="text-lg font-bold leading-none text-white">F</span>
      </div>
      {!compact && (
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
            Flux Finance
          </p>
          <p className="text-xs font-medium text-muted">Maio 2026</p>
        </div>
      )}
    </div>
  );
}
