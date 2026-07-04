import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-chrome";
import { BRANDS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Our Brands — Preeti & Good Morning India | Bhagyashree Food Products" },
      { name: "description", content: "Bhagyashree Food Products manufactures under two brands — Preeti (rusk, biscuits, suji toast) and Good Morning India (bread). Explore each brand's range." },
      { property: "og:title", content: "Our Brands — Preeti & Good Morning India" },
      { property: "og:description", content: "Two brands. One manufacturer. Explore Preeti rusk & biscuits and Good Morning India bread." },
    ],
  }),
  component: BrandsHub,
});

function BrandsHub() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Brands"
          title="One manufacturer. Two brands built for different daily occasions."
          subtitle="Preeti owns the tea-time shelf — rusk, bakery biscuits and suji toast. Good Morning India owns the breakfast basket — soft, oven-fresh bread in multiple weights, each in its own colour pack."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-2">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                to={b.slug === "preeti" ? "/brands/preeti" : "/brands/good-morning-india"}
                className="group block bg-white border border-line hover:border-ink transition-colors overflow-hidden"
              >
                <div
                  className="h-72 grid place-items-center px-10 border-b border-line"
                  style={{ background: b.tint }}
                >
                  <img src={b.logo} alt={`${b.name} logo`} className="max-h-full max-w-[75%] object-contain" />
                </div>
                <div className="p-8">
                  <h2 className="font-display text-3xl text-ink tracking-tight">{b.name}</h2>
                  <p className="mt-3 text-mute leading-relaxed">{b.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {b.categories.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-semibold px-2.5 py-1 uppercase tracking-wider"
                        style={{ background: b.tint, color: b.accent }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {b.palette.slice(0, 5).map((c) => (
                        <span key={c.hex} className="w-6 h-6 rounded-sm border border-line" style={{ background: c.hex }} title={c.name} />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent-red">
                      Explore brand <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-mute uppercase mb-3">One Manufacturer</div>
            <p className="font-display text-2xl md:text-3xl text-ink tracking-tight leading-snug">
              Both brands are manufactured, packed and dispatched from our single Moradabad facility — same standards, same quality process, one point of contact for wholesale.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
