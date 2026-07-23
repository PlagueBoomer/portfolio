export interface HomelabService {
  name: string;
  description: string;
  category: "core" | "media" | "monitoring" | "backup" | "productivity" | "networking";
  icon: string;
}

export interface HomelabNode {
  id: string;
  label: string;
  type: "gateway" | "hypervisor" | "service" | "network" | "storage" | "router";
  children?: string[];
}

export const homelabServices: HomelabService[] = [
  // Core / Networking
  {
    name: "AdGuard Home",
    description: "Network-wide DNS server with ad blocking and DNS rewrites for all *.home.arpa domains.",
    category: "networking",
    icon: "shield",
  },
  {
    name: "Nginx Proxy Manager",
    description: "Reverse proxy handling 25+ local domains, routing traffic from AdGuard to the correct LXC container.",
    category: "networking",
    icon: "globe",
  },
  {
    name: "Proxmox VE",
    description: "Type 1 hypervisor managing 17+ LXC containers and VMs. The backbone of the entire infrastructure.",
    category: "core",
    icon: "server",
  },
  {
    name: "Proxmox Backup Server",
    description: "Automated weekly backups of all LXC containers, VMs, and host config. Runs on a schedule via smart plug automation.",
    category: "backup",
    icon: "database",
  },
  // Media
  {
    name: "Jellyfin",
    description: "Self-hosted media streaming for movies and TV shows with Samba share for media files.",
    category: "media",
    icon: "play",
  },
  {
    name: "Immich",
    description: "Photo and video management with face recognition and ML. External libraries mounted from NAS.",
    category: "media",
    icon: "image",
  },
  {
    name: "Navidrome",
    description: "Music streaming server with Subsonic API compatibility.",
    category: "media",
    icon: "music",
  },
  {
    name: "Media Stack",
    description: "Radarr, Sonarr, Prowlarr, Jellyseerr, Bazarr, qBittorrent — automated media acquisition pipeline.",
    category: "media",
    icon: "film",
  },
  // Monitoring
  {
    name: "Uptime Kuma",
    description: "Service availability monitoring with notifications on downtime for all homelab services.",
    category: "monitoring",
    icon: "activity",
  },
  {
    name: "Pulse",
    description: "Infrastructure monitoring for Proxmox host, LXC containers, VMs, storage, and temperatures.",
    category: "monitoring",
    icon: "bar-chart",
  },
  {
    name: "Beszel",
    description: "Lightweight system resource monitoring — CPU, RAM, disk, and network metrics for all nodes.",
    category: "monitoring",
    icon: "bar-chart",
  },
  {
    name: "Scrutiny",
    description: "SMART disk health monitoring — tracks drive condition across all storage devices.",
    category: "monitoring",
    icon: "hard-drive",
  },
  // Productivity
  {
    name: "Paperless-ngx",
    description: "Document management system with OCR. Digitizing and archiving all important documents.",
    category: "productivity",
    icon: "file-text",
  },
  {
    name: "Wiki.js",
    description: "Self-hosted knowledge base and documentation for the entire homelab setup.",
    category: "productivity",
    icon: "book",
  },
  {
    name: "Vikunja",
    description: "Task management and TODO lists for projects and ideas.",
    category: "productivity",
    icon: "check-square",
  },
  {
    name: "Stirling PDF",
    description: "All-in-one PDF toolkit — merge, split, convert, compress, and manipulate PDF files.",
    category: "productivity",
    icon: "file",
  },
  {
    name: "ChangeDetection",
    description: "Monitors websites for changes and sends notifications — useful for job listings and deals.",
    category: "productivity",
    icon: "eye",
  },
  {
    name: "Homarr",
    description: "Homelab dashboard — central landing page with quick links to all services.",
    category: "productivity",
    icon: "layout",
  },
];

export const networkTopology: HomelabNode[] = [
  {
    id: "internet",
    label: "Internet",
    type: "network",
    children: ["router"],
  },
  {
    id: "router",
    label: "TP-Link Archer C6",
    type: "router",
    children: ["adguard"],
  },
  {
    id: "adguard",
    label: "AdGuard Home",
    type: "gateway",
    children: ["nginx"],
  },
  {
    id: "nginx",
    label: "Nginx Proxy Manager",
    type: "gateway",
    children: ["proxmox", "nas"],
  },
  {
    id: "proxmox",
    label: "Proxmox VE",
    type: "hypervisor",
    children: [
      "jellyfin",
      "immich",
      "media-stack",
      "music-stack",
      "uptime-kuma",
      "pulse",
      "beszel",
      "scrutiny",
      "paperless",
      "wikijs",
      "vikunja",
      "homarr",
      "stirling-pdf",
      "changedetection",
    ],
  },
  {
    id: "nas",
    label: "NAS",
    type: "storage",
  },
  { id: "jellyfin", label: "Jellyfin", type: "service" },
  { id: "immich", label: "Immich", type: "service" },
  { id: "media-stack", label: "Media Stack", type: "service" },
  { id: "music-stack", label: "Music Stack", type: "service" },
  { id: "uptime-kuma", label: "Uptime Kuma", type: "service" },
  { id: "pulse", label: "Pulse", type: "service" },
  { id: "beszel", label: "Beszel", type: "service" },
  { id: "scrutiny", label: "Scrutiny", type: "service" },
  { id: "paperless", label: "Paperless-ngx", type: "service" },
  { id: "wikijs", label: "Wiki.js", type: "service" },
  { id: "vikunja", label: "Vikunja", type: "service" },
  { id: "homarr", label: "Homarr", type: "service" },
  { id: "stirling-pdf", label: "Stirling PDF", type: "service" },
  { id: "changedetection", label: "ChangeDetection", type: "service" },
];

export const backupSchedule = [
  { time: "00:35", step: "Smart plug powers on PBS" },
  { time: "00:40", step: "BIOS auto-starts Proxmox Backup Server" },
  { time: "00:50", step: "Proxmox host config backup" },
  { time: "01:00", step: "Full backup of all LXC containers and VMs" },
  { time: "03:00", step: "PBS graceful shutdown via script" },
  { time: "03:15", step: "Smart plug cuts power to PBS" },
];

export const infrastructureStats = {
  containers: "17+",
  services: "25+",
  domains: "25+ local *.home.arpa",
  backupFrequency: "Weekly (Sunday night)",
  network: "192.168.1.0/24",
};
