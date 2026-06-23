import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal, R as RevealItem } from "./SectionReveal-DQ_wEvxI.mjs";
import { P as PricingCard } from "./PricingCard-BKK-u4rP.mjs";
import { b as pricing, f as faqs } from "./router-Br4HVscn.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { g as ChevronDown } from "../_libs/lucide-react.mjs";
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
function FAQItem({
  q,
  a,
  i
}) {
  const [open, setOpen] = reactExports.useState(i === 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "card-surface overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between gap-6 text-left p-6 hover:bg-white/[0.02] transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heading-display text-lg text-white", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
        rotate: open ? 180 : 0
      }, transition: {
        duration: 0.3
      }, className: "text-[var(--gold)] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: false, animate: {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0
    }, transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-white/65 leading-relaxed", children: a }) })
  ] });
}
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Partnership plans", title: "Transparent. Tiered. Compounding.", description: "Three commitment levels. Same world-class team. Move between them anytime — many partners begin on Gold and graduate to Premium within two quarters.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "Pricing"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch", children: pricing.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { tier: p }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { className: "mt-10 text-center text-xs text-white/45 tracking-wide", children: "Prices in USD. Tax exclusive. No setup fees. Cancel any cycle." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Questions, answered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "The short version." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a, i }, f.q)) })
    ] }) })
  ] });
}
export {
  PricingPage as component
};
