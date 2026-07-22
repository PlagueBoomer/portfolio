import { experiences } from "@/data/experience";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">02.</span>
          Experience
        </h2>
        <p className="section-subtitle">Where I&apos;ve worked.</p>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-1.5 w-3 h-3 -translate-x-[5px] rounded-full bg-accent border-2 border-background" />

                <div className="glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-text-primary font-semibold text-lg">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-text-secondary text-sm font-mono whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
