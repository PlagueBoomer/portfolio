export interface HomelabService {
  name: string;
  description: string;
  category: "networking" | "media" | "monitoring" | "backup" | "productivity";
  icon: string;
}

export interface HomelabNode {
  id: string;
  label: string;
  type: "gateway" | "hypervisor" | "service" | "network";
  children?: string[];
}

export const homelabServices: HomelabService[] = [
  {
    name: "AdGuard Home",
    description:
      "Network-wide ad blocking and DNS filtering. First line of defense for all devices on the network.",
    category: "networking",
    icon: "shield",
  },
  {
    name: "Proxmox VE",
    description:
      "Type 1 hypervisor managing all VMs and containers. The backbone of the entire homelab infrastructure.",
    category: "networking",
    icon: "server",
  },
  {
    name: "Jellyfin",
    description:
      "Self-hosted media streaming server. Movies, TV shows, and music accessible from any device.",
    category: "media",
    icon: "play",
  },
  {
    name: "Immich",
    description:
      "Self-hosted photo and video backup solution. Google Photos alternative with AI-powered features.",
    category: "media",
    icon: "image",
  },
  {
    name: "Proxmox Backup Server",
    description:
      "Centralized backup solution for all VMs and containers. Incremental, deduplicated backups.",
    category: "backup",
    icon: "database",
  },
  {
    name: "Uptime Kuma",
    description:
      "Self-hosted monitoring tool. Tracks uptime of all services with notifications on downtime.",
    category: "monitoring",
    icon: "activity",
  },
  {
    name: "Beszel",
    description:
      "Lightweight system monitoring. CPU, RAM, disk, and network metrics for all nodes.",
    category: "monitoring",
    icon: "bar-chart",
  },
];

export const networkTopology: HomelabNode[] = [
  {
    id: "internet",
    label: "Internet",
    type: "network",
    children: ["adguard"],
  },
  {
    id: "adguard",
    label: "AdGuard Home",
    type: "gateway",
    children: ["proxmox"],
  },
  {
    id: "proxmox",
    label: "Proxmox VE",
    type: "hypervisor",
    children: ["jellyfin", "immich", "pbs", "uptime-kuma", "beszel"],
  },
  { id: "jellyfin", label: "Jellyfin", type: "service" },
  { id: "immich", label: "Immich", type: "service" },
  { id: "pbs", label: "PBS", type: "service" },
  { id: "uptime-kuma", label: "Uptime Kuma", type: "service" },
  { id: "beszel", label: "Beszel", type: "service" },
];
