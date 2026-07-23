export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "IT Support & Skills Development",
    period: "12/2025 - Present",
    description:
      "Delivering independent IT support for individual clients: hardware diagnostics and repair, peripheral device configuration (printers), and OS optimization. Expanding Linux administration skills and maintaining a home lab environment for advanced system configuration.",
    technologies: ["Linux", "Hardware Diagnostics", "Home Lab", "Networking"],
  },
  {
    company: "University of Warsaw / Warner Bros. Discovery",
    role: "Linux Systems Support & IT Projects",
    period: "09/2025 - 11/2025",
    description:
      "University of Warsaw: Technical support in a Linux-dominant academic environment (Ubuntu, Debian), including hardware and system diagnostics for researchers and engineers. Warner Bros. Discovery: Ad-hoc IT intervention including infrastructure support and hardware inventory.",
    technologies: ["Linux", "Ubuntu", "Debian", "Hardware Diagnostics"],
  },
  {
    company: "Xperi Inc.",
    role: "IT Support Engineer",
    period: "09/2024 - 05/2025",
    description:
      "The only IT support engineer for the Warsaw office (~200 employees). Full responsibility for on-site IT support including video conferencing systems. Handled 20+ daily tickets in ServiceNow. Managed laptop fleet (Windows, macOS, Linux) via Intune and Jamf Pro. Administered accounts in Okta, Active Directory, and AWS. Provided VIP support for senior leadership.",
    technologies: ["Intune", "Jamf Pro", "Okta", "Active Directory", "ServiceNow", "AWS"],
  },
  {
    company: "Euvic IT / KPMG / LUX MED / Coty",
    role: "Short-term IT Projects & Support",
    period: "02/2023 - 09/2024",
    description:
      "Euvic IT: Prepared and configured 100+ Windows workstations for corporate users. KPMG: Hardware diagnostics, ITSM tickets, AD administration, VIP support. LUX MED: Remote IT support, ticketing systems, app configuration. Coty: Global support in English, user account management.",
    technologies: ["Active Directory", "ITSM", "Windows", "VIP Support"],
  },
  {
    company: "ASUS Poland Sp. z o.o.",
    role: "Technical Customer Service Specialist",
    period: "10/2021 - 01/2023",
    description:
      "Handling customer calls and providing prompt technical assistance. Providing support, sharing information about new features and solutions. Active presence on technical forums, building a support community. Monitoring trends and analyzing customer requests to identify recurring issues.",
    technologies: ["Customer Support", "Hardware", "Technical Forums", "Troubleshooting"],
  },
];
