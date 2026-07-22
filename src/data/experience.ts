export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Xperi",
    role: "IT Support Engineer",
    period: "2023 - Present",
    description:
      "Providing technical support for internal systems, managing infrastructure, troubleshooting network and hardware issues across the organization.",
    technologies: ["Linux", "Windows Server", "Networking", "Active Directory"],
  },
  {
    company: "Coty",
    role: "IT Support Specialist",
    period: "2022 - 2023",
    description:
      "End-user support, device management, and system administration in a global corporate environment.",
    technologies: ["SCCM", "Azure AD", "Office 365", "ITIL"],
  },
  {
    company: "ASUS",
    role: "Technical Support Engineer",
    period: "2021 - 2022",
    description:
      "Hardware diagnostics, RMA processes, and customer-facing technical support for consumer and enterprise products.",
    technologies: ["Hardware Diagnostics", "RMA", "Customer Support"],
  },
  {
    company: "KPMG",
    role: "IT Support",
    period: "2020 - 2021",
    description:
      "First and second line support in a high-security corporate environment. Managing user access and resolving infrastructure issues.",
    technologies: ["ServiceNow", "VPN", "Security Compliance"],
  },
  {
    company: "NTT",
    role: "Service Desk Analyst",
    period: "2019 - 2020",
    description:
      "First point of contact for IT incidents and service requests. Ticket management, escalation, and resolution within SLA.",
    technologies: ["ITSM", "Remote Support", "Incident Management"],
  },
];
