import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/ar/about")({
  head: () => ({
    meta: [
      { title: "عن ليب — ليب" },
      { name: "description", content: "داخل ليب: الأشخاص والمبادئ والمحطات وراء عقد من الحرفية في بناء المنتجات المدعومة بالذكاء الاصطناعي." },
    ],
    links: [
      { rel: "alternate", hreflang: "en", href: "https://www.leaptech.solutions/about" },
      { rel: "alternate", hreflang: "ar", href: "https://www.leaptech.solutions/ar/about" },
    ],
  }),
  component: ArabicAboutPage,
});

function ArabicAboutPage() {
  return (
    <div dir="rtl">
      <PageHeader
        eyebrow="عن ليب"
        title="عقد من بناء المستقبل، بهدوء."
        description="ليب فريق من كبار المشغّلين والمهندسين والمصممين يحوّلون ثورة الذكاء الاصطناعي إلى ميزة تنافسية للشركات التي ترفض التوقف."
        breadcrumb={[{ label: "الرئيسية", to: "/ar" }, { label: "عن ليب" }]}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">قصتنا</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">من ثلاثة مهندسين إلى شريك عالمي.</h2>
          </div>
          <div className="text-white/70 text-lg leading-relaxed space-y-5">
            <p>بدأت ليب في القاهرة عام 2015 بإيمان راسخ: أن الشركات الطموحة في أي مكان بالعالم تستحق برمجيات بجودة استوديوهات النخبة وقوة أحدث تقنيات الذكاء الاصطناعي.</p>
            <p>بعد عشر سنوات وأكثر من ٢٠٠ مشروع تم تسليمه، أصبح هذا الإيمان هو نظام التشغيل لشركتنا. نختار عددًا أقل من الشركاء مما نستطيع، ونتعمق أكثر من معظم الآخرين. كل تعاون هو تسلّق طويل وهادئ ومتراكم — معًا.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">بالأرقام</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">عقد من الارتقاء.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="heading-display gradient-text text-5xl md:text-6xl">٢٠٠+</span>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">مشروع تم تسليمه</p>
            </div>
            <div className="text-center">
              <span className="heading-display gradient-text text-5xl md:text-6xl">٨٠+</span>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">عميل حول العالم</p>
            </div>
            <div className="text-center">
              <span className="heading-display gradient-text text-5xl md:text-6xl">١٠+</span>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">سنوات من الخبرة</p>
            </div>
            <div className="text-center">
              <span className="heading-display gradient-text text-5xl md:text-6xl">٩٩٪</span>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">رضا العملاء</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <span className="eyebrow">الرسالة · الرؤية</span>
          <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl max-w-3xl">حوّل الطموح إلى زخم. وحوّل الزخم إلى ارتقاء.</h2>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="card-surface p-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">الرسالة</span>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">نبني الطبقة البرمجية الذكية التي تتيح للفرق الطموحة التحرك أسرع من الصناعات التي يعيدون تشكيلها.</p>
            </div>
            <div className="card-surface p-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">الرؤية</span>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">عالم يمتلك فيه كل مشغّل عظيم شريك ذكاء اصطناعي هادئ التميز — عالم تنتصر فيه الحرفية والهدوء والتراكم دائمًا.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">ما نؤمن به</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">أربع كلمات على الجدار.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-surface p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">٠١</span>
              <h3 className="heading-display text-2xl text-white mt-3">الحرفية</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">كل بكسل، وكل واجهة برمجية، وكل محادثة — بمعايير أعلى.</p>
            </div>
            <div className="card-surface p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">٠٢</span>
              <h3 className="heading-display text-2xl text-white mt-3">الوضوح</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">نستبدل الكلمات الرنانة بلغة بسيطة ونتائج قابلة للإثبات.</p>
            </div>
            <div className="card-surface p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">٠٣</span>
              <h3 className="heading-display text-2xl text-white mt-3">الشجاعة</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">نختار الطريق الأصعب والأصوب. ثم ننفذه.</p>
            </div>
            <div className="card-surface p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">٠٤</span>
              <h3 className="heading-display text-2xl text-white mt-3">التراكم</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">انتصارات صغيرة وحادة تتراكم أسبوعيًا لتحقق نتائج ضخمة.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">الجدول الزمني</span>
            <h2 className="heading-display gradient-text mt-3 text-4xl md:text-5xl">محطات حقيقية، لا استعراض.</h2>
          </div>
          <div className="relative pr-6 md:pr-10 border-r border-white/10">
            <div className="relative pb-12">
              <span className="absolute -right-[31px] md:-right-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">2015</span>
              <h3 className="heading-display text-2xl text-white mt-2">تأسست ليب في القاهرة</h3>
              <p className="mt-2 text-white/65 max-w-2xl">ثلاثة مهندسين، وهوس واحد: برمجيات فاخرة للشركات الطموحة.</p>
            </div>
            <div className="relative pb-12">
              <span className="absolute -right-[31px] md:-right-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">2018</span>
              <h3 className="heading-display text-2xl text-white mt-2">أول ممارسة للذكاء الاصطناعي</h3>
              <p className="mt-2 text-white/65 max-w-2xl">أنظمة تعلم آلي إنتاجية للرعاية الصحية والخدمات اللوجستية — بهدوء، دون استعراض.</p>
            </div>
            <div className="relative pb-12">
              <span className="absolute -right-[31px] md:-right-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">2021</span>
              <h3 className="heading-display text-2xl text-white mt-2">التوسع إلى الشرق الأوسط وأوروبا</h3>
              <p className="mt-2 text-white/65 max-w-2xl">فرق عمل مدمجة في ١٢ دولة. والمعايير في ارتفاع مستمر.</p>
            </div>
            <div className="relative pb-12">
              <span className="absolute -right-[31px] md:-right-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">2024</span>
              <h3 className="heading-display text-2xl text-white mt-2">عصر الأنظمة الوكيلة</h3>
              <p className="mt-2 text-white/65 max-w-2xl">وكلاء مخصصون داخل سير عمل الشركات الرائدة في مجالاتها.</p>
            </div>
            <div className="relative pb-0">
              <span className="absolute -right-[31px] md:-right-[43px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">2026</span>
              <h3 className="heading-display text-2xl text-white mt-2">حيث يحلّق الطموح</h3>
              <p className="mt-2 text-white/65 max-w-2xl">أكثر من ٢٠٠ مشروع. أكثر من ٨٠ شريكًا. وعد واحد — تحويل الزخم إلى ارتقاء.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}