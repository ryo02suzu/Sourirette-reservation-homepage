import { Placeholder } from "./Placeholder";
import { Reveal } from "@/lib/motion";

/**
 * 代表メッセージ（創業の想い）。
 * 顔写真とプロフィール、想いの本文は「後日差し替え」の枠を確保。
 * src を渡せば写真に切り替わる。
 */
export function FounderMessage() {
  return (
    <section id="message" className="bg-mist border-y border-line">
      <div className="max-w-site mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-center">
          {/* 顔写真の枠（差し替え用） */}
          <Reveal>
            <div className="relative">
              <Placeholder
                label="代表者の写真"
                ratio="3 / 4"
                rounded="rounded-3xl"
                className="w-full"
                /* src="/img/founder.jpg" を入れれば写真に切り替わります */
              />
              <div className="absolute -bottom-4 left-5 bg-brand text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="font-en text-[10px] tracking-[0.14em] text-emerald-200">FOUNDER</p>
                <p className="text-[14px] font-bold mt-0.5">代表者名（後日掲載）</p>
              </div>
            </div>
          </Reveal>

          {/* メッセージ本文（差し替え用プレースホルダー） */}
          <Reveal delay={0.12}>
            <p className="sect-label">Message</p>
            <h2 className="mt-3 sect-title text-[26px] lg:text-[36px] leading-[1.4]">
              なぜ、この会社を<span className="text-brand">つくったのか。</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[2] text-sub">
              <p className="bg-white border border-dashed border-slate-300 rounded-xl px-5 py-4 text-slate-400">
                ※ ここに「創業の想い／きっかけ」が入ります（1〜3段落・後日差し替え）。
                歯科の現場で感じた課題、なぜ予約やWebから始めたのか——ご本人の言葉に置き換えます。
              </p>
            </div>
            <p className="mt-6 text-[13px] text-sub">
              代表者　<span className="text-ink font-semibold">氏名（後日掲載）</span> ／ Sourirette合同会社
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
