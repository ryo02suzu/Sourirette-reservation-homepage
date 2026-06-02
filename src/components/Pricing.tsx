import { Check } from "lucide-react";
import { PLANS, CONTACT_MAILTO, APP_LINKS } from "@/lib/site";
import { Reveal } from "@/lib/motion";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-y border-white/10 bg-white/[0.015]">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="label-mono">// PRICING</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[30px] lg:text-[44px] leading-[1.2]">
            規模に合わせて、<span className="text-gradient">無理なく。</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.9] text-slate-400">
            初期費用は0円。フリープランから始めて、成長に合わせてアップグレード。
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PLANS.map((p, idx) =>
            p.featured ? (
              <Reveal key={p.key} delay={idx * 90} className="gborder glow-emerald">
                <div className="gborder-inner p-7 flex flex-col h-full">
                  <PlanBody p={p} featured />
                </div>
              </Reveal>
            ) : (
              <Reveal
                key={p.key}
                delay={idx * 90}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 flex flex-col hover:border-white/20 transition-colors"
              >
                <PlanBody p={p} />
              </Reveal>
            ),
          )}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-slate-500">
          表示は税込・月額。導入のご相談は無料。既にご利用中の医院は{" "}
          <a href={APP_LINKS.login} className="font-semibold text-emerald-300 underline underline-offset-2">
            こちらからログイン
          </a>
          。
        </p>
      </div>
    </section>
  );
}

function PlanBody({ p, featured = false }: { p: (typeof PLANS)[number]; featured?: boolean }) {
  return (
    <>
      {featured && (
        <span className="self-start mb-3 px-3 py-1 rounded-full text-[11px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500">
          いちばん人気
        </span>
      )}
      <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-emerald-300">{p.name}</p>
      <div className="mt-3 flex items-end gap-1">
        <span className="font-display text-[34px] font-bold text-white leading-none">{p.price}</span>
        <span className="text-[12px] mb-1 text-slate-500">{p.period}</span>
      </div>
      <p className="mt-2 text-[12.5px] text-slate-400">{p.tagline}</p>

      <div className="my-6 h-px bg-white/10" />

      <ul className="space-y-2.5 flex-1">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" strokeWidth={3} />
            <span className="text-[13px] text-slate-300">{pt}</span>
          </li>
        ))}
      </ul>

      <a
        href={CONTACT_MAILTO}
        className={`mt-7 inline-flex items-center justify-center h-11 rounded-full text-[13.5px] font-bold transition-all ${
          featured
            ? "text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500 hover:to-emerald-400"
            : "text-white border border-white/15 hover:bg-white/5"
        }`}
      >
        {p.key === "enterprise" ? "相談する" : "このプランで相談"}
      </a>
    </>
  );
}
