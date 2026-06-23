import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as Sparkles, f as Check } from "../_libs/lucide-react.mjs";
function PricingCard({ tier }) {
  const featured = tier.featured;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      variants: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      whileHover: { y: -8 },
      className: [
        "group relative card-surface p-8 flex flex-col transition-all duration-500",
        featured ? "lg:-translate-y-4 lg:scale-[1.03]" : "hover:border-[var(--gold)]/50 hover:shadow-[0_24px_70px_-20px_rgba(109,74,255,0.55)]"
      ].join(" "),
      style: featured ? {
        background: "linear-gradient(180deg, rgba(212,175,55,0.10), rgba(109,74,255,0.10))",
        borderColor: "rgba(212,175,55,0.55)",
        boxShadow: "0 30px 80px -20px rgba(212,175,55,0.4), 0 0 0 1px rgba(212,175,55,0.45), 0 0 60px -10px rgba(212,175,55,0.25)"
      } : void 0,
      children: [
        featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--gold)] to-[#f1d36b] text-[10px] tracking-[0.22em] uppercase font-bold text-[#1a1304] px-3 py-1.5 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 11 }),
          " Most Popular"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-2xl text-white", children: tier.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: tier.tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/70 font-medium", children: "Contact us for pricing" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 gradient-hairline opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8 flex-1", children: tier.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: [
            "mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0",
            featured ? "bg-[var(--gold)]/20 text-[var(--gold)]" : "bg-[var(--purple)]/20 text-[var(--purple-soft)]"
          ].join(" "), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }) }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: featured ? "btn-gold" : "btn-outline", children: tier.cta })
      ]
    }
  );
}
export {
  PricingCard as P
};
