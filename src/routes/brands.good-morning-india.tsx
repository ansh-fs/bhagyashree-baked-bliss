import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Placeholder } from "@/components/site-chrome";
import { BRANDS, GMI_PRODUCTS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

const GMI = BRANDS.find((b) => b.slug === "good-morning-india")!;

export const Route = createFileRoute("/brands/good-morning-india")({
  head: () => ({
    meta: [
      { title: "Good Morning India — Bread | Bhagyashree Food Products" },
      { name: "description", content: "Good Morning India — Bhagyashree Food Products' flagship bread brand. Soft, oven-fresh white and sandwich bread in multiple weights, each in its own colour-coded pack. Best Ever Taste." },
      { property: "og:title", content: "Good Morning India — Bread" },
      { property: "og:description", content: "Best Ever Taste. Fresh bread supplied daily from Moradabad." },
    ],
  }),
  component: GMIPage,
});

function GMIPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* GMI HERO */}
        <section className="text-white relative overflow-hidden" style={{ background: GMI.accent }}>
          <div className="gmi-lattice absolute inset-0 opacity-40 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 lg:grid-cols-12 items-center relative">
            <div className="lg:col-span-6">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 text-white/85">
                A Bhagyashree Food Products brand
              </div>
              <div className="bg-white inline-block p-4 rounded-sm">
                <img src={GMI.logo} alt="Good Morning India logo" className="h-28 md:h-36 object-contain" />
              </div>
              <h1 className="mt-8 font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-white">
                Best Ever Taste.
                <span className="block text-white/85">Fresh bread, every morning.</span>
              </h1>
              <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
                {GMI.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/distributors" className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3.5 rounded-sm" style={{ color: GMI.accent }}>
                  Stock our bread <ArrowRight size={17} />
                </Link>
                <Link to="/brands" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10">
                  All brands
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm">
                <Placeholder label="Good Morning India bread — packaged range shot" className="aspect-[4/5] border-0" />
              </div>
            </div>
          </div>
        </section>

        {/* PALETTE — weight/color mapping */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 flex items-center gap-6 flex-wrap">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-mute">Weight → colour pack</span>
            <div className="flex gap-1">
              {GMI.palette.map((c) => (
                <div key={c.hex} className="flex flex-col items-start">
                  <span className="w-14 h-10" style={{ background: c.hex }} />
                  <span className="text-[10px] text-mute mt-1 font-mono">{c.hex}</span>
                </div>
              ))}
            </div>
            <span className="text-[11px] text-mute italic">[Exact weight-to-colour mapping to be confirmed]</span>
          </div>
        </section>

        {/* PRODUCT VARIANTS — each in its OWN colour */}
        {GMI_PRODUCTS.map((cat, ci) => (
          <section key={cat.category} className={`py-16 md:py-20 ${ci % 2 === 1 ? "bg-off" : ""}`}>
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-2xl mb-10">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: GMI.accent }}>
                  Category {String(ci + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">{cat.category}</h2>
                {cat.tagline && <p className="mt-3 text-mute">{cat.tagline}</p>}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((it) => (
                  <div key={it.name} className="bg-white border border-line overflow-hidden">
                    {/* Each variant packaged in its own weight-color */}
                    <div className="relative">
                      <div className="h-4" style={{ background: it.color }} />
                      <div className="aspect-[4/3] grid place-items-center relative" style={{ background: `linear-gradient(180deg, ${it.color}18 0%, ${it.color}05 100%)` }}>
                        <div className="gmi-lattice absolute inset-0 opacity-30" />
                        <Placeholder label={`${it.name} pack shot`} className="aspect-[4/3] w-full h-full border-0 bg-transparent" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 rounded-full" style={{ background: it.color }} />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-mute">{it.weight} pack</span>
                      </div>
                      <h3 className="font-display text-lg text-ink">{it.name}</h3>
                      {cat.tagline === 'Enriched with Wheat Fiber.' && (
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider" style={{ color: it.color }}>Enriched with Wheat Fiber</p>
                      )}
                      <div className="mt-4 pt-4 border-t border-line text-[11px] text-mute italic">
                        {it.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="text-white" style={{ background: GMI.accent }}>
          <div className="mx-auto max-w-7xl px-4 py-16 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl tracking-tight">
              Interested in stocking Good Morning India?
            </h2>
            <Link to="/distributors" className="inline-flex items-center gap-2 bg-white font-bold px-6 py-3.5 rounded-sm" style={{ color: GMI.accent }}>
              Distributor enquiry <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
