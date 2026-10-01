import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cvHistory, cvSkills } from "@/data/cv";
import { projects } from "@/data/projects";

const EMAIL = "fayzirahmonfaya@gmail.com";

export const metadata: Metadata = {
  title: "CV — Faya",
  description:
    "AI-Native Product Builder / AI-Assisted Software Engineer — summary, history, and skills.",
};

export default function CvPage() {
  return (
    <>
      <main className="flex-1 px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1000px]">
          <Link
            href="/"
            data-cursor-hover
            className="inline-flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-paper"
          >
            ← Back
          </Link>

          <Reveal className="mt-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-sans text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" />
              (CV)
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-paper">
              Fayzirahmon Abdullayev
            </h1>
            <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-muted">
              AI-Native Product Builder / AI-Assisted Software Engineer
            </p>
          </Reveal>

          {/* SUMMARY — edit this paragraph directly in src/app/cv/page.tsx */}
          <section className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="(Summary)" title="How I work" />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted sm:text-lg">
                AI-native, full-stack software engineer who ships complete
                products — architecture, backend, frontend, and LLM
                integration — working in close collaboration with AI coding
                agents. Three years of professional digital compositing
                experience brings a strong visual and product sense to that
                engineering work.
              </p>
            </Reveal>
          </section>

          {/* HISTORY — a data-driven list. Add your own entries in src/data/cv.ts */}
          <section className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="(History)" title="Experience & education" />
            <div className="mt-10">
              {cvHistory.length > 0 ? (
                <div className="divide-y divide-line border-y border-line">
                  {cvHistory.map((entry) => (
                    <div
                      key={`${entry.period}-${entry.title}`}
                      className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                    >
                      <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted sm:col-span-3">
                        {entry.period}
                      </span>
                      <div className="sm:col-span-9">
                        <p className="font-display text-lg font-medium tracking-tight text-paper">
                          {entry.title}
                          <span className="text-muted"> — {entry.org}</span>
                        </p>
                        {entry.description && (
                          <p className="mt-2 max-w-xl font-sans text-sm text-muted">
                            {entry.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[14px] border border-dashed border-line p-8 text-center">
                  <p className="font-sans text-sm text-muted">
                    No entries yet — add your employment and education
                    history to{" "}
                    <code className="rounded bg-ink-raised px-1.5 py-0.5 text-paper-dim">
                      src/data/cv.ts
                    </code>
                    .
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* PROJECTS — reused directly from the same project data, not duplicated */}
          <section className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="(Projects)" title="Selected work" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <Reveal key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor-hover
                    className="group block h-full rounded-[14px] border border-line p-6 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
                  >
                    <h3 className="font-display text-xl font-medium tracking-tight text-paper">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-muted">
                      {project.description}
                    </p>
                    <p className="mt-4 font-sans text-xs uppercase tracking-[0.15em] text-muted">
                      {project.stack.join(" · ")}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="(Skills)" title="Tools & stack" />
            <div className="mt-10 flex flex-wrap gap-2">
              {cvSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3 py-1.5 font-sans text-sm text-paper-dim"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* BACKGROUND + LANGUAGES + CONTACT */}
          <section className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3">
            <Link
              href="/work/compositing"
              data-cursor-hover
              className="rounded-[14px] border border-line p-6 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                Background
              </span>
              <p className="mt-3 font-display text-lg font-medium tracking-tight text-paper">
                Digital compositing, 3 years
              </p>
            </Link>

            <div className="rounded-[14px] border border-line p-6">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                Languages
              </span>
              <p className="mt-3 font-display text-lg font-medium tracking-tight text-paper">
                English — Upper-Intermediate
              </p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              data-cursor-hover
              className="rounded-[14px] border border-line p-6 transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised"
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                Contact
              </span>
              <p className="mt-3 break-all font-display text-base font-medium tracking-tight text-paper">
                {EMAIL}
              </p>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
