import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

type Category = {
  name: string;
  value: number;
  color: string;
};

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TRACK_COLOR = "#E7EAEE";

function buildSegments(categories: Category[]) {
  const total = categories.reduce((sum, c) => sum + c.value, 0);
  let offset = 0;

  return categories.map((category) => {
    const fraction = category.value / total;
    const length = fraction * CIRCUMFERENCE;
    const segment = {
      ...category,
      fraction,
      dashArray: `${length} ${CIRCUMFERENCE - length}`,
      dashOffset: -offset,
    };
    offset += length;
    return segment;
  });
}

export function CategoryDonut({ categories }: { categories: Category[] }) {
  const total = categories.reduce((sum, c) => sum + c.value, 0);
  const segments = buildSegments(categories);

  return (
    <Card className="p-4 sm:p-5">
      <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">
        Despesas por categoria
      </h2>

      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative size-40 shrink-0">
          <svg
            viewBox="0 0 128 128"
            className="size-full -rotate-90"
            role="img"
            aria-label="Gráfico de despesas por categoria"
          >
            <circle
              cx="64"
              cy="64"
              r={RADIUS}
              fill="none"
              stroke={TRACK_COLOR}
              strokeWidth="14"
            />
            {segments.map((segment) => (
              <circle
                key={segment.name}
                cx="64"
                cy="64"
                r={RADIUS}
                fill="none"
                stroke={segment.color}
                strokeWidth="14"
                strokeDasharray={segment.dashArray}
                strokeDashoffset={segment.dashOffset}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.06em] text-muted-light">
              Total
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-foreground">
              {formatCurrency(total)}
            </span>
          </div>
        </div>

        <ul className="grid w-full gap-3 sm:max-w-[220px]">
          {segments.map((segment) => (
            <li
              key={segment.name}
              className="flex items-center justify-between gap-3 text-[13px]"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: segment.color }}
                  aria-hidden
                />
                <span className="truncate font-medium text-foreground">
                  {segment.name}
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted">
                {Math.round(segment.fraction * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
