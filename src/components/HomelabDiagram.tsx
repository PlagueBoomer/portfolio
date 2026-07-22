"use client";

import { HomelabNode } from "@/data/homelab";

function getNodeStyle(type: HomelabNode["type"]) {
  switch (type) {
    case "network": return "bg-blue-500/10 border-blue-500/30 text-blue-400";
    case "gateway": return "bg-green-500/10 border-green-500/30 text-green-400";
    case "hypervisor": return "bg-purple-500/10 border-purple-500/30 text-purple-400";
    case "service": return "bg-surface-light border-border text-text-primary";
  }
}

export default function HomelabDiagram({ topology }: { topology: HomelabNode[] }) {
  const internet = topology.find((n) => n.id === "internet");
  const adguard = topology.find((n) => n.id === "adguard");
  const proxmox = topology.find((n) => n.id === "proxmox");
  const services = topology.filter((n) => n.type === "service");

  return (
    <div className="glass-card p-6 md:p-10">
      <div className="flex flex-col items-center gap-0">
        {/* Internet */}
        {internet && (
          <>
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm ${getNodeStyle(internet.type)}`}>
              {internet.label}
            </div>
            <div className="w-px h-8 bg-border" />
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-border -mt-1 mb-1">
              <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
            </svg>
          </>
        )}

        {/* AdGuard */}
        {adguard && (
          <>
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm ${getNodeStyle(adguard.type)}`}>
              {adguard.label}
            </div>
            <div className="w-px h-8 bg-border" />
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-border -mt-1 mb-1">
              <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
            </svg>
          </>
        )}

        {/* Proxmox */}
        {proxmox && (
          <>
            <div className={`flex items-center gap-2 px-5 py-3 rounded-lg border font-semibold text-sm ${getNodeStyle(proxmox.type)}`}>
              {proxmox.label}
            </div>
            <div className="w-px h-8 bg-border" />
          </>
        )}

        {/* Services */}
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border w-[80%]" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-8">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center">
                <div className="w-px h-4 bg-border -mt-4 mb-2" />
                <div className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-lg border text-xs font-medium text-center w-full ${getNodeStyle(service.type)}`}>
                  <span className="mt-1">{service.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {([
          { type: "network" as const, label: "Network" },
          { type: "gateway" as const, label: "Gateway" },
          { type: "hypervisor" as const, label: "Hypervisor" },
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
