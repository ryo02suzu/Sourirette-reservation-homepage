import { ArrowRight, ShieldCheck, Sparkles, CalendarCheck, Bell, Star } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";

function DashboardPreview() {
  const rows = [
    { time: "09:00", name: "田中 美咲", menu: "定期健診", tone: "done" },
    { time: "10:00", name: "山田 由紀", menu: "ホワイトニング", tone: "now" },
    { time: "10:30", name: "鈴木 大輔", menu: "矯正相談", tone: "next" },
    { time: "11:00", name: "伊藤 さくら", menu: "クリーニング", tone: "next" },
  ];
  return (
    <div className="relative">
      {/* メインカード */}
      <div className="relative rounded-[26px] bg-white border border-emerald-100 shadow-[0_30px_80px_-30px_rgba(5,150,105,0.45)] overflow-hidden">
        {/* ヘッダーバー */}
        <div className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
          <span className="ml-2 text-[12px] font-semibold text-white/90">Arche 予約台帳</span>
          <span className="ml-auto text-[11px] text-white/70">今日 6/2（火）</span>
        </div>

        {/* 統計チップ */}
        <div className="grid grid-cols-3 gap-3 px-5 pt-5">
          {[
            ["本日の予約", "12件"],
            ["今月来院", "247名"],
            ["キャンセル率", "3.2%"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-emerald-50/70 border border-emerald-100 px-3.5 py-3">
              <p className="text-[10.5px] text-ink-muted">{l}</p>
              <p className="text-[19px] font-extrabold text-emerald-700 leading-tight mt-0.5">{v}</p>
            </div>
          ))}
        </div>

        {/* 予約リスト */}
        <div className="px-5 py-4 space-y-2">
          {rows.map((r) => {
            const styles =
              r.tone === "now"
                ? "bg-emerald-600 text-white border-emerald-600"
                : r.tone === "done"
                  ? "bg-gray-50 text-gray-400 border-gray-100"
                  : "bg-white text-ink border-emerald-100";
            return (
              <div key={r.time} className={`flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 ${styles}`}>
                <span className={`text-[12px] font-bold tabular-nums ${r.tone === "now" ? "text-white" : "text-emerald-700"} ${r.tone === "done" ? "!text-gray-300" : ""}`}>
                  {r.time}
                </span>
                <span className="text-[13px] font-semibold flex-1 truncate">{r.name}</span>
                <span className={`text-[11px] ${r.tone === "now" ? "text-white/80" : "text-ink-muted"}`}>{r.menu}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    r.tone === "now"
                      ? "bg-white/20 text-white"
                      : r.tone === "done"
                        ? "bg-gray-100 text-gray-400"
                        : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {r.tone === "done" ? "完了" : r.tone === "now" ? "受付中" : "予定"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 浮遊カード：リマインダー */}
      <div className="hidden sm:flex absolute -left-6 bottom-10 items-center gap-2.5 rounded-2xl bg-white border border-emerald-100 shadow-soft px-4 py-3 animate-floaty">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600">
          <Bell className="w-4 h-4" />
        </span>
        <div>
          <p className="text-[11px] font-bold text-ink">前日リマインダー送信</p>
          <p className="text-[10.5px] text-ink-muted">山田様にLINEで自動通知</p>
        </div>
      </div>

      {/* 浮遊カード：口コミ */}
      <div className="hidden sm:flex absolute -right-5 top-16 items-center gap-2.5 rounded-2xl bg-white border border-emerald-100 shadow-soft px-4 py-3 animate-floaty [animation-delay:1.5s]">
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-amber-50 text-amber-500">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
        </span>
        <div>
          <p className="text-[11px] font-bold text-ink">★5 の口コミ獲得</p>
          <p className="text-[10.5px] text-ink-muted">Googleレビューへ自動誘導</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/80 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_0%,transparent_100%)]" />
      <div className="absolute -top-40 -right-32 -z-10 w-[640px] h-[640px] rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="max-w-site mx-auto px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
          {/* テキスト */}
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-200 px-3.5 py-1.5 text-[12.5px] font-semibold text-emerald-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              歯科医院のための予約・患者管理クラウド
            </span>

            <h1 className="mt-6 font-jp font-black tracking-tight text-ink leading-[1.14] text-[40px] sm:text-[52px] lg:text-[60px]">
              予約も、患者も、経営も。
              <br />
              <span className="text-gradient">Arche ひとつで。</span>
            </h1>

            <p className="mt-6 text-[16px] leading-[1.95] text-ink-muted max-w-xl">
              オンライン予約・患者管理・リコール・リマインダーから、口コミ獲得・QR受付・経営分析まで。
              バラバラだった医院の業務を、ひとつのクラウドにまとめます。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-glow transition-colors"
              >
                導入のご相談（無料）
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold text-ink border border-emerald-200 bg-white hover:bg-emerald-50 transition-colors"
              >
                機能を見る
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                個人情報保護法 準拠・SSL暗号化
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-emerald-600" />
                21名の現役開業医が監修
              </span>
            </div>
          </div>

          {/* プレビュー */}
          <div className="animate-fadeUp [animation-delay:0.15s]">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
