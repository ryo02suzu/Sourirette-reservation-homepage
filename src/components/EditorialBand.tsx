import { asset } from "@/lib/site";
import { Reveal } from "@/lib/motion";

/** 全幅の写真“魅せ”バンド（構図とキャッチで余韻をつくる） */
export function EditorialBand() {
  return (
    <section className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
      <img
        src={asset("img/smile.jpg")}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center animate-kenburns"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/45 to-brand-deep/20" />
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-site mx-auto w-full px-6 pb-14 lg:pb-20">
          <Reveal>
            <p className="font-en text-[11px] tracking-[0.28em] text-emerald-300 mb-5">SOURIRETTE — “A LITTLE SMILE”</p>
            <h2 className="font-mincho font-bold text-white leading-[1.25] tracking-[-0.01em] text-[34px] sm:text-[50px] lg:text-[62px]">
              その笑顔が、<br />
              医院の力になる。
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
