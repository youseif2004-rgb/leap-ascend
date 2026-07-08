import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Brain, Workflow, Bot, Cloud, LineChart, Sparkles as SparklesIcon } from "lucide-react";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: "ليب — أتمتة الذكاء الاصطناعي وحلول SaaS | القاهرة، مصر" },
      { name: "description", content: "ليب تصمم وتبني حلول أتمتة الذكاء الاصطناعي والوكلاء الذكية ومنتجات SaaS للشركات الطموحة في مصر ومنطقة الشرق الأوسط." },
    ],
    links: [
      { rel: "alternate", hreflang: "en", href: "https://www.leaptech.solutions/" },
      { rel: "alternate", hreflang: "ar", href: "https://www.leaptech.solutions/ar" },
      { rel: "alternate", hreflang: "x-default", href: "https://www.leaptech.solutions/" },
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
<section className="py-28">
        <div className="container-x">
          <div className="mb-14">
            <span className="eyebrow">ماذا نقدم</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl">
              شريك ذكاء اصطناعي متكامل.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-surface p-8">
              <Brain size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">استراتيجية واستشارات الذكاء الاصطناعي</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">نحدد أين يخلق الذكاء الاصطناعي قيمة حقيقية في عملك — ثم نبني خارطة الطريق لتحقيقها.</p>
            </div>
            <div className="card-surface p-8">
              <Workflow size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">الأتمتة الذكية</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">استبدل العمل اليدوي المتكرر بسير عمل ذكي يتعلم ويقرر ويتوسع معك.</p>
            </div>
            <div className="card-surface p-8">
              <Bot size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">وكلاء ذكاء اصطناعي مخصصون</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">وكلاء مدربون على مجال عملك يعملون داخل أدواتك — المبيعات والدعم والعمليات — لزيادة الإنتاجية بهدوء.</p>
            </div>
            <div className="card-surface p-8">
              <Cloud size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">هندسة منتجات SaaS</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">من الفكرة إلى الإطلاق وحتى التوسع — نبني منتجات احترافية بجودة استوديوهات النخبة.</p>
            </div>
            <div className="card-surface p-8">
              <LineChart size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">البيانات والتحليلات</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">حوّل بياناتك الخام إلى نظام تشغيل لقراراتك — بأنابيب بيانات نظيفة ولوحات تحكم دقيقة.</p>
            </div>
            <div className="card-surface p-8">
              <SparklesIcon size={28} className="text-[var(--gold)]" />
              <h3 className="heading-display text-xl text-white mt-4">تجارب توليدية بالذكاء الاصطناعي</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">أطلق تجارب ذكاء اصطناعي للعملاء تبدو أصيلة وسريعة وفاخرة بلا شك.</p>
            </div>
          </div>
        </div>
      </section>
<section className="py-28">
        <div className="container-x">
          <div className="mb-14">
            <span className="eyebrow">أعمال مختارة</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-2xl">
              برمجيات هادئة، نتائج صاخبة.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://perfume-pluto.vercel.app" target="_blank" rel="noopener noreferrer" className="card-surface p-8 block hover:border-[var(--gold)]/40 transition-colors">
              <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-black/20">
     <img src="/images/pluto-fragrance.png" alt="Pluto Fragrance" className="w-full h-full object-cover" />
   </div>
   <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">ويب</span>
   <h3 className="heading-display text-2xl text-white mt-3">Pluto Fragrance</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">
                نظام توصية عطور مدعوم بالذكاء الاصطناعي يربط المستخدمين بأفخم العطور من خلال اختبار شخصي وتعلّم تفضيلاتهم.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">توصيات الذكاء الاصطناعي</span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">تجارة إلكترونية</span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">فخامة</span>
              </div>
            </a>

            <a href="https://samar-elazab-dental.vercel.app" target="_blank" rel="noopener noreferrer" className="card-surface p-8 block hover:border-[var(--gold)]/40 transition-colors">
              <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-black/20">
     <img src="/images/samar-dental.png" alt="Samar El Azab Dental" className="w-full h-full object-cover" />
   </div>
   <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">ويب</span>
   <h3 className="heading-display text-2xl text-white mt-3">Samar El Azab Dental</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">
                موقع عيادة أسنان متطور مع نظام حجز مواعيد عبر الإنترنت ولوحة تحكم إدارية عبر الهاتف لعيادة في مدينة الشروق.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">رعاية صحية</span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">حجز مواعيد</span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">لوحة تحكم</span>
              </div>
            </a>
          </div>
        </div>
      </section>
<section className="py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
            style={{ background: "linear-gradient(135deg, #2c1f6b 0%, #0b1020 70%)" }}
          >
            <span className="eyebrow">فصلك القادم</span>
            <h2 className="heading-display gradient-text mt-4 text-4xl md:text-6xl">هل أنت مستعد لأخذ القفزة؟</h2>
            <p className="relative mt-6 max-w-xl mx-auto text-white/70">
              مكالمة واحدة. سنحدد أقوى خطوة ذكاء اصطناعي يمكنك اتخاذها وكيفية تنفيذها خلال ربع سنة.
            </p>
            <div className="relative mt-10 flex items-center justify-center">
              <Link to="/contact" className="btn-gold text-base">
                ابدأ المحادثة <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}