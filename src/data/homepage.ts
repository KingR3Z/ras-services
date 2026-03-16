import { client } from "@/config/client";

export const heroData = {
  title: "Reliable Property Services\nYou Can Trust",
  subtitle: `GARDENING, ROOFING & PROPERTY MAINTENANCE IN ${client.basedIn.toUpperCase()}`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Your Local Property Maintenance Expert in ${client.basedIn}`,
  text: [
    `${client.name} is a trusted, multi-trade property maintenance company based in ${client.region}. From garden maintenance and landscaping to roofing repairs, brickwork and decorating — we handle it all with a 5-star rating on both Google and MyBuilder.`,
    "Take a look at our recent work in the Portfolio to see the quality we deliver on every job.",
  ],
  cta: { label: "Get a Free Quote", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "GARDENING & LANDSCAPING",
      title: "Gardening & Landscaping",
      text: "From regular garden maintenance to full landscaping projects, we keep your outdoor spaces looking their best. Lawn care, hedge trimming, planting, clearances and complete garden makeovers — no job is too big or small.",
      tagline: "A well-kept garden starts with a reliable gardener.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "ROOFING & GRP",
      title: "Roofing Repairs & GRP Flat Roofs",
      text: "We carry out all types of roofing repairs, from replacing broken tiles and fixing leaks to full GRP fibreglass flat roofs using Res Tec and Flexitec systems. Professional results with a watertight guarantee.",
      tagline: "Protect your home from the top down.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "BRICKWORK & REPOINTING",
      title: "Brickwork & Repointing",
      text: "Crumbling mortar and damaged brickwork can affect your property's appearance and structural integrity. We provide expert repointing and brickwork repairs to restore walls, chimneys and boundary walls to their best.",
      tagline: "Solid craftsmanship that stands the test of time.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
    {
      label: "PAINTING & MAINTENANCE",
      title: "Painting, Decorating & Property Maintenance",
      text: "Interior and exterior painting, fascia, soffit and guttering replacement, plus general property maintenance and odd jobs. We offer a complete service to keep your home in top condition all year round.",
      tagline: "One call covers it all.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose ${client.name}?`,
  paragraphs: [
    `With 5-star ratings on both Google and MyBuilder, our reputation speaks for itself. We're a trusted local tradesman delivering reliable, quality work across ${client.basedIn} and East Yorkshire.`,
    "Every job is approached with the same care and attention to detail, whether it's a garden tidy-up or a full roof repair. We don't cut corners — we do the job properly.",
    "From the first phone call through to completion, you'll deal directly with Richard. No middlemen, no subcontractors — just honest, dependable service.",
    "We offer a wide range of services under one roof, so you only need one tradesman you can trust for all your property maintenance needs.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Approach",
  paragraphs: [
    "We keep things simple: turn up on time, do a quality job, leave the site clean, and charge a fair price. That's how we've built our reputation.",
    "Every job starts with a free, no-obligation quote. We'll assess the work, explain your options, and give you an honest price with no hidden extras.",
    "We take pride in every project and treat your home as if it were our own. That's why our customers come back time and again.",
  ],
  cta: { label: "Learn More About Us", href: "/about" },
  image: "/images/projects/project-05.jpg",
};

export const landscapingData = {
  title: "Complete Property Maintenance Solutions",
  paragraphs: [
    "Whether it's a garden that needs bringing back to life, a leaking roof that needs fixing, or walls that need repointing — RAS Services has you covered. We handle everything so you don't have to juggle multiple tradesmen.",
    "Our experienced hands-on approach means consistent quality from start to finish. We take pride in leaving every job done right and every customer satisfied.",
  ],
  cta: { label: "View Our Projects", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready To Get Started?",
  text: "Get in touch for a free, no-obligation quote. We'll come to you, assess the job and give you an honest price.",
  subtext: `Call Richard on ${client.phone} or fill in the form below and we'll get back to you within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Garden Clearance & Tidy", location: "Bransholme, Hull", image: "/images/projects/project-01.jpg", slug: "bransholme-garden" },
  { title: "GRP Flat Roof", location: "Sutton, Hull", image: "/images/projects/project-02.jpg", slug: "sutton-grp-roof" },
  { title: "Brickwork Repointing", location: "Anlaby, Hull", image: "/images/projects/project-03.jpg", slug: "anlaby-repointing" },
  { title: "Fascia & Soffit Replacement", location: "Cottingham", image: "/images/projects/project-04.jpg", slug: "cottingham-fascia" },
  { title: "Full Garden Landscaping", location: "Kingswood, Hull", image: "/images/projects/project-05.jpg", slug: "kingswood-garden" },
  { title: "Exterior Painting", location: "Hessle", image: "/images/projects/project-06.jpg", slug: "hessle-painting" },
  { title: "Roof Tile Repairs", location: "Beverley", image: "/images/projects/project-07.jpg", slug: "beverley-roof-repair" },
  { title: "Chimney Repointing", location: "Bilton, Hull", image: "/images/projects/project-08.jpg", slug: "bilton-chimney" },
  { title: "Guttering & Downpipes", location: "Willerby", image: "/images/projects/project-09.jpg", slug: "willerby-guttering" },
  { title: "Property Maintenance", location: "Hull City Centre", image: "/images/projects/project-10.jpg", slug: "hull-maintenance" },
];
