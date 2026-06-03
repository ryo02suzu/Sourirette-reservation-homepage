import { motion, type Variants } from "framer-motion";
import { asset, CONTACT_MAILTO } from "@/lib/site";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/** クリニックのホームページ（＝HP制作の成果物）ブラウザモック・コード製 */
function ClinicSiteMock() {
  return (
    <div className="rounded-2xl bg-white shadow-3xl border border-slate-100 overflow-hidden">
      {/* ブラウザ上部 */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="ml-2 flex-1 bg-white border border-slate-100 rounded px-2.5 py-1 text-[10px] text-slate-400">https://sora-dental.clinic</span>
      </div>
      {/* サイトヘッダー */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
        <span className="text-[13px] font-bold text-brand-deep">そら歯科クリニック</span>
        <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-500">
          <span>診療案内</span><span>アクセス</span><span>医院紹介</span>
          <span className="text-white bg-brand rounded px-2.5 py-1 font-bold">WEB予約</span>
        </div>
      </div>
      {/* サイトヒーロー */}
      <div className="relative h-36 lg:h-44">
        <img src={asset("img/clinic-room.jpg")} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-5">
          <p className="text-[10px] text-emerald-200 font-semibold">SORA DENTAL CLINIC</p>
          <p className="text-[17px] lg:text-[20px] font-bold text-white leading-tight mt-1">あなたの街の、<br />やさしい歯医者さん。</p>
          <span className="mt-3 w-fit text-[10px] font-bold text-brand bg-white rounded px-3 py-1.5">24時間 WEB予約 →</span>
        </div>
      </div>
      {/* 下部カード */}
      <div className="grid grid-cols-3 gap-2 p-3">
        {["診療案内", "アクセス", "料金表"].map((t) => (
          <div key={t} className="rounded-lg border border-slate-100 bg-slate-50/60 px-2 py-3 text-center">
            <div className="mx-auto w-6 h-6 rounded-full bg-brand/10 mb-1.5" />
            <p className="text-[10px] font-semibold text-brand-deep">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 患者用スマホ予約確定画面（コード製） */
function PhoneBooking() {
  return (
    <div className="w-[210px] aspect-[1/2] bg-brand-deep rounded-[32px] shadow-3xl p-3 flex flex-col border-[8px] border-brand-dark">
      <div className="flex-grow bg-white rounded-[20px] p-3.5 flex flex-col gap-3 overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <span className="text-[12px] font-bold text-brand">WEB予約</span>
          <span className="text-[9px] text-slate-500">10:54</span>
        </div>
        <h4 className="text-[13px] font-bold text-brand-deep">予約を確定します</h4>
        <div className="bg-slate-50 rounded-xl p-2.5 space-y-1.5 border border-slate-100 text-[10.5px]">
          {[
            ["日時", "6/2(火) 10:00〜", "text-brand"],
            ["メニュー", "定期検診", "text-brand-deep"],
            ["担当", "院長", "text-brand-deep"],
          ].map(([k, v, c]) => (
            <div key={k} className="flex justify-between">
              <span className="text-slate-600">{k}</span>
              <span className={`font-bold ${c}`}>{v}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-6 h-6 rounded-full text-white text-[10px] font-bold shrink-0" style={{ background: "#06C755" }}>L</span>
          <p className="text-[9.5px] text-slate-600 leading-tight">前日にLINEで<br />自動リマインド</p>
        </div>
        <button className="mt-auto bg-brand text-white w-full py-2.5 rounded-xl text-[12px] font-bold">予約を確定する</button>
      </div>
    </div>
  );
}

export function HeroProduct() {
  return (
    <section id="top" className="bg-mist pt-[112px]">
      <motion.div
        className="max-w-site mx-auto px-6 pb-32 lg:pb-40"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* 左：テキスト */}
          <div className="lg:col-span-6 space-y-9">
            <motion.div variants={item} className="space-y-6">
              <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-[13px] font-semibold px-4 py-2 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
                </span>
                歯科・医療機関のための、集患DXパートナー
              </span>
              <h1 className="font-jp font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.13] text-[38px] sm:text-[50px] lg:text-[58px]">
                医院の集患を、<br />
                ホームページと予約で。<br />
                <span style={{ color: "#16A34A" }}>まるごと、なめらかに。</span>
              </h1>
              <p className="text-[16.5px] lg:text-[18px] text-slate-700 leading-[1.85] max-w-xl">
                歯科・医療機関のための<strong className="font-bold text-brand-deep">ホームページ制作</strong>と、予約・経営システム
                <strong className="font-bold text-brand-deep">「Arche」</strong>。さらにGoogleクチコミ増援「Q-re」やECまで、集患から経営までまるごと支援します。
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={CONTACT_MAILTO}
                className="shine-btn bg-brand text-white px-8 py-4 rounded-full text-[16px] font-semibold shadow-lg shadow-brand/20 hover:bg-brand-dark hover:scale-[1.03] transition-all duration-300"
              >
                導入のご相談・資料請求 →
              </a>
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((num) => (
                    <span key={num} className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-mist overflow-hidden inline-grid place-items-center">
                      <img src={asset(`img/avatars/a${num}.svg`)} alt="" className="w-full h-full" loading="lazy" />
                    </span>
                  ))}
                </div>
                <p className="text-[13px] leading-snug">
                  <span className="font-bold text-brand">21名の現役開業医</span>が、<br className="hidden sm:block" />現場視点で監修。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 右：HP（成果物）＋ 予約UIモック */}
          <motion.div variants={item} className="lg:col-span-6 relative">
            <ClinicSiteMock />
            <div className="absolute -bottom-16 right-0 lg:-right-4 hidden sm:block">
              <PhoneBooking />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
