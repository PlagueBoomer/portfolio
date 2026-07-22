import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">01.</span>
          About Me
        </h2>
        <p className="section-subtitle">Who I am and what I do.</p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-text-primary font-medium mb-4">
              Technologies &amp; Tools
            </h3>
            <ul className="space-y-2">
              {personalInfo.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-text-secondary text-sm">
                  <span className="text-accent font-mono text-xs">&#9656;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
