import { CONTACT_MAILTO, APP_LINKS } from "@/lib/site";
import { Reveal } from "@/lib/motion";

export function FinalCta() {
  return (
    <section className="bg-canvas">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-28 lg:py-36 text-center">
        <Reveal>
          <h2 className="h-section text-ink text-[34px] sm:text-[52px]">
            医院の毎日を、<br />もっと軽く。
          </h2>
          <p className="mt-5 mx-auto max-w-text text-[18px] leading-[1.7] text-sub">
            ご相談は無料です。医院の状況をうかがって、最適な使い方とプランをご提案します。
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full text-[16px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              導入のご相談
            </a>
            <a href={APP_LINKS.login} className="link-chevron text-[16px]">ログイン ›</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
