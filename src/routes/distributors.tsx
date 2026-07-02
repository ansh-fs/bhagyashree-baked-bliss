import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { CheckCircle2, Store, Truck, Building2, Hotel } from "lucide-react";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Distributor & Wholesale Enquiry — Bhagyashree Food Products" },
      { name: "description", content: "Become a stockist or distributor for Bhagyashree bread, rusk, buns and biscuits. Wholesale supply for retailers, super markets, hotels and institutions across UP." },
      { property: "og:title", content: "Distributor & Wholesale Enquiry" },
      { property: "og:description", content: "Partner with a 10-year-old Moradabad bakery manufacturer." },
    ],
  }),
  component: Distributors,
});

const REASONS = [
  { title: "Consistent morning supply", body: "24×7 production means route vehicles dispatch fresh stock every morning — no gaps, no substitutions." },
  { title: "Honest, transparent pricing", body: "GST-invoiced wholesale rates. No opaque schemes, no shifting numbers between orders." },
  { title: "Category coverage", body: "One vendor for bread, rusk, buns and biscuits — reduces purchase orders, deliveries and reconciliation for your team." },
  { title: "Ten years of steady operation", body: "Established 2014, still run by the founding partners. Not a hobby line, not a rebranded reseller." },
];

const NEEDED = [
  "Valid GSTIN and business registration",
  "Storage or shelf space appropriate to bakery SKUs",
  "Ability to receive scheduled morning deliveries",
  "Timely payment against invoice (terms as agreed)",
];

function Distributors() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="For Retailers, Distributors & Institutions"
          title="Partner with a working Moradabad bakery."
          subtitle="Whether you're a kirana store, super market chain, hotel purchase desk or an institutional buyer, we set up wholesale supply the same way — samples, rates, a first delivery, and a route slot."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-ink">Why partner with us</h2>
              <div className="mt-6 space-y-5">
                {REASONS.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={22} />
                    <div>
                      <h3 className="font-display text-lg text-ink">{r.title}</h3>
                      <p className="mt-1 text-sm text-ink/70">{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">What we need from you</h2>
              <ul className="mt-6 space-y-3">
                {NEEDED.map((n) => (
                  <li key={n} className="flex gap-3 text-ink/80 border-b border-ink/10 pb-3">
                    <span className="text-brand font-black">›</span>{n}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Store, label: "Retail & Kirana" },
                  { icon: Truck, label: "Distributors" },
                  { icon: Building2, label: "Super Markets" },
                  { icon: Hotel, label: "Hotels & Institutions" },
                ].map((b) => (
                  <div key={b.label} className="border border-ink/10 bg-flour p-4 flex items-center gap-3">
                    <b.icon className="text-brand" size={20} />
                    <span className="text-sm font-semibold text-ink">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquire" className="py-16 md:py-20 bg-cream border-t border-ink/10 scroll-mt-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Bulk Order Enquiry</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Tell us about your requirement</h2>
              <p className="mt-3 text-ink/70">Share the details below. Our team will revert with wholesale rates, sample dispatch and delivery scheduling for your area.</p>
            </div>

            {sent ? (
              <div className="bg-white border-2 border-brand p-8 text-center">
                <CheckCircle2 className="text-brand mx-auto" size={40} />
                <h3 className="font-display text-2xl mt-4 text-ink">Enquiry received.</h3>
                <p className="mt-2 text-ink/70">Our B2B team will reach out during working hours. For urgent matters please call our office.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="bg-white border border-ink/10 p-6 md:p-8 grid gap-5 md:grid-cols-2"
              >
                <Field label="Business Name *" name="business" required />
                <Field label="Contact Person *" name="contact" required />
                <Field label="Phone Number *" name="phone" type="tel" required />
                <Field label="City *" name="city" required />
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">Business Type *</label>
                  <select required className="w-full border border-ink/20 bg-flour px-3 py-2.5 text-sm focus:outline-none focus:border-brand">
                    <option value="">Select…</option>
                    <option>Retail Store / Kirana</option>
                    <option>Super Market</option>
                    <option>Wholesaler / Distributor</option>
                    <option>Hotel / Restaurant</option>
                    <option>Caterer / QSR</option>
                    <option>Institution (School, Hostel, Canteen)</option>
                    <option>Other</option>
                  </select>
                </div>
                <Field label="Estimated Monthly Volume" name="volume" placeholder="e.g. 200 loaves/day, 5 cartons rusk/week" />
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">Message</label>
                  <textarea rows={4} className="w-full border border-ink/20 bg-flour px-3 py-2.5 text-sm focus:outline-none focus:border-brand" placeholder="Which products are you interested in? Any specific delivery requirements?" />
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-4 items-center justify-between">
                  <p className="text-xs text-ink/50">By submitting you agree to be contacted regarding your enquiry.</p>
                  <button className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-sm">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full border border-ink/20 bg-flour px-3 py-2.5 text-sm focus:outline-none focus:border-brand" />
    </div>
  );
}
