import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C5h8m6mB.mjs";
import { S as SectionReveal, R as RevealItem } from "./SectionReveal-DQ_wEvxI.mjs";
import { S as Send, h as Mail, P as Phone, i as MapPin, T as Twitter, L as Linkedin, G as Github, f as Check } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  function validate() {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please share your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "A working email helps us reply.";
    if (form.message.trim().length < 10) e.message = "A few sentences about your goal, please.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, 4e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Contact", title: "Tell us what you're building.", description: "One sharp paragraph is enough. We reply within a business day with a calibrated next step — or a referral if we're not the right fit.", breadcrumb: [{
      label: "Home",
      to: "/"
    }, {
      label: "Contact"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-[1.3fr_1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "card-surface p-8 md:p-10 space-y-6 relative overflow-hidden", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-20 w-72 h-72 rounded-full pointer-events-none", style: {
          background: "radial-gradient(circle, rgba(109,74,255,0.2), transparent 60%)",
          filter: "blur(40px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.2em] text-white/55", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: "mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors focus:[box-shadow:0_8px_30px_-10px_rgba(109,74,255,0.6)] focus:[background:linear-gradient(180deg,transparent,rgba(109,74,255,0.05))]", placeholder: "Your full name" }),
          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300 mt-2", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.2em] text-white/55", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), className: "mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors", placeholder: "you@company.com" }),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300 mt-2", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.2em] text-white/55", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "mt-2 w-full bg-transparent border-0 border-b border-white/15 focus:border-[var(--purple)] outline-none py-3 text-white text-lg transition-colors resize-none", placeholder: "A paragraph about your goal, timeline, and team." }),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300 mt-2", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40", children: "We reply within one business day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-primary", children: [
            "Send message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealItem, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-surface p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Direct lines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "mt-1 text-[var(--gold)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "hello@leap.studio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/45", children: "General & new partnerships" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "mt-1 text-[var(--gold)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "+20 2 2735 0000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/45", children: "Sun – Thu · 09:00–19:00 GMT+2" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mt-1 text-[var(--gold)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Smart Village, Giza · Cairo, Egypt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/45", children: "Studios in Cairo, Dubai & Berlin" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-surface p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Follow LEAP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-3", children: [Twitter, Linkedin, Github].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-11 h-11 inline-flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors", "aria-label": "Social link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-surface p-7 relative overflow-hidden aspect-[5/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hex-bg opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 42, className: "text-[var(--gold)] drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white/60", children: "HQ · Cairo" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sent && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 24
    }, transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }, className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] card-surface px-5 py-4 flex items-center gap-3", style: {
      borderColor: "rgba(212,175,55,0.5)",
      boxShadow: "0 20px 60px -20px rgba(212,175,55,0.4)"
    }, role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: "Message received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 text-xs", children: "We'll reply within one business day." })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
