"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { imported, manufactured, type Product } from "../../data/site";

const tabs = [
  { id: "made", label: "Made in our factory", short: "Manufactured", items: manufactured },
  { id: "imported", label: "Imported and supplied", short: "Imported", items: imported },
] as const;

type TabId = (typeof tabs)[number]["id"];

// 5 items on a 6-column grid: two wide tiles, then three. On the 2-column
// tablet grid the last tile spans both columns so no cell is left empty.
const tileSpan = (i: number) =>
  i < 2 ? "lg:col-span-3" : i === 4 ? "sm:col-span-2 lg:col-span-2" : "lg:col-span-2";

export default function Products() {
  const [active, setActive] = useState<TabId>("made");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const current = tabs.find((t) => t.id === active)!;

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            Our products
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-600">
            Ductwork and air distribution parts made in our factory, plus the
            materials and components we import and supply.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Product range"
          className="mt-10 inline-flex w-full rounded-full bg-steel-100 p-1 sm:w-auto"
        >
          {tabs.map((t, i) => {
            const selected = t.id === active;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls="product-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-6 sm:text-[15px] ${
                  selected ? "text-ink" : "text-steel-600 hover:text-ink"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="product-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative sm:hidden">{t.short}</span>
                <span className="relative hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={active}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-6"
            >
              {current.items.map((p, i) => (
                <ProductTile key={p.name} product={p} className={tileSpan(i)} wide={i < 2} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProductTile({
  product,
  className,
  wide,
}: {
  product: Product;
  className: string;
  wide: boolean;
}) {
  return (
    // Phones: compact row (image left, text right). sm and up: stacked tile.
    <li
      className={`group flex overflow-hidden rounded-xl border border-steel-200 bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgb(15_29_43/0.35)] sm:flex-col ${className}`}
    >
      <div
        className={`relative w-28 shrink-0 bg-steel-50 sm:w-auto ${wide ? "sm:aspect-16/10" : "sm:aspect-4/3"}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={wide ? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 112px" : "(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 112px"}
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04] sm:p-6"
        />
      </div>
      <div className="flex flex-1 flex-col border-l border-steel-200 p-4 sm:border-t sm:border-l-0 sm:p-5 md:p-6">
        <h3 className="font-semibold text-ink sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-steel-600 sm:mt-2 sm:text-[15px]">
          {product.description}
        </p>
      </div>
    </li>
  );
}
