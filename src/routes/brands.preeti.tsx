import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Placeholder } from "@/components/site-chrome";
import { BRANDS, PREETI_PRODUCTS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

const PREETI = BRANDS.find((b) => b.slug === "preeti")!;

export const Route = createFileRoute("/brands/preeti")({
  head: () => ({
    meta: [
      { title: "Preeti — Rusk, Biscuits & Suji Toast | Bhagyashree Food Products" },
      { name: "description", content: "Preeti is Bhagyashree Food Products' rusk, biscuit and suji toast brand — oven-fresh, double-baked tea-time staples supplied to retailers and distributors across the region." },
      { property: "og:title", content: "Preeti — Rusk, Biscuits & Suji Toast" },
      { property: "og:description", content: "Preeti — the tea-time brand from Bhagyashree Food Products." },
    ],
  }),
  component: PreetiPage,
});

function PreetiPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* PREETI HERO — brand color band */}
        <section className="preeti-sunburst border-b border-line">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: PREETI.accent }}>
                A Bhagyashree Food Products brand
              </div>
              <img src={PREETI.logo} alt="Preeti logo" className="h-32 md:h-40 object-contain" />
              <h1 className="mt-8 font-display text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{ color: PREETI.accent }}>
                Oven-fresh rusk, biscuits &amp; suji toast.
              </h1>
              <p className="mt-6 text-lg max-w-xl leading-relaxed" style={{ color: "#3B2A00" }}>
                {PREETI.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/distributors" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-sm" style={{ background: PREETI.accent }}>
                  Stock Preeti <ArrowRight size={17} />
                </Link>
                <Link to="/brands" className="inline-flex items-center gap-2 border font-semibold px-6 py-3.5 rounded-sm" style={{ borderColor: PREETI.accent, color: PREETI.accent }}>
                  All brands
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <Placeholder label="Preeti packaged product hero shot" className="aspect-[4/5]" />
            </div>
          </div>
        </section>

        {/* PALETTE STRIP */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 flex items-center gap-6 flex-wrap">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-mute">Brand palette</span>
            <div className="flex gap-1">
              {PREETI.palette.map((c) => (
                <div key={c.hex} className="flex flex-col items-start">
                  <span className="w-14 h-10" style={{ background: c.hex }} />
                  <span className="text-[10px] text-mute mt-1 font-mono">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS BY CATEGORY */}
        {PREETI_PRODUCTS.map((cat, ci) => (
          <section key={cat.category} className={`py-16 md:py-20 ${ci % 2 === 1 ? "bg-off" : ""}`}>
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: PREETI.accent }}>
                    Category {String(ci + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">{cat.category}</h2>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((it) => (
                  <div key={it.name} className="bg-white border border-line group hover:border-[color:var(--color-preeti-blue)] transition-colors">
                    <div className="border-b border-line" style={{ background: PREETI.tint }}>
                      <Placeholder label={`${it.name} pack shot`} className="aspect-[4/3] border-0" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-ink">{it.name}</h3>
                      <p className="mt-2 text-sm text-mute leading-relaxed">{it.desc}</p>
                      <div className="mt-4 pt-4 border-t border-line flex justify-between text-[11px] text-mute uppercase tracking-wider">
                        <span>Pack: [ADD]</span>
                        <span>Shelf life: [ADD]</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="text-white" style={{ background: PREETI.accent }}>
          <div className="mx-auto max-w-7xl px-4 py-16 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl tracking-tight">
              Interested in stocking the full Preeti range?
            </h2>
            <Link to="/distributors" className="inline-flex items-center gap-2 bg-white font-bold px-6 py-3.5 rounded-sm" style={{ color: PREETI.accent }}>
              Distributor enquiry <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
