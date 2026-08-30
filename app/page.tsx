import Countdown from "@/components/Countdown";
import Sparkline from "@/components/Sparkline";
import { galleryPlaceholders, invite } from "@/lib/data";

function Rule() {
  return <div className="border-t-4 border-double border-[var(--ink)]" aria-hidden />;
}

function BoxedStat({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[var(--ink)]/50 p-4">
      <p className="border-b border-[var(--ink)]/40 pb-2 text-xs font-bold uppercase tracking-[0.2em]">
        {title}
      </p>
      <div className="pt-3">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="paper-texture min-h-screen flex-1 px-4 py-6 sm:px-10 sm:py-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Top tags */}
        <div className="flex flex-col gap-2 border-b border-[var(--ink)]/40 pb-4 text-xs uppercase tracking-wide sm:flex-row sm:items-start sm:justify-between sm:text-sm">
          <div className="border border-[var(--ink)]/50 px-3 py-2">
            Happy Retirement, {invite.retireeFullName}!
          </div>
          <div className="border border-[var(--ink)]/50 px-3 py-2 sm:text-right">
            Special Edition
            <br />
            Today we&apos;re celebrating {invite.retireeFirstName}&apos;s retirement!
          </div>
        </div>

        {/* Masthead */}
        <div className="py-6 text-center">
          <h1 className="font-masthead text-6xl leading-none sm:text-8xl">{invite.paperName}</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.35em] sm:text-sm">{invite.edition}</p>
        </div>

        <Rule />

        <div className="flex items-center justify-between py-2 text-[10px] uppercase tracking-[0.2em] sm:text-xs">
          <span>Volume I · No. 1</span>
          <span>Admission: Your Presence Is Requested</span>
        </div>

        <Rule />

        {/* Headline */}
        <h2 className="font-display mt-8 text-center text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
          {invite.headline}
        </h2>

        <div className="mt-6 text-center">
          <p className="font-display text-xl font-bold uppercase sm:text-2xl">
            {invite.yearsOfService} Years of Service!
          </p>
          <p className="mt-1 text-sm uppercase tracking-wide sm:text-base">
            Read all about the year {invite.retireeFirstName} was hired
          </p>
        </div>

        {/* Main body: trivia / photo / cost of living */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.3fr_1fr]">
          <div className="space-y-6">
            <BoxedStat title={`The World in ${invite.hireYear}`}>
              <p className="text-sm leading-relaxed">{invite.worldInHireYear.leader}</p>
              <p className="mt-1 text-sm leading-relaxed">{invite.worldInHireYear.population}</p>
              <p className="mt-3 text-center text-xs">{invite.worldInHireYear.factoid}</p>
            </BoxedStat>

            <div>
              <p className="font-display text-lg italic">What Happened in {invite.hireYear}</p>
              <p className="mt-2 text-sm leading-relaxed first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:font-black first-letter:leading-[0.8]">
                {invite.whatHappened}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center gap-3 border-4 border-[var(--ink)] bg-[var(--ink)]/[0.06] p-6">
              <span className="font-display text-6xl font-black">
                {invite.retireeFirstName.charAt(0)}
              </span>
              <span className="text-center text-xs uppercase tracking-widest opacity-60">
                Photo Coming Soon
              </span>
            </div>
            <p className="text-center text-xs italic">
              {invite.retireeFirstName}, on his first day, {invite.hireYear}
            </p>
          </div>

          <div className="space-y-6">
            <BoxedStat title="Cost of Living">
              <dl className="space-y-1 text-sm">
                {invite.costOfLiving.map((row) => (
                  <div key={row.item} className="flex justify-between border-b border-dotted border-[var(--ink)]/30 py-1">
                    <dt>{row.item}</dt>
                    <dd className="font-bold">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </BoxedStat>

            <BoxedStat title="Average Salary">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">{invite.averageSalary}</span>
                <Sparkline />
              </div>
            </BoxedStat>
          </div>
        </div>

        {/* Invite banner */}
        <div className="relative left-1/2 my-10 w-screen -translate-x-1/2 bg-[var(--ink)] px-5 py-8 text-center text-[var(--paper)] sm:px-10">
          <p className="text-xs uppercase tracking-[0.35em] opacity-70">Special Announcement</p>
          <p className="font-display mt-3 text-2xl font-black uppercase sm:text-4xl">
            You&apos;re Invited to the Celebration!
          </p>
          <p className="mt-4 text-base sm:text-lg">
            {invite.date} · {invite.time}
          </p>
          <p className="mt-1 text-sm opacity-80 sm:text-base">
            {invite.venue.name} — {invite.venue.address}
          </p>
          <a
            href={invite.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
          >
            View on Map
          </a>
        </div>

        {/* Logistics columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <BoxedStat title="Evening Schedule">
            <ul className="space-y-1.5 text-sm">
              {invite.schedule.map((item) => (
                <li key={item.time} className="flex justify-between gap-3">
                  <span className="font-bold">{item.time}</span>
                  <span className="text-right">{item.label}</span>
                </li>
              ))}
            </ul>
          </BoxedStat>

          <BoxedStat title="Countdown to the Big Day">
            <Countdown targetDate={invite.isoDate} />
            <p className="mt-4 text-center text-xs uppercase tracking-wide">
              Attire: {invite.attire}
            </p>
          </BoxedStat>

          <BoxedStat title="RSVP & Gifts">
            <p className="text-sm leading-relaxed">Kindly respond by {invite.rsvpBy}.</p>
            <p className="mt-2 text-sm">
              Contact {invite.contact.name} at{" "}
              <a href={`tel:${invite.contact.phone}`} className="underline underline-offset-2">
                {invite.contact.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${invite.contact.email}`} className="underline underline-offset-2">
                {invite.contact.email}
              </a>
              .
            </p>
            <p className="mt-3 text-sm leading-relaxed opacity-80">{invite.giftNote}</p>
          </BoxedStat>
        </div>

        {/* Photo strip */}
        <div className="mt-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em]">
            Through the Years
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryPlaceholders.map((caption) => (
              <div
                key={caption}
                className="flex aspect-square flex-col items-center justify-center gap-1 border-2 border-[var(--ink)]/60 bg-[var(--ink)]/[0.04] p-2"
              >
                <span className="font-display text-2xl">✦</span>
                <span className="text-center text-[10px] uppercase tracking-wide opacity-70">
                  {caption}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Rule />

        {/* Closing */}
        <p className="font-display mt-8 text-center text-lg italic leading-relaxed sm:text-xl">
          {invite.closingLine}
        </p>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] opacity-60">
          With love, {invite.hostedBy}
        </p>
      </div>
    </div>
  );
}
