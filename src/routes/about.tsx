import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { stats, values, timeline } from "@/lib/mockData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LEAP" },
      { name: "description", content: "Inside LEAP: the people, principles, and milestones behind a decade of AI-driven product craft." },
      { property: "og:title", content: "About — LEAP" },
      { property: "og:description", content: "The people, principles, and milestones behind a decade of AI-driven product craft." },
    ],
  }),
  component: AboutPage,
});

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return c.stop;
  }, [inView, to, mv]);
  return (
    <span ref={ref} className="heading-display gradient-text text-5xl md:text-6xl">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About LEAP"
        title="A decade of building the future, quietly."
        description="LEAP is a senior team of operators, engineers, and designers turning the AI revolution into a competitive edge for companies that refuse to stand still."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <SectionReveal className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <RevealItem>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">From three engineers to a global partner.</h2>
          </RevealItem>
          <RevealItem className="text-white/70 text-lg leading-relaxed space-y-5">
            <p>LEAP began in Cairo in 2015 with a stubborn belief: that ambitious companies anywhere in the world deserve software with the polish of a top-tier studio and the leverage of cutting-edge AI.</p>
            <p>Ten years and 200+ shipped projects later, that belief is the operating system of our company. We pick fewer partners than we could, and go deeper than most. Every engagement is a long, calm, compounding climb — together.</p>
          </RevealItem>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x">
          <RevealItem className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">By the numbers</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">A decade in altitude.</h2>
          </RevealItem>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <CountUp to={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x">
          <RevealItem>
            <span className="eyebrow">Mission · Vision</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-3xl">Turn ambition into momentum. Turn momentum into altitude.</h2>
          </RevealItem>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <RevealItem className="card-surface p-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Mission</span>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">Build the intelligent software layer that lets ambitious teams move faster than the industries they're reshaping.</p>
            </RevealItem>
            <RevealItem className="card-surface p-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Vision</span>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">A world where every great operator has a quietly brilliant AI partner — and where craft, calm, and compounding always win.</p>
            </RevealItem>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x">
          <RevealItem className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">What we believe</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">Four words on the wall.</h2>
          </RevealItem>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealItem key={v.title} className="card-surface p-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="heading-display text-2xl text-white mt-3">{v.title}</h3>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">{v.body}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="py-20">
        <div className="container-x">
          <RevealItem className="max-w-2xl mb-14">
            <span className="eyebrow">Timeline</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">Milestones, not theater.</h2>
          </RevealItem>
          <div className="relative pl-6 md:pl-10 border-l border-white/10">
            {timeline.map((t) => (
              <RevealItem key={t.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[31px] md:-left-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{t.year}</span>
                <h3 className="heading-display text-2xl text-white mt-2">{t.title}</h3>
                <p className="mt-2 text-white/65 max-w-2xl">{t.body}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
