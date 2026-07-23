import { HomelabService } from "@/data/homelab";

function getCategoryColor(category: HomelabService["category"]) {
  switch (category) {
    case "core": return "text-purple-400";
    case "networking": return "text-green-400";
    case "media": return "text-blue-400";
    case "monitoring": return "text-yellow-400";
    case "backup": return "text-orange-400";
    case "productivity": return "text-cyan-400";
  }
}

export default function ServiceCard({ service }: { service: HomelabService }) {
  return (
    <div className="glass-card group">
      <div className={`mb-3 ${getCategoryColor(service.category)}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h4 className="text-text-primary font-medium text-sm mb-1
        group-hover:text-accent transition-colors">
        {service.name}
      </h4>
      <p className="text-text-secondary text-xs leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
