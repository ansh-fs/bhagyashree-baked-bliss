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
        {/* HERO — Britannia-style cream + bold red */}
        <section className="relative overflow-hidden" style={{ background: "var(--off)" }}>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--accent-red) 2px, transparent 2px), radial-gradient(circle at 70% 70%, var(--accent-red) 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid gap-12 lg:grid-cols-12 items-center relative">
            <div className="lg:col-span-7">
              <div className="inline-block text-white text-[11px] font-bold tracking-[0.22em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ background: "var(--accent-red)" }}>
                Bakery Manufacturer · Est. {BUSINESS.since}
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[76px] leading-[1] tracking-tight uppercase" style={{ color: "var(--accent-red)" }}>
                Baked Fresh.<br />
                <span className="text-ink">Delivered Daily.</span>
              </h1>
              <p className="mt-7 text-lg text-ink/75 max-w-2xl leading-relaxed">
                Bhagyashree Food Products is the Moradabad manufacturer behind <strong className="text-accent-red">Preeti</strong> rusk &amp; biscuits and <strong className="text-accent-red">Good Morning India</strong> bread — supplied fresh, daily, to retailers, distributors, super markets and institutions across the region.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/brands" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full transition-transform hover:scale-[1.03] shadow-md" style={{ background: "var(--accent-red)" }}>
                  Explore our brands <ArrowRight size={17} />
                </Link>
                <Link to="/distributors" className="inline-flex items-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-white font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full transition-colors">
                  Become a distributor
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Placeholder label="Factory exterior / signage" className="aspect-[4/5] border-0 rounded-none" />
              </div>
            </div>
          </div>
        </section>

        {/* OUR BRANDS PREVIEW — the anchor of a Britannia-style site */}
        <section className="bg-off border-y border-line">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Our Brands</div>
                <h2 className="font-display text-3xl md:text-5xl tracking-tight uppercase" style={{ color: "var(--accent-red)" }}>Our Brands</h2>
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
              <h2 className="font-display text-3xl md:text-5xl tracking-tight uppercase" style={{ color: "var(--accent-red)" }}>Built for supply.</h2>
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
        <section className="text-white" style={{ background: "var(--accent-red)" }}>
          <div className="mx-auto max-w-7xl px-4 py-20 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight uppercase text-white">Stock Preeti or Good Morning India?</h2>
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
                Share your business details and estimated monthly volume. Our team will revert with product samples, wholesale rates and delivery scheduling for your route.
              </p>
            </div>
            <div className="md:text-right">
              <Link to="/distributors" className="inline-flex items-center gap-2 bg-white text-accent-red font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform shadow-lg">
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
