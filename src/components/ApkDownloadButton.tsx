export default function ApkDownloadButton({ apkUrl }: { apkUrl?: string }) {
  const ready = Boolean(apkUrl);

  const label = (
    <span className="flex flex-col items-start leading-tight">
      <span>Download APK</span>
      <span className="font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-ink/60">
        Android · Test Build
      </span>
    </span>
  );

  if (ready) {
    return (
      <a
        href={apkUrl}
        download
        data-cursor-hover
        className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3.5 font-sans text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]"
      >
        {label}
      </a>
    );
  }

  return (
    <span
      aria-disabled="true"
      title="Download hosting coming soon"
      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-line px-6 py-3.5 font-sans text-sm font-medium text-muted opacity-60"
    >
      {label}
    </span>
  );
}
