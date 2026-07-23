export const translations: Record<string, string> = {
  // Nawigacja
  "nav.home": "Start",
  "nav.projects": "Projekty",
  "nav.homelab": "Homelab",
  "nav.cv": "CV",
  "nav.contact": "Kontakt",

  // Hero
  "hero.greeting": "Cześć, jestem",
  "hero.description":
    "Ponad 3 lata w IT — administrowanie urządzeniami, zarządzanie tożsamością i samodzielna obsługa infrastruktury biurowej. Prywatnie pasjonat self-hostingu, open source i budowania własnych rozwiązań.",

  // O mnie
  "about.title": "O mnie",
  "about.subtitle": "Kim jestem i czym się zajmuję.",
  "about.skills.title": "Technologie i narzędzia",
  "about.p1":
    "Jestem specjalistą IT z ponad 3-letnim doświadczeniem w administrowaniu urządzeniami końcowymi (Windows, macOS, Linux) oraz zarządzaniu tożsamością w środowiskach chmurowych i hybrydowych. W codziennej pracy sprawnie posługuję się systemami klasy MDM (Intune, Jamf Pro) oraz administruję kontami i uprawnieniami w środowiskach Active Directory i Okta.",
  "about.p2":
    "Posiadam doświadczenie zarówno w masowych wdrożeniach sprzętu, jak i w samodzielnym prowadzeniu kompleksowego wsparcia IT dla całego biura. W Xperi byłem jedyną osobą odpowiedzialną za infrastrukturę IT biura ~200 pracowników.",
  "about.p3":
    "Prywatnie jestem pasjonatem rozwiązań Open Source. Prowadzę własny homelab na Proxmoxie, self-hostuję co się da i buduję narzędzia rozwiązujące realne problemy. Aktywnie rozwijam kompetencje administracyjne i sieciowe, realizując zaawansowane projekty we własnym środowisku testowym.",

  // Doświadczenie
  "experience.title": "Doświadczenie",
  "experience.subtitle": "Moja ścieżka zawodowa.",

  // Projekty
  "projects.title": "Projekty",
  "projects.subtitle": "Nad czym pracuję.",
  "projects.viewAll": "Zobacz wszystkie projekty",
  "projects.page.title": "Projekty",
  "projects.page.subtitle":
    "Rzeczy które buduję, utrzymuję i z którymi eksperymentuję. Od narzędzi AI po infrastrukturę self-hosted.",

  // Kontakt
  "contact.title": "Kontakt",
  "contact.subtitle": "Porozmawiajmy.",
  "contact.email.label": "Email",
  "contact.location.label": "Lokalizacja",
  "contact.location.value": "Warszawa",
  "contact.remote": "Otwarty na pracę zdalną",
  "contact.cta": "Napisz do mnie",

  // Homelab
  "homelab.title": "Homelab",
  "homelab.description":
    "Własna infrastruktura self-hosted zbudowana na Proxmox VE — 17+ kontenerów LXC, 25+ usług i zautomatyzowane cotygodniowe backupy. Wszystko dostępne przez lokalny DNS (25+ domen *.home.arpa).",
  "homelab.architecture": "Architektura sieci",
  "homelab.services": "Usługi",
  "homelab.backup.title": "Automatyczny system backupów",
  "homelab.backup.description":
    "W każdą niedzielę w nocy smart plug Philips Hue automatycznie uruchamia Proxmox Backup Server, który wykonuje pełny backup wszystkich kontenerów i VM, a następnie bezpiecznie się wyłącza. Całość w pełni zautomatyzowana — zero ręcznej interwencji.",
  "homelab.hardware": "Sprzęt i podejście",
  "homelab.infrastructure": "Infrastruktura",
  "homelab.philosophy": "Podejście",

  // CV
  "cv.title": "Curriculum Vitae",
  "cv.updated": "Wersja online \u2022 Aktualizacja 2025",
  "cv.download.en": "Pobierz EN",
  "cv.download.pl": "Pobierz PL",
  "cv.summary": "Podsumowanie",
  "cv.goal": "Cel zawodowy",
  "cv.goal.1": "Rozwijanie umiejętności w administrowaniu systemami i wsparciu technicznym, w celu zwiększenia efektywności infrastruktury IT.",
  "cv.goal.2": "Wdrażanie nowych rozwiązań i usprawnianie procesów wsparcia technicznego, aby poprawić satysfakcję i produktywność użytkowników.",
  "cv.experience": "Doświadczenie zawodowe",
  "cv.skills": "Umiejętności i narzędzia",
  "cv.education": "Wykształcenie",
  "cv.languages": "Języki obce",
  "cv.links": "Linki",

  // Motyw
  "theme.dark": "Ciemny",
  "theme.light": "Jasny",

  // Stopka
  "footer.built": "Zbudowane w Next.js i Tailwind CSS.",

  // Statystyki homelabu
  "stats.containers": "Kontenery",
  "stats.services": "Usługi",
  "stats.domains": "Lokalne domeny",
  "stats.backup": "Backup",
  "stats.weekly": "Cotygodniowy",

  // Kategorie usług
  "cat.core": "Infrastruktura podstawowa",
  "cat.networking": "Sieć i DNS",
  "cat.media": "Media i rozrywka",
  "cat.monitoring": "Monitoring",
  "cat.backup": "Backup",
  "cat.productivity": "Narzędzia i produktywność",

  // Homelab - dodatkowe
  "homelab.infra.proxmox": "Proxmox VE (hiperwizor typu 1)",
  "homelab.infra.containers": "17+ kontenerów LXC",
  "homelab.infra.nginx": "Nginx Proxy Manager — 25+ domen",
  "homelab.infra.adguard": "AdGuard Home — DNS i blokowanie reklam",
  "homelab.infra.pbs": "PBS — automatyczne cotygodniowe backupy",
  "homelab.infra.nas": "NAS — media i przechowywanie zdjęć",
  "homelab.infra.hue": "Automatyzacja smart plug Philips Hue",
  "homelab.phil.selfhost": "Self-host wszystkiego co się da",
  "homelab.phil.privacy": "Prywatność przede wszystkim",
  "homelab.phil.backup": "Zautomatyzowane backupy (zero ręcznych kroków)",
  "homelab.phil.monitor": "Monitorowanie wszystkiego",
  "homelab.phil.docs": "Dokumentowanie wszystkiego (Wiki.js)",
  "homelab.phil.dns": "Lokalny DNS dla czytelnych adresów",
  "homelab.phil.energy": "Oszczędność energii (PBS działa tylko gdy potrzeba)",
};
