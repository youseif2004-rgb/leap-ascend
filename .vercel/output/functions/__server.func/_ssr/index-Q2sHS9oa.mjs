import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Logo, e as trustedLogos, c as stats, s as services, p as projects, w as whyLeap, b as pricing, g as testimonials } from "./router-Br4HVscn.mjs";
import { S as SectionReveal, R as RevealItem } from "./SectionReveal-DQ_wEvxI.mjs";
import { S as ServiceCard } from "./ServiceCard-BUNcIhhD.mjs";
import { P as ProjectCard } from "./ProjectCard-CB2e1LjE.mjs";
import { P as PricingCard } from "./PricingCard-BKK-u4rP.mjs";
import { d as useScroll, e as useSpring, m as motion, a as useMotionValue, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as Sparkles, e as ArrowRight, j as Lightbulb, Z as Zap, k as Shield, H as Handshake, Q as Quote, l as ChevronLeft, d as ChevronRight, m as ArrowUp } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ScrollProgressBar() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.4
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
    scaleX,
    transformOrigin: "0% 50%"
  }, className: "fixed top-0 inset-x-0 h-[2px] z-[60]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", style: {
    background: "linear-gradient(90deg, var(--purple), var(--gold))"
  } }) });
}
function Magnetic({
  children,
  className,
  to,
  kind = "primary"
}) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, {
    stiffness: 200,
    damping: 18
  });
  const sy = useSpring(y, {
    stiffness: 200,
    damping: 18
  });
  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.3);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }
  const cls = kind === "primary" ? "btn-primary" : kind === "gold" ? "btn-gold" : "btn-outline";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, onMouseMove: onMove, onMouseLeave: onLeave, style: {
    x: sx,
    y: sy,
    display: "inline-block"
  }, className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: cls, children }) });
}
function CountUp({
  to,
  suffix
}) {
  const ref = reactExports.useRef(null);
  const [value, setValue] = reactExports.useState(0);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (reduced) {
        setValue(to);
        return;
      }
      const duration = 1800;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(ease(p) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      });
    }, {
      threshold: 0.25
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "heading-display gradient-text text-5xl md:text-6xl tabular-nums", children: [
    value.toLocaleString(),
    suffix
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20
  });
  const glowY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20
  });
  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", ref, onMouseMove: onMove, className: "relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hex-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute top-[10%] right-[5%] w-[520px] h-[520px] rounded-full", style: {
      background: "radial-gradient(circle, rgba(109,74,255,0.55), transparent 60%)",
      filter: "blur(50px)"
    }, animate: {
      y: [0, 30, 0],
      x: [0, -20, 0]
    }, transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute bottom-[5%] left-[8%] w-[440px] h-[440px] rounded-full", style: {
      background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)",
      filter: "blur(60px)"
    }, animate: {
      y: [0, -25, 0],
      x: [0, 25, 0]
    }, transition: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute pointer-events-none w-[340px] h-[340px] rounded-full -translate-x-1/2 -translate-y-1/2", style: {
      left: glowX,
      top: glowY,
      background: "radial-gradient(circle, rgba(109,74,255,0.18), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "show", variants: {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
          }
        }
      }, className: "order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: {
          hidden: {
            opacity: 0,
            y: 14
          },
          show: {
            opacity: 1,
            y: 0
          }
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow text-xs sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 10, className: "text-[var(--gold)]" }),
          "Intelligent Solutions · Est. 2015"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: {
          hidden: {
            opacity: 0,
            y: 28
          },
          show: {
            opacity: 1,
            y: 0
          }
        }, transition: {
          duration: 0.9
        }, className: "heading-display mt-4 sm:mt-6 text-[clamp(1.8rem,6vw,5.5rem)] leading-[0.95]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Where Ambition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Takes Flight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: {
          hidden: {
            opacity: 0,
            y: 18
          },
          show: {
            opacity: 1,
            y: 0
          }
        }, className: "mt-4 sm:mt-7 max-w-full sm:max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed", children: "LEAP is the intelligent automation and SaaS partner for companies done waiting. We design, build, and operate AI-native software that quietly compounds your advantage — week after week." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: {
          hidden: {
            opacity: 0,
            y: 14
          },
          show: {
            opacity: 1,
            y: 0
          }
        }, className: "mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Magnetic, { to: "/work", kind: "primary", className: "w-full sm:w-auto", children: [
            "Explore Our Work ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { to: "/contact", kind: "outline", className: "w-full sm:w-auto", children: "Get in Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        }, className: "mt-6 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-[9px] sm:text-[10px] md:text-xs text-white/45", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--gold)] animate-pulse" }),
            "Booking Q3 partnerships"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 · ISO 27001" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "relative flex items-center justify-center order-1 lg:order-2 py-4 sm:py-6 md:py-8 lg:py-0", initial: {
        opacity: 0,
        scale: 0.92
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
        y: [0, -14, 0]
      }, transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -m-4 sm:-m-8 md:-m-10 lg:-m-20 rounded-full", style: {
          background: "radial-gradient(circle, rgba(109,74,255,0.3), transparent 65%)",
          filter: "blur(40px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative scale-[1.2] sm:scale-[1.6] md:scale-[2] lg:scale-[3.2] origin-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 120, withWordmark: false }) })
      ] }) })
    ] })
  ] });
}
function Marquee() {
  const row = [...trustedLogos, ...trustedLogos];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 border-y border-white/5 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x mb-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Trusted by ambitious teams" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b1020] to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b1020] to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex gap-16 whitespace-nowrap", animate: {
        x: ["0%", "-50%"]
      }, transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }, children: row.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heading-display text-2xl tracking-[0.25em] text-white/30 hover:text-white transition-colors duration-500", children: name }, i)) })
    ] })
  ] });
}
function AboutTeaser() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "about", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "About LEAP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-4 text-4xl md:text-5xl", children: "We build the intelligent layer beneath the ambitious company." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/70 text-lg leading-relaxed", children: "For a decade we've embedded with founders, operators, and CTOs to ship software that doesn't just work — it compounds. Quietly intelligent, premium to use, ruthlessly reliable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-[var(--gold)] transition-colors link-underline", children: [
        "Learn more about us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.value, suffix: s.suffix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-white/50", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "relative aspect-square max-w-[520px] justify-self-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full", style: {
        background: "radial-gradient(circle, rgba(109,74,255,0.35), transparent 65%)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.svg, { viewBox: "0 0 400 400", className: "relative w-full h-full", animate: {
        rotate: 360
      }, transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "hexg", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#8a6fff" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#D4AF37" })
        ] }) }),
        [120, 160, 200].map((r, i) => {
          const pts = Array.from({
            length: 6
          }).map((_, k) => {
            const a = Math.PI / 3 * k - Math.PI / 2;
            return `${200 + r * Math.cos(a)},${200 + r * Math.sin(a)}`;
          }).join(" ");
          return /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: pts, stroke: "url(#hexg)", strokeWidth: "1.2", fill: "none", opacity: 0.45 - i * 0.1 }, i);
        }),
        Array.from({
          length: 6
        }).map((_, k) => {
          const a = Math.PI / 3 * k - Math.PI / 2;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 200 + 200 * Math.cos(a), cy: 200 + 200 * Math.sin(a), r: "5", fill: "#D4AF37" }, k);
        }),
        Array.from({
          length: 6
        }).map((_, k) => {
          const a = Math.PI / 3 * k - Math.PI / 2;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "200", y1: "200", x2: 200 + 200 * Math.cos(a), y2: 200 + 200 * Math.sin(a), stroke: "url(#hexg)", strokeWidth: "0.8", opacity: "0.3" }, k);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "6", fill: "#8a6fff" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 flex items-center justify-center", animate: {
        scale: [1, 1.05, 1]
      }, transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heading-display gradient-text text-3xl tracking-[0.3em]", children: "LEAP" }) })
    ] })
  ] }) });
}
function ServicesPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "services", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl", children: "A full-stack intelligence partner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm text-white link-underline", children: [
        "View all services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s }, s.title)) })
  ] }) });
}
function WorkPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "work", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Selected work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl", children: "Quiet software, loud outcomes." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work", className: "inline-flex items-center gap-2 text-sm text-white link-underline", children: [
        "See our work ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }, p.title)) })
  ] }) });
}
const whyIcons = [Lightbulb, Zap, Shield, Handshake];
function WhyLeap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "why", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why LEAP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "The unfair-advantage stack." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: whyLeap.map((w, i) => {
      const Icon = whyIcons[i % whyIcons.length];
      const reverse = i % 2 === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: reverse ? 40 : -40
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }, className: `grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: w.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-3xl md:text-4xl text-white mt-3", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 leading-relaxed text-lg", children: w.body })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-surface aspect-[5/3] flex items-center justify-center relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
            background: "radial-gradient(circle at 30% 30%, rgba(109,74,255,0.25), transparent 60%)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hex-bg opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 64, className: "text-[var(--gold)] relative drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]" })
        ] })
      ] }, w.title);
    }) })
  ] }) });
}
function PricingPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "pricing", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Partnership Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "Transparent. Tiered. Compounding." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/65", children: "Three commitment levels — same world-class team behind every one." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch", children: pricing.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { tier: p }, p.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pricing", className: "inline-flex items-center gap-2 text-sm text-white link-underline", children: [
      "Compare plans in detail ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
    ] }) })
  ] }) });
}
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6e3);
    return () => clearInterval(t);
  }, [paused]);
  const cur = testimonials[i];
  const initials = cur.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  const [role, company] = cur.role.includes(",") ? cur.role.split(",").map((s) => s.trim()) : [cur.role, ""];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "testimonials", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Words from partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "Quiet confidence, loud results." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-surface p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 rounded-full", style: {
        background: "radial-gradient(circle, rgba(109,74,255,0.25), transparent 65%)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-16 w-64 h-64 rounded-full", style: {
        background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 65%)",
        filter: "blur(40px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -18
      }, transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1]
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 36, className: "text-[var(--gold)]/70 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "heading-display text-2xl md:text-3xl text-white leading-snug normal-case tracking-tight", children: [
          '"',
          cur.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-between flex-wrap gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full inline-flex items-center justify-center heading-display text-white text-lg shrink-0", style: {
              background: "linear-gradient(135deg, #6D4AFF 0%, #D4AF37 100%)",
              boxShadow: "0 8px 24px -8px rgba(109,74,255,0.6)"
            }, "aria-hidden": true, children: initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: cur.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/55 text-sm", children: [
                role,
                company && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  " · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--gold)]/80", children: company })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((v) => (v - 1 + testimonials.length) % testimonials.length), className: "w-9 h-9 rounded-full border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: testimonials.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI(k), "aria-label": `Show testimonial ${k + 1}`, className: `h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-[var(--gold)] shadow-[0_0_12px_rgba(212,175,55,0.7)]" : "w-3 bg-white/20 hover:bg-white/40"}` }, k)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI((v) => (v + 1) % testimonials.length), className: "w-9 h-9 rounded-full border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 }) })
          ] })
        ] })
      ] }, i) })
    ] })
  ] }) });
}
function CTABand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { id: "cta", className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl p-12 md:p-20 text-center", style: {
    background: "linear-gradient(135deg, #2c1f6b 0%, #0b1020 70%)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hex-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full", style: {
      background: "radial-gradient(circle, rgba(109,74,255,0.6), transparent 60%)",
      filter: "blur(60px)"
    }, animate: {
      x: [0, 30, 0],
      y: [0, 20, 0]
    }, transition: {
      duration: 10,
      repeat: Infinity
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full", style: {
      background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)",
      filter: "blur(60px)"
    }, animate: {
      x: [0, -30, 0],
      y: [0, -20, 0]
    }, transition: {
      duration: 12,
      repeat: Infinity
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Your next chapter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-4 text-4xl md:text-6xl", children: "Ready to take the leap?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-6 max-w-xl mx-auto text-white/70", children: "One call. We'll map your highest-leverage AI move and how to ship it inside a quarter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-gold text-base", children: [
        "Start the conversation ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] }) })
    ] })
  ] }) }) });
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { initial: {
    opacity: 0,
    y: 16,
    scale: 0.9
  }, animate: {
    opacity: 1,
    y: 0,
    scale: 1
  }, exit: {
    opacity: 0,
    y: 16,
    scale: 0.9
  }, transition: {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1]
  }, onClick: () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  }), "aria-label": "Back to top", className: "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full inline-flex items-center justify-center text-[#1a1304] hover:scale-110 transition-transform", style: {
    background: "linear-gradient(135deg, var(--gold) 0%, #f1d36b 100%)",
    boxShadow: "0 12px 36px -8px rgba(212,175,55,0.6), 0 0 0 1px rgba(212,175,55,0.4)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 18, strokeWidth: 2.5 }) }, "btt") });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorkPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyLeap, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
  ] });
}
export {
  HomePage as component
};
