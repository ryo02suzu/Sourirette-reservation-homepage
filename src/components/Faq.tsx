import { useState } from "react";
import { Plus } from "lucide-react";
import { CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const faqs = [
  { q: "導入にITの知識は必要ですか？", a: "不要です。診療メニューやスタッフを入力するだけで使い始められ、初期セットアップは担当者がサポートします。" },
  { q: "フリープランはどこまで使えますか？", a: "スタッフ1名・月間予約50件まで、オンライン予約ページとメール通知を無料でご利用いただけます。" },
  { q: "リマインダーはどの方法で送れますか？", a: "メール・SMS・LINEに対応しています（プランにより利用範囲が異なります）。予約前日などに自動送信します。" },
  { q: "口コミ獲得の機能とは？", a: "来院後の患者に評価を依頼し、高評価の方はGoogleレビューへ自動誘導、改善点は院内フィードバックとして受け取れる仕組みです。" },
  { q: "患者の個人情報は安全に管理されますか？", a: "個人情報保護法に準拠し、通信はSSL/TLSで暗号化、データは国内のクラウドに保管します。" },
  { q: "既存の予約データから移行できますか？", a: "CSVでのインポートに対応しています。移行についてもご相談いただけます。" },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button className="w-full flex items-center justify-between gap-5 py-6 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className={`text-[16px] font-semibold ${open ? "text-emerald-700" : "text-ink"}`}>{q}</span>
        <span className={`grid place-items-center w-7 h-7 rounded-full shrink-0 transition-transform ${open ? "bg-emerald-600 text-white rotate-45" : "bg-canvas text-emerald-700"}`}>
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="pb-6 text-[14.5px] leading-[1.9] text-sub">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="max-w-text mx-auto px-5 lg:px-8 py-28 lg:py-36">
      <Reveal className="text-center">
        <h2 className="h-section text-ink text-[32px] sm:text-[46px]">よくあるご質問</h2>
      </Reveal>
      <div className="mt-12">
        {faqs.map((f) => <Item key={f.q} {...f} />)}
      </div>
      <p className="mt-8 text-center text-[14px] text-sub">
        解決しないことがあれば{" "}
        <a href={CONTACT_MAILTO} className="font-semibold text-emerald-700 underline underline-offset-2">お問い合わせ</a>{" "}ください。
      </p>
    </section>
  );
}
