"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="section-container">
      <h1 className="section-title">{t("contact.title")}</h1>
      <p className="section-subtitle">{t("contact.subtitle")}</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {/* Email */}
        <a
          href="mailto:bledowskimaciej@gmail.com"
          className="glass-card flex items-start gap-4 group"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="text-sm text-text-secondary">{t("contact.email.label")}</p>
            <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
              bledowskimaciej@gmail.com
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/maciejbledowski"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-start gap-4 group"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-sm text-text-secondary">LinkedIn</p>
            <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
              linkedin.com/in/maciejbledowski
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PlagueBoomer"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-start gap-4 group"
        >
          <span className="text-2xl">🐙</span>
          <div>
            <p className="text-sm text-text-secondary">GitHub</p>
            <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
              github.com/PlagueBoomer
            </p>
          </div>
        </a>

        {/* Location */}
        <div className="glass-card flex items-start gap-4">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-sm text-text-secondary">{t("contact.location.label")}</p>
            <p className="text-text-primary font-medium">{t("contact.location.value")}</p>
          </div>
        </div>
      </div>

      {/* Remote work badge */}
      <div className="mt-8">
        <span className="status-badge status-active">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t("contact.remote")}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <a href="mailto:bledowskimaciej@gmail.com" className="btn-primary">
          {t("contact.cta")}
        </a>
      </div>
    </section>
  );
}
