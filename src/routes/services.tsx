import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, processSteps } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Design, Online Stores & AI Automation Services | LEAP" },
      { name: "description", content: "LEAP builds websites, online stores, SaaS platforms, and AI automation systems for businesses in Egypt. تصميم مواقع، متاجر إلكترونية، وأنظمة SaaS مخصصة." },
      { property: "og:title", content: "Website Design, Online Stores & AI Automation Services | LEAP" },
      { property: "og:description", content: "LEAP builds websites, online stores, SaaS platforms, and custom systems for businesses in Egypt." },
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
          <RevealItem className="max-w-3xl mb-14">
            <span className="eyebrow">Website & Online Store Design</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">Need a website or online store built? That's us too.</h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Whether you need a simple business website, a full online store, or a custom web platform — LEAP designs and builds it from scratch, hosted, fast, and ready to take customers from day one.
            </p>
          </RevealItem>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-surface p-8">
              <h3 className="heading-display text-xl text-white">Business Websites</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">A professional website for your company, clinic, or shop — built to load fast, rank on Google, and turn visitors into customers.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="heading-display text-xl text-white">Online Stores (E-Commerce)</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">A complete online store with product pages, cart, checkout, and payment — so you can sell online in Egypt or internationally.</p>
            </div>
            <div className="card-surface p-8">
              <h3 className="heading-display text-xl text-white">Custom Web Platforms</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">Booking systems, dashboards, and web apps built around exactly how your business works.</p>
            </div>
          </div>
          <RevealItem className="mt-10">
            <Link to="/contact" className="btn-primary">
              Get a quote for your website <ArrowRight size={16} />
            </Link>
          </RevealItem>
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
