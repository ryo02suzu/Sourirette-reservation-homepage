import { Zap, BellRing, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Zap, title: "圧倒的な使いやすさ", text: "複雑な機能を削ぎ落としたからこそ実現できた、直感的なUI。" },
  { icon: BellRing, title: "キャンセル待ちの自動化", text: "キャンセル枠をLINEで自動通知。チェアタイムの損失をなくします。" },
  { icon: Rocket, title: "導入即日で現場へ", text: "新人スタッフでも30分でマスター可能。研修の手間をゼロにします。" },
];

export function ExtremeFocus() {
  return (
    <section id="arche" className="bg-brand-deep text-white">
      <div className="max-w-site mx-auto px-6 py-24 lg:py-32 space-y-16 lg:space-y-20">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-extrabold text-center tracking-tight max-w-4xl mx-auto leading-[1.3]">
          電子カルテも、会計機能もありません。
          <br />
          <span style={{ color: "#16A34A" }}>ただ「予約」を、極める。</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 lg:p-10 space-y-4 hover:bg-white/[0.09] transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-xl" style={{ background: "#16A34A" }}>
                  <Icon className="w-6 h-6 text-white" />
                </span>
                <h3 className="text-[20px] lg:text-[24px] font-bold">{b.title}</h3>
                <p className="text-[14px] text-slate-300 leading-[1.85]">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
