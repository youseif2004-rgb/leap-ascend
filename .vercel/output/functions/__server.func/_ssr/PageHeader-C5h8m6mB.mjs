import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as ChevronRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PageHeader({ eyebrow, title, description, breadcrumb }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hex-bg opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--purple)] opacity-25 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--gold)] opacity-10 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative", children: [
      breadcrumb && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-xs text-white/50 mb-6", children: breadcrumb.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        b.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: b.to, className: "hover:text-white transition-colors", children: b.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: b.label }),
        i < breadcrumb.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
      ] }, i)) }),
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          className: "heading-display gradient-text mt-4 text-5xl md:text-7xl max-w-4xl",
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          children: title
        }
      ),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          className: "mt-6 max-w-2xl text-lg text-white/70 leading-relaxed",
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          children: description
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 gradient-hairline" })
    ] })
  ] });
}
export {
  PageHeader as P
};
