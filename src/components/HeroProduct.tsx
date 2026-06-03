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

/** チェア別スケジュール（管理画面UIモック・コード製） */
function ChairBoard() {
  const chairs = ["チェアA", "チェアB", "チェアC", "チェアD"];
  const appts = [
    { time: "09:00", name: "田中 美咲", type: "完了", color: "#6A7F7A" },
    { time: "10:00", name: "山田 由紀", type: "受付中", color: "#16A34A" },
    { time: "11:00", name: "鈴木 大輔", type: "予定", color: "#E2E8F0" },
  ];
  return (
    <div className="aspect-[4/3] bg-white rounded-3xl shadow-3xl border border-slate-100 p-5 lg:p-6 flex flex-col gap-5 overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <h3 className="text-[16px] lg:text-[19px] font-bold text-brand-deep tracking-tight">本日のチェアスケジュール</h3>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[12px] font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">日</span>
          <span className="text-[12px] font-medium text-white bg-brand px-3 py-1.5 rounded-lg">週</span>
          <span className="text-[12px] font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">月</span>
        </div>
      </div>
      <div className="flex-grow grid grid-cols-4 gap-2.5 lg:gap-3">
        {chairs.map((chair) => (
          <div key={chair} className="border border-slate-100 rounded-xl bg-slate-50/60 p-2 space-y-2">
            <div className="text-center text-[11px] lg:text-[12.5px] font-bold text-brand-deep pb-1.5 border-b border-slate-100">{chair}</div>
            {appts.map((a, index) => {
              const live = chair === "チェアB" && index === 1;
              return (
                <div
                  key={index}
                  className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm space-y-1"
                  style={{ borderLeftColor: live ? a.color : "#E2E8F0", borderLeftWidth: live ? "4px" : "1px" }}
                >
                  <div className="text-[10px] font-semibold" style={{ color: live ? a.color : "#6A7F7A" }}>{a.time}</div>
                  <div className="text-[11px] font-bold text-brand-deep leading-tight">{a.name}</div>
                  {live && (
                    <span className="inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: "#16A34A" }}>
                      {a.type}
                    </span>
                  )}
                </div>
              );
            })}
            {(chair === "チェアA" || chair === "チェアB") && (
              <div className="h-7 border border-dashed border-slate-200 rounded-lg bg-white grid place-items-center text-slate-300 text-[14px]">＋</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** 患者用スマホ予約確定画面（コード製） */
function PhoneBooking() {
  return (
    <div className="w-[230px] aspect-[1/2] bg-brand-deep rounded-[34px] shadow-3xl p-3.5 flex flex-col border-[8px] border-brand-dark">
      <div className="flex-grow bg-white rounded-[22px] p-3.5 flex flex-col gap-3 overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <span className="text-[13px] font-bold text-brand">Sourirette</span>
          <span className="text-[10px] text-slate-500">6/2 10:54</span>
        </div>
        <h4 className="text-[14px] font-bold text-brand-deep">予約を確定します</h4>
        <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 border border-slate-100 text-[11px]">
          {[
            ["日時", "6/2(火) 10:00〜", "text-brand"],
            ["メニュー", "定期検診", "text-brand-deep"],
            ["担当", "院長 (チェアB)", "text-brand-deep"],
          ].map(([k, v, c]) => (
            <div key={k} className="flex justify-between">
              <span className="text-slate-600">{k}</span>
              <span className={`font-bold ${c}`}>{v}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-7 h-7 rounded-full text-white text-[11px] font-bold shrink-0" style={{ background: "#06C755" }}>L</span>
          <div>
            <p className="text-[11px] font-bold text-brand-deep">LINE連携で便利に</p>
            <p className="text-[9.5px] text-slate-600">前日に自動リマインド</p>
          </div>
        </div>
        <label className="flex items-center gap-2 text-[10px] text-slate-600">
          <span className="grid place-items-center w-4 h-4 rounded bg-brand text-white text-[9px]">✓</span>
          前日にLINE通知を受け取る
        </label>
        <button className="mt-auto bg-brand text-white w-full py-3 rounded-xl text-[13px] font-bold">予約を確定する</button>
      </div>
    </div>
  );
}

export function HeroProduct() {
  return (
    <section id="top" className="bg-mist pt-[112px]">
      <motion.div
        className="max-w-site mx-auto px-6 pb-32 lg:pb-44"
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
                歯科予約に特化した、圧倒的な軽快さ
              </span>
              <h1 className="font-jp font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.12] text-[40px] sm:text-[52px] lg:text-[60px]">
                予約の電話で、<br />
                もう手を止めない。<br />
                <span style={{ color: "#16A34A" }}>受付をスマートに。</span>
              </h1>
              <p className="text-[17px] lg:text-[18px] text-slate-700 leading-[1.85] max-w-xl">
                電子カルテや会計の複雑な機能をあえて削ぎ落とし、純粋な「予約管理」に特化。新人スタッフでも今日から使える直感的なUIと、LINE自動リマインドでドタキャンを激減させます。
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={CONTACT_MAILTO}
                className="bg-brand text-white px-8 py-4 rounded-full text-[16px] font-semibold shadow-lg shadow-brand/20 hover:bg-brand-dark hover:scale-[1.03] transition-all duration-300"
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

          {/* 右：プロダクトUIモック */}
          <motion.div variants={item} className="lg:col-span-6 relative">
            <ChairBoard />
            <div className="absolute -bottom-24 right-0 lg:-right-4 hidden sm:block">
              <PhoneBooking />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
