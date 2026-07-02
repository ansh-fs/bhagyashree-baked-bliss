import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/process", label: "Process & Quality" },
  { to: "/distributors", label: "Distributors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-flour border-b-2 border-ink">
      <div className="bg-ink text-flour text-[11px] tracking-wide">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-wrap justify-between gap-x-4 gap-y-1">
          <span>Est. {BUSINESS.since} · Moradabad, U.P. · 24×7 Production</span>
          <span className="hidden sm:inline">FSSAI · MSME/Udyam Registered · GSTIN {BUSINESS.gstin}</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 grid place-items-center bg-brand text-white font-display font-black text-lg rounded-sm">B</span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-black text-[15px] text-ink tracking-tight">BHAGYASHREE</span>
            <span className="text-[10px] tracking-[0.18em] text-muted-foreground font-semibold">FOOD PRODUCTS</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm font-semibold text-ink/80 hover:text-brand transition-colors data-[status=active]:text-brand data-[status=active]:underline underline-offset-8 decoration-2"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/distributors"
            className="hidden md:inline-flex items-center bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-4 py-2.5 rounded-sm transition-colors"
          >
            Enquire Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-flour">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="py-2.5 text-sm font-semibold text-ink/90 border-b border-ink/5 last:border-b-0 data-[status=active]:text-brand"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/distributors"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-brand text-white font-semibold text-sm px-4 py-3 rounded-sm"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-flour/85 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 grid place-items-center bg-brand text-white font-display font-black text-lg rounded-sm">B</span>
            <span className="font-display font-black text-white text-lg tracking-tight">BHAGYASHREE FOOD PRODUCTS</span>
          </div>
          <p className="mt-4 text-sm max-w-md text-flour/70">
            Moradabad-based wholesale bakery manufacturer. Supplying bread, rusk, buns and biscuits daily to retailers, distributors, super markets, hotels and institutions across Uttar Pradesh.
          </p>
          <div className="mt-5 text-xs space-y-1 text-flour/60 font-mono">
            <div>GSTIN: {BUSINESS.gstin}</div>
            <div>Udyam: {BUSINESS.udyam}</div>
            <div>FSSAI: {BUSINESS.fssai}</div>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-sm tracking-wide uppercase">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-flour/70">
            <li>{BUSINESS.addressFull}</li>
            <li>{BUSINESS.phone}</li>
            <li className="break-all">{BUSINESS.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-flour/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>Est. {BUSINESS.since} · Moradabad, U.P.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-cream border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="rule-red" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 text-base md:text-lg text-ink/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Placeholder({ label, className = "aspect-[4/3]" }: { label: string; className?: string }) {
  return <div className={`photo-placeholder ${className}`}>[PHOTO NEEDED: {label}]</div>;
}
