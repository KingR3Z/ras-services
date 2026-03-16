import { client, phoneLink, emailLink } from "@/config/client";

export const contactHeroData = {
  overline: "GET IN TOUCH",
  heading:
    `Contact ${client.name} for a free, no-obligation quote.`,
  text: "Whether you need gardening, roofing repairs, brickwork, painting or general property maintenance — we're here to help. Get in touch and we'll arrange a convenient time to visit your property.",
  image: "/images/garden-consultation-v2.jpg",
};

export const contactMethods = [
  {
    icon: "email",
    label: "Email Us",
    value: client.email,
    href: emailLink,
  },
  {
    icon: "phone",
    label: "Call Us",
    value: client.phone,
    href: phoneLink,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: client.whatsapp.display,
    href: client.whatsapp.link,
  },
];

export const locationData = {
  address: [
    client.name,
    ...client.address,
  ],
  image: "/images/office.jpg",
};

export const hoursData = {
  hours: client.hours,
};

export const socialLinks = client.socials;

export const exploreServices = [
  {
    title: "Gardening & Landscaping",
    image: "/images/service-patios-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Roofing & GRP Flat Roofs",
    image: "/images/service-driveways-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Brickwork & Repointing",
    image: "/images/service-fencing-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Painting & Maintenance",
    image: "/images/service-lawns-v2.jpg",
    href: "/garden-design",
  },
];
