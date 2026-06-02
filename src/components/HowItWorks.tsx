import { MessageCircle, Settings2, Share2, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const steps: { icon: LucideIcon; step: string; title: string; desc: string }[] = [
  { icon: MessageCircle, step: "01", title: "お問い合わせ", desc: "フォーム/メールでご相談。状況をうかがい最適なプランをご提案。" },
  { icon: Settings2, step: "02", title: "初期セットアップ", desc: "メニュー・スタッフ・営業時間を設定。導入をサポートします。" },
  { icon: Share2, step: "03", title: "予約ページ公開", desc: "医院専用URLを発行。HP・Googleマップ・LINEから案内。" },
  { icon: LineChart, step: "04", title: "運用しながら改善", desc: "来院・売上をレポートで把握。リコールや口コミで医院を伸ばす。" },
];

export function HowItWorks() {
  return (
    <section id="flow" className="relative py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="label-mono">// HOW IT WORKS</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.2]">
            導入は、<span className="text-gradient">4ステップ。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-slate-400">
            ITが苦手でも大丈夫。セットアップから運用開始まで、担当者がご一緒します。
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* 接続ライン */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal as="li" key={s.step} delay={idx * 110} className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      className="relative z-10 grid place-items-center w-14 h-14 rounded-2xl bg-night-800 border border-emerald-400/40 text-emerald-300"
                      style={{ boxShadow: "0 0 0 4px rgba(5,8,10,1), 0 12px 30px -12px rgba(16,185,129,0.7)" }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display text-[28px] font-bold text-white/10">{s.step}</span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.85] text-slate-400">{s.desc}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500 hover:to-emerald-400 transition-all"
            style={{ boxShadow: "0 14px 40px -12px rgba(16,185,129,0.85)" }}
          >
            まずは無料で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
