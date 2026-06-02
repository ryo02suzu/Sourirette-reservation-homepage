import { asset } from "@/lib/site";
import { Reveal, CountUp } from "@/lib/motion";

const stats = [
  { to: 21, suffix: "名", label: "監修した現役開業医" },
  { to: 0, suffix: "円", label: "初期費用" },
  { to: 3, suffix: "経路", label: "メール / SMS / LINE" },
  { to: 5, suffix: "-in-1", label: "予約〜経営を1つに" },
];

export function Showcase() {
  return (
    <section className="bg-canvas">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36 text-center">
        <Reveal>
          <p className="text-[14px] font-semibold text-emerald-700">Why Arche</p>
          <h2 className="mt-3 h-section text-ink text-[32px] sm:text-[46px]">
            現場から生まれ、<br className="hidden sm:block" />現場で磨かれている。
          </h2>
          <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
            歯学部に在籍する開発者が、21名の現役開業医の監修のもとで開発。
            「便利そう」ではなく「明日から使える」道具を目指しています。
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14 rounded-[28px] overflow-hidden shadow-[0_40px_90px_-35px_rgba(0,0,0,0.3)]">
          <img src={asset("img/clinic-wide.jpg")} alt="歯科クリニックの診療室" className="w-full h-[280px] sm:h-[440px] object-cover" loading="lazy" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-jp font-extrabold text-ink leading-none tracking-tight">
                <CountUp to={s.to} className="text-[40px] sm:text-[52px]" />
                <span className="text-[20px] text-emerald-600 ml-0.5">{s.suffix}</span>
              </p>
              <p className="mt-3 text-[13px] text-sub">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
