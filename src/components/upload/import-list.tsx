import { Card } from "@/components/ui/card";
import type { recentImports } from "@/lib/upload-mock-data";

type ImportItem = (typeof recentImports)[number];

function StatusBadge({ status }: { status: ImportItem["status"] }) {
  if (status === "pending") {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-warning-bg px-2.5 py-1 text-[11px] font-semibold text-warning">
        Revisar →
      </span>
    );
  }

  if (status === "completed") {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-success-bg px-2.5 py-1 text-[11px] font-semibold text-primary">
        Concluído
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold text-muted">
      Processando
    </span>
  );
}

export function ImportList({ imports }: { imports: ImportItem[] }) {
  return (
    <Card className="p-4 sm:p-5">
      <h2 className="mb-4 text-[13px] font-semibold tracking-[-0.01em] text-foreground">
        Importações recentes
      </h2>

      <ul className="flex flex-col">
        {imports.map((item, index) => (
          <li
            key={item.id}
            className={index > 0 ? "border-t border-border pt-4 mt-4" : ""}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-foreground">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {item.bank} · {item.date}
                </p>
              </div>
              <StatusBadge status={item.status} />
            </div>

            {item.status === "processing" && (
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary flux-progress-bar"
                    aria-hidden
                  />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
