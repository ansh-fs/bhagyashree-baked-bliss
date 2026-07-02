import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import { PRODUCT_GROUPS } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bread, Rusk, Buns & Biscuits | Bhagyashree Food Products" },
      { name: "description", content: "Full B2B product catalogue: bread (milk, brown, multigrain, sandwich, garlic), rusk & toast, buns and bakery biscuits — manufactured daily in Moradabad for wholesale distribution." },
      { property: "og:title", content: "Product Range — Bhagyashree Food Products" },
      { property: "og:description", content: "Bread, rusk & toast, buns and biscuits — full wholesale bakery catalogue." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Product Catalogue"
          title="Everything we manufacture, in one place."
          subtitle="Four categories covering everyday breakfast staples, tea-time SKUs and QSR/institutional formats. Wholesale rates and case sizes shared on enquiry."
        />

        <section className="py-10 border-b border-ink/10 bg-flour sticky top-24 z-30">
          <div className="mx-auto max-w-7xl px-4 flex flex-wrap gap-2">
            {PRODUCT_GROUPS.map((g) => (
              <a key={g.slug} href={`#${g.slug}`} className="text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 border border-ink/20 hover:border-brand hover:text-brand text-ink transition-colors">
                {g.title}
              </a>
            ))}
          </div>
        </section>

        {PRODUCT_GROUPS.map((g, gi) => (
          <section key={g.slug} id={g.slug} className={`py-16 md:py-20 scroll-mt-32 ${gi % 2 === 1 ? "bg-cream" : ""}`}>
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="rule-red" />
                    <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Category {String(gi + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-ink">{g.title}</h2>
                  <p className="mt-3 text-ink/70">{g.tagline}</p>
                </div>
                <Link to="/distributors" className="text-sm font-bold text-brand hover:text-brand-dark inline-flex items-center gap-1">Get wholesale pricing <ArrowRight size={16} /></Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it) => (
                  <div key={it.name} className="bg-white border border-ink/10">
                    <Placeholder label={`${it.name} — packaged product shot`} className="aspect-[4/3]" />
                    <div className="p-5">
                      <h3 className="font-display text-lg text-ink">{it.name}</h3>
                      <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{it.desc}</p>
                      <div className="mt-4 pt-4 border-t border-ink/10 flex justify-between text-xs text-ink/50">
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

        <section className="bg-brand text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl">Need the full price list and case sizes?</h2>
            <Link to="/distributors" className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3.5 rounded-sm hover:bg-ink hover:text-white transition-colors">
              Request Wholesale Quote <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
