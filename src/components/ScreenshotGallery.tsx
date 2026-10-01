import Image from "next/image";
import type { ProjectScreenshot } from "@/data/projects";

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  if (screenshots.length === 0) return null;

  return (
    <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-4">
      {screenshots.map((shot) => (
        <div
          key={shot.src}
          className="relative w-[220px] shrink-0 snap-start overflow-hidden rounded-[14px] border border-line bg-ink-raised sm:w-[240px] md:w-full"
          style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 768px) 31vw, 220px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
