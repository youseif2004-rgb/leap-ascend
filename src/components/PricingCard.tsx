import { Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import type { Pricing } from "@/lib/mockData";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function PricingCard({ tier }: { tier: Pricing }) {
  const featured = tier.featured;
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className={[
        "group relative card-surface p-8 flex flex-col transition-all duration-500",
        featured ? "lg:-translate-y-4 lg:scale-[1.03]" : "hover:border-[var(--gold)]/50 hover:shadow-[0_24px_70px_-20px_rgba(109,74,255,0.55)]",
      ].join(" ")}
      style={featured ? {
        background: "linear-gradient(180deg, rgba(212,175,55,0.10), rgba(109,74,255,0.10))",
        borderColor: "rgba(212,175,55,0.55)",
        boxShadow: "0 30px 80px -20px rgba(212,175,55,0.4), 0 0 0 1px rgba(212,175,55,0.45), 0 0 60px -10px rgba(212,175,55,0.25)",
      } : undefined}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--gold)] to-[#f1d36b] text-[10px] tracking-[0.22em] uppercase font-bold text-[#1a1304] px-3 py-1.5 shadow-lg">
          <Sparkles size={11} /> Most Popular
        </span>
      )}

      <header>
        <h3 className="heading-display text-2xl text-white">{tier.name}</h3>
        <p className="mt-2 text-sm text-white/60">{tier.tagline}</p>
      </header>

      <div className="mt-7">
        <p className="text-lg text-white/70 font-medium">Contact us for pricing</p>
      </div>

      <div className="my-6 gradient-hairline opacity-60" />

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/80">
            <span className={[
              "mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0",
              featured ? "bg-[var(--gold)]/20 text-[var(--gold)]" : "bg-[var(--purple)]/20 text-[var(--purple-soft)]",
            ].join(" ")}>
              <Check size={12} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link to="/contact" className={featured ? "btn-gold" : "btn-outline"}>
        {tier.cta}
      </Link>
    </motion.article>
  );
}
