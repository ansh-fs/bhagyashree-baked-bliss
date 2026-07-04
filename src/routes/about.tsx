import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhagyashree Food Products, Moradabad" },
      { name: "description", content: "Bhagyashree Food Products is a Moradabad-based partnership firm operating a wholesale bakery manufacturing unit since 2012. Home to Preeti and Good Morning India brands. MSME/Udyam registered." },
      { property: "og:title", content: "About Bhagyashree Food Products" },
      { property: "og:description", content: "A Moradabad partnership firm running a purpose-built wholesale bakery since 2012." },
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
          subtitle={`Bhagyashree Food Products is a partnership firm operating a dedicated bakery manufacturing unit on Delhi Road, Moradabad. We manufacture and distribute two brands — Preeti and Good Morning India — to the trade, not to walk-in customers.`}
        />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5 text-ink/80 leading-relaxed text-[15.5px]">
              <h2 className="font-display text-3xl text-ink tracking-tight">Our story</h2>
              <p>
                Bhagyashree Food Products was established around {BUSINESS.since} as a partnership firm in Moradabad, Uttar Pradesh. From the beginning the focus has been narrow and deliberate: manufacture consistent, honestly-priced bakery staples and deliver them fresh to the trade every morning.
              </p>
              <p>
                Over the years the business has grown into two clear brands. <strong className="text-ink">Preeti</strong> covers the tea-time occasion — rusk, bakery biscuits and suji toast. <strong className="text-ink">Good Morning India</strong>, launched to serve the daily bread demand, supplies white and sandwich bread in multiple weights, each in its own colour-coded pack.
              </p>
              <p>
                The plant is located on Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad — a purpose-built facility rather than a converted kitchen. Production runs 24×7 across three shifts so route vehicles can dispatch first-light deliveries to retail stores, super markets, hotels and institutional buyers.
              </p>
              <p>
                The business is registered with the Ministry of MSME under Udyam (<span className="font-mono text-sm">{BUSINESS.udyam}</span>), holds a valid FSSAI licence (<span className="font-mono text-sm">{BUSINESS.fssai}</span>) and a valid GSTIN (<span className="font-mono text-sm">{BUSINESS.gstin}</span>). Ten-plus years on, the priority remains the same — a reliable morning delivery, and a product our buyers can put on shelf without a second thought.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <Placeholder label="Founder / partners portrait" className="aspect-[4/5]" />
              <blockquote className="bg-off border-l-2 border-accent-red p-6">
                <p className="font-display text-lg text-ink">"[QUOTE NEEDED: A short line from the founder or managing partner about why this business exists and what they refuse to compromise on.]"</p>
                <footer className="mt-4 text-xs tracking-[0.18em] uppercase text-mute font-semibold">[NAME] · [ROLE]</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-20 bg-off border-y border-line">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-12">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Snapshot</div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">Company at a glance</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Established", v: BUSINESS.since },
                { k: "Legal Form", v: BUSINESS.legal },
                { k: "Plant Location", v: `${BUSINESS.city}, ${BUSINESS.state}` },
                { k: "Production", v: "24×7 · 3 shifts" },
                { k: "GSTIN", v: BUSINESS.gstin },
                { k: "Udyam / MSME", v: BUSINESS.udyam },
                { k: "FSSAI Lic. No.", v: BUSINESS.fssai },
                { k: "Primary Market", v: "B2B / Wholesale" },
              ].map((r) => (
                <div key={r.k} className="border-t border-ink pt-4">
                  <div className="text-[10px] tracking-[0.22em] font-semibold text-mute uppercase">{r.k}</div>
                  <div className="mt-2 font-display text-[17px] text-ink font-semibold break-words">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl tracking-tight">
              Looking to stock our range or place an institutional order?
            </h2>
            <Link to="/distributors" className="inline-flex items-center gap-2 bg-white text-ink font-bold px-6 py-3.5 rounded-sm">
              Talk to our B2B team <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
