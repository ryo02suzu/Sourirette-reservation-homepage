import { ArrowRight } from "lucide-react";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";
import { Aurora } from "./Aurora";

export function FinalCta() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 px-8 py-16 lg:px-16 lg:py-24 text-center bg-night-900">
          <Aurora />
          <div className="absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />

          <div className="relative">
            <h2 className="font-jp font-black tracking-tight text-white text-[30px] lg:text-[48px] leading-[1.2]">
              医院の“まわす仕事”を、
              <br />
              <span className="text-gradient">Arche に任せませんか。</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.9] text-slate-400 max-w-xl mx-auto">
              ご相談は無料です。医院の状況をうかがって、最適な使い方とプランをご提案します。
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CONTACT_MAILTO}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500 hover:to-emerald-400 transition-all"
                style={{ boxShadow: "0 16px 44px -12px rgba(16,185,129,0.9)" }}
              >
                導入のご相談（無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={APP_LINKS.login}
                className="glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold text-white hover:bg-white/10 transition-colors"
              >
                ログイン
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
