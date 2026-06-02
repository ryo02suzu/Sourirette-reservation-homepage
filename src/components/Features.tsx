import { Users, Bell, RefreshCw, QrCode, ClipboardList, Clock, ChevronRight, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { asset, CONTACT_MAILTO } from "@/lib/site";
import { Logo } from "./Logo";

function BookingVisual() {
  const rows = [
    ["10:00", "山田 由紀", "受付中", true],
    ["10:30", "鈴木 大輔", "予定", false],
    ["11:00", "伊藤 さくら", "予定", false],
  ] as const;
  return (
    <div className="rounded-[24px] bg-white border border-black/[0.06] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] p-6">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">本日の予約</span>
        <span className="text-[12px] text-sub">6/2（火）</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {rows.map(([t, n, s, now]) => (
          <div key={t} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${now ? "bg-emerald-50 border-emerald-200" : "bg-white border-black/[0.07]"}`}>
            <span className="text-[13px] font-semibold text-emerald-700">{t}</span>
            <span className="text-[14px] font-semibold text-ink flex-1">{n}</span>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${now ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Highlight({
  flip, eyebrow, title, body, link, children,
}: {
  flip?: boolean; eyebrow: string; title: string; body: string; link?: string; children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <p className="text-[14px] font-semibold text-emerald-700">{eyebrow}</p>
        <h3 className="mt-3 h-section text-ink text-[30px] sm:text-[40px]">{title}</h3>
        <p className="mt-5 text-[17px] leading-[1.8] text-sub max-w-md">{body}</p>
        {link && (
          <a href={CONTACT_MAILTO} className="link-chevron text-[16px] mt-6">
            {link} <ChevronRight className="w-4 h-4" />
          </a>
        )}
      </Reveal>
      <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
        {children}
      </Reveal>
    </div>
  );
}

const tiles: { icon: LucideIcon; title: string; desc: string; tag?: string }[] = [
  { icon: Users, title: "患者管理・カルテ", desc: "来院履歴・連絡先・メモを一元管理。" },
  { icon: RefreshCw, title: "リコール自動化", desc: "定期健診の時期を自動抽出して再来院を促進。" },
  { icon: QrCode, title: "QRセルフ受付", desc: "来院患者がQRで受付。受付の負担を軽減。", tag: "NEW" },
  { icon: ClipboardList, title: "問診のデジタル化", desc: "Web事前問診で記入・転記の手間をゼロに。" },
  { icon: Bell, title: "リマインダー", desc: "メール / SMS / LINE で前日に自動通知。" },
  { icon: Clock, title: "スタッフ・勤怠", desc: "シフト管理とQR/PIN打刻、時給計算まで。" },
];

export function Features() {
  return (
    <section id="features">
      {/* 導入見出し */}
      <div className="max-w-site mx-auto px-5 lg:px-8 pt-28 lg:pt-36 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2.5">
            <Logo size={28} textClassName="text-[18px]" />
            <span className="text-[12px] font-semibold text-sub">予約・経営クラウド</span>
          </div>
          <h2 className="mt-5 h-section text-ink text-[34px] sm:text-[48px]">
            医院に必要なものは、<br className="hidden sm:block" />ぜんぶ入っている。
          </h2>
          <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
            予約・受付から患者の定着、評判づくり、経営判断まで。複数のツールを契約せず、Arche だけで完結します。
          </p>
        </Reveal>
      </div>

      {/* ハイライト1（白） */}
      <div className="max-w-site mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <Highlight
          eyebrow="オンライン予約"
          title="24時間、予約を受けつづける。"
          body="スマホから24時間予約受付。診療メニュー・担当医・チェアごとに枠を設定でき、電話対応の負担を大きく減らします。"
          link="導入を相談する"
        >
          <BookingVisual />
        </Highlight>
      </div>

      {/* ハイライト2（キャンバス、写真） */}
      <div className="bg-canvas">
        <div className="max-w-site mx-auto px-5 lg:px-8 py-24 lg:py-32">
          <Highlight
            flip
            eyebrow="口コミ獲得"
            title="その笑顔を、医院の力に。"
            body="満足した患者をGoogleレビューへ自動で誘導。低評価は院内フィードバックに振り分け、評判を守りながら改善できます。"
            link="くわしく相談する"
          >
            <div className="relative">
              <div className="rounded-[24px] overflow-hidden shadow-[0_30px_70px_-30px_rgba(0,0,0,0.3)]">
                <img src={asset("img/smile.jpg")} alt="笑顔の患者" className="w-full h-[300px] sm:h-[380px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -left-3 sm:left-6 bg-white rounded-2xl border border-black/[0.06] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] px-5 py-3.5 flex items-center gap-3">
                <div className="flex">{[0,1,2,3,4].map((i)=><Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />)}</div>
                <div>
                  <p className="text-[13px] font-bold text-ink">★5 の口コミを獲得</p>
                  <p className="text-[11.5px] text-sub">Googleレビューへ自動誘導</p>
                </div>
              </div>
            </div>
          </Highlight>
        </div>
      </div>

      {/* タイル（白） */}
      <div className="max-w-site mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-[24px] bg-canvas p-7 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white text-emerald-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </span>
                    {t.tag && <span className="text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white">{t.tag}</span>}
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-sub">{t.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
