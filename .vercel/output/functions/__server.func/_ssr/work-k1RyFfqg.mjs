import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal } from "./SectionReveal-DQ_wEvxI.mjs";
import { P as ProjectCard } from "./ProjectCard-CB2e1LjE.mjs";
import { p as projects } from "./router-Br4HVscn.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const filters = ["All", "Web", "Mobile", "AI"];
function WorkPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [active, setActive] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Selected work", title: "Quiet software. Loud outcomes.", description: "A glimpse at the products we've shipped with partners across logistics, fintech, retail, healthcare, and media.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "Work"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "pt-4 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12 relative", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilter(f), className: `relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? "text-white" : "text-white/60 hover:text-white"}`, children: [
        filter === f && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "filter-pill", className: "absolute inset-0 rounded-full", style: {
          background: "linear-gradient(135deg, #7c5cff, #6D4AFF)",
          boxShadow: "0 8px 30px -10px rgba(109,74,255,0.6)"
        }, transition: {
          type: "spring",
          stiffness: 320,
          damping: 30
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -10
      }, transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, onOpen: () => setActive(p) }) }, p.title)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "fixed inset-0 z-[80] flex items-center justify-center p-4", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setActive(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70 backdrop-blur-md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { role: "dialog", "aria-modal": "true", onClick: (e) => e.stopPropagation(), className: "relative max-w-3xl w-full card-surface overflow-hidden", initial: {
        opacity: 0,
        y: 24,
        scale: 0.96
      }, animate: {
        opacity: 1,
        y: 0,
        scale: 1
      }, exit: {
        opacity: 0,
        y: 16,
        scale: 0.96
      }, transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(null), className: "absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-black/40 border border-white/15 text-white hover:bg-black/60", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: active.image, alt: active.title, className: "w-full aspect-[16/9] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow", children: [
            active.client,
            " · ",
            active.category
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-3xl text-white mt-3", children: active.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/70 leading-relaxed", children: active.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: active.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.15em] text-white/65 border border-white/10 px-2 py-1 rounded-full", children: t }, t)) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  WorkPage as component
};
