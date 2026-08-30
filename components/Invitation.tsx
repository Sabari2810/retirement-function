import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

export default function Invitation() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          அன்புடன் அழைக்கிறோம்
        </p>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          {officer.serviceBranch}யில் {officer.totalService} சேவை செய்த பிறகு, இவரது ஓய்வூதிய
          விழாவைக் கொண்டாட உங்களை அன்புடன் அழைக்கிறோம்:
        </p>
        <h2 className="font-display mt-3 text-2xl font-black leading-snug sm:text-4xl">
          {officer.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          கடமை, பொறுப்பு, எண்ணற்ற பணிகள் மற்றும் நகருக்கான வாழ்நாள் சேவையால் கட்டமைக்கப்பட்ட ஒரு
          பணிவாழ்க்கை.
        </p>
        <p className="font-display mt-4 text-base italic leading-relaxed sm:text-lg">
          சீருடைக்குப் பின்னால் இருக்கும் மனிதரையும், அந்த ஆண்டுகளின் பயணத்தையும், இனி வரும் புதிய
          தொடக்கத்தையும் கொண்டாட வாருங்கள்.
        </p>
      </Reveal>
    </section>
  );
}
