import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhagyashree Food Products, Moradabad" },
      { name: "description", content: "Visit or contact Bhagyashree Food Products. Address: Behind Tata Motors, Delhi Road, Moradabad, Uttar Pradesh 244001. Wholesale bakery manufacturer." },
      { property: "og:title", content: "Contact Bhagyashree Food Products" },
      { property: "og:description", content: "Behind Tata Motors, Delhi Road, Moradabad — 244001." },
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
          subtitle="Our office and plant are on Delhi Road, Moradabad — behind Tata Motors. We're happy to arrange facility visits for serious buyers."
        />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <InfoRow icon={MapPin} title="Address">
                {BUSINESS.addressFull}
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                {BUSINESS.phone}
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <span className="break-all">{BUSINESS.email}</span>
              </InfoRow>
              <InfoRow icon={Clock} title="Working Hours">
                Office: Mon–Sat, 10:00 – 18:00<br />
                Production: 24×7 · Three shifts
              </InfoRow>
              <div className="bg-cream border border-ink/10 p-5 text-xs space-y-1 text-ink/70 font-mono">
                <div>GSTIN: {BUSINESS.gstin}</div>
                <div>Udyam: {BUSINESS.udyam}</div>
                <div>FSSAI: {BUSINESS.fssai}</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-white border-2 border-brand p-8 text-center">
                  <CheckCircle2 className="text-brand mx-auto" size={40} />
                  <h3 className="font-display text-2xl mt-4 text-ink">Message received.</h3>
                  <p className="mt-2 text-ink/70">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white border border-ink/10 p-6 md:p-8 grid gap-5">
                  <h2 className="font-display text-2xl text-ink">Send us a message</h2>
                  <Field label="Your Name *" name="name" required />
                  <Field label="Phone *" name="phone" type="tel" required />
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">Message *</label>
                    <textarea required rows={5} className="w-full border border-ink/20 bg-flour px-3 py-2.5 text-sm focus:outline-none focus:border-brand" />
                  </div>
                  <button className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-sm justify-self-start">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="w-full h-[420px] border-t border-ink/10">
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
    <div className="flex gap-4 border-b border-ink/10 pb-5">
      <div className="w-11 h-11 grid place-items-center bg-brand text-white shrink-0"><Icon size={20} /></div>
      <div>
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand">{title}</div>
        <div className="mt-1 text-ink text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full border border-ink/20 bg-flour px-3 py-2.5 text-sm focus:outline-none focus:border-brand" />
    </div>
  );
}
