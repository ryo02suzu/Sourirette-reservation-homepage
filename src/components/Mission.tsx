import { VALUES } from "@/lib/site";
import { Reveal } from "@/lib/motion";

export function Mission() {
  return (
    <section id="about" className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36">
      <Reveal className="text-center">
        <p className="text-[14px] font-semibold text-emerald-700">About us</p>
        <h2 className="mt-3 h-section text-ink text-[32px] sm:text-[46px]">
          私たちが、つくる理由。
        </h2>
        <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
          社名の「Sourirette（スーリレット）」は、フランス語で“ほほえみ”を意味します。
          患者の笑顔も、働く人のゆとりも増やす——そんな現場づくりを、テクノロジーで支えます。
        </p>
      </Reveal>

      <div className="mt-16 grid lg:grid-cols-3 gap-6">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 100} className="rounded-[24px] bg-canvas p-8">
            <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-emerald-700">{v.title}</p>
            <h3 className="mt-4 text-[20px] font-bold text-ink leading-[1.4]">{v.heading}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.85] text-sub">{v.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
