import Image from "next/image";
import Animated from "../Animated";
import {
  beveragePhotos,
  pharmaPhotos,
  productionPhotos,
  type Photo,
} from "../../data/gallery";

const projects: { title: string; summary: string; photos: [Photo, Photo, Photo] }[] = [
  {
    title: "Pharmaceutical plant",
    summary:
      "Rectangular galvanized ductwork, transitions and equipment connections for the plant's utility room.",
    photos: [pharmaPhotos[0], pharmaPhotos[1], pharmaPhotos[2]],
  },
  {
    title: "Soft drinks can plant",
    summary:
      "Galvanized roof exhaust stacks with weather caps, fabricated in our factory for the production hall.",
    // The third photo shows the same cowls on our factory floor before dispatch
    photos: [beveragePhotos[0], beveragePhotos[1], productionPhotos[2]],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            Recent site work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-600">
            Ductwork we have made for working plants, photographed on site.
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <Animated key={p.title} variant="fadeUp" delay={i * 0.1}>
              <article>
                <div className="grid aspect-4/3 grid-cols-3 grid-rows-2 gap-2 md:gap-3">
                  {p.photos.map((ph, j) => (
                    <div
                      key={j}
                      className={`relative overflow-hidden rounded-xl bg-steel-100 ${
                        j === 0 ? "col-span-2 row-span-2" : ""
                      }`}
                    >
                      <Image
                        src={ph.src}
                        alt={ph.alt}
                        fill
                        placeholder="blur"
                        sizes={
                          j === 0
                            ? "(min-width: 768px) 30vw, 66vw"
                            : "(min-width: 768px) 15vw, 33vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-steel-600">
                  {p.summary}
                </p>
              </article>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
