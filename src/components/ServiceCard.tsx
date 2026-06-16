import { motion } from "framer-motion";
import type { Service } from "@/lib/mockData";
import { ArrowUpRight, Check } from "lucide-react";

export function ServiceCard({ service, expanded = false }: { service: Service; expanded?: boolean }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative card-surface p-7 overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/50 hover:shadow-[0_24px_70px_-20px_rgba(109,74,255,0.6)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(400px 200px at 20% 0%, rgba(109,74,255,0.18), transparent 60%)" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-[var(--purple)]/10 text-[var(--purple-soft)] group-hover:text-[var(--gold)] group-hover:border-[var(--gold)]/40 transition-all duration-500 group-hover:rotate-6">
          <Icon size={22} />
        </div>
        <ArrowUpRight size={18} className="text-white/40 group-hover:text-[var(--gold)] transition-colors" />
      </div>
      <h3 className="relative heading-display text-xl mt-6 text-white">{service.title}</h3>
      <p className="relative mt-3 text-sm text-white/65 leading-relaxed">{service.description}</p>
      {expanded && (
        <ul className="relative mt-5 space-y-2.5">
          {service.includes.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-sm text-white/75">
              <Check size={14} className="mt-1 shrink-0 text-[var(--gold)]" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
