import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import { BUSINESS } from "@/lib/business";
import { ArrowRight, ShieldCheck, FileCheck2, Award } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process & Quality — Bhagyashree Food Products" },
      { name: "description", content: "How Bhagyashree Food Products manufactures its Preeti and Good Morning India ranges — sourcing, production, quality testing and dispatch. FSSAI, MSME/Udyam and GSTIN registered." },
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
    body: "Mixing, proofing, moulding, baking and cooling are run on continuous lines through the day and night. Recipes and bake times are standardised per SKU so today's loaf matches yesterday's loaf.",
  },
  {
    title: "Quality Check",
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
          subtitle="No shortcuts, no romanticised craft story — a straightforward four-stage flow from raw material to route dispatch, backed by real registrations."
        />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <div key={s.title} className="border-t border-ink pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-mute">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl text-ink tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-4 text-mute leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-off border-y border-line">
          <div className="mx-auto max-w-7xl px-4 grid gap-14 lg:grid-cols-2 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Hygiene & Quality</div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">Standards we hold ourselves to</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Hair-nets, aprons and hand-wash discipline enforced on every shift entry.",
                  "Colour-coded utensils across raw, dough and finished-product zones.",
                  "Scheduled deep-cleaning of ovens, moulders and cooling conveyors.",
                  "Pest control and equipment calibration on a documented calendar.",
                  "Batch coding on every packet — traceable back to shift, line and raw-material lot.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-ink/80">
                    <ShieldCheck className="text-accent-red shrink-0 mt-0.5" size={18} strokeWidth={2} />
                    <span className="text-[15px]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Placeholder label="Production floor / QC bench" className="aspect-[4/3]" />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-12">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-accent-red uppercase mb-3">Registrations</div>
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">Verifiable, not decorative.</h2>
              <p className="mt-4 text-mute">Every number below is a real government registration — no invented awards, no vague badges.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: FileCheck2, label: "GSTIN", value: BUSINESS.gstin, note: "Goods & Services Tax registration." },
                { icon: Award, label: "Udyam / MSME", value: BUSINESS.udyam, note: "Ministry of MSME, Government of India." },
                { icon: ShieldCheck, label: "FSSAI Lic. No.", value: BUSINESS.fssai, note: "Food Safety & Standards Authority of India." },
              ].map((c) => (
                <div key={c.label} className="border border-line p-6 bg-white">
                  <c.icon className="text-accent-red" size={22} strokeWidth={1.75} />
                  <div className="text-[10px] tracking-[0.22em] font-semibold text-mute uppercase mt-5">{c.label}</div>
                  <div className="mt-2 font-mono text-sm md:text-base text-ink break-all">{c.value}</div>
                  <div className="mt-3 text-xs text-mute">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 flex flex-wrap gap-6 items-center justify-between">
            <h2 className="font-display text-2xl md:text-3xl text-white max-w-xl tracking-tight">
              Want a facility visit or a sample batch?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-ink font-bold px-6 py-3.5 rounded-sm">
              Arrange a visit <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
