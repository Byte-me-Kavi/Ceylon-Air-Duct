import Image from "next/image";
import Animated from "../Animated";
import team from "../../../public/images/team.jpg";
import work1 from "../../../public/images/work-1.jpg";
import { contact } from "../../data/site";

const facts = [
  { label: "Factory", value: contact.factory },
  { label: "Sales office", value: contact.salesOffice },
  { label: "Opened", value: "October 2025" },
  { label: "New in 2026", value: "Our own grills and diffusers line" },
];

export default function About() {
  return (
    <section id="about" className="bg-steel-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Animated variant="fadeUp" className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-ink md:text-5xl">
            About Ceylon Air Duct
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-steel-600">
            Ceylon Air Duct Pvt Ltd is a manufacturer of air efficient products
            in Sri Lanka. With a modern factory and a dedicated team, we deliver
            quality HVAC solutions for the diverse needs of our clients.
          </p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-steel-200 pt-8 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-steel-600">{f.label}</dt>
                <dd className="mt-1 font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Animated>

        <Animated variant="photo" className="relative lg:col-span-7">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-steel-200 md:ml-16">
            <Image
              src={team}
              alt="The Ceylon Air Duct team on the factory floor"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-0 hidden w-[34%] overflow-hidden rounded-xl ring-8 ring-steel-50 md:block">
            <div className="relative aspect-3/4">
              <Image
                src={work1}
                alt="A technician measuring galvanized sheet before cutting"
                fill
                placeholder="blur"
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </Animated>
      </div>
    </section>
  );
}
