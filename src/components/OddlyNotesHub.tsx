import Image from "next/image";
import Link from "next/link";
import CornerArrow from "@/components/CornerArrow";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function OddlyNotesHub({ className }: { className?: string }) {
  const project = projects.find((p) => p.slug === "oddly-notes");
  if (!project) return null;

  const previewRows = project.engineeringHighlights?.slice(0, 2) ?? [];

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor-hover
      className={cn(
        "group relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-[10px] bg-ink-raised-2 p-7 transition-colors duration-300 hover:bg-ink-raised sm:min-h-[560px] sm:p-9",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-sans text-xs uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-acid" />
          (System)
        </span>
        {project.mark && (
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-line bg-ink">
            <Image src={project.mark} alt="" fill sizes="40px" className="object-cover" />
          </span>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-end">
        <div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-tight text-paper">
            ODDLY{" "}
            <span className="underline decoration-paper/50 decoration-[5px] underline-offset-[6px]">
              NOTES
            </span>
          </h2>
          <p className="mt-4 max-w-xs font-sans text-sm text-muted sm:text-base">
            {project.tagline}
          </p>

          {previewRows.length > 0 && (
            <div className="mt-6 divide-y divide-line border-y border-line">
              {previewRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
                    {row.label}
                  </span>
                  <span className="font-sans text-xs text-paper-dim sm:text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {project.heroImage && (
          <div
            className="relative mx-auto w-full max-w-[180px] overflow-hidden rounded-[14px] border border-line bg-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:max-w-[220px]"
            style={{
              aspectRatio: `${project.heroImage.width} / ${project.heroImage.height}`,
            }}
          >
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-5 font-sans text-xs uppercase tracking-[0.15em] text-muted">
        <span>View case study</span>
        <CornerArrow position="inline" />
      </div>
    </Link>
  );
}
