import { MessageSquare, Calculator, ArrowRight } from "lucide-react";
import { APP_LINKS, COLORS, CONTACT_MAILTO } from "@/lib/site";

const GREEN = COLORS.brand;
const TEXT = COLORS.navy;

const options = [
  { icon: MessageSquare, title: "お問い合わせ", desc: "あなたのお悩みに専門スタッフがお答えします", href: CONTACT_MAILTO },
  { icon: Calculator, title: "デモを見る", desc: "実際の画面を触って、使いやすさを確認できます", href: APP_LINKS.demo },
  { icon: ArrowRight, title: "無料で始める", desc: "クレジットカード不要・最短15分で運用開始できます", href: APP_LINKS.signup },
];

export function Cta() {
  return (
    <section style={{ backgroundColor: COLORS.navy }} className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-end py-14 md:py-16">
          <div>
            <h2 className="text-[28px] md:text-[40px] font-black text-white leading-[1.2] mb-3">
              お気軽に<br />ご相談ください
            </h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Arche導入に関するご相談、見積もりのご依頼、<br />
              トライアルを受け付けています。
            </p>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="w-64 rounded-2xl px-6 py-7 text-center" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="text-[34px] font-black" style={{ color: GREEN }}>¥0</p>
              <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>初期費用・登録無料</p>
              <p className="text-[12px] mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>クレジットカード不要</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <a key={opt.title} href={opt.href} className="flex items-start gap-4 p-5 rounded-2xl bg-white hover:bg-gray-50 transition-all group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: COLORS.brandLight }}>
                    <Icon className="w-4 h-4" style={{ color: GREEN }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-black" style={{ color: TEXT }}>{opt.title}</p>
                      <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-[16px]">→</span>
                    </div>
                    <p className="text-[12px] text-gray-500 mt-1 leading-snug">{opt.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
