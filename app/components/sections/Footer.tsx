import Image from "next/image";
import { contact, navLinks } from "../../data/site";
import EmailAction from "../EmailAction";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <Image
            src="/images/logo-trimmed.png"
            alt="Ceylon Air Duct"
            width={578}
            height={344}
            className="h-16 w-auto"
          />
          <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-steel-600">
            Manufacturer and supplier of air duct systems, grills, diffusers and
            HVAC components in Sri Lanka.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h3 className="font-semibold text-ink">Quick links</h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {[...navLinks, { href: "#contact", label: "Contact" }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-steel-600 transition-colors hover:text-brand-strong">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-[15px] text-steel-600">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="tabular-nums transition-colors hover:text-brand-strong">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <EmailAction
                email={contact.emails[0]}
                placement="top"
                className="transition-colors hover:text-brand-strong"
              >
                {contact.emails[0]}
              </EmailAction>
            </li>
            <li>Factory: {contact.factory}</li>
            <li>Sales office: {contact.salesOffice}</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-semibold text-ink">Business hours</h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {contact.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span className="text-steel-600">{h.days}</span>
                <span className="text-ink">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-steel-600 sm:px-6 lg:px-8">
          © {year} Ceylon Air Duct Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
