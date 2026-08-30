import Reveal from "@/components/Reveal";
import { dad } from "@/lib/config";

export default function FamilyNews() {
  return (
    <section className="px-4 sm:px-8">
      <Reveal className="mx-auto max-w-sm border border-[var(--ink)]/30 p-5 text-center sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:text-xs">
          மற்றொரு செய்தி
        </p>
        <p className="font-display mt-2 text-lg font-bold leading-snug sm:text-2xl">
          உள்ளூர் குடும்பம் கவலையில் இருப்பதாகத் தகவல்
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:mt-4 sm:text-base">
          {dad.name} இனி வீட்டில் அதிக நேரம் செலவிடவிருப்பதாக ஆதாரங்கள் உறுதிப்படுத்துகின்றன.
          நிபுணர்கள் தற்போது நிலைமையை மதிப்பீடு செய்து வருகின்றனர். அவரது குடும்பத்தினர்
          அமைதியாக இருக்குமாறு அறிவுறுத்தப்பட்டுள்ளனர்.
        </p>
      </Reveal>
    </section>
  );
}
