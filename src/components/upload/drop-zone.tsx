"use client";

import { useCallback, useState } from "react";

const supportedBanks = [
  "Nubank",
  "Itaú",
  "Bradesco",
  "Santander",
  "C6",
] as const;

export function DropZone() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((dragging: boolean) => {
    setIsDragging(dragging);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        onDragEnter={() => handleDrag(true)}
        onDragLeave={() => handleDrag(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleDrag(false);
        }}
        className={`flex min-h-[220px] flex-col items-center justify-center rounded-card border-2 border-dashed px-6 py-10 text-center transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-card"
        }`}
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div
          className={`mb-4 flex size-14 items-center justify-center rounded-[14px] transition-colors ${
            isDragging ? "bg-primary/15 text-primary" : "bg-background text-muted"
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10L12 5L17 10"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5V16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
          Solte seus extratos aqui
        </p>
        <p className="mt-1.5 max-w-[260px] text-[13px] leading-relaxed text-muted">
          PDF de extratos bancários e faturas de cartão
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {supportedBanks.map((bank) => (
            <span
              key={bank}
              className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-foreground"
            >
              {bank}
            </span>
          ))}
        </div>
      </div>

      <label className="block">
        <input type="file" accept=".pdf" className="sr-only" />
        <span className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[14px] bg-primary text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(0,200,150,0.3)] transition-colors hover:bg-primary-hover active:scale-[0.99]">
          Selecionar arquivo
        </span>
      </label>
    </div>
  );
}
