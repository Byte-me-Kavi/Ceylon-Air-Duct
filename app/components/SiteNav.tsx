"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { contact, navLinks } from "../data/site";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    if (next !== scrolled) setScrolled(next);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const phone = contact.phones[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-steel-200 bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a href="#home" className="shrink-0" aria-label="Ceylon Air Duct, back to top">
          <Image
            src="/images/logo-trimmed.png"
            alt="Ceylon Air Duct"
            width={578}
            height={344}
            preload
            className="h-12 w-auto lg:h-16"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-steel-700 transition-colors hover:bg-steel-100 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={phone.href}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[15px] font-medium text-steel-700 transition-colors hover:text-ink"
          >
            <Phone className="h-4 w-4 text-brand-strong" strokeWidth={2} />
            <span className="hidden tabular-nums xl:inline">{phone.display}</span>
            <span className="sr-only xl:hidden">Call {phone.display}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-strong px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-brand-deep active:scale-[0.98]"
          >
            Request a quote
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={phone.href}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-strong transition-colors hover:bg-steel-100"
            aria-label={`Call ${phone.display}`}
          >
            <Phone className="h-5 w-5" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-steel-100"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-steel-200 bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {[...navLinks, { href: "#contact", label: "Contact" }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-steel-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-steel-200 pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-brand-strong px-6 py-3 font-semibold text-white active:scale-[0.98]"
                >
                  Request a quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
