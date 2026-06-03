import { asset } from "@/lib/site";

const fields = [
  "一般歯科", "小児歯科", "矯正歯科", "口腔外科",
  "審美・ホワイトニング", "インプラント", "訪問歯科", "予防・定期検診",
];

export function SupervisionWall() {
  const avatars = Array.from({ length: 9 }, (_, i) => `img/avatars/a${i + 1}.svg`);
  return (
    <section className="bg-mist border-b border-line">
      <div className="max-w-site mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div>
            <p className="sect-label">Supervision</p>
            <h2 className="mt-2 sect-title text-[20px] lg:text-[26px] leading-[1.5]">
              <span className="text-brand">21名の現役開業医</span>が、現場視点で監修。
            </h2>
            <p className="mt-3 text-[13.5px] text-sub leading-[1.8]">
              院長・開業医・大学非常勤講師（歯科）など、幅広い診療領域の先生方の声をプロダクトに反映しています。
            </p>
          </div>

          {/* アバタークラスタ */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {avatars.map((a, i) => (
                <span
                  key={a}
                  className="inline-grid place-items-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-emerald-100 ring-2 ring-white overflow-hidden"
                  style={{ zIndex: avatars.length - i }}
                >
                  <img src={asset(a)} alt="" className="w-full h-full" loading="lazy" />
                </span>
              ))}
              <span className="inline-grid place-items-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-brand text-white ring-2 ring-white text-[12px] font-bold">
                +12
              </span>
            </div>
          </div>
        </div>

        {/* 対応領域チップ（ロゴウォール代替） */}
        <div className="mt-9 pt-7 border-t border-line">
          <p className="text-[11.5px] font-semibold text-sub mb-3">対応診療領域</p>
          <div className="flex flex-wrap gap-2.5">
            {fields.map((f) => (
              <span key={f} className="inline-flex items-center text-[12.5px] text-ink/80 bg-white border border-line rounded-full px-3.5 py-1.5">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
