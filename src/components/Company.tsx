import { Mail } from "lucide-react";
import { COMPANY, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";
import { Reveal } from "@/lib/motion";

const overview: { label: string; value: string; isEmail?: boolean }[] = [
  { label: "会社名", value: COMPANY.name },
  { label: "事業内容", value: COMPANY.business },
  { label: "主要プロダクト", value: COMPANY.product },
  { label: "設立", value: COMPANY.established },
  { label: "お問い合わせ", value: COMPANY.email, isEmail: true },
];

export function Company() {
  return (
    <section id="company" className="bg-canvas">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-28 lg:py-36">
        <Reveal className="text-center">
          <p className="text-[14px] font-semibold text-emerald-700">Company</p>
          <h2 className="mt-3 h-section text-ink text-[32px] sm:text-[46px]">運営会社について</h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-sub">
            Arche は <span className="font-semibold text-ink">{COMPANY.name}</span> が開発・運営しています。
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 rounded-[24px] bg-white border border-black/[0.06] overflow-hidden">
          <dl>
            {overview.map((row, i) => (
              <div key={row.label} className={`flex flex-col sm:flex-row sm:items-center px-7 py-5 ${i < overview.length - 1 ? "border-b border-black/5" : ""}`}>
                <dt className="text-[13px] font-semibold text-sub w-full sm:w-44 shrink-0">{row.label}</dt>
                <dd className="text-[14px] text-ink mt-1 sm:mt-0">
                  {row.isEmail ? (
                    <a href={CONTACT_MAILTO} className="font-semibold text-emerald-700 underline underline-offset-2">{row.value}</a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-10 text-center">
          <a href={CONTACT_MAILTO} className="inline-flex items-center gap-2 h-12 px-7 rounded-full text-[15px] font-semibold text-white bg-ink hover:bg-black transition-colors">
            <Mail className="w-4 h-4" />
            {CONTACT_EMAIL} へ問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}
