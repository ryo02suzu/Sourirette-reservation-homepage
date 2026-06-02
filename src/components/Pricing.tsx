import { Check } from "lucide-react";
import { PLANS, CONTACT_MAILTO, APP_LINKS } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-emerald-50/50 border-y border-emerald-100">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-ink text-[30px] lg:text-[42px] leading-[1.2]">
            医院の規模に合わせて、<span className="text-gradient">無理なく。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-ink-muted">
            初期費用は0円。フリープランから始めて、成長に合わせてアップグレードできます。
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={`relative flex flex-col rounded-3xl p-7 ${
                p.featured
                  ? "bg-ink text-white shadow-[0_30px_70px_-25px_rgba(8,17,13,0.6)] ring-2 ring-emerald-500"
                  : "bg-white border border-emerald-100 shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-white shadow">
                  いちばん人気
                </span>
              )}

              <p
                className={`text-[12px] font-bold tracking-[0.14em] uppercase ${
                  p.featured ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                {p.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-[34px] font-black leading-none">{p.price}</span>
                <span className={`text-[12px] mb-1 ${p.featured ? "text-white/55" : "text-ink-muted"}`}>
                  {p.period}
                </span>
              </div>
              <p className={`mt-2 text-[12.5px] ${p.featured ? "text-white/65" : "text-ink-muted"}`}>
                {p.tagline}
              </p>

              <div className={`my-6 h-px ${p.featured ? "bg-white/10" : "bg-emerald-100"}`} />

              <ul className="space-y-2.5 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-emerald-400" : "text-emerald-600"}`}
                      strokeWidth={3}
                    />
                    <span className={`text-[13px] ${p.featured ? "text-white/85" : "text-ink-soft"}`}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT_MAILTO}
                className={`mt-7 inline-flex items-center justify-center h-11 rounded-full text-[13.5px] font-bold transition-colors ${
                  p.featured
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                {p.key === "enterprise" ? "相談する" : "このプランで相談"}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-ink-muted">
          表示は税込・月額です。導入のご相談は無料。既にご利用中の医院は{" "}
          <a href={APP_LINKS.login} className="font-semibold text-emerald-700 underline underline-offset-2">
            こちらからログイン
          </a>
          。
        </p>
      </div>
    </section>
  );
}
