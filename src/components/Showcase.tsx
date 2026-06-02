import { asset } from "@/lib/site";

const stats = [
  { value: "21", suffix: "名", label: "監修した現役開業医" },
  { value: "0", suffix: "円", label: "初期費用" },
  { value: "3", suffix: "経路", label: "メール / SMS / LINE 通知" },
  { value: "5", suffix: "-in-1", label: "予約〜経営を1つに" },
];

export function Showcase() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={asset("img/clinic-wide.jpg")}
        alt="歯科クリニックの診療室"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* ダークなシネマティック・オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/90 to-night-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-night-950/60" />

      <div className="relative max-w-site mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Arche</span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[28px] lg:text-[42px] leading-[1.25]">
            1院の現場から生まれ、
            <br />
            <span className="text-gradient">21名の開業医</span>が育てている。
          </h2>
          <p className="mt-5 text-[15px] leading-[1.95] text-slate-300/85 max-w-xl">
            机上の空論ではなく、実際の診療現場の動線にあわせて設計。
            「便利そう」ではなく「明日から使える」道具を目指しています。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-white leading-none">
                <span className="text-[40px] lg:text-[52px]">{s.value}</span>
                <span className="text-[18px] text-emerald-300 ml-0.5">{s.suffix}</span>
              </p>
              <div className="mt-3 h-px w-10 bg-gradient-to-r from-emerald-400 to-transparent" />
              <p className="mt-3 text-[12.5px] text-slate-400 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
