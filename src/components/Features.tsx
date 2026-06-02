import {
  CalendarClock, Users, Bell, RefreshCw, BarChart3, Star, QrCode, ClipboardList, Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type F = { icon: LucideIcon; title: string; desc: string; tag?: string; span?: string; hot?: boolean };

const features: F[] = [
  { icon: CalendarClock, title: "24時間オンライン予約", desc: "スマホから24時間受付。診療メニュー・担当医・チェアごとに枠を設定し、電話対応を大幅削減。", span: "lg:col-span-2", hot: true },
  { icon: Users, title: "患者管理・カルテ", desc: "来院履歴・連絡先・メモを一元管理。" },
  { icon: Bell, title: "リマインダー自動送信", desc: "前日にメール / SMS / LINE で自動通知。無断キャンセルを抑制。", tag: "メール/SMS/LINE" },
  { icon: RefreshCw, title: "リコール自動化", desc: "定期健診の時期が来た患者を自動抽出して再来院を促進。" },
  { icon: Star, title: "口コミ獲得", desc: "満足した患者をGoogleレビューへ自動誘導。低評価は院内フィードバックへ。", tag: "NEW", hot: true },
  { icon: QrCode, title: "QRセルフ受付", desc: "来院患者がQRで受付。受付の負担を軽減。", tag: "NEW" },
  { icon: BarChart3, title: "経営分析レポート", desc: "予約数・来院数・キャンセル率・売上を可視化し、データで意思決定。", span: "lg:col-span-2" },
  { icon: ClipboardList, title: "問診のデジタル化", desc: "Web事前問診で記入・転記の手間をゼロに。" },
  { icon: Clock, title: "スタッフ・勤怠（QR打刻）", desc: "シフト管理とQR/PIN打刻、時給計算まで。" },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.18]">
            必要な機能を、<span className="text-gradient">まるごと一つに。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-slate-400">
            予約・受付から、患者の定着、評判づくり、経営判断まで。
            複数のツールを契約せず、Arche だけで完結します。
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className={`group relative rounded-3xl border p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  f.hot
                    ? "border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-white/[0.02]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                } ${f.span ?? ""}`}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 30px 60px -30px rgba(16,185,129,0.5)" }}
                />
                <div className="relative flex items-center gap-3">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-2xl text-night-950"
                    style={{ backgroundImage: "linear-gradient(140deg,#6ee7b7,#10b981)" }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  {f.tag && (
                    <span
                      className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${
                        f.tag === "NEW" ? "bg-amber-400/20 text-amber-300" : "bg-emerald-400/15 text-emerald-300"
                      }`}
                    >
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3 className="relative mt-4 text-[17px] font-bold text-white">{f.title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-[1.85] text-slate-400">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
