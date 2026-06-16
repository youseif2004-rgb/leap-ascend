import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/mockData";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen?: () => void }) {
  const isExternal = !!project.url;
  const cardContent = (
    <>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image} alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-end p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-flex items-center gap-2 text-sm text-white">
            {isExternal ? "Visit Website" : "View Project"} <ArrowUpRight size={16} className="text-[var(--gold)]" />
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">{project.client}</p>
        <h3 className="heading-display text-xl text-white mt-2">{project.title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-[0.15em] text-white/55 border border-white/10 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6 }}
        className="group relative w-full text-left card-surface overflow-hidden block cursor-pointer"
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative w-full text-left card-surface overflow-hidden"
    >
      {cardContent}
    </motion.button>
  );
}
