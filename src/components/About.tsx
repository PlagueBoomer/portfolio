"use client";

import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <h2 className="section-title">
          <span className="font-mono text-accent text-lg mr-2">01.</span>
          {t("about.title")}
        </h2>
        <p className="section-subtitle">{t("about.subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-text-secondary leading-relaxed">{t("about.p1")}</p>
            <p className="text-text-secondary leading-relaxed">{t("about.p2")}</p>
            <p className="text-text-secondary leading-relaxed">{t("about.p3")}</p>
          </div>

          <div>
            <h3 className="text-text-primary font-medium mb-4">
              {t("about.skills.title")}
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
