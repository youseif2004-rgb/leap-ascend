import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Project } from "@/lib/mockData";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — LEAP" },
      { name: "description", content: "Selected projects from LEAP — AI agents, mobile experiences, and edge-native web products for category-defining teams." },
      { property: "og:title", content: "Work — LEAP" },
      { property: "og:description", content: "Selected projects from LEAP." },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Web", "Mobile", "AI"] as const;
type Filter = typeof filters[number];

function WorkPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Quiet software. Loud outcomes."
        description="A glimpse at the products we've shipped with partners across logistics, fintech, retail, healthcare, and media."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Work" }]}
      />

      <SectionReveal className="pt-4 pb-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12 relative">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {filter === f && (
                  <motion.span layoutId="filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #7c5cff, #6D4AFF)", boxShadow: "0 8px 30px -10px rgba(109,74,255,0.6)" }}
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={p} onOpen={() => setActive(p)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionReveal>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <motion.div
              role="dialog" aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full card-surface overflow-hidden"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-black/40 border border-white/15 text-white hover:bg-black/60" aria-label="Close">
                <X size={16} />
              </button>
              <img src={active.image} alt={active.title} className="w-full aspect-[16/9] object-cover" />
              <div className="p-8">
                <span className="eyebrow">{active.client} · {active.category}</span>
                <h3 className="heading-display text-3xl text-white mt-3">{active.title}</h3>
                <p className="mt-4 text-white/70 leading-relaxed">{active.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.15em] text-white/65 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
