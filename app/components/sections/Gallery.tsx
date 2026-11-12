"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  albums,
  allPhotos,
  photosFor,
  type AlbumId,
  type Photo,
} from "../../data/gallery";
import { onShowInGallery } from "../../lib/galleryBus";

type Filter = "all" | AlbumId;

const listFor = (f: Filter) => (f === "all" ? allPhotos : photosFor(f));

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const photos = listFor(filter);

  // Other sections can ask the gallery to show a specific photo
  useEffect(
    () =>
      onShowInGallery(({ album, index }) => {
        setFilter(album);
        setSelected(index);
        sectionRef.current?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }),
    [reduce],
  );

  const chips: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: allPhotos.length },
    ...albums.map((a) => ({ id: a.id, label: a.label, count: photosFor(a.id).length })),
  ];

  return (
    <section ref={sectionRef} id="gallery" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            Gallery
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-600">
            Our factory, our people and the work we have delivered since
            opening in October 2025.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter photos"
          className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {chips.map((c) => {
            const on = c.id === filter;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setFilter(c.id);
                  setSelected(0);
                }}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98] ${
                  on
                    ? "border-ink bg-ink text-white"
                    : "border-steel-200 bg-white text-steel-700 hover:border-steel-400 hover:text-ink"
                }`}
              >
                {c.label}
                <span className={`tabular-nums ${on ? "text-white/70" : "text-steel-400"}`}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Re-mount the viewer when the album changes so the carousel re-initialises */}
        <Viewer
          key={filter}
          photos={photos}
          selected={selected}
          onSelect={setSelected}
          smooth={!reduce}
        />
      </div>
    </section>
  );
}

function Viewer({
  photos,
  selected,
  onSelect,
  smooth,
}: {
  photos: Photo[];
  selected: number;
  onSelect: (i: number) => void;
  smooth: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: photos.length > 2,
    startIndex: selected,
    duration: smooth ? 25 : 0,
  });
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mounted = useRef(false);

  // Carousel -> state (swipes, arrow buttons)
  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => onSelect(emblaApi.selectedScrollSnap());
    emblaApi.on("select", sync);
    return () => {
      emblaApi.off("select", sync);
    };
  }, [emblaApi, onSelect]);

  // State -> carousel (thumbnail clicks, requests from other sections)
  useEffect(() => {
    if (emblaApi && emblaApi.selectedScrollSnap() !== selected) {
      emblaApi.scrollTo(selected);
    }
  }, [emblaApi, selected]);

  // Keep the active thumbnail visible inside the strip, without moving the page
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = thumbRefs.current[selected];
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      top: thumb.offsetTop - strip.clientHeight / 2 + thumb.clientHeight / 2,
      behavior: mounted.current && smooth ? "smooth" : "auto",
    });
    mounted.current = true;
  }, [selected, smooth]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const current = photos[selected] ?? photos[0];

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-6">
      {/* Stage */}
      <div
        className="lg:col-span-8"
        role="region"
        aria-roledescription="carousel"
        aria-label="Photo viewer"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-steel-100" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {photos.map((p, i) => (
              <div
                key={p.src.src}
                className="relative aspect-4/3 min-w-0 flex-[0_0_100%] overflow-hidden"
                aria-hidden={i !== selected}
              >
                {/* Soft blurred fill so portrait photos don't sit on flat bars */}
                <Image
                  src={p.src}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="scale-110 object-cover opacity-40 blur-2xl"
                />
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caption, controls and thumbnails */}
      <div className="relative min-w-0 lg:col-span-4">
        <div className="flex flex-col lg:absolute lg:inset-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-ink" aria-live="polite">
                {current.caption}
              </p>
              <p className="mt-1 text-sm text-steel-600 tabular-nums">
                {selected + 1} of {photos.length}
              </p>
            </div>
            {photos.length > 1 && (
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel-300 bg-white text-ink transition hover:border-steel-400 hover:bg-steel-50 active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel-300 bg-white text-ink transition hover:border-steel-400 hover:bg-steel-50 active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/*
            Horizontal filmstrip on phones and tablets, scrollable grid on desktop.
            The scroller and the grid are separate elements: a grid with a fixed
            height squeezes its rows and the square thumbnails overlap.
          */}
          <div
            ref={thumbsRef}
            className="no-scrollbar relative -mx-4 mt-4 overflow-x-auto px-4 py-1 sm:mx-0 sm:px-1 lg:min-h-0 lg:flex-1 lg:overflow-x-hidden lg:overflow-y-auto lg:p-1"
          >
            <div className="flex gap-2 lg:grid lg:grid-cols-4">
            {photos.map((p, i) => {
              const active = i === selected;
              return (
                <button
                  key={p.src.src}
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-label={`Show photo ${i + 1}: ${p.caption}`}
                  aria-current={active}
                  className={`relative aspect-square w-18 shrink-0 overflow-hidden rounded-lg bg-steel-100 transition sm:w-20 lg:w-auto ${
                    active
                      ? "ring-2 ring-brand-strong ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 100px, 80px"
                    className="object-cover"
                  />
                </button>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
