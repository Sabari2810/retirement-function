import Reveal from "@/components/Reveal";
import { dad, event } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t-2 border-double border-[var(--ink)] px-4 py-3 text-center sm:px-8">
      <Reveal>
        <p className="font-display text-lg font-black leading-snug sm:text-3xl">
          வழக்கு முடிந்தது.
          <br />
          பணி முடிந்தது.
          <br />
          ஓய்வு தொடங்குகிறது.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-2 max-w-md text-xs leading-snug text-[var(--ink-soft)] sm:mt-6 sm:text-lg">
          {dad.yearsOfService} ஆண்டுகள் சேவை.
          <br />
          ஒரு நகரம் பாதுகாக்கப்பட்டது.
          <br />
          ஒரு குடும்பம் பெருமைப்படுகிறது.
          <br />
          இப்போது அடுத்த அத்தியாயம் தொடங்கும் நேரம்.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-display mx-auto mt-2 max-w-lg text-sm leading-snug italic sm:mt-6 sm:text-xl">
          அந்த மனிதரையும், சீருடையையும், அதன் பின்னால் இருக்கும் {dad.yearsOfService} ஆண்டுகளையும்
          கொண்டாட வாருங்கள்.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:mt-6 sm:text-sm">
          {event.dateLabel}
        </p>
      </Reveal>
    </footer>
  );
}
