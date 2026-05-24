export function AuthLogo() {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <div
        className="mb-4 flex size-14 items-center justify-center rounded-[14px] bg-primary shadow-[0_4px_16px_rgba(0,200,150,0.35)]"
        aria-hidden
      >
        <span className="text-2xl font-bold leading-none text-white">F</span>
      </div>
      <p className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
        Flux Finance
      </p>
    </div>
  );
}

export const authInputClassName =
  "h-12 w-full rounded-[14px] border border-border bg-card px-4 text-[14px] text-foreground shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-muted-light focus:border-primary focus:ring-2 focus:ring-primary/15";
