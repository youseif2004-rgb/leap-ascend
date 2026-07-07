import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: "ليب — أتمتة الذكاء الاصطناعي وحلول SaaS | القاهرة، مصر" },
      { name: "description", content: "ليب تصمم وتبني حلول أتمتة الذكاء الاصطناعي والوكلاء الذكية ومنتجات SaaS للشركات الطموحة في مصر ومنطقة الشرق الأوسط." },
    ],
  }),
  component: ArabicHomePage,
});

function ArabicHomePage() {
  return (
    <div dir="rtl">
      <section className="relative min-h-[100dvh] flex items-center pt-20 pb-8 md:pt-24">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-center">
          <div>
            <span className="eyebrow text-xs sm:text-sm">
              <Sparkles size={10} className="text-[var(--gold)]" />
              حلول ذكية · تأسست عام 2015
            </span>

            <h1 className="heading-display mt-4 sm:mt-6 text-[clamp(1.8rem,6vw,5.5rem)] leading-[0.95]">
              <span className="gradient-text">حيث يحلّق</span><br />
              <span className="text-white">الطموح.</span>
            </h1>

            <p className="mt-4 sm:mt-7 max-w-full sm:max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              ليب هي الشريك الذكي للأتمتة وحلول SaaS للشركات التي لم تعد تنتظر. نصمم ونبني ونشغّل برمجيات ذكية تراقب تقدمك بهدوء، أسبوعًا بعد أسبوع.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/work" className="btn-primary w-full sm:w-auto">
                استكشف أعمالنا <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto">تواصل معنا</Link>
            </div>

            <div className="mt-6 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-[9px] sm:text-[10px] md:text-xs text-white/45">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                نستقبل حجوزات الربع الثالث
              </div>
              <span>SOC 2 · ISO 27001</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-0">
            <div className="relative scale-[1.2] sm:scale-[1.6] md:scale-[2] lg:scale-[3.2] origin-center">
              <Logo size={120} withWordmark={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">عن ليب</span>
            <h2 className="heading-display gradient-text mt-4 text-4xl md:text-5xl">
              نبني الطبقة الذكية التي تقف خلف الشركات الطموحة.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              منذ عشر سنوات ونحن نعمل جنبًا إلى جنب مع المؤسسين والمشغّلين ومديري التقنية لبناء برمجيات لا تكتفي بالعمل — بل تراكم النتائج. ذكية بهدوء، ممتازة الاستخدام، وموثوقة بلا تهاون.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-[var(--gold)] transition-colors link-underline">
              تعرف علينا أكثر <ArrowRight size={14} />
            </Link>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div>
                <span className="heading-display gradient-text text-5xl md:text-6xl">٢٠٠+</span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">مشروع تم تسليمه</p>
              </div>
              <div>
                <span className="heading-display gradient-text text-5xl md:text-6xl">٨٠+</span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">عميل حول العالم</p>
              </div>
              <div>
                <span className="heading-display gradient-text text-5xl md:text-6xl">١٠+</span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">سنوات من الخبرة</p>
              </div>
              <div>
                <span className="heading-display gradient-text text-5xl md:text-6xl">٩٩٪</span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">رضا العملاء</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square max-w-[520px] justify-self-center">
            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(109,74,255,0.35), transparent 65%)", filter: "blur(40px)" }} />
            <div className="relative flex items-center justify-center w-full h-full">
              <Logo size={120} withWordmark={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}