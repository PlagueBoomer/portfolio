import { HomelabService } from "@/data/homelab";

function getCategoryColor(category: HomelabService["category"]) {
  switch (category) {
    case "networking": return "text-green-400";
    case "media": return "text-blue-400";
    case "monitoring": return "text-yellow-400";
    case "backup": return "text-purple-400";
    case "productivity": return "text-orange-400";
  }
}

function getServiceIcon(icon: string) {
  const props = { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" };
  switch (icon) {
    case "shield": return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "server": return <svg {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    case "play": return <svg {...props}><polygon points="5 3 19 12 5 21 5 3"/></svg>;
    case "image": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
    case "database": return <svg {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    case "activity": return <svg {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
    case "bar-chart": return <svg {...props}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>;
  }
}

export default function ServiceCard({ service }: { service: HomelabService }) {
  return (
    <div className="glass-card group">
      <div className={`mb-3 ${getCategoryColor(service.category)}`}>
        {getServiceIcon(service.icon)}
      </div>
      <h4 className="text-text-primary font-medium text-sm mb-1 group-hover:text-accent transition-colors">
        {service.name}
      </h4>
      <p className="text-text-secondary text-xs leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
