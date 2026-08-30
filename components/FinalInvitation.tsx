import Reveal from "@/components/Reveal";
import { event } from "@/lib/config";

export default function FinalInvitation() {
  return (
    <footer className="border-t-4 border-double border-[var(--ink)] px-4 py-14 text-center sm:py-20">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black leading-snug sm:text-2xl">
          உங்களுடன் இருக்க நாங்கள் விரும்புகிறோம்.
        </h2>

        <p className="font-display mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
          {event.dateLabel}
        </p>
        <p className="text-sm text-[var(--ink-soft)] sm:text-base">{event.time}</p>

        <p className="font-display mt-4 text-lg font-bold sm:text-xl">{event.venueName}</p>
        <p className="text-sm text-[var(--ink-soft)] sm:text-base">
          {event.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-1 text-sm italic text-[var(--ink-soft)] sm:text-base">
          அடையாளம்: {event.landmark}
        </p>

        <p className="font-display mt-8 text-xl italic sm:mt-10 sm:text-2xl">
          இறுதி அறிக்கையில் சந்திப்போம்.
        </p>
      </Reveal>
    </footer>
  );
}
