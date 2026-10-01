import { cn } from "@/lib/utils";

const EMAIL = "fayzirahmonfaya@gmail.com";
const TELEGRAM_URL = "https://t.me/fayze_vfx";
const PHONE_DISPLAY = "+998 93 572 11 82";
const PHONE_TEL = "tel:+998935721182";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/fayzirahmon-abdullayev-765087440/";

const linkClasses =
  "font-sans text-xs uppercase tracking-[0.15em] text-ink/70 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink";

export default function ContactHub({ className }: { className?: string }) {
  return (
    <div
      id="contact"
      className={cn(
        "relative flex min-h-[220px] scroll-mt-28 flex-col justify-between overflow-hidden rounded-[10px] bg-acid p-6",
        className
      )}
    >
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-ink/60">
        (Contact)
      </span>

      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          GET IN TOUCH
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          data-cursor-hover
          className="mt-1 block break-all font-sans text-sm text-ink/70 underline decoration-ink/30 underline-offset-2 transition-colors hover:text-ink"
        >
          {EMAIL}
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className={linkClasses}
        >
          Telegram ↗
        </a>
        <a href={PHONE_TEL} data-cursor-hover className={linkClasses} title={PHONE_DISPLAY}>
          Call
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className={linkClasses}
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
