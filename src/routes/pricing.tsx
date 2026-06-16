import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { PricingCard } from "@/components/PricingCard";
import { pricing, faqs } from "@/lib/mockData";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — LEAP" },
      { name: "description", content: "Three transparent partnership plans — Starter, Gold, and Premium — with the same world-class team behind every one." },
      { property: "og:title", content: "Pricing — LEAP" },
      { property: "og:description", content: "Transparent plans for ambitious teams." },
    ],
  }),
  component: PricingPage,
});

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <RevealItem className="card-surface overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 text-left p-6 hover:bg-white/[0.02] transition-colors">
        <span className="heading-display text-lg text-white">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-[var(--gold)] shrink-0">
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-white/65 leading-relaxed">{a}</p>
      </motion.div>
    </RevealItem>
  );
}

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnership plans"
        title="Transparent. Tiered. Compounding."
        description="Three commitment levels. Same world-class team. Move between them anytime — many partners begin on Gold and graduate to Premium within two quarters."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Pricing" }]}
      />

      <SectionReveal className="py-12">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricing.map((p) => <PricingCard key={p.name} tier={p} />)}
          </div>
          <RevealItem className="mt-10 text-center text-xs text-white/45 tracking-wide">
            Prices in USD. Tax exclusive. No setup fees. Cancel any cycle.
          </RevealItem>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x max-w-3xl mx-auto">
          <RevealItem className="text-center mb-12">
            <span className="eyebrow">Questions, answered</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">The short version.</h2>
          </RevealItem>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
