import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { asset } from "@/lib/site";

const slides = [
  {
    img: "img/smile.jpg",
    label: "CORPORATE",
    title: ["ほほえみが続く毎日を、", "テクノロジーで。"],
    text: "Sourirette は、現場の負担を軽くするプロダクトとWebをつくる会社です。",
    href: "#about",
    cta: "私たちについて",
  },
  {
    img: "img/clinic-wide.jpg",
    label: "PRODUCT — Arche",
    title: ["歯科医院の予約・経営を、", "ひとつに。"],
    text: "予約・患者管理・リコール・口コミ・経営分析を統合した、自社開発クラウド「Arche」。",
    href: "#arche",
    cta: "Arche を見る",
  },
  {
    img: "img/web.jpg",
    label: "WEB / EC",
    title: ["つくる、届ける。", "Webでビジネスを伸ばす。"],
    text: "ホームページ制作からECサイト構築まで。成果につながるWebをご一緒します。",
    href: "#services",
    cta: "事業・サービス",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = slides.length;

  const go = (to: number) => setI((to + n) % n);

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [n]);

  const reset = () => { if (timer.current) clearInterval(timer.current); timer.current = setInterval(() => setI((v) => (v + 1) % n), 6000); };

  return (
    <section id="top" className="relative pt-[100px] lg:pt-[100px]">
      <div className="relative h-[460px] sm:h-[560px] lg:h-[600px] overflow-hidden bg-brand-deep">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0, zIndex: i === idx ? 10 : 0 }}
            aria-hidden={i !== idx}
          >
            <img
              src={asset(s.img)}
              alt=""
              className={`w-full h-full object-cover ${i === idx ? "animate-kenburns" : ""}`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/85 via-brand-deep/55 to-transparent" />
            <div className="absolute inset-0">
              <div className="max-w-site mx-auto px-6 h-full flex flex-col justify-center">
                <p className="font-en text-[12px] font-bold tracking-[0.2em] text-emerald-300">{s.label}</p>
                <h1 className="mt-4 font-bold text-white tracking-[-0.01em] leading-[1.18] text-[30px] sm:text-[44px] lg:text-[52px]">
                  {s.title.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h1>
                <p className="mt-5 max-w-lg text-[14.5px] sm:text-[16px] leading-[1.8] text-white/85">{s.text}</p>
                <div className="mt-8">
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-2 h-12 px-7 rounded-sm text-[15px] font-bold text-brand-deep bg-white hover:bg-emerald-50 transition-colors"
                  >
                    {s.cta} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 矢印 */}
        <button
          onClick={() => { go(i - 1); reset(); }}
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white transition-colors"
          aria-label="前へ"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => { go(i + 1); reset(); }}
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white transition-colors"
          aria-label="次へ"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* 下部インジケータ */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <span className="font-en text-[12px] text-white/80 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { go(idx); reset(); }}
                className={`h-1 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}`}
                aria-label={`スライド ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-en text-[12px] text-white/50 tabular-nums">{String(n).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
