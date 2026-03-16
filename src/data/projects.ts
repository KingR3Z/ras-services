export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "bransholme-garden",
    title: "garden clearance & tidy",
    description:
      "An overgrown back garden cleared, levelled and brought back to life. Full waste removal, new lawn laid and borders replanted for a clean, usable outdoor space.",
    location: "Bransholme, Hull",
    designTime: "1 day",
    installationTime: "3 days",
    image: "/images/projects/project-01.jpg",
  },
  {
    id: "sutton-grp-roof",
    title: "GRP flat roof",
    description:
      "Old felt flat roof stripped and replaced with a Res Tec GRP fibreglass system. Watertight finish with a 20-year guarantee. Clean, professional installation.",
    location: "Sutton, Hull",
    designTime: "1 day",
    installationTime: "2 days",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: "anlaby-repointing",
    title: "brickwork repointing",
    description:
      "Full repointing of a semi-detached property front elevation. Old mortar raked out and replaced with colour-matched pointing. Finished to a high standard.",
    location: "Anlaby, Hull",
    designTime: "1 day",
    installationTime: "4 days",
    image: "/images/projects/project-03.jpg",
  },
  {
    id: "cottingham-fascia",
    title: "fascia & soffit replacement",
    description:
      "Rotten timber fascia and soffits removed and replaced with maintenance-free UPVC. New guttering and downpipes fitted throughout. A clean, lasting finish.",
    location: "Cottingham",
    designTime: "1 day",
    installationTime: "2 days",
    image: "/images/projects/project-04.jpg",
  },
  {
    id: "kingswood-garden",
    title: "full garden landscaping",
    description:
      "Complete back garden transformation including new patio, raised beds, artificial lawn and timber fencing. Designed and built to give the family a low-maintenance outdoor living space.",
    location: "Kingswood, Hull",
    designTime: "2 days",
    installationTime: "5 days",
    image: "/images/projects/project-05.jpg",
  },
  {
    id: "hessle-painting",
    title: "exterior painting",
    description:
      "Full exterior repaint of a three-bedroom detached house. All woodwork prepped, primed and finished with quality exterior paint. Neat, clean work throughout.",
    location: "Hessle",
    designTime: "1 day",
    installationTime: "3 days",
    image: "/images/projects/project-06.jpg",
  },
  {
    id: "beverley-roof-repair",
    title: "roof tile repairs",
    description:
      "Damaged and slipped roof tiles replaced across the main roof and rear extension. Ridge tiles rebedded and repointed. Leak-free and secure.",
    location: "Beverley",
    designTime: "1 day",
    installationTime: "2 days",
    image: "/images/projects/project-07.jpg",
  },
  {
    id: "bilton-chimney",
    title: "chimney repointing",
    description:
      "Full chimney stack repointed and flashing replaced. Scaffolding erected for safe access. Old mortar removed and replaced with a neat, weather-resistant finish.",
    location: "Bilton, Hull",
    designTime: "1 day",
    installationTime: "2 days",
    image: "/images/projects/project-08.jpg",
  },
];
