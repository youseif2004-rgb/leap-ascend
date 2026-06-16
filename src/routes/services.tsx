import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, processSteps } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LEAP" },
      { name: "description", content: "AI strategy, intelligent automation, custom agents, SaaS engineering, data, and generative experiences — delivered end to end." },
      { property: "og:title", content: "Services — LEAP" },
      { property: "og:description", content: "Six disciplines, one accountable team. Strategy through scale." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Strategy. Build. Scale. One team."
        description="Six tightly-integrated disciplines, delivered by a single senior pod. No hand-offs. No theater. Just compounding outcomes."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <SectionReveal className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.title} service={s} expanded />)}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x">
          <RevealItem className="max-w-2xl mb-14">
            <span className="eyebrow">How we work</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">A four-step rhythm.</h2>
          </RevealItem>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, i) => (
              <RevealItem key={p.step} className="card-surface p-7 relative overflow-hidden">
                <span className="heading-display text-7xl text-white/5 absolute -top-2 -right-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Step {i + 1}</span>
                <h3 className="heading-display text-2xl text-white mt-3 relative">{p.step}</h3>
                <p className="mt-3 text-white/65 text-sm leading-relaxed relative">{p.body}</p>
              </RevealItem>
            ))}
          </div>
          <RevealItem className="mt-14">
            <Link to="/contact" className="btn-primary">
              Tell us what you're building <ArrowRight size={16} />
            </Link>
          </RevealItem>
        </div>
      </SectionReveal>
    </>
  );
}
