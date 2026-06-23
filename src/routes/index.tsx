import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Wheat, ShieldCheck, Truck, Factory, Sparkles, ArrowRight, MapPin, Phone, Mail,
  CheckCircle2, Beaker, Package, Clock, Award, Leaf, Menu, X,
} from "lucide-react";

import heroFactory from "@/assets/hero-factory.jpg";
import qualityFacility from "@/assets/quality-facility.jpg";
import milkBread from "@/assets/milk-bread.jpg";
import brownBread from "@/assets/brown-bread.jpg";
import sandwichBread from "@/assets/sandwich-bread.jpg";
import premiumBread from "@/assets/premium-bread.jpg";
import rusk from "@/assets/rusk.jpg";
import toast from "@/assets/toast.jpg";
import cookies from "@/assets/cookies.jpg";
import snacks from "@/assets/snacks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashree Food Products | Premium Bread Manufacturer in Moradabad" },
      { name: "description", content: "Leading bread & bakery manufacturer in Moradabad, UP. Fresh bread, rusk, cookies and bakery products delivered daily to retailers and distributors." },
      { property: "og:title", content: "Bhagyashree Food Products — Freshness Baked Every Day" },
      { property: "og:description", content: "Premium bread & bakery manufacturer serving Uttar Pradesh." },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process" },
    { href: "#quality", label: "Quality" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-5 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-[var(--shadow-soft)]" : ""
        }`}>
          <a href="#top" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-warm)] shadow-[var(--shadow-glow)]">
              <Wheat className="h-5 w-5 text-bark" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold text-bark">Bhagyashree</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Food Products</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-bark-soft hover:text-bark transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-bark px-5 py-2.5 text-sm font-medium text-cream hover:bg-bark-soft transition-colors">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-bark" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-5 animate-fade-in">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-bark-soft hover:text-bark">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-bark px-5 py-2.5 text-sm text-cream text-center">
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroFactory} alt="Modern bread manufacturing facility" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/80 via-bark/55 to-bark/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/70 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.2em] text-wheat">
              <Sparkles className="h-3.5 w-3.5" /> Est. Moradabad · Uttar Pradesh
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-5xl md:text-7xl lg:text-[88px] font-medium leading-[1.02] text-cream">
              Freshness <em className="not-italic bg-gradient-to-r from-wheat to-wheat-deep bg-clip-text text-transparent">Baked</em> Every Day
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg text-cream/80 leading-relaxed">
              Leading bread & bakery manufacturer delivering consistent quality, hygienic production and dependable supply across Uttar Pradesh.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-warm)] px-7 py-4 text-sm font-semibold text-bark shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform">
                View Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-4 text-sm font-semibold text-cream hover:bg-bark/80 transition-colors">
                Contact Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "50K+", l: "Daily Output" },
                { v: "100+", l: "Retailers" },
                { v: "10+", l: "Years" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-cream">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-cream/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-xs uppercase tracking-[0.3em] animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: ShieldCheck, t: "Hygienic Production" },
    { icon: Leaf, t: "Quality Ingredients" },
    { icon: Truck, t: "Trusted Distribution" },
    { icon: Clock, t: "Consistent Supply" },
  ];
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[var(--gradient-cream)]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">About Us</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-bark leading-[1.05]">
                About Bhagyashree Food Products
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-lg text-bark-soft leading-relaxed">
                Bhagyashree Food Products is a trusted bakery manufacturing company based in Moradabad, Uttar Pradesh. We specialize in producing fresh bread, rusk, bakery products and daily essential baked goods.
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Through modern manufacturing processes, strict quality control and hygienic production standards, we ensure consistent quality for distributors, retailers and consumers.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <Reveal key={p.t} delay={200 + i * 80}>
                  <div className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 hover:border-wheat hover:shadow-[var(--shadow-soft)] transition-all">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-cream group-hover:bg-[var(--gradient-warm)] transition-colors">
                      <p.icon className="h-5 w-5 text-bark" strokeWidth={2} />
                    </div>
                    <div className="font-medium text-bark">{p.t}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const cards = [
    { icon: Sparkles, t: "Fresh Daily Production", d: "Every loaf baked, packed and dispatched the same day for unbeatable freshness." },
    { icon: Factory, t: "Advanced Manufacturing", d: "Modern automated lines combining precision baking with traditional recipes." },
    { icon: Beaker, t: "Quality Assurance", d: "Multi-stage testing and strict food safety protocols on every batch." },
    { icon: Truck, t: "Wide Distribution Network", d: "Reliable cold-chain logistics reaching cities and towns across UP." },
  ];
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">Why Choose Us</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-bark leading-tight">
              Built on quality, scaled by trust.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-warm)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cream group-hover:bg-[var(--gradient-warm)] transition-colors duration-500">
                  <c.icon className="h-6 w-6 text-bark" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-display text-xl text-bark">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    { img: milkBread, t: "Milk Bread", d: "Soft, fluffy and enriched with milk for everyday goodness." },
    { img: brownBread, t: "Brown Bread", d: "Hearty whole-wheat loaf packed with natural fibre." },
    { img: sandwichBread, t: "Sandwich Bread", d: "Perfectly even slices crafted for sandwiches & toasts." },
    { img: premiumBread, t: "Premium Bread", d: "Artisan-style loaf with rich crust and tender crumb." },
    { img: rusk, t: "Rusk", d: "Twice-baked, crisp and golden — the perfect tea companion." },
    { img: toast, t: "Toast", d: "Light, crispy and irresistibly crunchy every single bite." },
    { img: cookies, t: "Cookies", d: "Buttery, melt-in-mouth cookies baked in small batches." },
    { img: snacks, t: "Bakery Snacks", d: "Savoury baked snacks for cafés, kitties and quick bites." },
  ];
  return (
    <section id="products" className="relative py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">Our Products</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-bark leading-tight">
                A complete bakery line-up.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-base text-muted-foreground">
              From the everyday loaf to crisp tea-time companions — each product is baked daily with the same uncompromising care.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p, i) => (
            <Reveal key={p.t} delay={(i % 4) * 80}>
              <article className="group overflow-hidden rounded-3xl bg-card border border-border/50 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-bark">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", icon: Leaf, t: "Ingredient Selection", d: "Premium-grade flour, fresh dairy and tested raw materials sourced from trusted suppliers." },
    { n: "02", icon: Factory, t: "Production & Baking", d: "Automated mixing, proofing and baking lines calibrated for consistency." },
    { n: "03", icon: Beaker, t: "Quality Testing", d: "Lab-verified checks for taste, texture, moisture and food safety standards." },
    { n: "04", icon: Truck, t: "Distribution & Delivery", d: "Same-day dispatch through our cold-chain logistics to partners across UP." },
  ];
  return (
    <section id="process" className="relative py-28 md:py-36 bg-bark text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.97 0.015 85) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-wheat font-medium">Manufacturing Process</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-cream leading-tight">
              From grain to your shelf — in one seamless day.
            </h2>
          </div>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-wheat/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div className="relative">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-[var(--gradient-warm)] shadow-[var(--shadow-glow)]">
                  <s.icon className="h-7 w-7 text-bark" strokeWidth={1.8} />
                </div>
                <div className="mt-6 font-display text-5xl text-wheat/30">{s.n}</div>
                <h3 className="mt-2 font-display text-xl text-cream">{s.t}</h3>
                <p className="mt-3 text-sm text-cream/60 leading-relaxed max-w-xs">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const types = ["Retail Stores", "Super Markets", "Distributors", "Hotels", "Restaurants", "Institutional Buyers"];
  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">Our Clients</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-bark leading-tight">
              Trusted across the supply chain.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Serving hundreds of retailers and distributors with reliable supply and consistent quality.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="group aspect-[5/3] rounded-2xl glass border border-border/60 grid place-items-center text-center p-4 hover:border-wheat hover:shadow-[var(--shadow-soft)] transition-all">
                <div>
                  <Package className="h-6 w-6 text-wheat-deep mx-auto group-hover:scale-110 transition-transform" strokeWidth={1.8} />
                  <div className="mt-3 text-sm font-medium text-bark">{t}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const points = [
    "Hygienic Manufacturing",
    "Quality Ingredients",
    "Consistent Taste",
    "Food Safety Standards",
    "Fresh Daily Production",
  ];
  return (
    <section id="quality" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={qualityFacility}
                alt="Workers inspecting fresh bread on production line"
                loading="lazy"
                width={1600}
                height={1200}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-center gap-4">
                <Award className="h-8 w-8 text-wheat-deep" />
                <div>
                  <div className="font-display text-bark">Certified Quality</div>
                  <div className="text-xs text-muted-foreground">FSSAI compliant production</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">Quality Promise</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-bark leading-tight">
                Uncompromising standards, in every loaf.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Quality is not an outcome — it's a discipline. From sourcing to packing, every step is governed by strict food safety protocols and hands-on craftsmanship.
              </p>
            </Reveal>
            <div className="mt-10 space-y-3">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-xl bg-cream px-5 py-4 border border-border/40">
                    <CheckCircle2 className="h-5 w-5 text-wheat-deep shrink-0" />
                    <span className="text-bark font-medium">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "50,000+", l: "Bread Produced Daily" },
    { v: "100+", l: "Retail Partners" },
    { v: "10+", l: "Years Experience" },
    { v: "24/7", l: "Distribution Support" },
  ];
  return (
    <section className="py-24 bg-[var(--gradient-warm)]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="text-center lg:text-left">
                <div className="font-display text-5xl md:text-6xl text-bark">{s.v}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-bark/70">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-wheat-deep font-medium">Get In Touch</div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-bark leading-tight">
                Let's build a reliable supply together.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
                Distributor, retailer or institutional buyer — reach out and our team will get back within one business day.
              </p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, t: "Address", d: "Khushhalpur Road, Moradabad, Uttar Pradesh" },
                { icon: Phone, t: "Phone", d: "+91 98765 43210" },
                { icon: Mail, t: "Email", d: "info@bhagyashreefoods.in" },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-warm)] shrink-0">
                      <c.icon className="h-5 w-5 text-bark" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                      <div className="mt-1 text-bark font-medium">{c.d}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <div className="mt-10 rounded-3xl overflow-hidden border border-border/60 shadow-[var(--shadow-soft)]">
                <iframe
                  title="Bhagyashree Food Products — Moradabad"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.7%2C28.82%2C78.82%2C28.88&layer=mapnik&marker=28.8386,28.8386"
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch shortly."); }}
              className="rounded-3xl bg-card border border-border/60 p-7 md:p-10 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-2xl text-bark">Send us a message</h3>
              <div className="mt-7 grid gap-5">
                <Field label="Name"><input required type="text" className="field" placeholder="Your full name" /></Field>
                <Field label="Phone"><input required type="tel" className="field" placeholder="+91" /></Field>
                <Field label="Business Type">
                  <select required className="field bg-card">
                    <option value="">Select...</option>
                    <option>Retail Store</option>
                    <option>Distributor</option>
                    <option>Super Market</option>
                    <option>Hotel / Restaurant</option>
                    <option>Institutional Buyer</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea required rows={4} className="field resize-none" placeholder="Tell us about your requirements" />
                </Field>
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-bark px-6 py-4 text-sm font-semibold text-cream hover:bg-bark-soft transition-colors">
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .field {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field:focus {
          outline: none;
          border-color: var(--wheat-deep);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--wheat-deep) 18%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-bark text-cream pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-warm)]">
                <Wheat className="h-5 w-5 text-bark" strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-display text-lg">Bhagyashree</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-cream/60">Food Products</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-cream/60 leading-relaxed max-w-md">
              Premium bread and bakery manufacturer based in Moradabad, Uttar Pradesh. Freshness baked every day.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-wheat">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><a href="#about" className="hover:text-wheat transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-wheat transition-colors">Products</a></li>
              <li><a href="#process" className="hover:text-wheat transition-colors">Process</a></li>
              <li><a href="#quality" className="hover:text-wheat transition-colors">Quality</a></li>
              <li><a href="#contact" className="hover:text-wheat transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-wheat">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>Khushhalpur Road,<br />Moradabad, Uttar Pradesh</li>
              <li>+91 98765 43210</li>
              <li>info@bhagyashreefoods.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Bhagyashree Food Products. All rights reserved.</div>
          <div>Made with care in Moradabad, UP.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Process />
      <Clients />
      <Quality />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
