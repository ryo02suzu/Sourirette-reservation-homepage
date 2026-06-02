import { ChevronRight, Check } from "lucide-react";
import { Logo } from "./Logo";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";

const points = [
  "24時間オンライン予約",
  "メール / SMS / LINE リマインダー",
  "リコール自動化・口コミ獲得",
  "QRセルフ受付・経営分析レポート",
];

export function ArcheHighlight() {
  return (
    <section id="arche" className="bg-brand-deep">
      <div className="max-w-site mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-en text-[12px] font-bold tracking-[0.18em] text-emerald-300">PRODUCT</span>
              <span className="text-[11px] font-bold text-brand-deep bg-emerald-300 rounded-sm px-2 py-0.5">提供中</span>
            </div>
            <div className="mt-4 bg-white inline-flex rounded-md px-3 py-2">
              <Logo size={30} textClassName="text-[20px]" />
            </div>
            <h2 className="mt-5 text-[28px] lg:text-[38px] font-bold text-white leading-[1.3]">
              歯科医院の予約・経営を、<br />ひとつのクラウドに。
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-white/75 max-w-md">
              予約・患者管理から、リコール・口コミ・経営分析まで。21名の現役開業医の監修のもと開発した、自社プロダクトです。
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-white/90">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-300" strokeWidth={3} />
                  <span className="text-[13.5px]">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={CONTACT_MAILTO} className="inline-flex items-center gap-1.5 h-12 px-7 rounded-sm text-[15px] font-bold text-brand-deep bg-white hover:bg-emerald-50 transition-colors">
                導入のご相談 <ChevronRight className="w-4 h-4" />
              </a>
              <a href={APP_LINKS.login} className="inline-flex items-center gap-1.5 h-12 px-6 rounded-sm text-[15px] font-bold text-white border border-white/30 hover:bg-white/10 transition-colors">
                Arche ログイン
              </a>
            </div>
          </div>

          {/* 予約UIカード */}
          <div className="bg-white/10 border border-white/15 rounded-lg p-5 backdrop-blur">
            <div className="flex items-center justify-between text-white/80 text-[12px] mb-3">
              <span className="font-bold">本日の予約</span>
              <span>6/2（火）</span>
            </div>
            {[
              ["09:00", "田中 美咲", "完了"],
              ["10:00", "山田 由紀", "受付中"],
              ["10:30", "鈴木 大輔", "予定"],
              ["11:00", "伊藤 さくら", "予定"],
            ].map(([t, n, s], idx) => (
              <div key={t} className={`flex items-center gap-3 rounded-md px-4 py-3 mb-2 last:mb-0 ${idx === 1 ? "bg-white" : "bg-white/10"}`}>
                <span className={`text-[12px] font-semibold tabular-nums ${idx === 1 ? "text-brand" : "text-white"}`}>{t}</span>
                <span className={`text-[13.5px] font-semibold flex-1 ${idx === 1 ? "text-ink" : "text-white"}`}>{n}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${idx === 1 ? "bg-brand text-white" : "bg-white/20 text-white"}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
