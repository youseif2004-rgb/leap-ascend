import { motion, AnimatePresence, useMotionValue, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Sparkles, Zap, Shield, Handshake, Lightbulb, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PricingCard } from "@/components/PricingCard";
import {
  services, projects, pricing, stats, trustedLogos, testimonials, whyLeap,
} from "@/lib/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEAP — AI Automation & Custom AI Agents | Cairo, Egypt" },
      { name: "description", content: "LEAP designs and builds AI automation, custom AI agents, and SaaS products for ambitious businesses in Egypt and the MENA region." },
      { property: "og:title", content: "LEAP — AI Automation & Custom AI Agents | Cairo, Egypt" },
      { property: "og:description", content: "LEAP designs and builds AI automation, custom AI agents, and SaaS products for ambitious businesses in Egypt and the MENA region." },
    ],
    links: [
      { rel: "alternate", hreflang: "en", href: "https://www.leaptech.solutions/" },
      { rel: "alternate", hreflang: "ar", href: "https://www.leaptech.solutions/ar" },
      { rel: "alternate", hreflang: "x-default", href: "https://www.leaptech.solutions/" },
    ],
  }),
  component: HomePage,
});

/* ---------------- progress bar ---------------- */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 inset-x-0 h-[2px] z-[60]"
    >
      <div className="h-full w-full" style={{ background: "linear-gradient(90deg, var(--purple), var(--gold))" }} />
    </motion.div>
  );
}

/* ---------------- magnetic button ---------------- */
function Magnetic({ children, className, to, kind = "primary" }: { children: React.ReactNode; className?: string; to: string; kind?: "primary" | "outline" | "gold" }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.25); y.set(my * 0.3);
  }
  function onLeave() { x.set(0); y.set(0); }

  const cls = kind === "primary" ? "btn-primary" : kind === "gold" ? "btn-gold" : "btn-outline";
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
    >
      <Link to={to} className={cls}>
        {children}
      </Link>
    </motion.div>
  );
}

/* ---------------- count up ---------------- */
function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (reduced) { setValue(to); return; }
      const duration = 1800;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(ease(p) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="heading-display gradient-text text-5xl md:text-6xl tabular-nums">
      {value.toLocaleString()}{suffix}
    </span>
  );
}

/* ---------------- hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    mouseX.set(e.clientX - r.left); mouseY.set(e.clientY - r.top);
  }

  return (
    <section id="home" ref={ref} onMouseMove={onMove} className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-0">
      <div className="absolute inset-0 hex-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* drifting orbs */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(109,74,255,0.55), transparent 60%)", filter: "blur(50px)" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[8%] w-[440px] h-[440px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)", filter: "blur(60px)" }}
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* mouse-follow glow */}
      <motion.div
        className="absolute pointer-events-none w-[340px] h-[340px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: glowX, top: glowY,
          background: "radial-gradient(circle, rgba(109,74,255,0.18), transparent 70%)",
        }}
      />

      <div className="container-x relative grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-center">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="order-2 lg:order-1"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
            <span className="eyebrow text-xs sm:text-sm">
              <Sparkles size={10} className="text-[var(--gold)]" />
              Intelligent Solutions · Est. 2015
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9 }}
            className="heading-display mt-4 sm:mt-6 text-[clamp(1.8rem,6vw,5.5rem)] leading-[0.95]"
          >
            <span className="gradient-text">Where Ambition</span><br />
            <span className="text-white">Takes Flight.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 sm:mt-7 max-w-full sm:max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed"
          >
            LEAP is the intelligent automation and SaaS partner for companies done waiting. We design, build, and operate AI-native software that quietly compounds your advantage — week after week.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Magnetic to="/work" kind="primary" className="w-full sm:w-auto">
              Explore Our Work <ArrowRight size={14} />
            </Magnetic>
            <Magnetic to="/contact" kind="outline" className="w-full sm:w-auto">Get in Touch</Magnetic>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-6 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-[9px] sm:text-[10px] md:text-xs text-white/45">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
              Booking Q3 partnerships
            </div>
            <span>SOC 2 · ISO 27001</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center order-1 lg:order-2 py-4 sm:py-6 md:py-8 lg:py-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 sm:-m-8 md:-m-10 lg:-m-20 rounded-full" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.3), transparent 65%)", filter: "blur(40px)" }} />
            <div className="relative scale-[1.2] sm:scale-[1.6] md:scale-[2] lg:scale-[3.2] origin-center">
              <Logo size={120} withWordmark={false} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- marquee ---------------- */
function Marquee() {
  const row = [...trustedLogos, ...trustedLogos];
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="container-x mb-8 text-center">
        <span className="eyebrow">Trusted by ambitious teams</span>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b1020] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b1020] to-transparent z-10" />
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {row.map((name, i) => (
            <span key={i}
              className="heading-display text-2xl tracking-[0.25em] text-white/30 hover:text-white transition-colors duration-500"
            >{name}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- about teaser ---------------- */
function AboutTeaser() {
  return (
    <SectionReveal id="about" className="py-28">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <RevealItem>
          <span className="eyebrow">About LEAP</span>
          <h2 className="heading-display gradient-text mt-4 text-4xl md:text-5xl">
            We build the intelligent layer beneath the ambitious company.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            For a decade we've embedded with founders, operators, and CTOs to ship software that doesn't just work — it compounds. Quietly intelligent, premium to use, ruthlessly reliable.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-[var(--gold)] transition-colors link-underline">
            Learn more about us <ArrowRight size={14} />
          </Link>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <CountUp to={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</p>
              </RevealItem>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="relative aspect-square max-w-[520px] justify-self-center">
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.35), transparent 65%)", filter: "blur(40px)" }} />
          <motion.svg
            viewBox="0 0 400 400" className="relative w-full h-full"
            animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <linearGradient id="hexg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8a6fff" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            {[120, 160, 200].map((r, i) => {
              const pts = Array.from({ length: 6 }).map((_, k) => {
                const a = (Math.PI / 3) * k - Math.PI / 2;
                return `${200 + r * Math.cos(a)},${200 + r * Math.sin(a)}`;
              }).join(" ");
              return (
                <polygon key={i} points={pts} stroke="url(#hexg)" strokeWidth="1.2" fill="none" opacity={0.45 - i * 0.1} />
              );
            })}
            {Array.from({ length: 6 }).map((_, k) => {
              const a = (Math.PI / 3) * k - Math.PI / 2;
              return <circle key={k} cx={200 + 200 * Math.cos(a)} cy={200 + 200 * Math.sin(a)} r="5" fill="#D4AF37" />;
            })}
            {Array.from({ length: 6 }).map((_, k) => {
              const a = (Math.PI / 3) * k - Math.PI / 2;
              return <line key={k} x1="200" y1="200" x2={200 + 200 * Math.cos(a)} y2={200 + 200 * Math.sin(a)} stroke="url(#hexg)" strokeWidth="0.8" opacity="0.3" />;
            })}
            <circle cx="200" cy="200" r="6" fill="#8a6fff" />
          </motion.svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="heading-display gradient-text text-3xl tracking-[0.3em]">LEAP</span>
          </motion.div>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

/* ---------------- services preview ---------------- */
function ServicesPreview() {
  return (
    <SectionReveal id="services" className="py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <RevealItem>
            <span className="eyebrow">What we do</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl">A full-stack intelligence partner.</h2>
          </RevealItem>
          <RevealItem>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white link-underline">
              View all services <ArrowRight size={14} />
            </Link>
          </RevealItem>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

/* ---------------- work preview ---------------- */
function WorkPreview() {
  return (
    <SectionReveal id="work" className="py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <RevealItem>
            <span className="eyebrow">Selected work</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl">Quiet software, loud outcomes.</h2>
          </RevealItem>
          <RevealItem>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-white link-underline">
              See our work <ArrowRight size={14} />
            </Link>
          </RevealItem>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

/* ---------------- why leap ---------------- */
const whyIcons = [Lightbulb, Zap, Shield, Handshake];
function WhyLeap() {
  return (
    <SectionReveal id="why" className="py-28">
      <div className="container-x">
        <RevealItem className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Why LEAP</span>
          <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">The unfair-advantage stack.</h2>
        </RevealItem>
        <div className="space-y-20">
          {whyLeap.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{w.tag}</span>
                  <h3 className="heading-display text-3xl md:text-4xl text-white mt-3">{w.title}</h3>
                  <p className="mt-5 text-white/70 leading-relaxed text-lg">{w.body}</p>
                </div>
                <div className="card-surface aspect-[5/3] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(109,74,255,0.25), transparent 60%)" }} />
                  <div className="absolute inset-0 hex-bg opacity-30" />
                  <Icon size={64} className="text-[var(--gold)] relative drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}

/* ---------------- pricing preview ---------------- */
function PricingPreview() {
  return (
    <SectionReveal id="pricing" className="py-28">
      <div className="container-x">
        <RevealItem className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Partnership Plans</span>
          <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">Transparent. Tiered. Compounding.</h2>
          <p className="mt-5 text-white/65">Three commitment levels — same world-class team behind every one.</p>
        </RevealItem>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricing.map((p) => <PricingCard key={p.name} tier={p} />)}
        </div>
        <RevealItem className="mt-12 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-white link-underline">
            Compare plans in detail <ArrowRight size={14} />
          </Link>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}

/* ---------------- testimonials ---------------- */
function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const cur = testimonials[i];
  const initials = cur.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  const [role, company] = cur.role.includes(",")
    ? cur.role.split(",").map((s) => s.trim())
    : [cur.role, ""];
  return (
    <SectionReveal id="testimonials" className="py-28">
      <div className="container-x">
        <RevealItem className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Words from partners</span>
          <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">Quiet confidence, loud results.</h2>
        </RevealItem>
        <div
          className="card-surface p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.25), transparent 65%)", filter: "blur(40px)" }} />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 65%)", filter: "blur(40px)" }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Quote size={36} className="text-[var(--gold)]/70 mb-4" />
              <p className="heading-display text-2xl md:text-3xl text-white leading-snug normal-case tracking-tight">
                "{cur.quote}"
              </p>
              <div className="mt-10 flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full inline-flex items-center justify-center heading-display text-white text-lg shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #6D4AFF 0%, #D4AF37 100%)",
                      boxShadow: "0 8px 24px -8px rgba(109,74,255,0.6)",
                    }}
                    aria-hidden
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{cur.name}</p>
                    <p className="text-white/55 text-sm">
                      {role}{company && <> · <span className="text-[var(--gold)]/80">{company}</span></>}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)} className="w-9 h-9 rounded-full border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="Previous">
                    <ChevronLeft size={16} />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, k) => (
                      <button key={k} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-[var(--gold)] shadow-[0_0_12px_rgba(212,175,55,0.7)]" : "w-3 bg-white/20 hover:bg-white/40"}`}
                      />
                    ))}
                  </div>
                  <button onClick={() => setI((v) => (v + 1) % testimonials.length)} className="w-9 h-9 rounded-full border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="Next">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
}

/* ---------------- CTA band ---------------- */
function CTABand() {
  return (
    <SectionReveal id="cta" className="py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "linear-gradient(135deg, #2c1f6b 0%, #0b1020 70%)" }}
        >
          <div className="absolute inset-0 hex-bg opacity-30" />
          <motion.div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.6), transparent 60%)", filter: "blur(60px)" }} animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)", filter: "blur(60px)" }} animate={{ x: [0, -30, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity }} />
          <RevealItem>
            <span className="eyebrow">Your next chapter</span>
            <h2 className="heading-display gradient-text mt-4 text-4xl md:text-6xl">Ready to take the leap?</h2>
            <p className="relative mt-6 max-w-xl mx-auto text-white/70">
              One call. We'll map your highest-leverage AI move and how to ship it inside a quarter.
            </p>
            <div className="relative mt-10 flex items-center justify-center">
              <Link to="/contact" className="btn-gold text-base">
                Start the conversation <ArrowRight size={16} />
              </Link>
            </div>
          </RevealItem>
        </div>
      </div>
    </SectionReveal>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="btt"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full inline-flex items-center justify-center text-[#1a1304] hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(135deg, var(--gold) 0%, #f1d36b 100%)",
            boxShadow: "0 12px 36px -8px rgba(212,175,55,0.6), 0 0 0 1px rgba(212,175,55,0.4)",
          }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function HomePage() {
  // suppress unused warning for motion event util if not used:
  void useMotionValueEvent;
  return (
    <>
      <ScrollProgressBar />
      <Hero />
      <Marquee />
      <AboutTeaser />
      <ServicesPreview />
      <WorkPreview />
      <WhyLeap />
      <PricingPreview />
      <Testimonials />
      <CTABand />
      <BackToTop />
    </>
  );
}
