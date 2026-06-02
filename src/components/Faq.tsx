import { useState } from "react";
import { Plus } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";

const faqs = [
  { q: "導入にITの知識は必要ですか？", a: "不要です。診療メニューやスタッフを入力するだけで使い始められ、初期セットアップは担当者がサポートします。難しい設定はありません。" },
  { q: "フリープランはどこまで使えますか？", a: "スタッフ1名・月間予約50件まで、オンライン予約ページとメール通知を無料でご利用いただけます。まず試したい医院に最適です。" },
  { q: "リマインダーはどの方法で送れますか？", a: "メール・SMS・LINEに対応しています（プランにより利用範囲が異なります）。予約前日などに自動送信し、無断キャンセルを抑えます。" },
  { q: "口コミ獲得の機能とは？", a: "来院後の患者に評価を依頼し、高評価の方はGoogleレビューへ自動誘導、改善点は院内フィードバックとして受け取れる仕組みです。評判づくりとサービス改善を同時に進められます。" },
  { q: "患者の個人情報は安全に管理されますか？", a: "個人情報保護法に準拠し、通信はSSL/TLSで暗号化、データは国内のクラウドに保管します。第三者へのデータ提供は行いません。" },
  { q: "既存の予約データから移行できますか？", a: "CSVでのインポートに対応しています。移行についてもご相談いただけますので、お問い合わせください。" },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`text-[15px] font-bold ${open ? "text-emerald-300" : "text-white"}`}>{q}</span>
        <span
          className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-all ${
            open ? "bg-emerald-400 text-night-950 rotate-45" : "bg-white/10 text-emerald-300"
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[14px] leading-[1.95] text-slate-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 border-y border-white/10 bg-white/[0.015]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.2]">
            よくあるご質問
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] text-slate-500">
          解決しないことがあれば{" "}
          <a href={CONTACT_MAILTO} className="font-semibold text-emerald-300 underline underline-offset-2">
            お気軽にお問い合わせ
          </a>{" "}
          ください。
        </p>
      </div>
    </section>
  );
}
