import { IllustBooking, IllustReminder, IllustReview } from "./Illust";

const reasons = [
  {
    Illust: IllustBooking,
    no: "01",
    title: "予約が、自動で集まる。",
    body: "24時間オンライン予約で電話対応を削減。スマホからかんたんに予約でき、取りこぼしを防ぎます。",
  },
  {
    Illust: IllustReminder,
    no: "02",
    title: "来てほしい人に、ちゃんと届く。",
    body: "メール / SMS / LINE の自動リマインダーとリコールで、無断キャンセルを抑え、再来院を促します。",
  },
  {
    Illust: IllustReview,
    no: "03",
    title: "評判と経営が、育っていく。",
    body: "満足した患者を口コミへ誘導し、来院・売上はレポートで可視化。データで医院を伸ばします。",
  },
];

export function Reasons() {
  return (
    <section className="max-w-site mx-auto px-6 py-20 lg:py-28">
      <div className="text-center">
        <p className="sect-label">Why Arche</p>
        <h2 className="mt-3 sect-title text-[28px] lg:text-[38px]">
          選ばれるのには、<span className="text-brand">理由</span>があります。
        </h2>
        <p className="mt-4 text-[15px] leading-[1.8] text-sub">
          現場の動線にあわせて設計した、歯科医院のための予約・経営クラウド。
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-7">
        {reasons.map((r) => {
          const Illust = r.Illust;
          return (
            <div key={r.no} className="group">
              <div className="rounded-2xl bg-mist overflow-hidden p-4 transition-transform duration-300 group-hover:-translate-y-1.5">
                <Illust />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-en text-[20px] font-bold text-brand/30">{r.no}</span>
                <h3 className="text-[18px] font-bold text-ink">{r.title}</h3>
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.85] text-sub">{r.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
