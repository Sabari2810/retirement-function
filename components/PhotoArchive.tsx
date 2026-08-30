import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/config";

export default function PhotoArchive() {
  return (
    <section className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Photo Feature
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            From the Archives
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.archive.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className={photo.span}>
              <figure className="flex flex-col gap-2">
                <div className={`relative overflow-hidden border-2 border-[var(--ink)] ${photo.aspect}`}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover sepia-[0.2] contrast-105"
                  />
                </div>
                <figcaption className="text-center">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--ink-faint)]">
                    {photo.label}
                  </p>
                  <p className="text-xs italic text-[var(--ink-soft)] sm:text-sm">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
