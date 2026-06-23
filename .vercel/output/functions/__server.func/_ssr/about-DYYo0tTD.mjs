import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal, R as RevealItem } from "./SectionReveal-DQ_wEvxI.mjs";
import { c as stats, v as values, d as timeline } from "./router-Br4HVscn.mjs";
import { u as useInView, a as useMotionValue, b as useTransform, c as animate, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CountUp({
  to,
  suffix
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-40px"
  });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  reactExports.useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1]
    });
    return c.stop;
  }, [inView, to, mv]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "heading-display gradient-text text-5xl md:text-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "About LEAP", title: "A decade of building the future, quietly.", description: "LEAP is a senior team of operators, engineers, and designers turning the AI revolution into a competitive edge for companies that refuse to stand still.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "About"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "From three engineers to a global partner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-white/70 text-lg leading-relaxed space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "LEAP began in Cairo in 2015 with a stubborn belief: that ambitious companies anywhere in the world deserve software with the polish of a top-tier studio and the leverage of cutting-edge AI." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ten years and 200+ shipped projects later, that belief is the operating system of our company. We pick fewer partners than we could, and go deeper than most. Every engagement is a long, calm, compounding climb — together." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "By the numbers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "A decade in altitude." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.value, suffix: s.suffix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-white/50", children: s.label })
      ] }, s.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Mission · Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-3xl", children: "Turn ambition into momentum. Turn momentum into altitude." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "card-surface p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80 text-lg leading-relaxed", children: "Build the intelligent software layer that lets ambitious teams move faster than the industries they're reshaping." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "card-surface p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: "Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80 text-lg leading-relaxed", children: "A world where every great operator has a quietly brilliant AI partner — and where craft, calm, and compounding always win." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "What we believe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "Four words on the wall." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "card-surface p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-2xl text-white mt-3", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/65 text-sm leading-relaxed", children: v.body })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "max-w-2xl mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "Milestones, not theater." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative pl-6 md:pl-10 border-l border-white/10", children: timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "relative pb-12 last:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] md:-left-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-2xl text-white mt-2", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/65 max-w-2xl", children: t.body })
      ] }, t.year)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
