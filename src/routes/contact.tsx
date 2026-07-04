import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhagyashree Food Products, Moradabad" },
      { name: "description", content: `Contact Bhagyashree Food Products. Address: ${BUSINESS.addressFull}. Phone: ${BUSINESS.phone}. Email: ${BUSINESS.email}.` },
      { property: "og:title", content: "Contact Bhagyashree Food Products" },
      { property: "og:description", content: `${BUSINESS.addressFull}` },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`;

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Come visit, call, or send us a message."
          subtitle="Our office and plant are on Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad. We're happy to arrange facility visits for serious buyers."
        />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <InfoRow icon={MapPin} title="Address">
                {BUSINESS.addressFull}
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-accent-red">{BUSINESS.phone}</a>
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent-red break-all">{BUSINESS.email}</a>
              </InfoRow>
              <InfoRow icon={Clock} title="Working Hours">
                Office: Mon–Sat, 10:00 – 18:00<br />
                Production: 24×7 · Three shifts
              </InfoRow>
              <div className="bg-off border border-line p-5 text-xs space-y-1 text-mute font-mono">
                <div>GSTIN: {BUSINESS.gstin}</div>
                <div>Udyam: {BUSINESS.udyam}</div>
                <div>FSSAI Lic. No.: {BUSINESS.fssai}</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-white border border-ink p-8 text-center">
                  <CheckCircle2 className="text-accent-red mx-auto" size={36} strokeWidth={1.75} />
                  <h3 className="font-display text-2xl mt-4 text-ink">Message received.</h3>
                  <p className="mt-2 text-mute">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white border border-line p-6 md:p-8 grid gap-5">
                  <h2 className="font-display text-2xl text-ink tracking-tight">Send us a message</h2>
                  <Field label="Your Name *" name="name" required />
                  <Field label="Phone *" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" />
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-mute mb-2">Subject</label>
                    <select className="w-full border border-line bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-ink">
                      <option>General enquiry</option>
                      <option>Wholesale / Distributor enquiry</option>
                      <option>Preeti (rusk / biscuits)</option>
                      <option>Good Morning India (bread)</option>
                      <option>Facility visit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-mute mb-2">Message *</label>
                    <textarea required rows={5} className="w-full border border-line bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-ink" />
                  </div>
                  <button className="bg-ink hover:bg-black text-white font-semibold px-8 py-3.5 rounded-sm justify-self-start">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="w-full h-[440px] border-t border-line">
            <iframe
              title="Bhagyashree Food Products — Location"
              src={mapsSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-line pb-5">
      <div className="w-11 h-11 grid place-items-center bg-ink text-white shrink-0 rounded-sm">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div>
        <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-mute">{title}</div>
        <div className="mt-1 text-ink text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-mute mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full border border-line bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-ink" />
    </div>
  );
}
