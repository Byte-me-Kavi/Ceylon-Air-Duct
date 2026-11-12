import Image from "next/image";
import Animated from "../Animated";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:flex lg:min-h-dvh lg:items-center lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Animated variant="fadeUp" className="lg:col-span-6">
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            Premium air duct solutions for HVAC projects
          </h1>

          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-steel-600">
            We manufacture and supply ductwork, grills, diffusers and HVAC
            components for industrial and commercial buildings in Sri Lanka.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-strong px-7 py-3.5 font-semibold text-white transition hover:bg-brand-deep active:scale-[0.98]"
            >
              Request a quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-steel-300 bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-steel-400 hover:bg-steel-50 active:scale-[0.98]"
            >
              Explore products
            </a>
          </div>
        </Animated>

        <Animated variant="photo" delay={0.15} className="lg:col-span-6">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-steel-100 shadow-[0_24px_60px_-20px_rgb(15_29_43/0.35)] lg:aspect-5/4">
            <Image
              src="/images/fac.jpg"
              alt="Galvanized ductwork installed on a commercial rooftop"
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Animated>
      </div>
    </section>
  );
}
