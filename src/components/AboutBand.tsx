import { ChevronRight } from "lucide-react";
import { COMPANY, VALUES, asset, CONTACT_MAILTO } from "@/lib/site";

export function AboutBand() {
  return (
    <section id="about" className="max-w-site mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img src={asset("img/team.jpg")} alt="チームの打ち合わせ" className="w-full h-[300px] lg:h-[420px] object-cover" loading="lazy" />
          <div className="absolute -bottom-5 -left-2 lg:left-6 bg-brand text-white px-6 py-4">
            <p className="font-en text-[11px] tracking-[0.15em] text-emerald-200">SOURIRETTE</p>
            <p className="text-[15px] font-bold mt-0.5">{COMPANY.reading}＝ほほえみ</p>
          </div>
        </div>

        <div>
          <p className="sect-label">About us</p>
          <h2 className="mt-3 sect-title text-[26px] lg:text-[34px] leading-[1.35]">
            現場の負担を、<br className="hidden sm:block" />テクノロジーで軽くする。
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-sub">
            社名の「Sourirette（スーリレット）」は、フランス語で“ほほえみ”。
            患者や利用者の笑顔も、働く人のゆとりも増やす——そんな現場づくりを、Webとプロダクトの両面から支えます。
          </p>

          <div className="mt-8 space-y-4">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4 border-l-2 border-brand/30 pl-4">
                <div>
                  <p className="font-en text-[11px] font-bold tracking-[0.14em] text-brand uppercase">{v.title}</p>
                  <p className="text-[15px] font-bold text-ink mt-0.5">{v.heading}</p>
                  <p className="text-[13px] text-sub mt-1 leading-[1.7]">{v.body}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={CONTACT_MAILTO} className="arrow-link mt-8">
            会社情報・お問い合わせ <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
