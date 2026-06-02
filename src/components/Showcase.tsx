import { asset } from "@/lib/site";

const stats = [
  { value: "21名", label: "監修した現役開業医" },
  { value: "0円", label: "初期費用" },
  { value: "3経路", label: "メール / SMS / LINE 通知" },
  { value: "5-in-1", label: "予約〜経営を1つに" },
];

export function Showcase() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景写真 */}
      <img
        src={asset("img/clinic-wide.jpg")}
        alt="歯科クリニックの診療室"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/92 via-emerald-900/80 to-emerald-800/55" />

      <div className="relative max-w-site mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.16em] uppercase text-emerald-300">
            Why Arche
          </span>
          <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[28px] lg:text-[40px] leading-[1.3]">
            1院の現場から生まれ、
            <br />
            21名の開業医が育てています。
          </h2>
          <p className="mt-5 text-[15px] leading-[1.95] text-emerald-50/85">
            机上の空論ではなく、実際の診療現場の動線にあわせて設計。
            「便利そう」ではなく「明日から使える」道具を目指しています。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-emerald-400/60 pl-4">
              <p className="text-[28px] lg:text-[34px] font-black text-white leading-none">{s.value}</p>
              <p className="mt-2 text-[12.5px] text-emerald-100/80 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
