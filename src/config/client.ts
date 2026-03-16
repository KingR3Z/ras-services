/* ============================================
   CLIENT CONFIGURATION
   Change this file to set up a new client.
   This is the single source of truth for all
   client-specific content across the site.
   ============================================ */

export const client = {
  // ── Business Identity ──────────────────────
  name: "RAS Services",
  shortName: "RAS",
  legalName: "RAS Services",
  tagline: "GARDENING | ROOFING | PROPERTY MAINTENANCE",
  logoInitials: "RAS",

  // ── Founder / Director ─────────────────────
  founderName: "Richard",
  founderRole: "Owner",
  yearFounded: "2020",

  // ── Contact Details ────────────────────────
  phone: "07890 846440",
  email: "info@rasserviceshull.co.uk",
  whatsapp: {
    display: "07890 846440",
    link: "https://wa.me/447890846440",
  },
  address: [
    "80 Sandford Cl",
    "Hull",
    "East Yorkshire",
    "HU7 4HL",
  ],
  region: "Hull and East Yorkshire",
  basedIn: "Hull",

  // ── Business Hours ─────────────────────────
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
    { day: "Saturday", time: "9:00 AM — 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // ── Social Links ───────────────────────────
  socials: [
    { label: "Facebook", href: "#" },
  ],

  // ── Awards & Recognition ───────────────────
  awards: [
    { title: "Google Reviews — 5.0 Stars", year: "2026", category: "REVIEWS" },
    { title: "MyBuilder — 5.0 Stars", year: "2026", category: "SERVICE" },
  ],

  // ── Partners ───────────────────────────────
  partners: [
    { name: "Res Tec", logo: null },
    { name: "Flexitec", logo: null },
  ],

  // ── SEO / Metadata ─────────────────────────
  metaTitle: "RAS Services — Gardening, Roofing & Property Maintenance in Hull",
  metaDescription:
    "Professional gardening, roofing repairs, brickwork and property maintenance in Hull, East Yorkshire. 5-star rated on Google and MyBuilder. Call 07890 846440 for a free quote.",
};

// ── Derived helpers (do not edit) ────────────
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
