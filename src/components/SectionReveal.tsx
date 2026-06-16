import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "./motion";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  id?: string;
  delay?: number;
}

export function SectionReveal({ children, className, as = "section", id }: Props) {
  const Comp = motion[as] as typeof motion.section;
  return (
    <Comp
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
