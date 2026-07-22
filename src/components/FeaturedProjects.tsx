import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">03.</span>
          Projects
        </h2>
        <p className="section-subtitle">What I&apos;m building.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-outline">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
