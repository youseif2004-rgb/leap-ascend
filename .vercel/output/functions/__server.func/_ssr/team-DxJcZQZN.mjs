import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal } from "./SectionReveal-DQ_wEvxI.mjs";
import { t as team } from "./router-Br4HVscn.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { L as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
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
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "The team", title: "A senior bench, every single time.", description: "No juniors hidden behind a partner. The people who answer your first call are the people writing your code on Friday.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "Team"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: {
      hidden: {
        opacity: 0,
        y: 20
      },
      show: {
        opacity: 1,
        y: 0
      }
    }, transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }, whileHover: {
      y: -6
    }, className: "group card-surface p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-28 h-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full", style: {
          background: "linear-gradient(135deg, var(--purple), var(--gold))",
          padding: 2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full overflow-hidden bg-[var(--navy)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.avatar, alt: m.name, className: "w-full h-full object-cover", loading: "lazy" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: {
          boxShadow: "0 0 36px 4px rgba(109,74,255,0.5)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-lg text-white mt-5", children: m.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-[var(--gold)] mt-1", children: m.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 13 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "Twitter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { size: 13 }) })
      ] })
    ] }, m.name)) }) }) })
  ] });
}
export {
  TeamPage as component
};
