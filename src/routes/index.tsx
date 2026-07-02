import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Truck, ShieldCheck, Clock, ArrowRight, Store, Hotel, Building2, Utensils } from "lucide-react";
import { SiteHeader, SiteFooter, Placeholder } from "@/components/site-chrome";
import { BUSINESS, PRODUCT_GROUPS } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashree Food Products — Wholesale Bread, Rusk, Buns & Biscuits, Moradabad" },
      { name: "description", content: "Moradabad-based wholesale bakery manufacturer supplying bread, rusk, buns and biscuits daily to retailers, distributors, super markets, hotels and institutions across Uttar Pradesh. Est. 2014. MSME/Udyam registered. 24/7 production." },
      { property: "og:title", content: "Bhagyashree Food Products — Wholesale Bakery Manufacturer, Moradabad" },
      { property: "og:description", content: "Daily supply of bread, rusk, buns and biscuits to retailers, distributors and institutions across UP. Est. 2014, 24/7 production." },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  { icon: Clock, title: "24×7 Production", body: "Continuous three-shift operation ensures morning-fresh dispatch, every day of the year." },
  { icon: Truck, title: "Reliable Distribution", body: "Route-based delivery to retailers and distributors across Moradabad and neighbouring districts." },
  { icon: ShieldCheck, title: "Compliant & Registered", body: `GSTIN, Udyam/MSME and FSSAI registered. Documented hygiene protocols on every line.` },
  { icon: Factory, title: "Purpose-Built Facility", body: "Dedicated bakery unit on Delhi Road, Moradabad — engineered for volume, not a converted kitchen." },
];

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="bg-flour border-b border-ink/10">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="rule-red" />
                <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                  Wholesale Bakery Manufacturer · Est. {BUSINESS.since}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.02]">
                Fresh bread, rusk & buns —<br />
                <span className="text-brand">delivered daily</span> across Uttar Pradesh.
              </h1>
              <p className="mt-6 text-lg text-ink/70 max-w-2xl">
                Bhagyashree Food Products is a Moradabad-based B2B bakery manufacturer supplying retailers, distributors, super markets, hotels and institutional buyers — with morning-fresh dispatch, 24×7 production and honest, consistent quality.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/distributors" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-sm transition-colors">
                  Become a Distributor <ArrowRight size={18} />
                </Link>
                <Link to="/products" className="inline-flex items-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-flour font-semibold px-6 py-3.5 rounded-sm transition-colors">
                  View Product Range
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Placeholder label="Factory exterior / hero shot" className="aspect-[4/5]" />
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-ink text-flour">
          <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div><div className="text-[10px] tracking-[0.2em] text-gold font-bold">EST.</div><div className="font-display text-xl font-black text-white">{BUSINESS.since}</div></div>
            <div><div className="text-[10px] tracking-[0.2em] text-gold font-bold">GSTIN</div><div className="font-mono text-xs md:text-sm text-white">{BUSINESS.gstin}</div></div>
            <div><div className="text-[10px] tracking-[0.2em] text-gold font-bold">UDYAM / MSME</div><div className="font-mono text-xs md:text-sm text-white">{BUSINESS.udyam}</div></div>
            <div><div className="text-[10px] tracking-[0.2em] text-gold font-bold">FSSAI</div><div className="font-mono text-xs md:text-sm text-white">{BUSINESS.fssai}</div></div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Why Choose Us</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Built for B2B supply, not retail counters.</h2>
            </div>
            <div className="grid gap-px bg-ink/10 border border-ink/10 md:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="bg-flour p-7">
                  <h.icon className="text-brand" size={26} />
                  <h3 className="font-display text-lg mt-5 text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES PREVIEW */}
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Product Range</span></div>
                <h2 className="font-display text-3xl md:text-4xl text-ink">Four categories, one dependable supplier.</h2>
              </div>
              <Link to="/products" className="text-sm font-bold text-brand hover:text-brand-dark inline-flex items-center gap-1">View full catalogue <ArrowRight size={16} /></Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PRODUCT_GROUPS.map((g) => (
                <Link key={g.slug} to="/products" hash={g.slug} className="group bg-white border border-ink/10 hover:border-brand transition-colors">
                  <Placeholder label={`${g.title} category shot`} className="aspect-[4/3]" />
                  <div className="p-5">
                    <h3 className="font-display text-xl text-ink group-hover:text-brand transition-colors">{g.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{g.tagline}</p>
                    <div className="mt-3 text-xs text-ink/50">{g.items.length} SKUs</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BUYER TYPES */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Who We Supply</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Trusted by buyers across the trade.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Store, label: "Retail Stores & Kirana" },
                { icon: Truck, label: "Wholesalers & Distributors" },
                { icon: Building2, label: "Super Markets" },
                { icon: Hotel, label: "Hotels & Restaurants" },
                { icon: Utensils, label: "Caterers & QSRs" },
                { icon: Building2, label: "Institutional Buyers" },
                { icon: Building2, label: "Schools & Hostels" },
                { icon: Building2, label: "Corporate Canteens" },
              ].map((b) => (
                <div key={b.label} className="border border-ink/10 bg-flour p-5 flex items-center gap-3">
                  <b.icon className="text-brand shrink-0" size={22} />
                  <span className="text-sm font-semibold text-ink">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl">Interested in stocking our range?</h2>
              <p className="mt-3 text-white/85 max-w-2xl">Share your business details and estimated volume. Our team will revert with product samples, wholesale rates and delivery scheduling for your route.</p>
            </div>
            <div className="md:text-right">
              <Link to="/distributors" className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3.5 rounded-sm hover:bg-ink hover:text-white transition-colors">
                Start Distributor Enquiry <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
