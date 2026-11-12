import { Clock, Factory, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Animated from "../Animated";
import EmailAction from "../EmailAction";
import { contact } from "../../data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-steel-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Animated variant="fadeUp" className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-steel-600">
            Have a project or need a quote? Call, message or email us and we
            will get back to you quickly.
          </p>

          <dl className="mt-10 space-y-7">
            <Row icon={<Phone className="h-5 w-5" />} label="Phone">
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className="block tabular-nums hover:text-brand-strong">
                  {p.display}
                </a>
              ))}
            </Row>
            <Row icon={<Mail className="h-5 w-5" />} label="Email">
              {contact.emails.map((e) => (
                <EmailAction
                  key={e}
                  email={e}
                  wrapperClassName="block"
                  className="break-all hover:text-brand-strong"
                >
                  {e}
                </EmailAction>
              ))}
            </Row>
            <Row icon={<Factory className="h-5 w-5" />} label="Factory">
              {contact.factory}
            </Row>
            <Row icon={<MapPin className="h-5 w-5" />} label="Sales office">
              {contact.salesOffice}
            </Row>
            <Row icon={<Clock className="h-5 w-5" />} label="Business hours">
              <ul className="space-y-0.5">
                {contact.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6 sm:justify-start">
                    <span className="sm:w-40">{h.days}</span>
                    <span className="text-steel-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Row>
          </dl>

          <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={contact.phones[0].href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-strong px-6 py-3 font-semibold text-white transition hover:bg-brand-deep active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-steel-300 bg-white px-6 py-3 font-semibold text-ink transition hover:border-steel-400 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 text-brand-strong" /> WhatsApp
            </a>
            <EmailAction
              email={contact.emails[0]}
              wrapperClassName="block"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-steel-300 bg-white px-6 py-3 font-semibold text-ink transition hover:border-steel-400 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4 text-brand-strong" /> Email us
            </EmailAction>
          </div>
        </Animated>

        <Animated variant="fadeUp" delay={0.1} className="flex flex-col gap-6 lg:col-span-7">
          <div className="rounded-xl bg-brand-strong p-8 text-white md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Request a quote
            </h3>
            <p className="mt-3 max-w-[52ch] leading-relaxed text-white/85">
              Send your specifications or drawings and we&apos;ll reply with a
              tailored quote within 24 hours.
            </p>
            <EmailAction
              email={contact.quoteEmail}
              subject="Quote request"
              wrapperClassName="mt-6 inline-block"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-brand-strong transition hover:bg-brand-tint active:scale-[0.98]"
            >
              Email your drawings
            </EmailAction>
            <p className="mt-4 text-sm text-white/80">
              Or send them to {contact.quoteEmail}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-steel-200 bg-white">
            <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
              <h3 className="font-semibold text-ink">Factory location</h3>
              <p className="text-sm text-steel-600">{contact.factory}</p>
            </div>
            <iframe
              title="Map showing the Ceylon Air Duct factory in Ragama"
              src={contact.mapEmbed}
              className="block h-72 w-full border-0 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Animated>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-strong ring-1 ring-steel-200">
        {icon}
      </div>
      <div className="min-w-0">
        <dt className="text-sm text-steel-600">{label}</dt>
        <dd className="mt-1 font-medium text-ink">{children}</dd>
      </div>
    </div>
  );
}
