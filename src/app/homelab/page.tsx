import { Metadata } from "next";
import { homelabServices, networkTopology, backupSchedule, infrastructureStats } from "@/data/homelab";
import HomelabDiagram from "@/components/HomelabDiagram";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Homelab | Maciej B\u0142\u0119dowski",
  description: "Self-hosted infrastructure: 17+ LXC containers on Proxmox, automated backups, 25+ services.",
};

export default function HomelabPage() {
  const categories = [
    { key: "core", label: "Core Infrastructure" },
    { key: "networking", label: "Networking & DNS" },
    { key: "media", label: "Media & Entertainment" },
    { key: "monitoring", label: "Monitoring & Observability" },
    { key: "backup", label: "Backup" },
    { key: "productivity", label: "Productivity & Tools" },
  ] as const;

  return (
    <div className="section-container">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Homelab</h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Self-hosted infrastructure built on Proxmox VE with {infrastructureStats.containers} LXC containers,
          {" "}{infrastructureStats.services} services, and automated weekly backups.
          Everything accessible via local DNS ({infrastructureStats.domains}).
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Containers", value: infrastructureStats.containers },
          { label: "Services", value: infrastructureStats.services },
          { label: "Local Domains", value: "25+" },
          { label: "Backup", value: "Weekly" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card text-center py-4">
            <p className="text-accent font-bold text-2xl">{stat.value}</p>
            <p className="text-text-secondary text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Network Topology */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Network Architecture</h2>
        <HomelabDiagram topology={networkTopology} />
      </section>

      {/* Services by Category */}
      <section className="mb-16">
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

      {/* Backup System */}
      <section className="border-t border-border pt-12 mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Automated Backup System</h2>
        <p className="text-text-secondary mb-6 max-w-2xl">
          Every Sunday night, the Proxmox Backup Server is automatically powered on via a Philips Hue smart plug,
          performs a full backup of all containers and VMs, then gracefully shuts down. Fully automated, zero manual intervention.
        </p>
        <div className="glass-card">
          <div className="space-y-4">
            {backupSchedule.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap min-w-[50px]">{item.time}</span>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="border-t border-border pt-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Hardware & Philosophy</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">Infrastructure</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Proxmox VE (Type 1 Hypervisor)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>17+ LXC containers</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Nginx Proxy Manager for 25+ domains</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>AdGuard Home for DNS &amp; ad blocking</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>PBS for automated weekly backups</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>NAS for media &amp; photo storage</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Philips Hue smart plug automation</li>
            </ul>
          </div>
          <div className="glass-card">
            <h3 className="text-text-primary font-medium mb-3">Philosophy</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Self-host everything possible</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Privacy-first approach</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Automated backups (zero manual steps)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Monitor everything</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Document everything (Wiki.js)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Local DNS for clean URLs</li>
              <li className="flex items-center gap-2"><span className="text-accent font-mono text-xs">&#9656;</span>Energy-efficient (PBS only runs when needed)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
