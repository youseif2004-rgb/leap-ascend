import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal, R as RevealItem } from "./SectionReveal-DQ_wEvxI.mjs";
import { S as ServiceCard } from "./ServiceCard-BUNcIhhD.mjs";
import { s as services, a as processSteps } from "./router-Br4HVscn.mjs";
import { e as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Services", title: "Strategy. Build. Scale. One team.", description: "Six tightly-integrated disciplines, delivered by a single senior pod. No hand-offs. No theater. Just compounding outcomes.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "Services"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s, expanded: true }, s.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "max-w-2xl mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "How we work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-display gradient-text mt-3 text-4xl md:text-5xl", children: "A four-step rhythm." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: processSteps.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "card-surface p-7 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heading-display text-7xl text-white/5 absolute -top-2 -right-2", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: [
          "Step ",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-2xl text-white mt-3 relative", children: p.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/65 text-sm leading-relaxed relative", children: p.body })
      ] }, p.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-primary", children: [
        "Tell us what you're building ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
