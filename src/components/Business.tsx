import { ChevronRight } from "lucide-react";
import { SERVICES, asset } from "@/lib/site";

export function Business() {
  return (
    <section id="services" className="bg-mist">
      <div className="max-w-site mx-auto px-6 py-20 lg:py-28">
        <div className="text-center">
          <p className="sect-label">Business</p>
          <h2 className="mt-3 sect-title text-[28px] lg:text-[38px]">事業・サービス</h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-sub">
            Web制作・EC構築から、自社プロダクトの開発まで。Sourirette の3つの事業領域。
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <a
              key={s.key}
              href={s.href}
              className="group bg-white border border-line overflow-hidden hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.3)] transition-shadow flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={asset(s.img)} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {"badge" in s && s.badge && (
                  <span className="absolute top-3 left-3 text-[11px] font-bold text-white bg-brand rounded-sm px-2.5 py-1">{s.badge}</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-en text-[22px] font-bold text-brand/30">{s.no}</span>
                  <div>
                    <p className="font-en text-[11px] font-bold tracking-[0.12em] text-brand uppercase">{s.en}</p>
                    <h3 className="text-[18px] font-bold text-ink leading-tight">{s.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-[1.85] text-sub flex-1">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand group-hover:gap-2.5 transition-all">
                  {s.cta} <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
