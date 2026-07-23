export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  status: "In Development" | "Active" | "Planned" | "Completed";
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "HireMate",
    slug: "hiremate",
    description:
      "AI-powered job search assistant with local LLM integration for analyzing job offers and managing applications.",
    longDescription:
      "HireMate is a personal AI assistant designed to streamline the job search process. It uses a local language model to analyze job postings, match them against your skills and preferences, and help manage the entire application pipeline. Built with privacy in mind - all processing happens locally.",
    status: "In Development",
    technologies: ["Python", "Local LLM", "FastAPI", "SQLite", "React"],
    links: {
      github: "https://github.com/PlagueBoomer/hiremate-showcase",
    },
    featured: true,
  },
  {
    name: "Homelab Infrastructure",
    slug: "homelab",
    description:
      "Self-hosted infrastructure running on Proxmox with containerized services for media, backups, monitoring, and more.",
    longDescription:
      "A complete self-hosted ecosystem running on Proxmox VE. Includes containerized services for media streaming (Jellyfin), photo management (Immich), backup solutions (PBS), uptime monitoring (Uptime Kuma), and system monitoring (Beszel). Protected by AdGuard Home for network-wide ad blocking and DNS filtering.",
    status: "Active",
    technologies: [
      "Proxmox",
      "Docker",
      "Linux",
      "Networking",
      "AdGuard",
      "Jellyfin",
      "Immich",
    ],
    links: {
      live: "/homelab",
    },
    featured: true,
  },
  {
    name: "Portfolio Website",
    slug: "portfolio",
    description:
      "This website. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.",
    longDescription:
      "Personal portfolio and knowledge base built as a modern web application. Features a dark minimalist design, responsive layout, and serves as a central hub for projects, experience, and technical documentation.",
    status: "Active",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      github: "https://github.com/PlagueBoomer/portfolio",
      live: "https://maciejbledowski.pl",
    },
    featured: false,
  },
];
