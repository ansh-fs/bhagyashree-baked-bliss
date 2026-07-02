import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { ArrowRight, ShieldCheck, FileCheck2, Award } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Manufacturing Process & Quality — Bhagyashree Food Products" },
      { name: "description", content: "How Bhagyashree Food Products manufactures bread, rusk, buns and biscuits — sourcing, production, quality testing and dispatch. FSSAI, MSME/Udyam and GSTIN registered." },
      { property: "og:title", content: "Process & Quality — Bhagyashree Food Products" },
      { property: "og:description", content: "Sourcing to dispatch. Real quality controls, real registrations." },
    ],
  }),
  component: Process,
});

const STEPS = [
  {
    title: "Sourcing",
    body: "Refined and whole-wheat flour, sugar, edible oil, yeast, milk solids and packaging material sourced from established suppliers. Every incoming lot is checked for freshness, moisture and packaging integrity before it enters the store.",
  },
  {
    title: "Production",
    body: "Mixing, proofing, moulding, baking and cooling are run on continuous lines through the day and night. Recipes and bake times are standardised per SKU so that today's loaf matches yesterday's loaf.",
  },
  {
    title: "Quality Testing",
    body: "Finished batches are checked for weight, crumb, colour and taste before packaging. Any batch that misses the mark is pulled — we don't send out a compromised loaf to save a shift.",
  },
  {
    title: "Packaging & Dispatch",
    body: "Products are packed on hygienic lines with batch code and best-before date, staged for route-wise dispatch, and loaded onto delivery vehicles for first-light drops to retailers, distributors and institutions.",
  },
];

function Process() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Manufacturing & Quality"
          title="A repeatable process, run the same way every shift."
          subtitle="No shortcuts, no romanticised craft story — just a straightforward four-stage flow from raw material to route dispatch, backed by real registrations."
        />

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-6 border-t-2 border-ink pt-6">
                  <div className="font-display text-5xl md:text-6xl font-black text-brand leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                    <p className="mt-3 text-ink/75 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-cream border-y border-ink/10">
          <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Hygiene & Quality</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Standards we hold ourselves to</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Hair-nets, aprons and hand-wash discipline enforced on every shift entry.",
                  "Colour-coded utensils across raw, dough and finished-product zones.",
                  "Scheduled deep-cleaning of ovens, moulders and cooling conveyors.",
                  "Pest control and equipment calibration on a documented calendar.",
                  "Batch coding on every packet — traceable back to shift, line and raw-material lot.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-ink/80"><ShieldCheck className="text-brand shrink-0 mt-0.5" size={20} />{p}</li>
                ))}
              </ul>
            </div>
            <Placeholder label="Production floor / QC bench" className="aspect-[4/3]" />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-3 mb-3"><span className="rule-red" /><span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Registrations</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">Verifiable, not decorative.</h2>
              <p className="mt-3 text-ink/70">Every number below is a real government registration — no invented awards, no vague badges.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: FileCheck2, label: "GSTIN", value: BUSINESS.gstin, note: "Goods & Services Tax registration." },
                { icon: Award, label: "Udyam / MSME", value: BUSINESS.udyam, note: "Ministry of MSME, Government of India." },
                { icon: ShieldCheck, label: "FSSAI Licence", value: BUSINESS.fssai, note: "Food Safety & Standards Authority of India." },
              ].map((c) => (
                <div key={c.label} className="border border-ink/15 p-6 bg-white">
                  <c.icon className="text-brand" size={24} />
                  <div className="text-[10px] tracking-[0.2em] font-bold text-brand uppercase mt-5">{c.label}</div>
                  <div className="mt-2 font-mono text-sm md:text-base text-ink break-all">{c.value}</div>
                  <div className="mt-3 text-xs text-ink/60">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-flour">
          <div className="mx-auto max-w-7xl px-4 py-14 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl">Want a facility visit or a sample batch?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-sm">
              Arrange a visit <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
