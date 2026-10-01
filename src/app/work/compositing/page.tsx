import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const SHOWREEL_URL = "https://youtu.be/iBmfC8iLX5w";
const SHOWREEL_EMBED_URL = "https://www.youtube.com/embed/iBmfC8iLX5w";

const facts = [
  { label: "Focus", value: "AI-native product development" },
  { label: "Background", value: "Digital compositing, 3 years" },
  { label: "Core tools", value: "Claude Code, Cursor, Git" },
  { label: "Currently building", value: "WayBlock & Oddly Notes" },
];

export const metadata: Metadata = {
  title: "Digital Compositing — Faya",
  description:
    "Three years of professional digital compositing experience, and how it shapes product and UI decisions in software work.",
};

export default function CompositingDetailPage() {
  return (
    <>
      <main className="flex-1 px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/#compositing"
            data-cursor-hover
            className="inline-flex items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-paper"
          >
            ← Back
          </Link>

          <div className="mt-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="(Background)"
                title="Three years in digital compositing"
                description="Before I wrote software, I built images — layer by layer, frame by frame. That eye for detail, hierarchy, and visual craft now shapes every interface I ship."
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-muted sm:text-base">
                  Compositing teaches you to see a product the way an
                  audience will: light, contrast, rhythm, and where the eye
                  lands first. It is the same instinct I now bring to
                  product design and UI — deciding what deserves emphasis,
                  and what should quietly get out of the way.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <a
                  href={SHOWREEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-300 hover:border-line-strong hover:bg-ink-raised-2"
                >
                  Watch showreel ↗
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] border border-line bg-ink-raised shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                  <iframe
                    src={SHOWREEL_EMBED_URL}
                    title="Digital compositing showreel"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <section className="mt-20 sm:mt-28">
            <SectionHeading eyebrow="(About)" title="Product thinking, AI-assisted execution" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-4 rounded-[14px] border border-line bg-ink-raised p-6"
                >
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    {fact.label}
                  </span>
                  <p className="font-display text-lg font-medium tracking-tight text-paper">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
