import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, S as Send, T as Twitter, L as Linkedin, G as Github, B as Brain, W as Workflow, a as Bot, C as Cloud, b as ChartLine, c as Sparkles } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-Bk4TLNFb.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" }
];
const trustedLogos = [
  "NEXUS",
  "ORBITAL",
  "MERIDIAN",
  "HELIX",
  "AURORA",
  "PARALLAX",
  "QUANTUM",
  "VERTEX",
  "ECHELON",
  "LUMEN"
];
const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Global Clients" },
  { value: 10, suffix: "+", label: "Years of Craft" },
  { value: 99, suffix: "%", label: "Client Satisfaction" }
];
const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Map where intelligence creates leverage in your business — then build the roadmap to capture it.",
    includes: ["Opportunity audit", "Roadmap & ROI model", "Architecture review", "Executive workshops"]
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Replace manual, repetitive work with adaptive workflows that learn, decide, and scale with you.",
    includes: ["Process discovery", "Workflow orchestration", "RPA + LLM pipelines", "Observability"]
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Domain-trained agents that operate inside your tools — sales, support, ops — quietly compounding output.",
    includes: ["Agent design", "Tool integrations", "Guardrails & evals", "Continuous tuning"]
  },
  {
    icon: Cloud,
    title: "SaaS Product Engineering",
    description: "From zero-to-one to scale-up — premium product builds with the polish of a top-tier studio.",
    includes: ["Product design", "Full-stack engineering", "Cloud infra", "Launch & iterate"]
  },
  {
    icon: ChartLine,
    title: "Data & Analytics",
    description: "Turn raw data into the operating system of your decisions — clean pipelines, sharp dashboards.",
    includes: ["Data modeling", "ETL & warehousing", "Dashboards", "Predictive models"]
  },
  {
    icon: Sparkles,
    title: "Generative Experiences",
    description: "Ship customer-facing AI experiences that feel native, fast, and unmistakably premium.",
    includes: ["LLM UX design", "Streaming interfaces", "Personalization", "Safety & policy"]
  }
];
const projects = [
  {
    title: "Pluto Fragrance",
    client: "Pluto Parfum",
    category: "Web",
    blurb: "AI-powered perfume recommendation system that matches users to luxury scents through a personalized quiz and preference learning.",
    image: "/images/pluto-fragrance.png",
    tags: ["AI Recommendation", "E-Commerce", "Luxury"],
    url: "https://www.perfume-pluto.vercel.app"
  },
  {
    title: "Samar El Azab Dental",
    client: "Samar El Azab Clinic",
    category: "Web",
    blurb: "Cutting-edge dental clinic website with online appointment booking and phone-based management dashboard for Shorouk City practice.",
    image: "/images/samar-dental.png",
    tags: ["Healthcare", "Booking", "Dashboard"],
    url: "https://www.samar-elazab-dental.vercel.app"
  }
];
const pricing = [
  {
    name: "Starter",
    price: 2500,
    currency: "$",
    cadence: "/mo",
    tagline: "Early-stage teams getting off the ground.",
    features: [
      "1 active project slot",
      "Standard support · 48h SLA",
      "Core AI integrations",
      "Monthly strategy call",
      "Shared delivery channel"
    ],
    cta: "Start with LEAP"
  },
  {
    name: "Gold",
    price: 6500,
    currency: "$",
    cadence: "/mo",
    tagline: "Growing companies that need more horsepower.",
    features: [
      "3 active project slots",
      "Priority support · 12h SLA",
      "Advanced AI integrations",
      "Dedicated delivery manager",
      "Bi-weekly executive review",
      "Custom dashboards"
    ],
    featured: true,
    cta: "Choose Gold"
  },
  {
    name: "Premium",
    price: 0,
    currency: "$",
    cadence: "",
    priceLabel: "Custom",
    tagline: "Scale-ups demanding the full LEAP suite.",
    features: [
      "Unlimited project slots",
      "White-glove support · 2h SLA",
      "Bespoke AI agents",
      "Embedded LEAP team",
      "Weekly strategy & roadmap",
      "Custom integrations",
      "Quarterly on-site"
    ],
    cta: "Talk to founders"
  }
];
const team = [
  { name: "Layla Hassan", role: "Founder & CEO", avatar: "https://i.pravatar.cc/240?img=47" },
  { name: "Omar El-Sayed", role: "Chief Technology Officer", avatar: "https://i.pravatar.cc/240?img=12" },
  { name: "Nadia Farouk", role: "Head of AI", avatar: "https://i.pravatar.cc/240?img=49" },
  { name: "Karim Adel", role: "Design Director", avatar: "https://i.pravatar.cc/240?img=33" },
  { name: "Yara Mostafa", role: "Engineering Lead", avatar: "https://i.pravatar.cc/240?img=45" },
  { name: "Hassan Tarek", role: "Head of Product", avatar: "https://i.pravatar.cc/240?img=15" },
  { name: "Mariam Saad", role: "Client Partner", avatar: "https://i.pravatar.cc/240?img=44" },
  { name: "Ziad Naguib", role: "Principal Engineer", avatar: "https://i.pravatar.cc/240?img=18" }
];
const testimonials = [
  {
    quote: "LEAP didn't just ship software — they rewired how our operation thinks. Six months in, the numbers don't lie.",
    name: "Sara Mansour",
    role: "COO, Helix Logistics"
  },
  {
    quote: "The polish is Silicon Valley. The partnership is family. That combination is rare and very real.",
    name: "Daniel Park",
    role: "Founder, Aurora Financial"
  },
  {
    quote: "We replaced three vendors with LEAP and moved twice as fast. Their AI work is genuinely state of the art.",
    name: "Lina Chen",
    role: "VP Product, Nexus Retail"
  },
  {
    quote: "From day one it felt like they were on our cap table. Vision-aligned, technically elite, beautifully calm.",
    name: "Marc Adler",
    role: "CEO, Orbital Media"
  }
];
const whyLeap = [
  {
    title: "Innovation by Default",
    body: "We don't ship trends — we ship the next version of your business. Our R&D bench keeps you a step ahead, quietly.",
    tag: "01 · Innovation"
  },
  {
    title: "Velocity Without Compromise",
    body: "We compress months into weeks without bruising quality. Senior teams, sharp scope, ruthless prioritization.",
    tag: "02 · Speed"
  },
  {
    title: "Reliability You Can Stake On",
    body: "Architectures designed for the next ten years, not the next demo. Observable, secure, boringly dependable.",
    tag: "03 · Reliability"
  },
  {
    title: "True Partnership",
    body: "Embedded teams, shared roadmaps, founder-level access. We win when you win — and only then.",
    tag: "04 · Partnership"
  }
];
const values = [
  { title: "Craft", body: "Every pixel, every API, every conversation — held to a higher bar." },
  { title: "Clarity", body: "We trade buzzwords for plain language and provable outcomes." },
  { title: "Courage", body: "We pick the harder, righter path. Then we ship it." },
  { title: "Compounding", body: "Small, sharp wins stacked weekly into outsized results." }
];
const timeline = [
  { year: "2015", title: "LEAP founded in Cairo", body: "Three engineers, one obsession: premium software for ambitious companies." },
  { year: "2018", title: "First AI practice", body: "Production ML systems for healthcare and logistics — quietly, no theater." },
  { year: "2021", title: "Scaled to MENA & EU", body: "Embedded teams across 12 countries. The bar kept rising." },
  { year: "2024", title: "Agentic systems era", body: "Custom agents inside the workflows of category-defining companies." },
  { year: "2026", title: "Where ambition takes flight", body: "200+ projects. 80+ partners. One promise — turn momentum into altitude." }
];
const faqs = [
  { q: "How fast can we start?", a: "Most engagements kick off within 7–10 days of signing. Our bench is intentionally kept warm for partners." },
  { q: "Do you replace or augment our team?", a: "Either, both, neither. We embed where it accelerates you — and step back where you're stronger." },
  { q: "What does ‘AI partner' actually mean here?", a: "It means we own outcomes, not tickets. Strategy, build, operate — end to end, with a single accountable team." },
  { q: "Is everything covered by the plan?", a: "Plans cover ongoing partnership and delivery. Bespoke hardware, third-party licenses, and large-scale infra are billed transparently at cost." },
  { q: "Can we move plans?", a: "Anytime, in either direction, no penalties. Many partners begin on Gold and graduate to Premium within two quarters." }
];
const processSteps = [
  { step: "Discover", body: "Deep-dive workshops, audits, opportunity mapping." },
  { step: "Design", body: "Architecture, product, brand — calibrated to outcome." },
  { step: "Build", body: "Senior pods, weekly demos, observable from day one." },
  { step: "Scale", body: "Operate, optimize, expand — compounding wins." }
];
function Logo({ size = 36, withWordmark = true, animated = true }) {
  const draw = animated ? { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } } : { initial: false, animate: { pathLength: 1, opacity: 1 } };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.svg,
      {
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        initial: { rotate: -8, opacity: 0 },
        animate: { rotate: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        "aria-label": "LEAP",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "leap-stroke", x1: "0", y1: "0", x2: "1", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#8a6fff" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#D4AF37" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.polygon,
            {
              points: "32,4 56,18 56,46 32,60 8,46 8,18",
              stroke: "url(#leap-stroke)",
              strokeWidth: "2",
              fill: "rgba(109,74,255,0.06)",
              ...draw,
              transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M22 40 L32 22 L42 40 M26 36 H38",
              stroke: "#fff",
              strokeWidth: "2.4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              ...draw,
              transition: { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          ),
          [
            [32, 4],
            [56, 18],
            [56, 46],
            [32, 60],
            [8, 46],
            [8, 18]
          ].map(([cx, cy], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx,
              cy,
              r: 2.4,
              fill: "#D4AF37",
              initial: { scale: 0, opacity: 0 },
              animate: { scale: [0, 1.3, 1], opacity: [0, 1, 0.85] },
              transition: { duration: 1.6, delay: 1.1 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }
            },
            i
          ))
        ]
      }
    ),
    withWordmark && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "heading-display gradient-text text-xl tracking-[0.18em]",
        style: { fontFamily: "var(--font-display)" },
        children: "LEAP"
      }
    )
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: [
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav py-3" : "py-5"
        ].join(" "),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", "aria-label": "LEAP home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 32 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-9", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              activeOptions: { exact: l.to === "/" },
              className: "link-underline text-sm font-medium text-white/80 hover:text-white transition-colors",
              activeProps: { className: "link-underline text-white" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-primary text-xs", children: "Get Started" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 18 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-40 lg:hidden",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#0b1020]/95 backdrop-blur-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.nav,
            {
              className: "relative flex h-full flex-col items-center justify-center gap-7",
              initial: "hidden",
              animate: "show",
              variants: { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } },
              children: [
                navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } },
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "heading-display text-3xl text-white", children: l.label })
                  },
                  l.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-primary mt-2", children: "Get Started" }) })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 border-t border-white/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-px gradient-hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 32 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-white/60 max-w-sm leading-relaxed", children: "LEAP is an AI-driven intelligent automation and SaaS partner. We turn ambition into momentum — quietly, premium, on time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: navLinks.slice(0, 4).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-white/70 hover:text-white transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: navLinks.slice(4).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-white/70 hover:text-white transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "eyebrow mb-4", children: "Get the brief" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60 mb-4", children: "One sharp email a month. Field notes from the frontier." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "you@company.com",
              className: "flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "inline-flex items-center justify-center rounded-full bg-[var(--purple)] w-9 h-9 text-white hover:bg-[var(--purple-soft)] transition-colors", "aria-label": "Subscribe", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 15 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-5", children: [Twitter, Linkedin, Github].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "Social link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15 }) }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/40", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " LEAP Intelligent Solutions. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40 tracking-[0.2em] uppercase", children: "Where ambition takes flight" })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading-display text-7xl gradient-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-white", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: "The page you're looking for doesn't exist or has moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-primary", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "heading-display text-2xl gradient-text", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "btn-primary", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-outline", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LEAP — Where Ambition Takes Flight" },
      { name: "description", content: "LEAP is an AI-driven intelligent automation and SaaS solutions partner. We turn ambition into momentum." },
      { name: "author", content: "LEAP" },
      { property: "og:title", content: "LEAP — Where Ambition Takes Flight" },
      { property: "og:description", content: "LEAP is an AI-driven intelligent automation and SaaS solutions partner. We turn ambition into momentum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@leap" },
      { name: "twitter:title", content: "LEAP — Where Ambition Takes Flight" },
      { name: "twitter:description", content: "LEAP is an AI-driven intelligent automation and SaaS solutions partner. We turn ambition into momentum." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/42d27233-9370-45fb-b323-94bfeccdb929/id-preview-0994d79b--dff7d110-40fd-49ba-be8d-3edea6bf5740.lovable.app-1781292410323.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/42d27233-9370-45fb-b323-94bfeccdb929/id-preview-0994d79b--dff7d110-40fd-49ba-be8d-3edea6bf5740.lovable.app-1781292410323.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.main,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
    },
    pathname
  ) });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedOutlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./work-k1RyFfqg.mjs");
const Route$6 = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Work — LEAP"
    }, {
      name: "description",
      content: "Selected projects from LEAP — AI agents, mobile experiences, and edge-native web products for category-defining teams."
    }, {
      property: "og:title",
      content: "Work — LEAP"
    }, {
      property: "og:description",
      content: "Selected projects from LEAP."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./team-DxJcZQZN.mjs");
const Route$5 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — LEAP"
    }, {
      name: "description",
      content: "Senior operators, engineers, and designers who care more about your outcomes than their own logos."
    }, {
      property: "og:title",
      content: "Team — LEAP"
    }, {
      property: "og:description",
      content: "The people behind LEAP."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services-DJVC0NZT.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — LEAP"
    }, {
      name: "description",
      content: "AI strategy, intelligent automation, custom agents, SaaS engineering, data, and generative experiences — delivered end to end."
    }, {
      property: "og:title",
      content: "Services — LEAP"
    }, {
      property: "og:description",
      content: "Six disciplines, one accountable team. Strategy through scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./pricing-DG7-MUt2.mjs");
const Route$3 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — LEAP"
    }, {
      name: "description",
      content: "Three transparent partnership plans — Starter, Gold, and Premium — with the same world-class team behind every one."
    }, {
      property: "og:title",
      content: "Pricing — LEAP"
    }, {
      property: "og:description",
      content: "Transparent plans for ambitious teams."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-FoTNiRxn.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — LEAP"
    }, {
      name: "description",
      content: "Tell us what you're building. We'll reply within one business day with a calibrated next step."
    }, {
      property: "og:title",
      content: "Contact — LEAP"
    }, {
      property: "og:description",
      content: "Start the conversation with LEAP."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DYYo0tTD.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — LEAP"
    }, {
      name: "description",
      content: "Inside LEAP: the people, principles, and milestones behind a decade of AI-driven product craft."
    }, {
      property: "og:title",
      content: "About — LEAP"
    }, {
      property: "og:description",
      content: "The people, principles, and milestones behind a decade of AI-driven product craft."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Q2sHS9oa.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "LEAP — Where Ambition Takes Flight"
    }, {
      name: "description",
      content: "AI-driven intelligent automation and SaaS solutions for ambitious teams. LEAP turns momentum into altitude."
    }, {
      property: "og:title",
      content: "LEAP — Where Ambition Takes Flight"
    }, {
      property: "og:description",
      content: "AI-driven intelligent automation and SaaS solutions for ambitious teams."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$6.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$7
});
const TeamRoute = Route$5.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const PricingRoute = Route$3.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PricingRoute,
  ServicesRoute,
  TeamRoute,
  WorkRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Logo as L,
  processSteps as a,
  pricing as b,
  stats as c,
  timeline as d,
  trustedLogos as e,
  faqs as f,
  testimonials as g,
  projects as p,
  router as r,
  services as s,
  team as t,
  values as v,
  whyLeap as w
};
