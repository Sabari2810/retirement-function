import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/config";

export default function PhotoArchive() {
  return (
    <section className="px-4 py-2 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            புகைப்பட சிறப்பம்சம்
          </p>
          <h2 className="font-display mt-1 text-center text-lg font-black sm:text-4xl">
            காப்பகத்திலிருந்து
          </h2>
        </Reveal>

        <div className="mt-2 grid grid-cols-4 gap-1.5 sm:mt-6 sm:gap-3">
          {photos.archive.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 0.06}>
              <figure className="flex flex-col gap-0.5 sm:gap-1.5">
                <div className="relative aspect-square overflow-hidden border-2 border-[var(--ink)]">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 640px) 20vw, 25vw"
                    className="object-cover sepia-[0.2] contrast-105"
                  />
                </div>
                <figcaption className="text-center text-[8px] italic leading-tight text-[var(--ink-soft)] sm:text-xs">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
