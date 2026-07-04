import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bhagyashree Food Products Facility & Team" },
      { name: "description", content: "Photographs of the Bhagyashree Food Products manufacturing facility in Moradabad — production floor, packaging area, delivery vehicles, finished products and team." },
      { property: "og:title", content: "Gallery — Bhagyashree Food Products" },
      { property: "og:description", content: "Inside our Moradabad bakery manufacturing unit." },
    ],
  }),
  component: Gallery,
});

const SHOTS = [
  { label: "Factory exterior — front elevation", h: "aspect-[4/3]" },
  { label: "Reception / signage board", h: "aspect-[4/3]" },
  { label: "Raw material storage area", h: "aspect-[4/3]" },
  { label: "Mixing & dough preparation", h: "aspect-[4/5]" },
  { label: "Bread production line (Good Morning India)", h: "aspect-[16/10]" },
  { label: "Oven / baking area", h: "aspect-[4/3]" },
  { label: "Cooling conveyor", h: "aspect-[4/3]" },
  { label: "Rusk line (Preeti)", h: "aspect-[4/5]" },
  { label: "Biscuit production", h: "aspect-[4/3]" },
  { label: "Packaging area", h: "aspect-[4/3]" },
  { label: "Delivery vehicle loading", h: "aspect-[16/10]" },
  { label: "Team / staff at work", h: "aspect-[4/3]" },
];

function Gallery() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Facility & Team"
          title="Inside the Moradabad unit."
          subtitle="Real photographs of the plant, the lines and the people — added as they are supplied. Placeholders below indicate exactly which shots are needed."
        />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SHOTS.map((s) => (
                <Placeholder key={s.label} label={s.label} className={s.h} />
              ))}
            </div>
            <p className="mt-10 text-sm text-mute text-center">
              To replace a placeholder, share the labelled photograph and we'll drop it into the corresponding slot.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
