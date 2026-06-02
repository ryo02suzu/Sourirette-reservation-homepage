import { ArrowRight, LogIn } from "lucide-react";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-14 lg:px-16 lg:py-20 text-center">
          {/* 装飾 */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-emerald-600/30 blur-3xl" />
          <div className="absolute inset-0 bg-dots opacity-20" />

          <div className="relative">
            <h2 className="font-jp font-black tracking-tight text-white text-[28px] lg:text-[44px] leading-[1.25]">
              医院の“まわす仕事”を、
              <br />
              <span className="text-gradient">Arche に任せませんか。</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.9] text-white/70 max-w-xl mx-auto">
              ご相談は無料です。医院の状況をうかがって、最適な使い方とプランをご提案します。
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold text-ink bg-white hover:bg-emerald-50 transition-colors"
              >
                導入のご相談（無料）
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={APP_LINKS.login}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold text-white border border-white/25 hover:bg-white/10 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                ログイン
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
