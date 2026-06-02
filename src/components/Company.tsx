import { Target, HeartHandshake, Sparkles, Mail } from "lucide-react";
import { COMPANY, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const values = [
  { icon: Target, title: "ミッション", desc: "歯科の現場を、テクノロジーでもっとなめらかに。電話・紙・手作業の負担を減らし、スタッフが患者と向き合う時間を増やします。" },
  { icon: HeartHandshake, title: "ビジョン", desc: "歯科医院のDXを、規模や予算に関係なく誰もが始められるものに。地域医療を支えるインフラを目指します。" },
  { icon: Sparkles, title: "現場発のものづくり", desc: "歯学部に在籍する開発者が、21名の現役開業医の監修のもとで開発。診療現場の声からプロダクトを磨き続けます。" },
];

const overview: { label: string; value: string; isEmail?: boolean }[] = [
  { label: "会社名", value: COMPANY.name },
  { label: "事業内容", value: COMPANY.business },
  { label: "主要プロダクト", value: COMPANY.product },
  { label: "設立", value: COMPANY.established },
  { label: "お問い合わせ", value: COMPANY.email, isEmail: true },
];

export function Company() {
  return (
    <section id="company" className="relative py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="label-mono">// COMPANY</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.2]">
            運営会社について
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-slate-400">
            Arche は <span className="font-bold text-white">{COMPANY.name}</span> が開発・運営しています。
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <Icon className="w-5 h-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.9] text-slate-400">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="px-7 py-5 border-b border-white/10">
            <h3 className="text-[15px] font-bold text-white">会社概要</h3>
          </div>
          <dl>
            {overview.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:items-center px-7 py-4 ${
                  i < overview.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <dt className="text-[13px] font-bold text-slate-500 w-full sm:w-44 shrink-0">{row.label}</dt>
                <dd className="text-[13.5px] text-slate-200 mt-1 sm:mt-0">
                  {row.isEmail ? (
                    <a href={CONTACT_MAILTO} className="font-semibold text-emerald-300 underline underline-offset-2">
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

        <div className="mt-10 text-center">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14.5px] font-bold text-white glass hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-300" />
            {CONTACT_EMAIL} へ問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}
