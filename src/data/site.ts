import {
  BarChart3,
  Bot,
  DatabaseZap,
  Globe2,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import type { PortfolioProject, Service, Testimonial } from "@/types/site";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Fast, elegant websites and web apps built for conversion, reliability, and easy scaling.",
    icon: "Code2",
    features: ["Next.js builds", "Responsive UI", "SEO foundations"],
  },
  {
    title: "Inventory Management Software",
    description:
      "Stock, warehouse, purchase, and sales workflows designed around real business operations.",
    icon: "Boxes",
    features: ["Stock tracking", "Role dashboards", "Reports"],
  },
  {
    title: "CRM/SFA Solutions",
    description:
      "Customer pipelines, field sales automation, activity tracking, and performance visibility.",
    icon: "UsersRound",
    features: ["Lead flow", "Visit planning", "Team insights"],
  },
  {
    title: "Billing Software",
    description:
      "Invoice, quotation, tax, payment, and ledger modules for streamlined daily billing.",
    icon: "ReceiptText",
    features: ["Invoices", "Payment records", "Exportable reports"],
  },
  {
    title: "Business Automation",
    description:
      "Custom workflows that remove repetitive work and connect teams, data, and decisions.",
    icon: "Workflow",
    features: ["Approvals", "Alerts", "Process mapping"],
  },
  {
    title: "Website Hosting",
    description:
      "Managed hosting, deployments, performance checks, and ongoing website care.",
    icon: "Cloud",
    features: ["Deployment", "Monitoring", "Maintenance"],
  },
  {
    title: "API Integration",
    description:
      "Secure integrations between payment gateways, CRMs, ERPs, analytics, and internal tools.",
    icon: "PlugZap",
    features: ["REST APIs", "Webhooks", "Data sync"],
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "SQL Server",
  "Prisma",
  "REST APIs",
  "Vercel",
  "Azure",
  "Docker",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "OptiStock Cloud",
    description:
      "Inventory control dashboard with purchase, sales, warehouse, and stock aging analytics.",
    category: "SaaS",
    image: "from-cyan-400 via-blue-500 to-violet-600",
    tech: ["Next.js", "SQL Server", "Tailwind"],
    live: "#",
  },
  {
    title: "FieldPulse CRM",
    description:
      "Sales force automation for lead routing, field visits, follow-ups, and manager reports.",
    category: "Automation",
    image: "from-indigo-400 via-fuchsia-500 to-rose-500",
    tech: ["React", "Node.js", "Maps API"],
    live: "#",
  },
  {
    title: "InvoiceFlow Pro",
    description:
      "Billing and quotation system with customer ledgers, tax-ready exports, and payment logs.",
    category: "Commerce",
    image: "from-emerald-400 via-cyan-500 to-blue-600",
    tech: ["TypeScript", "Prisma", "PostgreSQL"],
    live: "#",
  },
  {
    title: "LaunchSite Studio",
    description:
      "Premium responsive website for a service business with SEO pages and lead capture.",
    category: "Web",
    image: "from-sky-400 via-violet-500 to-purple-700",
    tech: ["Next.js", "Framer Motion", "SEO"],
    live: "#",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Opticore Solutions translated our operations into clean software without making the process feel heavy.",
    author: "Ravi Mehta",
    role: "Operations Director",
  },
  {
    quote:
      "The team gave us a practical roadmap, strong UI, and automation that our sales team actually uses.",
    author: "Ananya Rao",
    role: "Founder, Growth Retail",
  },
  {
    quote:
      "They understand business workflows as well as code, which made the final system much sharper.",
    author: "Kiran Shah",
    role: "Managing Partner",
  },
];

export const stats = [
  { value: "40+", label: "Digital workflows shipped" },
  { value: "99%", label: "Deployment-focused uptime goal" },
  { value: "7", label: "Core service verticals" },
  { value: "24/7", label: "Support mindset" },
];

export const processSteps = [
  "Discovery",
  "Solution Architecture",
  "Design Prototype",
  "Agile Development",
  "Launch and Optimize",
];

export const aboutTimeline = [
  { year: "2022", title: "Started With Business Websites" },
  { year: "2023", title: "Expanded Into Automation Tools" },
  { year: "2024", title: "Built Inventory And Billing Systems" },
  { year: "2025", title: "Focused On Scalable SaaS Delivery" },
  { year: "2026", title: "Growing Opticore Solutions As A Product Studio" },
];

export const trustSignals = [
  { title: "Business-first delivery", icon: Handshake },
  { title: "Secure architecture", icon: ShieldCheck },
  { title: "Scalable foundations", icon: Layers3 },
  { title: "Measurable outcomes", icon: BarChart3 },
  { title: "Automation expertise", icon: Bot },
  { title: "Launch momentum", icon: Rocket },
  { title: "Web presence", icon: Globe2 },
  { title: "Data-ready systems", icon: DatabaseZap },
];
