import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Reliable Property Services Across Hull",
  paragraphs: [
    `${client.name} is a trusted property maintenance company based in ${client.region}. We provide a wide range of services including gardening, roofing repairs, GRP flat roofs, brickwork, repointing, painting, decorating, fascia, soffit, guttering and general property maintenance.`,
    "With years of hands-on experience across multiple trades, we deliver quality workmanship on every job — big or small. Our 5-star ratings on Google and MyBuilder say it all.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Safe & Reliable",
    description:
      "Every job is carried out to the highest standards with full attention to safety. We provide clear quotes, stick to agreed timelines, and keep you updated throughout every project.",
    icon: "shield",
  },
  {
    title: "Multi-Trade Expertise",
    description:
      "From gardens to rooftops and everything in between, our broad range of skills means you only need one tradesman for all your property needs. No need to juggle multiple contractors.",
    icon: "lightbulb",
  },
  {
    title: "Our Promise",
    description:
      "We treat every property as if it were our own. Quality workmanship, honest pricing, and a clean finish on every job — that's the RAS Services guarantee.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} started ${client.name} with a simple goal: to provide reliable, high-quality property maintenance at fair prices for homeowners across ${client.basedIn} and East Yorkshire.`,
    `With hands-on experience across gardening, roofing, brickwork, painting and general property maintenance, ${client.founderName} takes a practical, no-nonsense approach to every job. If it needs doing, he'll get it done — and done properly.`,
    `${client.founderName} believes in doing things right the first time. Every job starts with a proper assessment, a clear quote, and an honest conversation about what needs to be done.`,
    `Under ${client.founderName}'s hands-on leadership, ${client.name} has earned a 5-star reputation on both Google and MyBuilder, with customers returning again and again for their property maintenance needs.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to provide professional, reliable property maintenance that homeowners can depend on. We believe every home deserves to be well-maintained — inside and out.`,
    "We approach every job with the same attention to detail, whether it's a garden clearance, a roof repair or a full exterior repaint. Our customers trust us because we deliver what we promise.",
    `As a local ${client.basedIn} business, we're committed to building lasting relationships with our customers. We're not a faceless company — when you call RAS Services, you get ${client.founderName}.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
