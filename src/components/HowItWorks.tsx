import { MessageCircle, Settings2, Share2, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";

const steps: { icon: LucideIcon; step: string; title: string; desc: string }[] = [
  {
    icon: MessageCircle,
    step: "STEP 01",
    title: "お問い合わせ",
    desc: "フォームまたはメールでご相談。医院の状況をうかがい、最適なプランをご提案します。",
  },
  {
    icon: Settings2,
    step: "STEP 02",
    title: "初期セットアップ",
    desc: "診療メニュー・スタッフ・営業時間を設定。導入をこちらでサポートします。",
  },
  {
    icon: Share2,
    step: "STEP 03",
    title: "予約ページを公開",
    desc: "医院専用の予約URLを発行。HP・Googleマップ・LINEから患者様にご案内。",
  },
  {
    icon: LineChart,
    step: "STEP 04",
    title: "運用しながら改善",
    desc: "来院・キャンセル・売上をレポートで把握。リコールや口コミで医院を伸ばします。",
  },
];

export function HowItWorks() {
  return (
    <section id="flow" className="py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-ink text-[30px] lg:text-[42px] leading-[1.2]">
            導入はかんたん。<span className="text-gradient">4ステップ。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-ink-muted">
            ITが苦手でも大丈夫。セットアップから運用開始まで、担当者がご一緒します。
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.step}
                className="relative rounded-3xl border border-emerald-100 bg-white p-6 lg:p-7 hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[44px] font-black text-emerald-100 leading-none select-none">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-emerald-600">
                  {s.step}
                </p>
                <h3 className="mt-1 text-[17px] font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.85] text-ink-muted">{s.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-glow transition-colors"
          >
            まずは無料で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
