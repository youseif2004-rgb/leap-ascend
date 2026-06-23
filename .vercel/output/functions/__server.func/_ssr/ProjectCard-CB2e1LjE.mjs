import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function ProjectCard({ project, onOpen }) {
  const isExternal = !!project.url;
  const cardContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: project.image,
          alt: project.title,
          loading: "lazy",
          className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white", children: project.category }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-sm text-white", children: [
        isExternal ? "Visit Website" : "View Project",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16, className: "text-[var(--gold)]" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-white/40", children: project.client }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-display text-xl text-white mt-2", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60 leading-relaxed", children: project.blurb }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.15em] text-white/55 border border-white/10 px-2 py-1 rounded-full", children: t }, t)) })
    ] })
  ] });
  if (isExternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
        variants: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        whileHover: { y: -6 },
        className: "group relative w-full text-left card-surface overflow-hidden block cursor-pointer",
        children: cardContent
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      type: "button",
      onClick: onOpen,
      variants: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      whileHover: { y: -6 },
      className: "group relative w-full text-left card-surface overflow-hidden",
      children: cardContent
    }
  );
}
export {
  ProjectCard as P
};
