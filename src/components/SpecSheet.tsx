import Reveal from "@/components/Reveal";
import type { SpecRow } from "@/data/types";

export default function SpecSheet({ rows }: { rows: SpecRow[] }) {
  return (
    <Reveal>
      <div className="divide-y divide-line rounded-[20px] border border-line">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-8"
          >
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
              {row.label}
            </span>
            <span className="font-sans text-sm text-paper sm:text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
