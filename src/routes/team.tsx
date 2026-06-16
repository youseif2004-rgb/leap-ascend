import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { team } from "@/lib/mockData";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — LEAP" },
      { name: "description", content: "Senior operators, engineers, and designers who care more about your outcomes than their own logos." },
      { property: "og:title", content: "Team — LEAP" },
      { property: "og:description", content: "The people behind LEAP." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="A senior bench, every single time."
        description="No juniors hidden behind a partner. The people who answer your first call are the people writing your code on Friday."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />

      <SectionReveal className="py-20">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <motion.article
                key={m.name}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group card-surface p-6 text-center"
              >
                <div className="relative mx-auto w-28 h-28">
                  <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, var(--purple), var(--gold))", padding: 2 }}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-[var(--navy)]">
                      <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "0 0 36px 4px rgba(109,74,255,0.5)" }} />
                </div>
                <h3 className="heading-display text-lg text-white mt-5">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] mt-1">{m.role}</p>
                <div className="mt-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="LinkedIn"><Linkedin size={13} /></a>
                  <a href="#" className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="Twitter"><Twitter size={13} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
