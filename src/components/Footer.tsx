import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 font-sans text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Faya — AI-Native Product Builder</span>
        <div className="flex items-center gap-6">
          <Link
            href="/cv"
            data-cursor-hover
            className="transition-colors hover:text-paper"
          >
            CV
          </Link>
          <a
            href="#top"
            data-cursor-hover
            className="transition-colors hover:text-paper"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
