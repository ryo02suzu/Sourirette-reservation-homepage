import { ArrowRight, Check } from "lucide-react";
import { Logo } from "./Logo";
import { PRODUCTS, CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const archePoints = [
  "24時間オンライン予約",
  "患者管理・リコール",
  "メール / SMS / LINE リマインダー",
  "口コミ獲得・QRセルフ受付",
  "経営分析レポート",
];

export function Products() {
  const arche = PRODUCTS.find((p) => p.key === "arche")!;
  const next = PRODUCTS.find((p) => p.key === "next")!;

  return (
    <section id="products" className="bg-canvas">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36">
        <Reveal className="text-center">
          <p className="text-[14px] font-semibold text-emerald-700">Products</p>
          <h2 className="mt-3 h-section text-ink text-[32px] sm:text-[46px]">事業・プロダクト</h2>
          <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
            Sourirette は、歯科医院の課題を解くプロダクトを開発・運営しています。
          </p>
        </Reveal>

        {/* 旗艦プロダクト：Arche */}
        <Reveal delay={100} className="mt-14">
          <div id="arche" className="rounded-[28px] bg-white border border-black/[0.06] shadow-[0_30px_70px_-35px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <Logo size={34} textClassName="text-[22px]" />
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white">
                    {arche.status}
                  </span>
                </div>
                <p className="mt-5 text-[13px] font-semibold text-emerald-700">{arche.category}</p>
                <h3 className="mt-2 h-section text-ink text-[26px] sm:text-[34px]">
                  医院のすべてを、ひとつに。
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.8] text-sub max-w-md">{arche.desc}</p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {archePoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" strokeWidth={3} />
                      <span className="text-[13.5px] text-ink/80">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a href="#features" className="inline-flex items-center justify-center h-11 px-6 rounded-full text-[14.5px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                    Arche を詳しく見る
                  </a>
                  <a href={CONTACT_MAILTO} className="link-chevron text-[15px]">
                    導入を相談する <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* ビジュアル面 */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 lg:p-10 flex items-center">
                <div className="w-full rounded-2xl bg-white/12 backdrop-blur border border-white/20 p-5">
                  {[
                    ["09:00", "田中 美咲", "完了"],
                    ["10:00", "山田 由紀", "受付中"],
                    ["10:30", "鈴木 大輔", "予定"],
                    ["11:00", "伊藤 さくら", "予定"],
                  ].map(([t, n, s], i) => (
                    <div key={t} className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 mb-2 last:mb-0 ${i === 1 ? "bg-white" : "bg-white/15"}`}>
                      <span className={`text-[12px] font-semibold ${i === 1 ? "text-emerald-700" : "text-white"}`}>{t}</span>
                      <span className={`text-[13px] font-semibold flex-1 ${i === 1 ? "text-ink" : "text-white"}`}>{n}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? "bg-emerald-600 text-white" : "bg-white/25 text-white"}`}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 次のプロダクト枠 */}
        <Reveal delay={160} className="mt-6">
          <div className="rounded-[28px] border border-dashed border-black/15 bg-white/50 p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-sub">{next.status}</p>
              <h3 className="mt-2 text-[20px] font-bold text-ink">{next.name}</h3>
              <p className="mt-1.5 text-[14px] text-sub">{next.desc}</p>
            </div>
            <a href={CONTACT_MAILTO} className="link-chevron text-[15px] shrink-0">
              最新情報を受け取る <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
