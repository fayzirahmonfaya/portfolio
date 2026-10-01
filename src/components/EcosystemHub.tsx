import EngineeredObject from "@/components/EngineeredObject";
import { cn } from "@/lib/utils";

export default function EcosystemHub({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[10px] border border-dashed border-line bg-ink p-6",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
          (Next)
        </span>
        <EngineeredObject size={72} className="shrink-0 opacity-80" />
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          ECOSYSTEM
        </h2>
        <p className="mt-1 font-sans text-sm text-muted/70">
          Next project — in development
        </p>
      </div>
    </div>
  );
}
