import Image from "next/image";
import Link from "next/link";
import CornerArrow from "@/components/CornerArrow";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function WayBlockHub({ className }: { className?: string }) {
  const project = projects.find((p) => p.slug === "wayblock");
  if (!project) return null;

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor-hover
      className={cn(
        "group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[10px] bg-ink-raised p-6 transition-colors duration-300 hover:bg-ink-raised-2",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
          (Project)
        </span>
        {project.heroImage && (
          <div
            className="relative w-14 shrink-0 overflow-hidden rounded-[8px] border border-line bg-ink"
            style={{
              aspectRatio: `${project.heroImage.width} / ${project.heroImage.height}`,
            }}
          >
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          WAYBLOCK
        </h2>
        <p className="mt-1 font-sans text-sm text-muted">{project.tagline}</p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
          Unity · C#
        </span>
        <CornerArrow position="inline" />
      </div>
    </Link>
  );
}
