import { Check } from "lucide-react";
import { PLANS, CONTACT_MAILTO, APP_LINKS } from "@/lib/site";
import { Reveal } from "@/lib/motion";

export function Pricing() {
  return (
    <section id="pricing" className="bg-canvas">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36">
        <Reveal className="text-center">
          <h2 className="h-section text-ink text-[32px] sm:text-[46px]">規模に合わせて、無理なく。</h2>
          <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
            初期費用は0円。フリープランから始めて、成長に合わせてアップグレードできます。
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.key}
              delay={i * 80}
              className={`h-full flex flex-col rounded-[24px] bg-white p-7 ${
                p.featured ? "ring-2 ring-emerald-500 shadow-[0_30px_60px_-30px_rgba(5,150,105,0.45)]" : "border border-black/[0.07]"
              }`}
            >
              {p.featured && (
                <span className="self-start mb-3 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-emerald-600">
                  いちばん人気
                </span>
              )}
              <p className="text-[13px] font-semibold text-emerald-700">{p.name}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-[34px] font-extrabold text-ink leading-none tracking-tight">{p.price}</span>
                <span className="text-[12px] mb-1 text-sub">{p.period}</span>
              </div>
              <p className="mt-2 text-[12.5px] text-sub">{p.tagline}</p>
              <div className="my-6 h-px bg-black/[0.07]" />
              <ul className="space-y-2.5 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" strokeWidth={3} />
                    <span className="text-[13px] text-ink/80">{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CONTACT_MAILTO}
                className={`mt-7 inline-flex items-center justify-center h-11 rounded-full text-[13.5px] font-semibold transition-colors ${
                  p.featured ? "text-white bg-emerald-600 hover:bg-emerald-700" : "text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                {p.key === "enterprise" ? "相談する" : "このプランで相談"}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-sub">
          表示は税込・月額。導入のご相談は無料。既にご利用中の医院は{" "}
          <a href={APP_LINKS.login} className="font-semibold text-emerald-700 underline underline-offset-2">こちらからログイン</a>。
        </p>
      </div>
    </section>
  );
}
