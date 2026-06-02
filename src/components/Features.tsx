import {
  CalendarClock,
  Users,
  Bell,
  RefreshCw,
  BarChart3,
  Star,
  QrCode,
  ClipboardList,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag?: string;
  className?: string;
  accent?: boolean;
};

const features: Feature[] = [
  {
    icon: CalendarClock,
    title: "24時間オンライン予約",
    desc: "スマホから24時間予約受付。診療メニュー・担当医・チェアごとに枠を設定でき、電話対応の負担を大きく減らします。",
    className: "lg:col-span-2",
    accent: true,
  },
  {
    icon: Users,
    title: "患者管理・カルテ",
    desc: "来院履歴・連絡先・メモを一元管理。必要な情報にすぐたどり着けます。",
  },
  {
    icon: Bell,
    title: "リマインダー自動送信",
    desc: "予約前日にメール / SMS / LINE で自動リマインド。無断キャンセルを抑えます。",
    tag: "メール / SMS / LINE",
  },
  {
    icon: RefreshCw,
    title: "リコール自動化",
    desc: "定期健診の時期が来た患者を自動抽出し、再来院をうながします。",
  },
  {
    icon: Star,
    title: "口コミ獲得",
    desc: "満足した患者を自動でGoogleレビューへ誘導。低評価は院内フィードバックに振り分け、評判を守ります。",
    tag: "NEW",
    accent: true,
  },
  {
    icon: QrCode,
    title: "QRセルフ受付",
    desc: "来院した患者がQRで受付。受付スタッフの負担を軽減します。",
    tag: "NEW",
  },
  {
    icon: BarChart3,
    title: "経営分析レポート",
    desc: "予約数・来院数・キャンセル率・売上を可視化し、データで意思決定。",
    className: "lg:col-span-2",
  },
  {
    icon: ClipboardList,
    title: "問診のデジタル化",
    desc: "Webで事前問診。受付の記入時間と転記の手間をゼロに。",
  },
  {
    icon: Clock,
    title: "スタッフ・勤怠（QR打刻）",
    desc: "シフト管理とQR/PIN打刻、時給計算まで。スタッフ運営もまとめて。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-ink text-[30px] lg:text-[42px] leading-[1.2]">
            医院に必要な機能を、
            <br className="hidden sm:block" />
            <span className="text-gradient">まるごとひとつに。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-ink-muted">
            予約・受付から、患者の定着、評判づくり、経営判断まで。
            複数のツールを契約せずに、Arche だけで完結します。
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className={`group relative rounded-3xl border p-6 lg:p-7 transition-all hover:-translate-y-1 ${
                  f.accent
                    ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-soft"
                    : "border-emerald-100 bg-white hover:shadow-soft"
                } ${f.className ?? ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-emerald-600 text-white shadow-[0_8px_18px_-8px_rgba(5,150,105,0.9)]">
                    <Icon className="w-5 h-5" />
                  </span>
                  {f.tag && (
                    <span
                      className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${
                        f.tag === "NEW"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.85] text-ink-muted">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
