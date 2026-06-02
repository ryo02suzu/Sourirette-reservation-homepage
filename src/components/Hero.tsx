import { ChevronRight } from "lucide-react";
import { CONTACT_MAILTO, COMPANY, asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative pt-[52px]">
      <div className="max-w-site mx-auto px-5 lg:px-8 pt-20 lg:pt-28 text-center">
        <p className="animate-fadeUp text-[15px] font-semibold text-emerald-700">
          {COMPANY.name}
        </p>
        <h1 className="animate-fadeUp mt-3 h-hero text-ink text-[40px] sm:text-[58px] lg:text-[72px]">
          ほほえみが続く毎日を、
          <br />
          テクノロジーで。
        </h1>
        <p className="animate-fadeUp [animation-delay:0.1s] mt-6 mx-auto max-w-text text-[18px] sm:text-[20px] leading-[1.7] text-sub">
          Sourirette（スーリレット）は、歯科医院の現場をなめらかにするプロダクトをつくる会社です。
          その第一弾が、予約・経営クラウド「Arche」。
        </p>

        <div className="animate-fadeUp [animation-delay:0.18s] mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[16px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            事業・プロダクトを見る
          </a>
          <a href={CONTACT_MAILTO} className="link-chevron text-[16px]">
            お問い合わせ <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 大きなコーポレート・ビジュアル */}
        <div className="animate-fadeUp [animation-delay:0.26s] mt-16 lg:mt-20">
          <div className="rounded-[28px] overflow-hidden shadow-[0_40px_90px_-35px_rgba(0,0,0,0.3)]">
            <img
              src={asset("img/smile.jpg")}
              alt="ほほえむ患者"
              className="w-full h-[300px] sm:h-[460px] object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
