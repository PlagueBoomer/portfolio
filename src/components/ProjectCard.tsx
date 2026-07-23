import { Project } from "@/data/projects";

function getStatusClasses(status: Project["status"]) {
  switch (status) {
    case "Active": return "status-active";
    case "In Development": return "status-development";
    case "Planned": return "status-planned";
    default: return "status-active";
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span className={`status-badge ${getStatusClasses(project.status)}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {project.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label={`${project.name} on GitHub`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} {...(project.links.live.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })} className="text-text-secondary hover:text-accent transition-colors" aria-label={`${project.name} live site`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {project.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}
