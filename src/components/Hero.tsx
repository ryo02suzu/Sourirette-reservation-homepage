import { ChevronRight } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";

function ProductBoard() {
  const rows = [
    { t: "09:00", n: "田中 美咲", m: "定期健診", s: "done" },
    { t: "10:00", n: "山田 由紀", m: "ホワイトニング", s: "now" },
    { t: "10:30", n: "鈴木 大輔", m: "矯正相談", s: "next" },
    { t: "11:00", n: "伊藤 さくら", m: "クリーニング", s: "next" },
    { t: "14:00", n: "佐藤 健太", m: "虫歯治療", s: "next" },
  ];
  return (
    <div className="rounded-[24px] bg-white border border-black/[0.06] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-black/5">
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <span className="ml-3 text-[12px] text-sub">Arche — 予約台帳</span>
        <span className="ml-auto text-[11px] text-sub">今日 6/2（火）</span>
      </div>
      <div className="grid sm:grid-cols-[1fr_1.4fr]">
        <div className="p-5 border-b sm:border-b-0 sm:border-r border-black/5">
          {[
            ["本日の予約", "12件"],
            ["今月来院", "247名"],
            ["キャンセル率", "3.2%"],
          ].map(([l, v]) => (
            <div key={l} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
              <span className="text-[12.5px] text-sub">{l}</span>
              <span className="text-[18px] font-bold text-ink">{v}</span>
            </div>
          ))}
        </div>
        <div className="p-5 space-y-2">
          {rows.map((r) => {
            const cls =
              r.s === "now"
                ? "bg-emerald-50 border-emerald-200"
                : r.s === "done"
                  ? "bg-black/[0.02] border-black/5 opacity-60"
                  : "bg-white border-black/[0.07]";
            return (
              <div key={r.t} className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 ${cls}`}>
                <span className="text-[12px] font-semibold text-emerald-700 tabular-nums">{r.t}</span>
                <span className="text-[13px] font-semibold text-ink flex-1 truncate">{r.n}</span>
                <span className="text-[11px] text-sub hidden sm:block">{r.m}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    r.s === "now" ? "bg-emerald-600 text-white" : r.s === "done" ? "bg-black/5 text-sub" : "bg-emerald-50 text-emerald-700"
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
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-[52px]">
      <div className="max-w-site mx-auto px-5 lg:px-8 pt-20 lg:pt-28 text-center">
        <p className="animate-fadeUp text-[15px] font-semibold text-emerald-700">Arche</p>
        <h1 className="animate-fadeUp mt-3 h-hero text-ink text-[44px] sm:text-[64px] lg:text-[80px]">
          医院のすべてを、
          <br />
          ひとつに。
        </h1>
        <p className="animate-fadeUp [animation-delay:0.1s] mt-6 mx-auto max-w-text text-[19px] sm:text-[21px] leading-[1.6] text-sub">
          予約・患者管理・リコール・口コミ・経営分析まで。
          歯科医院の毎日を、Arche がなめらかにします。
        </p>

        <div className="animate-fadeUp [animation-delay:0.18s] mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[16px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            導入のご相談
          </a>
          <a href="#features" className="link-chevron text-[16px]">
            特長を見る <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 大きな製品ビジュアル */}
        <div className="animate-fadeUp [animation-delay:0.26s] mt-16 lg:mt-20 max-w-4xl mx-auto">
          <ProductBoard />
        </div>
      </div>
    </section>
  );
}
