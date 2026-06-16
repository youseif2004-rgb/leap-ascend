import {
  Brain, Workflow, Bot, Cloud, LineChart, Sparkles,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export const trustedLogos = [
  "NEXUS", "ORBITAL", "MERIDIAN", "HELIX", "AURORA", "PARALLAX",
  "QUANTUM", "VERTEX", "ECHELON", "LUMEN",
];

export const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 80,  suffix: "+", label: "Global Clients" },
  { value: 10,  suffix: "+", label: "Years of Craft" },
  { value: 99,  suffix: "%", label: "Client Satisfaction" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Map where intelligence creates leverage in your business — then build the roadmap to capture it.",
    includes: ["Opportunity audit", "Roadmap & ROI model", "Architecture review", "Executive workshops"],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Replace manual, repetitive work with adaptive workflows that learn, decide, and scale with you.",
    includes: ["Process discovery", "Workflow orchestration", "RPA + LLM pipelines", "Observability"],
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Domain-trained agents that operate inside your tools — sales, support, ops — quietly compounding output.",
    includes: ["Agent design", "Tool integrations", "Guardrails & evals", "Continuous tuning"],
  },
  {
    icon: Cloud,
    title: "SaaS Product Engineering",
    description: "From zero-to-one to scale-up — premium product builds with the polish of a top-tier studio.",
    includes: ["Product design", "Full-stack engineering", "Cloud infra", "Launch & iterate"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Turn raw data into the operating system of your decisions — clean pipelines, sharp dashboards.",
    includes: ["Data modeling", "ETL & warehousing", "Dashboards", "Predictive models"],
  },
  {
    icon: Sparkles,
    title: "Generative Experiences",
    description: "Ship customer-facing AI experiences that feel native, fast, and unmistakably premium.",
    includes: ["LLM UX design", "Streaming interfaces", "Personalization", "Safety & policy"],
  },
];

export interface Project {
  title: string;
  client: string;
  category: "Web" | "Mobile" | "AI";
  blurb: string;
  image: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  { title: "Pluto Fragrance", client: "Pluto Parfum", category: "Web",
    blurb: "AI-powered perfume recommendation system that matches users to luxury scents through a personalized quiz and preference learning.",
    image: "/images/pluto-fragrance.png", tags: ["AI Recommendation", "E-Commerce", "Luxury"],
    url: "https://www.perfume-pluto.vercel.app" },
  { title: "Samar El Azab Dental", client: "Samar El Azab Clinic", category: "Web",
    blurb: "Cutting-edge dental clinic website with online appointment booking and phone-based management dashboard for Shorouk City practice.",
    image: "/images/samar-dental.png", tags: ["Healthcare", "Booking", "Dashboard"],
    url: "https://www.samar-elazab-dental.vercel.app" },
];

export interface Pricing {
  name: string;
  price: number;
  currency: string;
  cadence: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta: string;
  priceLabel?: string;
}

export const pricing: Pricing[] = [
  {
    name: "Starter", price: 2500, currency: "$", cadence: "/mo",
    tagline: "Early-stage teams getting off the ground.",
    features: [
      "1 active project slot",
      "Standard support · 48h SLA",
      "Core AI integrations",
      "Monthly strategy call",
      "Shared delivery channel",
    ],
    cta: "Start with LEAP",
  },
  {
    name: "Gold", price: 6500, currency: "$", cadence: "/mo",
    tagline: "Growing companies that need more horsepower.",
    features: [
      "3 active project slots",
      "Priority support · 12h SLA",
      "Advanced AI integrations",
      "Dedicated delivery manager",
      "Bi-weekly executive review",
      "Custom dashboards",
    ],
    featured: true,
    cta: "Choose Gold",
  },
  {
    name: "Premium", price: 0, currency: "$", cadence: "",
    priceLabel: "Custom",
    tagline: "Scale-ups demanding the full LEAP suite.",
    features: [
      "Unlimited project slots",
      "White-glove support · 2h SLA",
      "Bespoke AI agents",
      "Embedded LEAP team",
      "Weekly strategy & roadmap",
      "Custom integrations",
      "Quarterly on-site",
    ],
    cta: "Talk to founders",
  },
];

export const team = [
  { name: "Layla Hassan",   role: "Founder & CEO",          avatar: "https://i.pravatar.cc/240?img=47" },
  { name: "Omar El-Sayed",  role: "Chief Technology Officer", avatar: "https://i.pravatar.cc/240?img=12" },
  { name: "Nadia Farouk",   role: "Head of AI",             avatar: "https://i.pravatar.cc/240?img=49" },
  { name: "Karim Adel",     role: "Design Director",        avatar: "https://i.pravatar.cc/240?img=33" },
  { name: "Yara Mostafa",   role: "Engineering Lead",       avatar: "https://i.pravatar.cc/240?img=45" },
  { name: "Hassan Tarek",   role: "Head of Product",        avatar: "https://i.pravatar.cc/240?img=15" },
  { name: "Mariam Saad",    role: "Client Partner",         avatar: "https://i.pravatar.cc/240?img=44" },
  { name: "Ziad Naguib",    role: "Principal Engineer",     avatar: "https://i.pravatar.cc/240?img=18" },
];

export const testimonials = [
  { quote: "LEAP didn't just ship software — they rewired how our operation thinks. Six months in, the numbers don't lie.",
    name: "Sara Mansour", role: "COO, Helix Logistics" },
  { quote: "The polish is Silicon Valley. The partnership is family. That combination is rare and very real.",
    name: "Daniel Park",  role: "Founder, Aurora Financial" },
  { quote: "We replaced three vendors with LEAP and moved twice as fast. Their AI work is genuinely state of the art.",
    name: "Lina Chen",    role: "VP Product, Nexus Retail" },
  { quote: "From day one it felt like they were on our cap table. Vision-aligned, technically elite, beautifully calm.",
    name: "Marc Adler",   role: "CEO, Orbital Media" },
];

export const whyLeap = [
  { title: "Innovation by Default",
    body: "We don't ship trends — we ship the next version of your business. Our R&D bench keeps you a step ahead, quietly.",
    tag: "01 · Innovation" },
  { title: "Velocity Without Compromise",
    body: "We compress months into weeks without bruising quality. Senior teams, sharp scope, ruthless prioritization.",
    tag: "02 · Speed" },
  { title: "Reliability You Can Stake On",
    body: "Architectures designed for the next ten years, not the next demo. Observable, secure, boringly dependable.",
    tag: "03 · Reliability" },
  { title: "True Partnership",
    body: "Embedded teams, shared roadmaps, founder-level access. We win when you win — and only then.",
    tag: "04 · Partnership" },
];

export const values = [
  { title: "Craft", body: "Every pixel, every API, every conversation — held to a higher bar." },
  { title: "Clarity", body: "We trade buzzwords for plain language and provable outcomes." },
  { title: "Courage", body: "We pick the harder, righter path. Then we ship it." },
  { title: "Compounding", body: "Small, sharp wins stacked weekly into outsized results." },
];

export const timeline = [
  { year: "2015", title: "LEAP founded in Cairo",     body: "Three engineers, one obsession: premium software for ambitious companies." },
  { year: "2018", title: "First AI practice",        body: "Production ML systems for healthcare and logistics — quietly, no theater." },
  { year: "2021", title: "Scaled to MENA & EU",     body: "Embedded teams across 12 countries. The bar kept rising." },
  { year: "2024", title: "Agentic systems era",     body: "Custom agents inside the workflows of category-defining companies." },
  { year: "2026", title: "Where ambition takes flight", body: "200+ projects. 80+ partners. One promise — turn momentum into altitude." },
];

export const faqs = [
  { q: "How fast can we start?", a: "Most engagements kick off within 7–10 days of signing. Our bench is intentionally kept warm for partners." },
  { q: "Do you replace or augment our team?", a: "Either, both, neither. We embed where it accelerates you — and step back where you're stronger." },
  { q: "What does ‘AI partner' actually mean here?", a: "It means we own outcomes, not tickets. Strategy, build, operate — end to end, with a single accountable team." },
  { q: "Is everything covered by the plan?", a: "Plans cover ongoing partnership and delivery. Bespoke hardware, third-party licenses, and large-scale infra are billed transparently at cost." },
  { q: "Can we move plans?", a: "Anytime, in either direction, no penalties. Many partners begin on Gold and graduate to Premium within two quarters." },
];

export const processSteps = [
  { step: "Discover", body: "Deep-dive workshops, audits, opportunity mapping." },
  { step: "Design",   body: "Architecture, product, brand — calibrated to outcome." },
  { step: "Build",    body: "Senior pods, weekly demos, observable from day one." },
  { step: "Scale",    body: "Operate, optimize, expand — compounding wins." },
];
