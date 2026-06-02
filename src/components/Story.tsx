import { GraduationCap, Stethoscope, Building2, Quote } from "lucide-react";
import { asset } from "@/lib/site";

export function Story() {
  return (
    <section id="story" className="relative py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ビジュアル */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-5 grid-rows-6 gap-3 h-[420px] sm:h-[480px]">
              <div className="col-span-3 row-span-6 rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img src={asset("img/consult.jpg")} alt="歯科医師と患者の診療シーン" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img src={asset("img/clinic-room.jpg")} alt="診療室" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img src={asset("img/xray.jpg")} alt="レントゲン読影" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            {/* グラデのオーバーレイで馴染ませる */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-night-950/40 to-transparent" />

            <div className="absolute -bottom-6 left-4 max-w-[270px] gborder glow-emerald">
              <div className="gborder-inner px-5 py-4">
                <Quote className="w-5 h-5 text-emerald-300" />
                <p className="mt-1.5 text-[13.5px] font-bold leading-[1.6] text-white">
                  現場を知る人間が作らなければ、本当に使えるシステムにはならない。
                </p>
              </div>
            </div>
          </div>

          {/* テキスト */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-jp font-black tracking-tight text-white text-[28px] lg:text-[40px] leading-[1.25]">
              現場を知る人間が、
              <br />
              <span className="text-gradient">現場のために。</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[2] text-slate-400">
              開発者は、現役の歯学部5年生。親が歯科医院を営んでおり、
              受付の電話対応や手書き管理の大変さを、幼い頃から間近で見てきました。
            </p>
            <p className="mt-4 text-[15px] leading-[2] text-slate-400">
              親をはじめ知人の開業医・大学の非常勤講師（歯科）など
              <span className="font-bold text-white">21名の現役開業医に監修</span>
              いただきながら、現場の声を一つずつ反映して開発を続けています。
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: GraduationCap, title: "歯学部 5年", desc: "臨床と患者動線を理解して設計" },
                { icon: Building2, title: "実医院で検証", desc: "使いながら改善を継続" },
                { icon: Stethoscope, title: "開業医 21名", desc: "現場視点で監修" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-400/15 text-emerald-300">
                      <Icon className="w-5 h-5" strokeWidth={1.9} />
                    </span>
                    <p className="mt-3 text-[14px] font-bold text-white">{b.title}</p>
                    <p className="text-[12px] text-slate-400 mt-0.5 leading-snug">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-[11.5px] text-slate-500">
              ※ 掲載写真はイメージです。代表者・医院の実写は順次差し替え予定です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
