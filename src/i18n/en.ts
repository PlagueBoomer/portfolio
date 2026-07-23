export const translations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.homelab": "Homelab",
  "nav.cv": "CV",
  "nav.contact": "Contact",

  // Hero
  "hero.greeting": "Hi, my name is",
  "hero.description":
    "3+ years managing end-user devices, identity systems, and office infrastructure. Passionate about open-source, self-hosting, and building things from the ground up.",

  // About
  "about.title": "About Me",
  "about.subtitle": "Who I am and what I do.",
  "about.skills.title": "Technologies & Tools",
  "about.p1":
    "IT Support Specialist with over 3 years of experience in end-user device management (Windows, macOS, Linux) and identity administration across cloud and hybrid environments. Working daily with MDM solutions (Intune, Jamf Pro) and managing accounts and access in Active Directory and Okta.",
  "about.p2":
    "Experienced in both large-scale hardware deployments and independently delivering end-to-end IT support for entire office environments. Previously the sole IT engineer responsible for a 200-person office at Xperi Inc.",
  "about.p3":
    "Outside of work, I run a homelab built on Proxmox, self-host everything I can, and build tools that solve real problems. Currently expanding my skills in system administration and networking through advanced hands-on projects. Passionate about open-source technologies.",

  // Experience
  "experience.title": "Experience",
  "experience.subtitle": "Where I've worked.",

  // Projects
  "projects.title": "Projects",
  "projects.subtitle": "What I'm building.",
  "projects.viewAll": "View All Projects",
  "projects.page.title": "Projects",
  "projects.page.subtitle":
    "Things I'm building, maintaining, and experimenting with. From AI-powered tools to self-hosted infrastructure.",

  // Contact
  "contact.title": "Contact",
  "contact.subtitle": "Let's get in touch.",
  "contact.email.label": "Email",
  "contact.location.label": "Location",
  "contact.location.value": "Warsaw, Poland",
  "contact.remote": "Open for remote work",
  "contact.cta": "Send me a message",

  // Homelab
  "homelab.title": "Homelab",
  "homelab.description":
    "Self-hosted infrastructure built on Proxmox VE with 17+ LXC containers, 25+ services, and automated weekly backups. Everything accessible via local DNS (25+ local *.home.arpa domains).",
  "homelab.architecture": "Network Architecture",
  "homelab.services": "Services",
  "homelab.backup.title": "Automated Backup System",
  "homelab.backup.description":
    "Every Sunday night, the Proxmox Backup Server is automatically powered on via a Philips Hue smart plug, performs a full backup of all containers and VMs, then gracefully shuts down. Fully automated, zero manual intervention.",
  "homelab.hardware": "Hardware & Philosophy",
  "homelab.infrastructure": "Infrastructure",
  "homelab.philosophy": "Philosophy",

  // CV
  "cv.title": "Curriculum Vitae",
  "cv.updated": "Online version \u2022 Last updated 2025",
  "cv.download.en": "Download EN",
  "cv.download.pl": "Download PL",
  "cv.summary": "Summary",
  "cv.goal": "Career Goal",
  "cv.goal.1": "Develop skills in systems administration and technical support to improve the efficiency of IT infrastructure.",
  "cv.goal.2": "Implement new solutions and streamline support processes to improve user satisfaction and productivity.",
  "cv.experience": "Professional Experience",
  "cv.skills": "Skills & Tools",
  "cv.education": "Education",
  "cv.languages": "Languages",
  "cv.links": "Links",

  // Theme
  "theme.dark": "Dark",
  "theme.light": "Light",

  // Footer
  "footer.built": "Built with Next.js & Tailwind CSS.",

  // Stats labels (homelab)
  "stats.containers": "Containers",
  "stats.services": "Services",
  "stats.domains": "Local Domains",
  "stats.backup": "Backup",
  "stats.weekly": "Weekly",

  // Service categories
  "cat.core": "Core Infrastructure",
  "cat.networking": "Networking & DNS",
  "cat.media": "Media & Entertainment",
  "cat.monitoring": "Monitoring & Observability",
  "cat.backup": "Backup",
  "cat.productivity": "Productivity & Tools",

  // Homelab - extra
  "homelab.infra.proxmox": "Proxmox VE (Type 1 Hypervisor)",
  "homelab.infra.containers": "17+ LXC containers",
  "homelab.infra.nginx": "Nginx Proxy Manager for 25+ domains",
  "homelab.infra.adguard": "AdGuard Home for DNS & ad blocking",
  "homelab.infra.pbs": "PBS for automated weekly backups",
  "homelab.infra.nas": "NAS for media & photo storage",
  "homelab.infra.hue": "Philips Hue smart plug automation",
  "homelab.phil.selfhost": "Self-host everything possible",
  "homelab.phil.privacy": "Privacy-first approach",
  "homelab.phil.backup": "Automated backups (zero manual steps)",
  "homelab.phil.monitor": "Monitor everything",
  "homelab.phil.docs": "Document everything (Wiki.js)",
  "homelab.phil.dns": "Local DNS for clean URLs",
  "homelab.phil.energy": "Energy-efficient (PBS only runs when needed)",
};
