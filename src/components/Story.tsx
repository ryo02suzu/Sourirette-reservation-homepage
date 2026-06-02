import { Quote } from "lucide-react";
import { asset } from "@/lib/site";
import { Reveal } from "@/lib/motion";

export function Story() {
  return (
    <section id="story" className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-5 grid-rows-6 gap-3 h-[400px] sm:h-[460px]">
            <div className="col-span-3 row-span-6 rounded-[20px] overflow-hidden">
              <img src={asset("img/consult.jpg")} alt="歯科医師と患者の診療シーン" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 rounded-[20px] overflow-hidden">
              <img src={asset("img/clinic-room.jpg")} alt="診療室" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 rounded-[20px] overflow-hidden">
              <img src={asset("img/xray.jpg")} alt="レントゲン読影" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-[14px] font-semibold text-emerald-700">開発の背景</p>
          <h2 className="mt-3 h-section text-ink text-[30px] sm:text-[42px]">
            現場を知る人間が、<br />現場のために。
          </h2>
          <p className="mt-6 text-[16px] leading-[1.9] text-sub">
            開発者は、現役の歯学部5年生。親が歯科医院を営んでおり、受付の電話対応や手書き管理の大変さを、幼い頃から間近で見てきました。
          </p>
          <p className="mt-4 text-[16px] leading-[1.9] text-sub">
            親をはじめ知人の開業医・大学の非常勤講師（歯科）など
            <span className="font-semibold text-ink">21名の現役開業医に監修</span>
            いただきながら、現場の声を一つずつ反映して開発を続けています。
          </p>

          <figure className="mt-8 rounded-[20px] bg-canvas p-6">
            <Quote className="w-6 h-6 text-emerald-600" />
            <blockquote className="mt-2 text-[16px] font-semibold text-ink leading-[1.7]">
              現場を知る人間が作らなければ、本当に使えるシステムにはならない。
            </blockquote>
          </figure>

          <p className="mt-5 text-[11.5px] text-sub">※ 掲載写真はイメージです。代表者・医院の実写は順次差し替え予定です。</p>
        </Reveal>
      </div>
    </section>
  );
}
