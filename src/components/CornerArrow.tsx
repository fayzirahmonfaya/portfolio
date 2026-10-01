import { cn } from "@/lib/utils";

type CornerArrowProps = {
  tone?: "light" | "dark";
  /** "corner" (default) absolutely positions bottom-right, as on a Card. "inline" drops positioning for use inside a flex row. */
  position?: "corner" | "inline";
  className?: string;
};

/**
 * The site's one recurring card motif: a small circular arrow mark,
 * consistently bottom-right, across Selected Work / Workflow / Toolkit / About.
 */
export default function CornerArrow({
  tone = "light",
  position = "corner",
  className,
}: CornerArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 [transition-timing-function:var(--ease-out)]",
        position === "corner" && "absolute bottom-5 right-5",
        tone === "light"
          ? "border-line text-paper group-hover:border-acid group-hover:bg-acid group-hover:text-ink"
          : "border-ink/25 bg-ink/5 text-ink group-hover:bg-ink group-hover:text-acid",
        className
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M3.5 10.5L10.5 3.5M10.5 3.5H4.75M10.5 3.5V9.25"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
