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
      <div className="bg-ink text-white/80 text-[11px]">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-wrap justify-between gap-x-4 gap-y-1">
          <span>{BUSINESS.city}, U.P. · Est. {BUSINESS.since} · 24×7 Production</span>
          <span className="hidden sm:inline">
            {BUSINESS.phone} · {BUSINESS.email}
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-10 h-10 grid place-items-center bg-ink text-white font-display font-extrabold text-lg rounded-sm">B</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-[16px] text-ink tracking-tight">Bhagyashree</span>
            <span className="text-[10px] tracking-[0.16em] text-mute font-semibold uppercase">Food Products</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-[13.5px] font-medium text-ink/80 hover:text-ink transition-colors data-[status=active]:text-ink data-[status=active]:font-semibold"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/distributors"
            className="hidden md:inline-flex items-center bg-ink hover:bg-black text-white text-[13px] font-semibold px-4 py-2.5 rounded-sm transition-colors"
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
              className="mt-3 text-center bg-ink text-white font-semibold text-sm px-4 py-3 rounded-sm"
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
    <footer className="bg-ink text-white/75 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center bg-white text-ink font-display font-extrabold text-lg rounded-sm">B</span>
            <span className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-white text-lg">Bhagyashree Food Products</span>
              <span className="text-[10px] tracking-[0.18em] text-white/50 font-semibold uppercase">Moradabad · Est. {BUSINESS.since}</span>
            </span>
          </div>
          <p className="mt-5 text-sm max-w-md text-white/60 leading-relaxed">
            A Moradabad-based wholesale bakery manufacturer supplying two flagship brands —
            Preeti (rusk, biscuits, suji toast) and Good Morning India (bread) — to retailers,
            distributors, super markets, hotels and institutions across the region.
          </p>
          <div className="mt-5 text-[11px] space-y-1 text-white/50 font-mono">
            <div>GSTIN: {BUSINESS.gstin}</div>
            <div>Udyam: {BUSINESS.udyam}</div>
            <div>FSSAI Lic. No.: {BUSINESS.fssai}</div>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white text-sm">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 hover:text-white transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white text-sm">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>{BUSINESS.addressFull}</li>
            <li>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-white">{BUSINESS.phone}</a>
            </li>
            <li className="break-all">
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-[11px] text-white/45 flex flex-wrap justify-between gap-2">
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
