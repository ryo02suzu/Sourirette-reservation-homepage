import { ArrowRight, ShieldCheck, Sparkles, Star, Bell } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";
import { Aurora } from "./Aurora";

function ProductWindow() {
  const rows = [
    { t: "09:00", n: "田中 美咲", m: "定期健診", s: "done" },
    { t: "10:00", n: "山田 由紀", m: "ホワイトニング", s: "now" },
    { t: "10:30", n: "鈴木 大輔", m: "矯正相談", s: "next" },
    { t: "11:00", n: "伊藤 さくら", m: "クリーニング", s: "next" },
  ];
  return (
    <div className="gborder glow-emerald">
      <div className="gborder-inner overflow-hidden">
        {/* ウィンドウ上部 */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] text-slate-500 font-mono">arche.sourirette.jp / 予約台帳</span>
          <span className="ml-auto text-[10px] text-emerald-300/80 font-mono">LIVE</span>
        </div>

        <div className="p-4">
          {/* 統計 */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              ["本日の予約", "12"],
              ["今月来院", "247"],
              ["キャンセル率", "3.2%"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-xl bg-white/[0.03] border border-white/10 px-3 py-2.5">
                <p className="text-[9px] text-slate-500">{l}</p>
                <p className="text-[18px] font-display font-bold text-white leading-tight mt-0.5">{v}</p>
              </div>
            ))}
          </div>
          {/* 予約行 */}
          <div className="mt-3 space-y-1.5">
            {rows.map((r) => {
              const cls =
                r.s === "now"
                  ? "bg-emerald-500/15 border-emerald-400/40"
                  : r.s === "done"
                    ? "bg-white/[0.02] border-white/5 opacity-55"
                    : "bg-white/[0.03] border-white/10";
              return (
                <div key={r.t} className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 ${cls}`}>
                  <span className="text-[11px] font-mono text-emerald-300">{r.t}</span>
                  <span className="text-[12px] font-semibold text-slate-100 flex-1 truncate">{r.n}</span>
                  <span className="text-[10px] text-slate-500 hidden sm:block">{r.m}</span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      r.s === "now"
                        ? "bg-emerald-400 text-night-950"
                        : r.s === "done"
                          ? "bg-white/10 text-slate-500"
                          : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {r.s === "done" ? "完了" : r.s === "now" ? "受付中" : "予定"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      <Aurora />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_0%,transparent_85%)]" />

      <div className="relative max-w-site mx-auto px-5 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          {/* テキスト */}
          <div className="animate-fadeUp">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              歯科医院のための予約・経営クラウド
            </span>

            <h1 className="mt-6 font-jp font-black tracking-tight text-white leading-[1.1] text-[42px] sm:text-[56px] lg:text-[66px]">
              医院の“まわす仕事”を、
              <br />
              <span className="text-gradient">ぜんぶ自動で。</span>
            </h1>

            <p className="mt-6 text-[16px] leading-[2] text-slate-400 max-w-xl">
              予約・患者管理・リコール・リマインダーから、口コミ獲得・QR受付・経営分析まで。
              バラバラの業務を <span className="text-white font-semibold">Arche</span> ひとつに統合する、
              歯科医院のためのクラウド。
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_MAILTO}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500 hover:to-emerald-400 transition-all"
                style={{ boxShadow: "0 14px 40px -12px rgba(16,185,129,0.85)" }}
              >
                導入のご相談（無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="glass inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
              >
                機能を見る
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                個人情報保護法 準拠・SSL暗号化
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-4 h-4 text-emerald-400" />
                21名の現役開業医が監修
              </span>
            </div>
          </div>

          {/* ダーク製品ウィンドウ + 浮遊チップ */}
          <div className="relative animate-fadeUp [animation-delay:0.15s]">
            <ProductWindow />

            <div className="glass-2 absolute -left-3 sm:-left-7 bottom-10 flex items-center gap-3 rounded-2xl px-4 py-3 animate-floaty">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-400 text-night-950">
                <Bell className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[12px] font-bold text-white">前日リマインダー送信</p>
                <p className="text-[11px] text-slate-400">LINEで自動通知</p>
              </div>
            </div>

            <div className="glass-2 absolute -right-2 sm:-right-6 top-8 flex items-center gap-2.5 rounded-2xl px-4 py-3 animate-floaty [animation-delay:1.4s]">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <div>
                <p className="text-[12px] font-bold text-white">★5 の口コミ獲得</p>
                <p className="text-[11px] text-slate-400">Googleレビューへ誘導</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
