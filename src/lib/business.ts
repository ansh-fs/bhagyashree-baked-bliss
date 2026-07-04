export const BUSINESS = {
  name: "Bhagyashree Food Products",
  legal: "Partnership Firm",
  addressLine: "Khushalpur Road, Shahpur Tigri, Delhi Road",
  city: "Moradabad",
  state: "Uttar Pradesh",
  pin: "244001",
  addressFull:
    "Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad, Uttar Pradesh — 244001",
  phone: "+91 97588 05800",
  phoneRaw: "+919758805800",
  email: "info@bhagyashreefoodproducts.com",
  gstin: "09AAMFB2738E1ZG",
  udyam: "UDYAM-UP-59-0006744",
  fssai: "12718060000582",
  since: "2012",
  mapsQuery: "Khushalpur Road, Shahpur Tigri, Delhi Road, Moradabad, 244001",
};

import preetiLogo from "@/assets/preeti-logo.png.asset.json";
import gmiLogo from "@/assets/gmi-logo.png.asset.json";

export type Brand = {
  slug: "preeti" | "good-morning-india";
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoBg: "light" | "dark";
  palette: { name: string; hex: string }[];
  accent: string; // primary color hex
  tint: string;   // very light tint bg
  categories: string[];
};

export const BRANDS: Brand[] = [
  {
    slug: "preeti",
    name: "Preeti",
    tagline: "Rusk, biscuits & suji toast — tea-time staples, oven fresh.",
    description:
      "Preeti is our long-running range of double-baked rusk, bakery biscuits and suji toast. Built for the daily tea-time occasion — crisp, honest, and priced for volume off the shelf.",
    logo: preetiLogo.url,
    logoBg: "light",
    palette: [
      { name: "Deep Blue", hex: "#1B3A8C" },
      { name: "Orange", hex: "#E8590C" },
      { name: "Gold", hex: "#D4A017" },
      { name: "Warm Yellow", hex: "#F4B942" },
      { name: "Deep Red", hex: "#C0272D" },
    ],
    accent: "#1B3A8C",
    tint: "#FFF7EA",
    categories: ["Rusk", "Biscuits", "Suji Toast"],
  },
  {
    slug: "good-morning-india",
    name: "Good Morning India",
    tagline: "Best Ever Taste — soft, oven-fresh bread, delivered daily.",
    description:
      "Good Morning India is our flagship bread brand — supplied fresh every morning to retailers, super markets, hotels and institutions across the region. Available in multiple weights, each with its own colour-coded pack.",
    logo: gmiLogo.url,
    logoBg: "light",
    palette: [
      { name: "Signature Red", hex: "#C8102E" },
      { name: "Teal", hex: "#1A6B6B" },
      { name: "Sky Blue", hex: "#29ABE2" },
      { name: "Deep Blue", hex: "#0F4C81" },
      { name: "Magenta", hex: "#9B2C82" },
    ],
    accent: "#C8102E",
    tint: "#FFF3F4",
    categories: ["White Bread", "Sandwich Bread", "Specialty Bread"],
  },
];

// PREETI product range
export const PREETI_PRODUCTS = [
  {
    category: "Rusk",
    items: [
      { name: "Elachi Rusk", desc: "Cardamom-flavoured double-baked rusk — the classic tea-time SKU." },
      { name: "Suji Rusk", desc: "Semolina-based rusk with a firm, crisp bite." },
      { name: "Milk Rusk", desc: "Milk-rich rusk with a light golden crust." },
      { name: "[SKU — TO BE CONFIRMED]", desc: "[Additional Preeti rusk variant — confirm with team.]" },
    ],
  },
  {
    category: "Biscuits",
    items: [
      { name: "Salty Bakery Biscuit", desc: "Crisp, mildly salted bakery biscuit — a traditional tea accompaniment." },
      { name: "Sweet Bakery Biscuit", desc: "Sweet, buttery bakery-style biscuit sold by weight." },
      { name: "[SKU — TO BE CONFIRMED]", desc: "[Additional Preeti biscuit variant — confirm with team.]" },
    ],
  },
  {
    category: "Suji Toast",
    items: [
      { name: "Suji Toast", desc: "Extra-crisp semolina toast slices, double-baked for shelf life." },
      { name: "Crispy Toast", desc: "Thin, extra-crisp toast for breakfast and tea." },
    ],
  },
];

// GOOD MORNING INDIA product range — weight variants get their own colour band.
// Weight-to-color mapping to be confirmed with the packaging team.
export const GMI_PRODUCTS = [
  {
    category: "White Bread",
    tagline: 'Enriched with Wheat Fiber.',
    items: [
      { name: "White Bread — 400g", weight: "400g", color: "#C8102E", note: "[COLOUR MAPPING — CONFIRM]" },
      { name: "White Bread — 200g", weight: "200g", color: "#29ABE2", note: "[COLOUR MAPPING — CONFIRM]" },
      { name: "White Bread — 100g", weight: "100g", color: "#F4B942", note: "[COLOUR MAPPING — CONFIRM]" },
    ],
  },
  {
    category: "Sandwich Bread",
    tagline: "Square-cut slices, sized for commercial sandwich makers.",
    items: [
      { name: "Sandwich Bread — Large", weight: "[WEIGHT]", color: "#1A6B6B", note: "[COLOUR MAPPING — CONFIRM]" },
      { name: "Sandwich Bread — Medium", weight: "[WEIGHT]", color: "#0F4C81", note: "[COLOUR MAPPING — CONFIRM]" },
      { name: "Sandwich Bread — Small", weight: "[WEIGHT]", color: "#9B2C82", note: "[COLOUR MAPPING — CONFIRM]" },
    ],
  },
  {
    category: "Specialty Bread",
    tagline: "Additional bread SKUs to be confirmed with the team.",
    items: [
      { name: "[SKU — TO BE CONFIRMED]", weight: "[WEIGHT]", color: "#6B1F5E", note: "[COLOUR MAPPING — CONFIRM]" },
      { name: "[SKU — TO BE CONFIRMED]", weight: "[WEIGHT]", color: "#1B3A8C", note: "[COLOUR MAPPING — CONFIRM]" },
    ],
  },
];
