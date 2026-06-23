import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const EASE = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};
function SectionReveal({ children, className, as = "section", id }) {
  const Comp = motion[as];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      id,
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants: stagger,
      children
    }
  );
}
function RevealItem({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className, variants: fadeUp, children });
}
export {
  RevealItem as R,
  SectionReveal as S
};
