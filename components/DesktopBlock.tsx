export default function DesktopBlock() {
  return (
    <div className="paper-texture fixed inset-0 z-[200] hidden items-center justify-center p-4 md:flex">
      <div className="w-full max-w-sm border-4 border-double border-[var(--ink)] p-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          Best Viewed on Mobile
        </p>
        <h1 className="font-display mt-3 text-xl font-black uppercase leading-snug sm:text-2xl">
          This Edition Is Formatted for Phone Screens.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Please open this page on your mobile phone for the full experience.
        </p>
        <div className="mt-6 border-t border-[var(--ink)]/20 pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            மொபைலில் காணவும்
          </p>
          <p className="font-display mt-2 text-base leading-relaxed sm:text-lg">
            இந்தப் பதிப்பு மொபைல் திரைக்காக வடிவமைக்கப்பட்டுள்ளது. தயவுசெய்து உங்கள் மொபைலில்
            திறக்கவும்.
          </p>
        </div>
      </div>
    </div>
  );
}
