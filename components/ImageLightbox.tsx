"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function ImageLightbox({
  src,
  alt,
  sizes,
  wrapperClassName,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  wrapperClassName: string;
  imgClassName: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const close = () => {
    setOpen(false);
    setZoomed(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View larger image: ${alt}`}
        className={`${wrapperClassName} block cursor-zoom-in appearance-none border-0 bg-transparent p-0`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={imgClassName} priority={priority} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 text-3xl leading-none text-white/80 transition-colors hover:text-white"
            >
              &times;
            </button>

            <div
              className={
                zoomed
                  ? "no-scrollbar h-full w-full overflow-auto"
                  : "flex h-full w-full items-center justify-center overflow-hidden"
              }
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                onClick={() => setZoomed((z) => !z)}
                className={
                  zoomed
                    ? "h-auto w-auto min-w-[160%] max-w-none cursor-zoom-out sm:min-w-[190%]"
                    : "max-h-full max-w-full cursor-zoom-in object-contain"
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
