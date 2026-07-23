"use client";

import { HomelabNode } from "@/data/homelab";

function getNodeStyle(type: HomelabNode["type"]) {
  switch (type) {
    case "network": return "bg-blue-500/10 border-blue-500/30 text-blue-400";
    case "router": return "bg-cyan-500/10 border-cyan-500/30 text-cyan-400";
    case "gateway": return "bg-green-500/10 border-green-500/30 text-green-400";
    case "hypervisor": return "bg-purple-500/10 border-purple-500/30 text-purple-400";
    case "storage": return "bg-orange-500/10 border-orange-500/30 text-orange-400";
    case "service": return "bg-surface-light border-border text-text-primary";
  }
}

export default function HomelabDiagram({ topology }: { topology: HomelabNode[] }) {
  const internet = topology.find((n) => n.id === "internet");
  const router = topology.find((n) => n.id === "router");
  const adguard = topology.find((n) => n.id === "adguard");
  const nginx = topology.find((n) => n.id === "nginx");
  const proxmox = topology.find((n) => n.id === "proxmox");
  const nas = topology.find((n) => n.id === "nas");
  const services = topology.filter((n) => n.type === "service");

  const topNodes = [internet, router, adguard, nginx].filter(Boolean) as HomelabNode[];

  return (
    <div className="glass-card p-6 md:p-10">
      <div className="flex flex-col items-center gap-0">
        {/* Top chain: Internet → Router → AdGuard → Nginx */}
        {topNodes.map((node, i) => (
          <div key={node.id} className="flex flex-col items-center">
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm ${getNodeStyle(node.type)}`}>
              {node.label}
            </div>
            {i < topNodes.length - 1 && (
              <>
                <div className="w-px h-6 bg-border" />
                <svg width="10" height="6" viewBox="0 0 10 6" className="text-border -mt-0.5 mb-0.5">
                  <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
                </svg>
              </>
            )}
          </div>
        ))}

        {/* Split to Proxmox and NAS */}
        <div className="w-px h-6 bg-border" />
        <div className="flex items-start gap-8 md:gap-16">
          {/* Proxmox branch */}
          <div className="flex flex-col items-center">
            <svg width="10" height="6" viewBox="0 0 10 6" className="text-border mb-1">
              <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
            </svg>
            {proxmox && (
              <div className={`flex items-center gap-2 px-5 py-3 rounded-lg border font-semibold text-sm ${getNodeStyle(proxmox.type)}`}>
                {proxmox.label}
              </div>
            )}
            <div className="w-px h-6 bg-border" />

            {/* Services grid */}
            <div className="relative w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {services.map((service) => (
                  <div key={service.id} className={`flex items-center justify-center px-2 py-2 rounded-lg border text-xs font-medium text-center ${getNodeStyle(service.type)}`}>
                    {service.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NAS branch */}
          {nas && (
            <div className="flex flex-col items-center">
              <svg width="10" height="6" viewBox="0 0 10 6" className="text-border mb-1">
                <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
              </svg>
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm ${getNodeStyle(nas.type)}`}>
                {nas.label}
              </div>
              <p className="text-text-secondary text-xs mt-2 text-center max-w-[100px]">Media, photos, user data</p>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {([
          { type: "network" as const, label: "Internet" },
          { type: "router" as const, label: "Router" },
          { type: "gateway" as const, label: "DNS / Proxy" },
          { type: "hypervisor" as const, label: "Hypervisor" },
          { type: "storage" as const, label: "Storage" },
          { type: "service" as const, label: "Service" },
        ]).map(({ type, label }) => (
          <div key={type} className="flex items-center gap-2 text-xs">
            <div className={`w-3 h-3 rounded border ${getNodeStyle(type)}`} />
            <span className="text-text-secondary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
