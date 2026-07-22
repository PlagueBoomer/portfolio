import { Metadata } from "next";
import { homelabServices, networkTopology } from "@/data/homelab";
import HomelabDiagram from "@/components/HomelabDiagram";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Homelab | Maciej B\u0142\u0119dowski",
  description: "Self-hosted infrastructure running on Proxmox.",
};

export default function HomelabPage() {
  const categories = [
    { key: "networking", label: "Networking & Core" },
    { key: "media", label: "Media & Storage" },
    { key: "monitoring", label: "Monitoring" },
    { key: "backup", label: "Backup" },
  ] as const;

  return (
    <div className="section-container">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Homelab</h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Self-hosted infrastructure built on Proxmox VE. Running containerized
          services for media, backups, monitoring, and network management.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Network Topology</h2>
        <HomelabDiagram topology={networkTopology} />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-8">Services</h2>
        {categories.map(({ key, label }) => {
          const services = homelabServices.filter((s) => s.category === key);
          if (services.length === 0) return null;
          return (
            <div key={key} className="mb-12">
              <h3 className="text-text-secondary font-mono text-sm uppercase tracking-wider mb-4">{label}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-t border-border pt-12 mt-8">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Hardware & Stack</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">Infrastructure</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Proxmox VE (Type 1 Hypervisor)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Docker containers on LXC</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>AdGuard Home for DNS</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>PBS for incremental backups</li>
            </ul>
          </div>
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">Philosophy</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Self-host everything possible</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Privacy-first approach</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Automated backups</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Monitor everything</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
