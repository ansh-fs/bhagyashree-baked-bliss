import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/brands", label: "Our Brands" },
  { to: "/process", label: "Process & Quality" },
  { to: "/distributors", label: "Distributors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-line">
      <div className="text-white text-[11px]" style={{ background: "var(--accent-red)" }}>
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-wrap justify-between gap-x-4 gap-y-1">
          <span className="font-semibold tracking-wide">{BUSINESS.city}, U.P. · Est. {BUSINESS.since} · 24×7 Production</span>
          <span className="hidden sm:inline">
            {BUSINESS.phone} · {BUSINESS.email}
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className="w-12 h-12 grid place-items-center text-white font-display text-xl rounded-md shadow-sm"
            style={{ background: "linear-gradient(180deg, var(--accent-red) 0%, #B10510 100%)" }}
          >
            B
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[17px] text-ink tracking-tight">BHAGYASHREE</span>
            <span className="text-[10px] tracking-[0.22em] text-mute font-bold uppercase">Food Products</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-[13px] font-bold uppercase tracking-wider text-ink/75 hover:text-accent-red transition-colors data-[status=active]:text-accent-red"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/distributors"
            className="hidden md:inline-flex items-center text-white text-[13px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-transform hover:scale-[1.03] shadow-md"
            style={{ background: "var(--accent-red)" }}
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
        <div className="lg:hidden border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="py-2.5 text-sm font-medium text-ink border-b border-line last:border-b-0"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/distributors"
              onClick={() => setOpen(false)}
              className="mt-3 text-center text-white font-bold text-sm px-4 py-3 rounded-full"
              style={{ background: "var(--accent-red)" }}
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
    <footer className="mt-24 text-ink" style={{ background: "var(--accent-yellow)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span
              className="w-12 h-12 grid place-items-center text-white font-display text-xl rounded-md"
              style={{ background: "var(--accent-red)" }}
            >
              B
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-ink text-lg">BHAGYASHREE FOOD PRODUCTS</span>
              <span className="text-[10px] tracking-[0.22em] text-ink/60 font-bold uppercase">Moradabad · Est. {BUSINESS.since}</span>
            </span>
          </div>
          <p className="mt-5 text-sm max-w-md text-ink/75 leading-relaxed">
            A Moradabad-based wholesale bakery manufacturer supplying two flagship brands —
            Preeti (rusk, biscuits, suji toast) and Good Morning India (bread) — to retailers,
            distributors, super markets, hotels and institutions across the region.
          </p>
          <div className="mt-5 text-[11px] space-y-1 text-ink/70 font-mono">
            <div>GSTIN: {BUSINESS.gstin}</div>
            <div>Udyam: {BUSINESS.udyam}</div>
            <div>FSSAI Lic. No.: {BUSINESS.fssai}</div>
          </div>
        </div>
        <div>
          <h4 className="font-display text-ink text-sm uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink/75 hover:text-accent-red font-medium transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-ink text-sm uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
            <li>{BUSINESS.addressFull}</li>
            <li>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-accent-red font-semibold">{BUSINESS.phone}</a>
            </li>
            <li className="break-all">
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent-red font-semibold">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/15">
        <div className="mx-auto max-w-7xl px-4 py-4 text-[11px] text-ink/60 flex flex-wrap justify-between gap-2 font-semibold">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>Moradabad, Uttar Pradesh · India</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {eyebrow && (
          <div className="text-[11px] font-semibold tracking-[0.2em] text-accent-red uppercase mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] text-ink max-w-4xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-mute max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Placeholder({
  label,
  className = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
}) {
  return <div className={`photo-placeholder ${className}`}>[PHOTO NEEDED: {label}]</div>;
}
