import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, Linkedin, Twitter, Github } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LEAP" },
      { name: "description", content: "Tell us what you're building. We'll reply within one business day with a calibrated next step." },
      { property: "og:title", content: "Contact — LEAP" },
      { property: "og:description", content: "Start the conversation with LEAP." },
    ],
  }),
  component: ContactPage,
});

interface Form { name: string; email: string; message: string }
type Errors = Partial<Record<keyof Form, string>>;

function ContactPage() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please share your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "A working email helps us reply.";
    if (form.message.trim().length < 10) e.message = "A few sentences about your goal, please.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 4000);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building."
        description="One sharp paragraph is enough. We reply within a business day with a calibrated next step — or a referral if we're not the right fit."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <SectionReveal className="py-12">
        <div className="container-x grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <RevealItem>
            <form onSubmit={onSubmit} className="card-surface p-8 md:p-10 space-y-6 relative overflow-hidden" noValidate>
              <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.2), transparent 60%)", filter: "blur(40px)" }} />

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/55">Name</label>
                <input
                  type="text" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors focus:[box-shadow:0_8px_30px_-10px_rgba(109,74,255,0.6)] focus:[background:linear-gradient(180deg,transparent,rgba(109,74,255,0.05))]"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-red-300 mt-2">{errors.name}</p>}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/55">Email</label>
                <input
                  type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-xs text-red-300 mt-2">{errors.email}</p>}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/55">Message</label>
                <textarea
                  rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors resize-none"
                  placeholder="A paragraph about your goal, timeline, and team."
                />
                {errors.message && <p className="text-xs text-red-300 mt-2">{errors.message}</p>}
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-white/40">We reply within one business day.</p>
                <button type="submit" className="btn-primary">
                  Send message <Send size={14} />
                </button>
              </div>
            </form>
          </RevealItem>

          <RevealItem className="space-y-6">
            <div className="card-surface p-7">
              <span className="eyebrow">Direct lines</span>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <Mail size={16} className="mt-1 text-[var(--gold)]" />
                  <div>
                    <a href="mailto:leapsloutions@gmail.com" className="text-sm hover:text-[var(--gold)] transition-colors">leapsloutions@gmail.com</a>
                    <p className="text-xs text-white/45">General & new partnerships</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Phone size={16} className="mt-1 text-[var(--gold)]" />
                  <div>
                    <a href="tel:+201220984499" className="text-sm hover:text-[var(--gold)] transition-colors">+20 122 098 4499</a>
                    <p className="text-xs text-white/45">Sun – Thu · 09:00–19:00 GMT+2</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin size={16} className="mt-1 text-[var(--gold)]" />
                  <div>
                    <p className="text-sm">Smart Village, Giza · Cairo, Egypt</p>
                    <p className="text-xs text-white/45">Studios in Cairo, Dubai & Berlin</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-surface p-7">
              <span className="eyebrow">Follow LEAP</span>
              <div className="mt-5 flex items-center gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="Social link">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card-surface p-7 relative overflow-hidden aspect-[5/3]">
              <div className="absolute inset-0 hex-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin size={42} className="text-[var(--gold)] drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]" />
              </div>
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white/60">HQ · Cairo</div>
            </div>
          </RevealItem>
        </div>
      </SectionReveal>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] card-surface px-5 py-4 flex items-center gap-3"
            style={{ borderColor: "rgba(212,175,55,0.5)", boxShadow: "0 20px 60px -20px rgba(212,175,55,0.4)" }}
            role="status"
          >
            <span className="w-8 h-8 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] inline-flex items-center justify-center"><Check size={16} /></span>
            <div>
              <p className="text-white text-sm font-semibold">Message received.</p>
              <p className="text-white/55 text-xs">We'll reply within one business day.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
