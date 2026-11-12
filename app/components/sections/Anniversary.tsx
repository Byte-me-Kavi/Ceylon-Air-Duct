"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Animated from "../Animated";
import { anniversaryPhotos } from "../../data/gallery";
import { showInGallery } from "../../lib/galleryBus";

// Six featured tiles, placed with grid-flow-dense so both the 2-column
// (mobile) and 4-column (desktop) grids fill completely with no empty cells.
const featured = [
  { photo: 0, className: "col-span-2 row-span-2", sizes: "(min-width: 1024px) 50vw, 100vw" }, // team
  { photo: 1, className: "col-span-1 row-span-1", sizes: "(min-width: 1024px) 25vw, 50vw" }, // cake
  { photo: 2, className: "col-span-1 row-span-2", sizes: "(min-width: 1024px) 25vw, 50vw" }, // speech
  { photo: 3, className: "col-span-1 row-span-1", sizes: "(min-width: 1024px) 25vw, 50vw" }, // blessing
  { photo: 4, className: "col-span-2 row-span-1", sizes: "(min-width: 1024px) 50vw, 100vw" }, // monks
  { photo: 5, className: "col-span-2 row-span-1", sizes: "(min-width: 1024px) 50vw, 100vw" }, // hall
];

// Remaining photos revealed inline: one row of 4 on desktop, 2x2 on mobile.
const more = anniversaryPhotos.slice(featured.length).map((_, i) => ({
  photo: featured.length + i,
  className: "col-span-1 row-span-1",
  sizes: "(min-width: 1024px) 25vw, 50vw",
}));

export default function Anniversary() {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section id="anniversary" className="bg-steel-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Animated variant="fadeUp" className="max-w-3xl">
          <h2 className="text-4xl leading-[1.02] font-semibold tracking-tight text-balance text-ink md:text-6xl lg:text-7xl">
            One year of Ceylon Air Duct
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-steel-600">
            In October 2026 our team, families and friends marked our first
            year with a blessing ceremony, a cake and a few words of thanks.
          </p>
        </Animated>

        <Animated
          variant="fade"
          className="mt-10 grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:gap-3 lg:auto-rows-[220px] lg:grid-cols-4"
        >
          {featured.map((t) => (
            <Tile key={t.photo} {...t} />
          ))}
        </Animated>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id="anniversary-more"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:mt-3 md:gap-3 lg:auto-rows-[220px] lg:grid-cols-4"
            >
              {more.map((t) => (
                <Tile key={t.photo} {...t} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="anniversary-more"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-steel-300 bg-white px-6 py-3 font-semibold text-ink transition hover:border-steel-400 hover:bg-steel-50 active:scale-[0.98]"
        >
          {expanded ? (
            <>
              Show fewer photos <ChevronUp className="h-4 w-4 text-brand-strong" />
            </>
          ) : (
            <>
              Show all {anniversaryPhotos.length} photos{" "}
              <ChevronDown className="h-4 w-4 text-brand-strong" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}

function Tile({
  photo,
  className,
  sizes,
}: {
  photo: number;
  className: string;
  sizes: string;
}) {
  const p = anniversaryPhotos[photo];
  return (
    <button
      type="button"
      onClick={() => showInGallery({ album: "anniversary", index: photo })}
      className={`group relative overflow-hidden rounded-xl bg-steel-200 ${className}`}
      aria-label={`View larger in the gallery: ${p.caption}`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        placeholder="blur"
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
    </button>
  );
}
