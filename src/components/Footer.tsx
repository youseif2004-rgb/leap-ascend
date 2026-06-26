import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Send, Mail, Phone } from "lucide-react";
import { navLinks } from "@/lib/mockData";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px gradient-hairline" />
      <div className="container-x py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo size={32} />
          <p className="mt-5 text-sm text-white/60 max-w-sm leading-relaxed">
            LEAP is an AI-driven intelligent automation and SaaS partner. We turn ambition into momentum — quietly, premium, on time.
          </p>
          <ul className="mt-5 space-y-2.5">
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <Mail size={14} className="text-[var(--gold)]" />
              <a href="mailto:leapsloutions@gmail.com" className="hover:text-[var(--gold)] transition-colors">leapsloutions@gmail.com</a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <Phone size={14} className="text-[var(--gold)]" />
              <a href="tel:+201220984499" className="hover:text-[var(--gold)] transition-colors">+20 122 098 4499</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Navigate</h4>
          <ul className="space-y-2.5">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Company</h4>
          <ul className="space-y-2.5">
            {navLinks.slice(4).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Get the brief</h4>
          <p className="text-sm text-white/60 mb-4">One sharp email a month. Field notes from the frontier.</p>
          <form className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email" placeholder="you@company.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--purple)] w-9 h-9 text-white hover:bg-[var(--purple-soft)] transition-colors" aria-label="Subscribe">
              <Send size={15} />
            </button>
          </form>
          <div className="flex items-center gap-3 mt-5">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" aria-label="Social link">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} LEAP Intelligent Solutions. All rights reserved.</p>
          <p className="text-xs text-white/40 tracking-[0.2em] uppercase">Where ambition takes flight</p>
        </div>
      </div>
    </footer>
  );
}
