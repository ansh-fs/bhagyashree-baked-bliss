import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, ShieldCheck, Factory, Truck, Store,
  Hotel, Building2, ShoppingBag, CheckCircle2, Menu, X, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashree Food Products — Wholesale Bread, Rusk, Buns & Biscuit Manufacturer, Moradabad" },
      { name: "description", content: "Moradabad-based wholesale bakery supplying bread, rusk, buns and biscuits daily to retailers, distributors, super markets, hotels and institutions across Uttar Pradesh. Est. 2012. FSSAI & MSME registered." },
      { property: "og:title", content: "Bhagyashree Food Products — Wholesale Bakery Manufacturer" },
      { property: "og:description", content: "Daily bread, rusk, buns and biscuits for retailers, distributors and institutions across UP. Est. 2012, 24/7 production." },
    ],
  }),
  component: Index,
});

const BUSINESS = {
  name: "Bhagyashree Food Products",
  phone: "+91 92195 35111",
  phoneRaw: "+919219535111",
  email: "info@bhagyashreefoodproducts.com",
  address: "Khasra No. 622, Khushalpur Road, Sahapur Tigre, Delhi Road, Moradabad, Uttar Pradesh — 244001",
  gstin: "09AAMFB2738E1ZG",
  udyam: "UDYAM-UP-59-0006744",
  fssai: "12718060000582",
  since: "2012",
};

const PRODUCT_GROUPS = [
  {
    title: "Bread",
    items: ["Milk Bread", "Brown Bread", "Multigrain Bread", "Sandwich Bread", "Garlic Bread"],
  },
  {
    title: "Rusk & Toast",
    items: ["Elachi Rusk", "Suji Rusk", "Milk Rusk", "Crispy Rusk Toast"],
  },
  {
    title: "Buns",
    items: ["Mini Buns", "Sweet Bun", "Mini Burger Bite Buns"],
  },
  {
    title: "Biscuits",
    items: ["Salty Bakery Biscuit", "Sweet Bakery Biscuit"],
  },
];

function Index() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-flour text-ink">
      <Nav open={navOpen} setOpen={setNavOpen} />
      <Hero />
      <TrustStrip />
      <About />
      <Products />
      <Wholesale />
      <Process />
      <Quality />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = [
    ["About", "#about"],
    ["Products", "#products"],
    ["Wholesale", "#wholesale"],
    ["Process", "#process"],
    ["Quality", "#quality"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-flour border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-9 h-9 grid place-items-center bg-brand text-white font-display font-black text-lg rounded-sm">B</span>
          <span className="font-display font-extrabold text-[15px] leading-tight tracking-tight">
            Bhagyashree<br /><span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">Food Products</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-brand transition-colors">{l}</a>
          ))}
        </nav>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="hidden lg:inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-4 py-2 rounded-sm hover:bg-brand transition-colors">
          <Phone className="w-4 h-4" /> {BUSINESS.phone}
        </a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-flour">
          <div className="px-5 py-4 flex flex-col gap-3 text-sm font-medium">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-1">{l}</a>
            ))}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold px-4 py-2.5 rounded-sm">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-brand mb-5">
            <span className="rule-red" /> Est. {BUSINESS.since} · Moradabad, UP
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            Fresh bread on your shelf,<br />
            <span className="text-brand">every single morning.</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Bhagyashree Food Products is a Moradabad-based wholesale bakery running
            round-the-clock production to supply bread, rusk, buns and biscuits to
            retailers, distributors, super markets, hotels and institutional buyers
            across Uttar Pradesh — reliably, day after day, since {BUSINESS.since}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#wholesale" className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-5 py-3 rounded-sm hover:bg-brand-dark transition-colors">
              Become a distributor <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 border border-ink text-ink font-semibold px-5 py-3 rounded-sm hover:bg-ink hover:text-white transition-colors">
              See product range
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground">
            <span>FSSAI Lic. {BUSINESS.fssai}</span>
            <span>·</span>
            <span>GSTIN {BUSINESS.gstin}</span>
            <span>·</span>
            <span>MSME {BUSINESS.udyam}</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] photo-placeholder">
            [PHOTO NEEDED: Wide shot of Bhagyashree factory floor — fresh bread loaves coming off production line, staff in uniform & hairnets]
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST STRIP ---------- */
function TrustStrip() {
  const items = [
    ["Est. 2012", "10+ years of daily supply"],
    ["24 / 7", "Round-the-clock production"],
    ["FSSAI Licensed", `Lic. ${BUSINESS.fssai}`],
    ["MSME Registered", BUSINESS.udyam],
  ];
  return (
    <section className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {items.map(([k, v]) => (
          <div key={k} className="py-3 lg:py-2 lg:px-6 first:lg:pl-0">
            <div className="font-display font-black text-lg text-gold">{k}</div>
            <div className="text-xs text-white/70 mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>About the company</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">
            A Moradabad bakery built on <span className="text-brand">daily reliability</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Bhagyashree Food Products was established in {BUSINESS.since} on Delhi Road,
            Moradabad, as a partnership-run bakery manufacturing unit. What started
            as a small daily-supply operation has grown into a full-fledged production
            facility running 24 hours a day to keep bread, rusk, buns and biscuits
            moving to stores and kitchens across Uttar Pradesh.
          </p>
          <p>
            Our business is B2B by design. We don't run a retail counter — we run a
            production line. Distributors, super markets, general trade retailers,
            hotels, restaurants and institutional buyers depend on us for consistent
            volume, consistent quality, and on-time morning delivery.
          </p>
          <p>
            We are registered under MSME ({BUSINESS.udyam}), hold GSTIN {BUSINESS.gstin},
            and operate under FSSAI licence {BUSINESS.fssai}.
          </p>
          <div className="pt-2 grid sm:grid-cols-2 gap-3">
            <div className="aspect-[4/3] photo-placeholder">
              [PHOTO NEEDED: Owner / partners at the facility]
            </div>
            <div className="aspect-[4/3] photo-placeholder">
              [PHOTO NEEDED: Exterior of the Moradabad unit / signage]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Product range</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">Four categories. Baked daily.</h2>
          <p className="mt-4 text-muted-foreground">
            Our full catalogue supplied to trade partners. Custom packaging and
            private-label arrangements available for qualifying distributors.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PRODUCT_GROUPS.map((g) => (
            <div key={g.title} className="bg-card border border-border rounded-md overflow-hidden flex flex-col">
              <div className="aspect-[16/9] photo-placeholder rounded-none border-0 border-b border-border">
                [PHOTO NEEDED: {g.title} — packaged product on plain background]
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display font-black text-2xl">{g.title}</h3>
                  <span className="text-xs font-bold text-brand tracking-widest">
                    {g.items.length} SKUs
                  </span>
                </div>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHOLESALE ---------- */
function Wholesale() {
  const [sent, setSent] = useState(false);
  return (
    <section id="wholesale" className="py-20 lg:py-28 bg-ink text-white border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-gold mb-5">
            <span className="w-10 h-[3px] bg-gold" /> For trade buyers
          </div>
          <h2 className="text-3xl lg:text-4xl font-black">
            Distributors, retailers &amp; bulk buyers — <span className="text-gold">let's talk volume.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Our morning-delivery routes cover Moradabad and surrounding districts.
            Share your requirement and our sales team will get back with pricing,
            MOQ, and delivery schedule.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Daily / alternate-day supply schedules",
              "Fresh production — no long-storage stock",
              "Custom order quantities for institutional buyers",
              "GST-compliant invoicing",
            ].map((l) => (
              <li key={l} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/85">{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-white text-ink rounded-md p-6 lg:p-8 grid sm:grid-cols-2 gap-4"
          >
            <Field label="Your name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Business name" name="business" />
            <SelectField label="Business type" name="type" options={[
              "Retail store", "Distributor", "Super market", "Hotel / Restaurant",
              "Institutional buyer", "Other",
            ]} />
            <Field label="Location / City" name="city" className="sm:col-span-2" />
            <Field label="Approximate quantity required" name="qty" placeholder="e.g. 200 loaves/day" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5">Message</label>
              <textarea name="message" rows={4} className="w-full border border-border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-brand" placeholder="Tell us about your requirement" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground">
                Or call directly: <a href={`tel:${BUSINESS.phoneRaw}`} className="text-brand font-semibold">{BUSINESS.phone}</a>
              </p>
              <button type="submit" className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-5 py-3 rounded-sm hover:bg-brand-dark transition-colors">
                {sent ? "Enquiry sent" : "Send enquiry"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder, className = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5">{label}{required && " *"}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} className="w-full border border-border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-brand" />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1.5">{label}</label>
      <select name={name} className="w-full border border-border rounded-sm px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-brand">
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { t: "Sourcing", d: "Flour, sugar, yeast and packaging inputs sourced from vetted suppliers with lot-level tracking." },
    { t: "Production", d: "Continuous mixing, proving and baking cycles running 24/7 across our Moradabad unit." },
    { t: "Quality check", d: "In-line checks on weight, bake, colour and packaging before any batch is cleared for dispatch." },
    { t: "Dispatch", d: "Route-wise loading through the night for on-time morning delivery to trade partners." },
  ];
  return (
    <section id="process" className="py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">From mill to morning delivery.</h2>
        </div>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="border border-border bg-card p-6 rounded-md">
              <div className="font-display font-black text-brand text-3xl">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 font-display font-extrabold text-xl">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- QUALITY ---------- */
function Quality() {
  const registrations = [
    { icon: ShieldCheck, label: "FSSAI Licence", value: BUSINESS.fssai },
    { icon: Factory, label: "MSME / Udyam", value: BUSINESS.udyam },
    { icon: Building2, label: "GSTIN", value: BUSINESS.gstin },
    { icon: Truck, label: "Operating since", value: `${BUSINESS.since} — 10+ years` },
  ];
  return (
    <section id="quality" className="py-20 lg:py-28 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionLabel>Quality &amp; compliance</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">
            Registered, licensed, and running to spec.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Everything we make is produced under FSSAI licence in a facility that
            follows daily hygiene protocols — sanitised production lines, uniformed
            staff, hairnets and gloves, and batch-wise quality checks before dispatch.
          </p>
          <div className="mt-6 aspect-[4/3] photo-placeholder">
            [PHOTO NEEDED: Staff in uniform / hygienic production floor]
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4">
            {registrations.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-md p-5">
                <Icon className="w-6 h-6 text-brand" />
                <div className="mt-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="mt-1 font-display font-extrabold text-lg break-all">{value}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "Daily sanitisation of mixing, proving & baking lines",
              "Batch-level weight and bake checks",
              "Sealed, food-grade packaging",
              "FIFO stock rotation across dispatch",
            ].map((l) => (
              <li key={l} className="flex gap-2 items-start bg-card border border-border rounded-md px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- CLIENTS ---------- */
function Clients() {
  const buyers = [
    { icon: Store, t: "Retail stores", d: "General trade & neighbourhood grocers" },
    { icon: ShoppingBag, t: "Distributors", d: "Regional stockists across UP" },
    { icon: Building2, t: "Super markets", d: "Modern trade & self-service outlets" },
    { icon: Hotel, t: "Hotels & restaurants", d: "HoReCa daily supply schedules" },
    { icon: Factory, t: "Institutional buyers", d: "Canteens, hostels, caterers" },
  ];
  return (
    <section className="py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Who we supply</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">Built for trade, not walk-ins.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {buyers.map(({ icon: Icon, t, d }) => (
            <div key={t} className="border border-border bg-card p-5 rounded-md">
              <Icon className="w-6 h-6 text-brand" />
              <div className="mt-3 font-display font-extrabold">{t}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black">Visit the unit or call our sales desk.</h2>
          <div className="mt-8 space-y-5 text-sm">
            <ContactRow icon={MapPin} title="Factory address">
              {BUSINESS.address}
            </ContactRow>
            <ContactRow icon={Phone} title="Phone">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-brand">{BUSINESS.phone}</a>
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-brand break-all">{BUSINESS.email}</a>
            </ContactRow>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[4/3] rounded-md overflow-hidden border border-border bg-card">
            <iframe
              title="Bhagyashree Food Products location"
              src="https://www.google.com/maps?q=Khushalpur+Road+Sahapur+Tigre+Delhi+Road+Moradabad+Uttar+Pradesh+244001&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactRow({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 grid place-items-center bg-brand text-white rounded-sm shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-0.5 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 grid place-items-center bg-brand text-white font-display font-black text-lg rounded-sm">B</span>
            <span className="font-display font-extrabold text-white text-[15px] leading-tight">
              Bhagyashree<br /><span className="text-[11px] font-semibold tracking-widest text-white/60 uppercase">Food Products</span>
            </span>
          </div>
          <p className="mt-5 max-w-md leading-relaxed">
            Wholesale bakery manufacturer based in Moradabad, Uttar Pradesh.
            Daily supply of bread, rusk, buns and biscuits to trade partners
            across UP since {BUSINESS.since}.
          </p>
          <div className="mt-5 space-y-1 text-xs text-white/60">
            <div>GSTIN: <span className="text-white/90 font-semibold">{BUSINESS.gstin}</span></div>
            <div>Udyam: <span className="text-white/90 font-semibold">{BUSINESS.udyam}</span></div>
            <div>FSSAI Lic.: <span className="text-white/90 font-semibold">{BUSINESS.fssai}</span></div>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Quick links</div>
          <ul className="mt-4 space-y-2">
            {[["About", "#about"], ["Products", "#products"], ["Wholesale", "#wholesale"], ["Process", "#process"], ["Quality", "#quality"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Contact</div>
          <ul className="mt-4 space-y-2 text-white/80">
            <li className="leading-relaxed">{BUSINESS.address}</li>
            <li><a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-white">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-white break-all">{BUSINESS.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Bhagyashree Food Products. All rights reserved.</div>
          <div>Moradabad · Uttar Pradesh · India</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-brand">
      <span className="rule-red" /> {children}
    </div>
  );
}
