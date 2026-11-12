import Image from "next/image";
import Animated from "../Animated";
import { productionPhotos } from "../../data/gallery";

const points = [
  "Aluminium profiles cut, assembled and finished in-house",
  "Sizes made to match your drawings",
  "Supplied together with your ductwork",
];

export default function GrillsLine() {
  const [inspection, cutting] = productionPhotos;

  return (
    <section id="grills-line" className="overflow-hidden bg-steel-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Animated variant="photo" className="grid grid-cols-2 gap-3 md:gap-5 lg:col-span-7">
          <figure className="relative aspect-3/4 overflow-hidden rounded-xl bg-steel-200">
            <Image
              src={inspection.src}
              alt={inspection.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative mt-10 aspect-3/4 overflow-hidden rounded-xl bg-steel-200 md:mt-16">
            <Image
              src={cutting.src}
              alt={cutting.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="object-cover"
            />
          </figure>
        </Animated>

        <Animated variant="fadeUp" className="lg:col-span-5">
          <p className="text-sm font-semibold text-brand-strong">New production line</p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance text-ink md:text-5xl">
            Grills and diffusers, now made in-house
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-steel-600">
            Our new line lets us make aluminium grills and diffusers in our own
            factory, so we can match your sizes and shorten lead times.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink">
                <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-brand" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-strong px-7 py-3.5 font-semibold text-white transition hover:bg-brand-deep active:scale-[0.98]"
          >
            Request a quote
          </a>
        </Animated>
      </div>
    </section>
  );
}
