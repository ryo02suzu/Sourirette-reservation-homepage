import { ArrowRight, ShieldCheck, Star, CalendarCheck } from "lucide-react";
import { CONTACT_MAILTO, asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/80 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_0%,transparent_100%)]" />
      <div className="absolute -top-40 -right-40 -z-10 w-[680px] h-[680px] rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="max-w-site mx-auto px-5 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1.04fr_1fr] gap-12 lg:gap-14 items-center">
          {/* テキスト */}
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-emerald-200 px-3.5 py-1.5 text-[12.5px] font-semibold text-emerald-700 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              歯科医院のための予約・患者管理クラウド
            </span>

            <h1 className="mt-6 font-jp font-black tracking-tight text-ink leading-[1.12] text-[40px] sm:text-[54px] lg:text-[62px]">
              その笑顔の数だけ、
              <br />
              医院は強くなる。
            </h1>

            <p className="mt-6 text-[16px] leading-[2] text-ink-muted max-w-xl">
              予約・患者管理・リコール・リマインダーから、口コミ獲得・QR受付・経営分析まで。
              バラバラだった医院の業務を <span className="font-bold text-emerald-700">Arche</span> ひとつにまとめ、
              スタッフが患者と向き合う時間を増やします。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-glow transition-colors"
              >
                導入のご相談（無料）
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-bold text-ink border border-emerald-200 bg-white hover:bg-emerald-50 transition-colors"
              >
                機能を見る
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-ink-muted">
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

          {/* ビジュアル（実写 + 浮遊UI） */}
          <div className="relative animate-fadeUp [animation-delay:0.15s]">
            {/* 背面の装飾ブロック */}
            <div className="absolute -top-6 -right-4 w-2/3 h-2/3 rounded-[36px] bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 blur-md -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl border border-emerald-200/70 -z-10" />

            {/* メイン写真 */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_90px_-30px_rgba(5,150,105,0.55)] ring-1 ring-black/5 aspect-[4/5] sm:aspect-[5/5]">
              <img
                src={asset("img/smile.jpg")}
                alt="笑顔の患者"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/25 via-transparent to-transparent" />
            </div>

            {/* 浮遊カード：新規予約 */}
            <div className="absolute -left-3 sm:-left-6 bottom-8 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur border border-emerald-100 shadow-soft px-4 py-3 animate-floaty">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-600 text-white">
                <CalendarCheck className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[12px] font-bold text-ink">新規予約が入りました</p>
                <p className="text-[11px] text-ink-muted">山田 由紀 様 ・ 10:00 ホワイトニング</p>
              </div>
            </div>

            {/* 浮遊カード：口コミ */}
            <div className="absolute -right-2 sm:-right-5 top-10 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur border border-emerald-100 shadow-soft px-4 py-3 animate-floaty [animation-delay:1.4s]">
              <div className="flex -space-x-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <div>
                <p className="text-[12px] font-bold text-ink">★5 の口コミ獲得</p>
                <p className="text-[11px] text-ink-muted">Googleレビューへ自動誘導</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
