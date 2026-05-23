"use client";

import { useState } from "react";
import { BottomNav } from "@/components/bottom-nav";
import { Logo } from "@/components/logo";
import { Card } from "@/components/ui/card";
import type { ExportFormat } from "@/lib/exportar-mock-data";
import {
  exportHero,
  exportSettings,
  formatOptions,
  previousExports,
} from "@/lib/exportar-mock-data";

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
      <span className="text-[13px] font-medium text-foreground">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 ${
          checked ? "bg-primary" : "bg-border"
        }`}
      >
        <span
          className={`absolute top-1 left-1 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(11,15,20,0.12)] transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </label>
  );
}

export function ExportarView() {
  const [format, setFormat] = useState<ExportFormat>("meu");
  const [settings, setSettings] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(exportSettings.map((s) => [s.id, s.defaultOn])),
  );

  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-lg px-4 pb-28 pt-6 sm:max-w-2xl sm:px-6">
        <header className="mb-6 flex items-center justify-between gap-4">
          <Logo />
          <h1 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
            Exportar
          </h1>
        </header>

        <Card className="mb-4 p-5 text-center" as="section">
          <span
            className="mb-3 inline-flex size-12 items-center justify-center rounded-[14px] bg-background text-2xl"
            aria-hidden
          >
            ✨
          </span>
          <h2 className="text-[16px] font-semibold tracking-[-0.02em] text-foreground">
            {exportHero.title}
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
            {exportHero.subtitle}
          </p>
        </Card>

        <button
          type="button"
          className="mb-5 flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-primary text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(0,200,150,0.3)] transition-colors hover:bg-primary-hover active:scale-[0.99]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3V15M12 15L8 11M12 15L16 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {exportHero.downloadLabel}
        </button>

        <section className="mb-4 flex flex-col gap-2" aria-label="Formato de exportação">
          {formatOptions.map((opt) => {
            const selected = format === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFormat(opt.id)}
                className={`flex w-full items-start gap-3.5 rounded-card border p-4 text-left transition-all ${
                  selected
                    ? "border-primary bg-card shadow-[0_1px_3px_rgba(11,15,20,0.06)] ring-1 ring-primary/20"
                    : "border-border bg-card shadow-[var(--shadow-card)] hover:border-muted-light"
                }`}
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-background text-xl"
                  aria-hidden
                >
                  {opt.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">
                      {opt.label}
                    </p>
                    {opt.badge && (
                      <span className="inline-flex items-center rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-semibold text-primary">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                    {opt.description}
                  </p>
                </div>
                <span
                  className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    selected
                      ? "border-primary bg-primary"
                      : "border-border bg-card"
                  }`}
                  aria-hidden
                >
                  {selected && (
                    <span className="size-2 rounded-full bg-white" />
                  )}
                </span>
              </button>
            );
          })}
        </section>

        <Card className="mb-4 p-4 sm:p-5" as="section">
          <h2 className="mb-3 text-[13px] font-semibold tracking-[-0.01em] text-foreground">
            Exportações anteriores
          </h2>
          <ul>
            {previousExports.map((item, index) => (
              <li
                key={item.id}
                className={index > 0 ? "border-t border-border" : ""}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-3.5 text-left transition-colors hover:opacity-80"
                >
                  <span className="text-[13px] font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    {item.transactions} transações
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4 sm:p-5" as="section" aria-label="Configurações">
          <h2 className="mb-1 text-[13px] font-semibold tracking-[-0.01em] text-foreground">
            Configurações
          </h2>
          <ul className="divide-y divide-border">
            {exportSettings.map((setting) => (
              <li key={setting.id}>
                <Toggle
                  label={setting.label}
                  checked={settings[setting.id] ?? false}
                  onChange={(v) =>
                    setSettings((prev) => ({ ...prev, [setting.id]: v }))
                  }
                />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
