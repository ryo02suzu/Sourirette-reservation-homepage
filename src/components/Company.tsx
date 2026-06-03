import { COMPANY } from "@/lib/site";

const overview: { label: string; value: string }[] = [
  { label: "会社名", value: COMPANY.name },
  { label: "事業内容", value: COMPANY.business },
  { label: "主要サービス", value: "ホームページ制作／Arche（予約・経営）／Q-re（クチコミ増援）／シカエル（審美歯科）" },
  { label: "設立", value: COMPANY.established },
  { label: "お問い合わせ", value: COMPANY.email },
];

export function Company() {
  return (
    <section id="company" className="max-w-site mx-auto px-6 py-20 lg:py-28">
      <div className="text-center">
        <p className="sect-label">Company</p>
        <h2 className="mt-3 sect-title text-[28px] lg:text-[38px]">会社情報</h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto border-t border-line">
        {overview.map((row) => (
          <div key={row.label} className="flex flex-col sm:flex-row gap-1 sm:gap-0 py-5 border-b border-line">
            <dt className="text-[13.5px] font-bold text-ink w-full sm:w-48 shrink-0">{row.label}</dt>
            <dd className="text-[14px] text-sub leading-relaxed">
              {row.label === "お問い合わせ" ? (
                <a href={`mailto:${row.value}`} className="text-brand font-medium underline underline-offset-2">{row.value}</a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </div>
    </section>
  );
}
