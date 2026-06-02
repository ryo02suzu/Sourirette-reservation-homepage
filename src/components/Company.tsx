import { Building2, Target, HeartHandshake, Mail } from "lucide-react";
import { COMPANY, COLORS, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

const GREEN = COLORS.brand;
const GREEN_LIGHT = COLORS.brandLight;
const TEXT = COLORS.navy;

const overview: { label: string; value: string }[] = [
  { label: "会社名", value: COMPANY.name },
  { label: "事業内容", value: COMPANY.business },
  { label: "主要プロダクト", value: COMPANY.product },
  { label: "設立", value: COMPANY.established },
  { label: "お問い合わせ", value: COMPANY.email },
];

const values = [
  {
    icon: Target,
    title: "私たちのミッション",
    desc: "「歯科の現場を、テクノロジーでもっとなめらかに。」電話・紙・手作業に追われる現場の負担を減らし、スタッフが患者と向き合う時間を増やすことを目指します。",
  },
  {
    icon: HeartHandshake,
    title: "私たちのビジョン",
    desc: "歯科医院のDXを、規模や予算に関係なく誰もが始められるものに。フリープランから使えるクラウドで、地域の歯科医療を支えるインフラになります。",
  },
  {
    icon: Building2,
    title: "現場発のものづくり",
    desc: "歯学部に在籍する開発者が、21名の現役開業医の監修のもとで開発。机上の空論ではなく、実際の診療現場の声からプロダクトを磨き続けています。",
  },
];

export function Company() {
  return (
    <section id="company" style={{ backgroundColor: GREEN_LIGHT }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[12px] font-bold tracking-widest uppercase mb-4" style={{ color: GREEN }}>
            Company
          </p>
          <h2 className="text-[28px] md:text-[40px] font-black tracking-tight" style={{ color: TEXT }}>
            運営会社について
          </h2>
          <p className="mt-4 text-[15px] text-gray-500">
            Arche は <strong style={{ color: TEXT }}>{COMPANY.name}</strong> が開発・運営しています。
          </p>
        </div>

        {/* 価値観カード3枚 */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: GREEN_LIGHT }}>
                  <Icon className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.75} />
                </div>
                <h3 className="text-[16px] font-black mb-2" style={{ color: TEXT }}>{v.title}</h3>
                <p className="text-[13px] leading-[1.9] text-gray-500">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 会社概要テーブル */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="px-7 py-5 border-b border-gray-100">
            <h3 className="text-[16px] font-black" style={{ color: TEXT }}>会社概要</h3>
          </div>
          <dl>
            {overview.map((row, i) => (
              <div key={row.label} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-7 py-4 ${i < overview.length - 1 ? "border-b border-gray-50" : ""}`}>
                <dt className="text-[13px] font-bold text-gray-500 w-full sm:w-40 shrink-0">{row.label}</dt>
                <dd className="text-[13.5px] text-gray-800">
                  {row.label === "お問い合わせ" ? (
                    <a href={CONTACT_MAILTO} className="font-medium underline underline-offset-2 hover:opacity-70" style={{ color: GREEN }}>
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="text-center mt-10">
          <a href={CONTACT_MAILTO} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: TEXT }}>
            <Mail className="w-4 h-4" />
            {CONTACT_EMAIL} へお問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
