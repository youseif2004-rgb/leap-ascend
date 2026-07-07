import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: "ليب — أتمتة الذكاء الاصطناعي وتطوير المتاجر الإلكترونية" },
      { name: "description", content: "ليب تصمم وتبني حلول أتمتة الذكاء الاصطناعي والمتاجر الإلكترونية للشركات الطموحة في مصر." },
    ],
  }),
  component: ArabicTestPage,
});

function ArabicTestPage() {
  return (
    <div dir="rtl" style={{ padding: "60px 20px", textAlign: "center", color: "white" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>مرحبا بكم في ليب</h1>
      <p style={{ marginTop: "16px" }}>هذه صفحة تجريبية باللغة العربية</p>
    </div>
  );
}