import { PhoneOff, CalendarX2, UserMinus, MessageSquareWarning, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; problem: string; solution: string }[] = [
  { icon: PhoneOff, problem: "予約の電話対応に追われ、診療に集中できない", solution: "24時間オンライン予約で、電話の本数そのものを削減" },
  { icon: CalendarX2, problem: "無断キャンセル・ドタキャンで枠が埋まらない", solution: "メール / SMS / LINE の自動リマインダーで来院率を改善" },
  { icon: UserMinus, problem: "一度来た患者が、定期健診で戻ってこない", solution: "リコール自動化で、再来院のタイミングを逃さない" },
  { icon: MessageSquareWarning, problem: "良い診療をしているのに、口コミが増えない", solution: "満足した患者をGoogleレビューへ自動誘導し、評判を可視化" },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 border-y border-white/10 bg-white/[0.015]">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Problem → Solution</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.2]">
            その“あるある”、<span className="text-gradient">Archeが解く。</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.problem} className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <div className="flex items-start gap-3.5 px-6 py-5">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 text-slate-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-wide text-slate-500">課題</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-slate-200 leading-snug">{it.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 px-6 py-5 bg-gradient-to-r from-emerald-500/15 to-transparent border-t border-emerald-400/20">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-400 text-night-950 shrink-0">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-wide text-emerald-300">Archeなら</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-white leading-snug">{it.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
