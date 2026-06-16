import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHeader({ eyebrow, title, description, breadcrumb }: Props) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--purple)] opacity-25 blur-[120px]" />
      <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--gold)] opacity-10 blur-[120px]" />

      <div className="container-x relative">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="hover:text-white transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight size={12} />}
              </span>
            ))}
          </div>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <motion.h1
          className="heading-display gradient-text mt-4 text-5xl md:text-7xl max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>
        )}
        <div className="mt-10 gradient-hairline" />
      </div>
    </section>
  );
}
