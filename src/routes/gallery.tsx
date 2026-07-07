import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, Placeholder } from "@/components/site-chrome";
import bakingHall from "@/assets/factory-baking-hall.jpg.asset.json";
import breadLine from "@/assets/factory-bread-line.jpg.asset.json";
import depanning from "@/assets/factory-depanning.jpg.asset.json";
import slicer from "@/assets/factory-slicer.jpg.asset.json";
import packagingWorker from "@/assets/factory-packaging-worker.jpg.asset.json";
import packagedBread from "@/assets/factory-packaged-bread.jpg.asset.json";

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

type Shot =
  | { kind: "photo"; src: string; label: string; h: string }
  | { kind: "placeholder"; label: string; h: string };

const SHOTS: Shot[] = [
  { kind: "placeholder", label: "Factory exterior — front elevation", h: "aspect-[4/3]" },
  { kind: "placeholder", label: "Reception / signage board", h: "aspect-[4/3]" },
  { kind: "placeholder", label: "Raw material storage area", h: "aspect-[4/3]" },
  { kind: "photo", src: depanning.url, label: "Depanning line — loaves in tins", h: "aspect-[4/5]" },
  { kind: "photo", src: breadLine.url, label: "Bread production line (Good Morning India)", h: "aspect-[16/10]" },
  { kind: "photo", src: bakingHall.url, label: "Baking hall — ovens & cooling racks", h: "aspect-[4/3]" },
  { kind: "photo", src: slicer.url, label: "Bread slicing line", h: "aspect-[4/3]" },
  { kind: "placeholder", label: "Rusk line (Preeti)", h: "aspect-[4/5]" },
  { kind: "placeholder", label: "Biscuit production", h: "aspect-[4/3]" },
  { kind: "photo", src: packagingWorker.url, label: "Packaging & date-coding station", h: "aspect-[4/3]" },
  { kind: "photo", src: packagedBread.url, label: "Packaged bread on conveyor", h: "aspect-[16/10]" },
  { kind: "placeholder", label: "Delivery vehicle loading", h: "aspect-[4/3]" },
];

function Gallery() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Facility & Team"
          title="Inside the Moradabad unit."
          subtitle="Real photographs of the plant, the lines and the people. Remaining slots are marked and will be filled as photographs are supplied."
        />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SHOTS.map((s) =>
                s.kind === "photo" ? (
                  <figure
                    key={s.label}
                    className={`relative overflow-hidden rounded-lg border border-line bg-ink/5 ${s.h}`}
                  >
                    <img
                      src={s.src}
                      alt={s.label}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-[12px] font-semibold uppercase tracking-wider text-white">
                      {s.label}
                    </figcaption>
                  </figure>
                ) : (
                  <Placeholder key={s.label} label={s.label} className={s.h} />
                )
              )}
            </div>
            <p className="mt-10 text-sm text-mute text-center">
              To fill a remaining slot, share the labelled photograph and we'll drop it into place.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
