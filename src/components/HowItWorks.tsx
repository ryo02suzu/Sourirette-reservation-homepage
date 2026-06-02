import { MessageCircle, Settings2, Share2, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const steps: { icon: LucideIcon; step: string; title: string; desc: string }[] = [
  { icon: MessageCircle, step: "01", title: "お問い合わせ", desc: "状況をうかがい、最適なプランをご提案します。" },
  { icon: Settings2, step: "02", title: "初期セットアップ", desc: "メニュー・スタッフ・営業時間を設定。導入をサポート。" },
  { icon: Share2, step: "03", title: "予約ページ公開", desc: "医院専用URLを発行。HP・Googleマップ・LINEから案内。" },
  { icon: LineChart, step: "04", title: "運用しながら改善", desc: "来院・売上をレポートで把握し、医院を伸ばす。" },
];

export function HowItWorks() {
  return (
    <section id="flow" className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36">
      <Reveal className="text-center">
        <h2 className="h-section text-ink text-[32px] sm:text-[46px]">導入は、4ステップ。</h2>
        <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
          ITが苦手でも大丈夫。セットアップから運用開始まで、担当者がご一緒します。
        </p>
      </Reveal>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.step} delay={i * 110} className="text-center">
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-canvas text-emerald-600">
                <Icon className="w-7 h-7" strokeWidth={1.6} />
              </div>
              <p className="mt-5 text-[13px] font-semibold text-emerald-700">STEP {s.step}</p>
              <h3 className="mt-1 text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.75] text-sub max-w-[230px] mx-auto">{s.desc}</p>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <a
          href={CONTACT_MAILTO}
          className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[16px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
        >
          まずは無料で相談する
        </a>
      </div>
    </section>
  );
}
