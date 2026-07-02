import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhagyashree Food Products, Moradabad" },
      { name: "description", content: "Bhagyashree Food Products is a Moradabad-based partnership firm operating a wholesale bakery manufacturing unit since 2014. MSME/Udyam registered, supplying bread, rusk, buns and biscuits across Uttar Pradesh." },
      { property: "og:title", content: "About Bhagyashree Food Products" },
      { property: "og:description", content: "A Moradabad partnership firm running a purpose-built wholesale bakery since 2014." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Company"
          title="A working bakery, run like a manufacturing business."
          subtitle={`Bhagyashree Food Products is a ${BUSINESS.legal.toLowerCase()} operating a dedicated bakery manufacturing unit on Delhi Road, Moradabad. We supply retailers, distributors and institutions — not walk-in customers.`}
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5 text-ink/80 leading-relaxed">
              <h2 className="font-display text-3xl text-ink">Our story</h2>
              <p>Bhagyashree Food Products was established around {BUSINESS.since}–15 as a partnership firm in Moradabad, Uttar Pradesh. From the beginning the focus has been narrow and deliberate: manufacture consistent, honestly-priced bakery staples — bread, rusk, buns and biscuits — and deliver them fresh to the trade every morning.</p>
              <p>The unit is located behind Tata Motors on Delhi Road, Moradabad — a purpose-built facility rather than a converted kitchen. Production runs 24×7 across three shifts so that route vehicles can dispatch first-light deliveries to retail stores, super markets, hotels and institutional buyers in Moradabad and neighbouring districts.</p>
              <p>The business is registered with the Ministry of MSME under Udyam (<span className="font-mono text-sm">{BUSINESS.udyam}</span>) and holds a valid GSTIN (<span className="font-mono text-sm">{BUSINESS.gstin}</span>). Ten-plus years on, the priority remains the same — a reliable morning delivery, and a product our buyers can put on shelf without a second thought.</p>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <Placeholder label="Founder / partners portrait" className="aspect-[4/5]" />
              <blockquote className="bg-cream border-l-4 border-brand p-6">
                <p className="font-display text-lg text-ink italic">"[QUOTE NEEDED: A short line from the founder or managing partner about why this business exists and what they refuse to compromise on.]"</p>
                <footer className="mt-3 text-xs tracking-[0.15em] uppercase text-ink/60 font-bold">[NAME] · [ROLE]</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-cream border-y border-ink/10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Snapshot</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Company at a glance</h2>
            </div>
            <div className="grid gap-px bg-ink/10 border border-ink/10 md:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Established", v: BUSINESS.since },
                { k: "Legal Form", v: BUSINESS.legal },
                { k: "Head Office & Plant", v: `${BUSINESS.city}, ${BUSINESS.state}` },
                { k: "Production", v: "24×7 · 3 shifts" },
                { k: "GSTIN", v: BUSINESS.gstin },
                { k: "Udyam / MSME", v: BUSINESS.udyam },
                { k: "FSSAI Licence", v: BUSINESS.fssai },
                { k: "Primary Market", v: "B2B / Wholesale" },
              ].map((r) => (
                <div key={r.k} className="bg-flour p-5">
                  <div className="text-[10px] tracking-[0.2em] font-bold text-brand uppercase">{r.k}</div>
                  <div className="mt-2 font-display text-lg text-ink font-black break-words">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Milestones</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Ten years of steady operation</h2>
              <p className="mt-3 text-ink/70 text-sm">Real milestones only. Add or edit dates below as your team confirms them.</p>
            </div>
            <div className="space-y-4">
              {[
                { year: BUSINESS.since, event: "Bhagyashree Food Products established as a partnership firm in Moradabad." },
                { year: "[YEAR]", event: "[MILESTONE — e.g. addition of rusk line, first distributor onboarded, capacity expansion]" },
                { year: "[YEAR]", event: "[MILESTONE — e.g. Udyam/MSME registration, FSSAI licence renewal, new SKU launch]" },
                { year: "[YEAR]", event: "[MILESTONE — e.g. distribution reach extended to additional districts]" },
              ].map((m, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 border-l-2 border-brand pl-5 py-2">
                  <div className="font-display text-2xl md:text-3xl font-black text-brand">{m.year}</div>
                  <div className="text-ink/80 self-center">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-flour">
          <div className="mx-auto max-w-7xl px-4 py-14 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl">Looking to stock our range or place an institutional order?</h2>
            <Link to="/distributors" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-sm">
              Talk to our B2B team <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
