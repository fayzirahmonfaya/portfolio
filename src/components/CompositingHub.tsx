import Link from "next/link";
import CornerArrow from "@/components/CornerArrow";
import { cn } from "@/lib/utils";

export default function CompositingHub({ className }: { className?: string }) {
  return (
    <Link
      id="compositing"
      href="/work/compositing"
      data-cursor-hover
      className={cn(
        "group relative flex min-h-[220px] scroll-mt-28 flex-col justify-between overflow-hidden rounded-[10px] bg-paper p-6 transition-colors duration-300 hover:bg-paper-dim",
        className
      )}
    >
      <span className="w-fit font-sans text-xs uppercase tracking-[0.2em] text-ink/50">
        (Background)
      </span>

      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          DIGITAL
          <br />
          COMPOSITING
        </h2>
        <p className="mt-1 font-sans text-sm text-ink/60">
          3 years professional VFX
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="font-sans text-xs uppercase tracking-[0.15em] text-ink/50">
          View background
        </span>
        <CornerArrow tone="dark" position="inline" />
      </div>
    </Link>
  );
}
