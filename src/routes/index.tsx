import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Truck, ShieldCheck, Clock } from "lucide-react";
import { SiteHeader, SiteFooter, Placeholder } from "@/components/site-chrome";
import { BUSINESS, BRANDS } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashree Food Products — Bakery Manufacturer, Moradabad · Preeti & Good Morning India" },
      { name: "description", content: "Bhagyashree Food Products is a Moradabad-based bakery manufacturer. Home to two brands — Preeti (rusk, biscuits, suji toast) and Good Morning India (bread). Supplying retailers, distributors, hotels and institutions since 2012." },
      { property: "og:title", content: "Bhagyashree Food Products — Moradabad Bakery Manufacturer" },
      { property: "og:description", content: "Two brands, one manufacturer. Preeti rusk & biscuits. Good Morning India bread. Est. 2012." },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { icon: Clock, title: "24×7 Production", body: "Three-shift operation with morning-fresh dispatch, every day of the year." },
  { icon: Truck, title: "Route-based Distribution", body: "First-light deliveries across Moradabad and neighbouring districts." },
  { icon: ShieldCheck, title: "Fully Registered", body: `FSSAI, GSTIN & MSME/Udyam registered. Documented hygiene on every line.` },
  { icon: Factory, title: "Purpose-built Facility", body: "A dedicated bakery unit on Delhi Road — engineered for volume." },
];

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO — clean corporate, minimal color */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-5">
                Bakery Manufacturer · Moradabad · Est. {BUSINESS.since}
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[68px] text-ink leading-[1.02] tracking-tight">
                Two trusted bakery brands,<br />
                <span className="text-mute">one dependable manufacturer.</span>
              </h1>
              <p className="mt-7 text-lg text-mute max-w-2xl leading-relaxed">
                Bhagyashree Food Products is the manufacturer behind <strong className="text-ink font-semibold">Preeti</strong> rusk &amp; biscuits and <strong className="text-ink font-semibold">Good Morning India</strong> bread — supplied fresh, daily, to retailers, distributors, super markets and institutions across the region.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/brands" className="inline-flex items-center gap-2 bg-ink hover:bg-black text-white font-semibold px-6 py-3.5 rounded-sm transition-colors">
                  Explore our brands <ArrowRight size={17} />
                </Link>
                <Link to="/distributors" className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white font-semibold px-6 py-3.5 rounded-sm transition-colors">
                  Become a distributor
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Placeholder label="Factory exterior / signage" className="aspect-[4/5]" />
            </div>
          </div>
        </section>

        {/* OUR BRANDS PREVIEW — the anchor of a Britannia-style site */}
        <section className="bg-off border-y border-line">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Our Brands</div>
                <h2 className="font-display text-3xl md:text-5xl text-ink tracking-tight">Made under two names you know.</h2>
              </div>
              <Link to="/brands" className="text-sm font-semibold text-ink hover:text-accent-red inline-flex items-center gap-1.5">
                Visit brand hub <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  to={b.slug === "preeti" ? "/brands/preeti" : "/brands/good-morning-india"}
                  className="group bg-white border border-line hover:border-ink transition-colors overflow-hidden flex flex-col"
                >
                  <div
                    className="h-56 md:h-64 grid place-items-center px-8 border-b border-line"
                    style={{ background: b.tint }}
                  >
                    <img src={b.logo} alt={`${b.name} logo`} className="max-h-full max-w-[70%] object-contain" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl text-ink">{b.name}</h3>
                    <p className="mt-2 text-mute text-[15px] leading-relaxed flex-1">{b.tagline}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {b.categories.map((c) => (
                        <span key={c} className="text-[11px] font-semibold px-2.5 py-1 border border-line text-ink/80 uppercase tracking-wider">{c}</span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent-red">
                      Explore {b.name} <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-14">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Why buyers choose us</div>
              <h2 className="font-display text-3xl md:text-5xl text-ink tracking-tight">Built for supply, not for the shelf.</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((h) => (
                <div key={h.title} className="border-t border-ink pt-6">
                  <h.icon className="text-ink" size={22} strokeWidth={1.75} />
                  <h3 className="font-display text-lg mt-4 text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS STRIP — real numbers only */}
        <section className="bg-off border-y border-line">
          <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "Established", v: BUSINESS.since },
              { k: "GSTIN", v: BUSINESS.gstin },
              { k: "Udyam / MSME", v: BUSINESS.udyam },
              { k: "FSSAI Lic. No.", v: BUSINESS.fssai },
            ].map((r) => (
              <div key={r.k}>
                <div className="text-[10px] tracking-[0.22em] text-mute uppercase font-semibold">{r.k}</div>
                <div className="mt-1.5 font-mono text-[13px] md:text-sm text-ink break-all">{r.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">Interested in stocking Preeti or Good Morning India?</h2>
              <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
                Share your business details and estimated monthly volume. Our team will revert with product samples, wholesale rates and delivery scheduling for your route.
              </p>
            </div>
            <div className="md:text-right">
              <Link to="/distributors" className="inline-flex items-center gap-2 bg-white text-ink font-bold px-6 py-3.5 rounded-sm hover:bg-white/90 transition-colors">
                Start enquiry <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
