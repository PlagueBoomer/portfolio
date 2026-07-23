"use client";

import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";

export default function CVPage() {
  const { t } = useLanguage();

  return (
    <div className="section-container">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{t("cv.title")}</h1>
          <p className="text-text-secondary">{t("cv.updated")}</p>
        </div>
        <div className="flex flex-wrap gap-3 self-start">
          <a href="/CV_MaciejBledowski_EN.pdf" download className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t("cv.download.en")}
          </a>
          <a href="/CV_MaciejBledowski_PL.pdf" download className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t("cv.download.pl")}
          </a>
        </div>
      </div>

      <div className="max-w-3xl">
        {/* Personal Info */}
        <section className="mb-12">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-1">{personalInfo.displayName}</h2>
            <p className="text-accent font-medium text-lg mb-4">{personalInfo.role}</p>
            <div className="flex flex-wrap gap-4 text-text-secondary text-sm">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {t("contact.location.value")}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
                </svg>
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                {t("contact.remote")}
              </span>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">01.</span>{t("cv.summary")}
          </h3>
          <p className="text-text-secondary leading-relaxed">{t("about.p1")}</p>
        </section>

        {/* Career Goal */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">02.</span>{t("cv.goal")}
          </h3>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent font-mono text-xs mt-1">&#9656;</span>
              {t("cv.goal.1")}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-mono text-xs mt-1">&#9656;</span>
              {t("cv.goal.2")}
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">03.</span>{t("cv.experience")}
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="glass-card">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="text-text-primary font-medium">{exp.role}</h4>
                    <p className="text-accent text-sm">{exp.company}</p>
                  </div>
                  <span className="text-text-secondary text-sm font-mono">{exp.period}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">04.</span>{t("cv.skills")}
          </h3>
          <div className="glass-card">
            <div className="flex flex-wrap gap-2">
              {personalInfo.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">05.</span>{t("cv.education")}
          </h3>
          <div className="glass-card">
            <h4 className="text-text-primary font-medium">{personalInfo.education.school}</h4>
            <p className="text-text-secondary text-sm mt-1">
              {personalInfo.education.field} &bull; {personalInfo.education.specialization}
            </p>
            <p className="text-text-secondary text-sm font-mono mt-1">{personalInfo.education.period}</p>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">06.</span>{t("cv.languages")}
          </h3>
          <div className="glass-card">
            <div className="flex flex-wrap gap-4">
              {personalInfo.languages.map((lang) => (
                <span key={lang.name} className="text-text-secondary text-sm">
                  <span className="text-text-primary font-medium">{lang.name}</span> — {lang.level}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section>
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-accent font-mono text-sm">07.</span>{t("cv.links")}
          </h3>
          <div className="glass-card">
            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors text-sm">GitHub &rarr;</a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors text-sm">LinkedIn &rarr;</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
