import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ApkDownloadButton from "@/components/ApkDownloadButton";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import SectionHeading from "@/components/SectionHeading";
import SpecSheet from "@/components/SpecSheet";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Faya`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <main className="flex-1 px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/#work"
            data-cursor-hover
            className="inline-flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-paper"
          >
            ← Back to work
          </Link>

          {/* HERO */}
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <Reveal className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-sans text-xs uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                {project.status}
              </span>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-paper">
                {project.name}
              </h1>
              <p className="mt-4 max-w-md font-sans text-lg leading-relaxed text-muted">
                {project.tagline}
              </p>
              <p className="mt-3 font-sans text-xs uppercase tracking-[0.15em] text-muted/70">
                Solo — {project.role}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ApkDownloadButton apkUrl={project.apkUrl} />
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
                  >
                    View on GitHub
                  </a>
                )}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
                  >
                    Visit
                  </a>
                )}
              </div>
            </Reveal>

            {project.heroImage && (
              <Reveal delay={0.1} className="lg:col-span-6">
                <div
                  className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[20px] border border-line bg-ink-raised"
                  style={{
                    aspectRatio: `${project.heroImage.width} / ${project.heroImage.height}`,
                  }}
                >
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 300px, 70vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>

          {/* PROBLEM */}
          <section className="mt-20 sm:mt-28">
            <SectionHeading eyebrow="(Problem)" title={project.problem} />
          </section>

          {/* SCREENSHOTS */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mt-20 sm:mt-28">
              <SectionHeading eyebrow="(Evidence)" title="What it looks like" />
              <div className="mt-10">
                <ScreenshotGallery screenshots={project.screenshots} />
              </div>
            </section>
          )}

          {/* APPROACH */}
          <section className="mt-20 sm:mt-28">
            <SectionHeading eyebrow="(Approach)" title="How it's built" />
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
              {project.approach}
            </p>
          </section>

          {/* ENGINEERING */}
          {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
            <section className="mt-20 sm:mt-28">
              <SectionHeading eyebrow="(Engineering)" title="What was actually built" />
              <div className="mt-10 max-w-3xl">
                <SpecSheet rows={project.engineeringHighlights} />
              </div>
            </section>
          )}

          {/* STACK */}
          <section className="mt-20 sm:mt-28">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
              Stack
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1.5 font-sans text-sm text-paper-dim"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
