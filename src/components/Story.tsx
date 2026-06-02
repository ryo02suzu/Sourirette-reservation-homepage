import { GraduationCap, Stethoscope, Building2, Quote } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* テキスト */}
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-jp font-black tracking-tight text-ink text-[28px] lg:text-[38px] leading-[1.25]">
              現場を知る人間が、
              <br />
              現場のために作りました。
            </h2>
            <p className="mt-6 text-[15px] leading-[2] text-ink-muted">
              開発者は、現役の歯学部5年生。親が歯科医院を営んでおり、
              受付の電話対応や手書き管理の大変さを、幼い頃から間近で見てきました。
            </p>
            <p className="mt-4 text-[15px] leading-[2] text-ink-muted">
              「歯科の現場を知っている人間が作らなければ、本当に使えるシステムにはならない」。
              その想いから、親をはじめ知人の開業医・大学の非常勤講師（歯科）など
              <span className="font-bold text-ink">21名の現役開業医に監修</span>
              いただきながら、現場の声を一つずつ反映して開発を続けています。
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: GraduationCap, title: "歯学部 在籍（5年生）", desc: "臨床と患者動線を理解した上で機能を設計" },
                { icon: Building2, title: "実医院での実地検証", desc: "実際に使いながらフィードバックで改善" },
                { icon: Stethoscope, title: "現役開業医 21名が監修", desc: "院長・開業医・大学非常勤講師（歯科）" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white px-4 py-3.5"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-ink">{b.title}</p>
                      <p className="text-[12.5px] text-ink-muted mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ビジュアル */}
          <div className="relative">
            <div className="relative rounded-[28px] bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 lg:p-10 text-white shadow-[0_30px_80px_-30px_rgba(5,150,105,0.6)] overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
              <Quote className="w-10 h-10 text-emerald-300" />
              <p className="mt-5 text-[19px] lg:text-[22px] font-bold leading-[1.7]">
                「便利そう」より、
                <br />
                「これなら明日から使える」。
                <br />
                現場で続く道具を目指しています。
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-white/15 text-[15px] font-bold">
                  開発
                </div>
                <div>
                  <p className="text-[14px] font-bold">Arche 開発者</p>
                  <p className="text-[12.5px] text-emerald-100">歯学部5年 / Sourirette合同会社</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white border border-emerald-100 shadow-soft px-5 py-3.5">
              <p className="text-[24px] font-black text-emerald-700 leading-none">21名</p>
              <p className="text-[11px] text-ink-muted mt-1">監修した現役開業医</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
