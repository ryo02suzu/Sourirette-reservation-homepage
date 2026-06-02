import { ChevronRight, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export function ContactBand() {
  return (
    <section className="bg-mist border-t border-line">
      <div className="max-w-site mx-auto px-6 py-16 lg:py-20">
        <div className="bg-brand rounded-md px-8 py-12 lg:px-16 lg:py-16 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="text-[26px] lg:text-[36px] font-bold text-white leading-[1.3]">
              Web制作・EC・Arche のご相談は、お気軽に。
            </h2>
            <p className="mt-4 text-[15px] text-white/85">
              ご相談・お見積もりは無料です。まずはお問い合わせください。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={CONTACT_MAILTO} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-[16px] font-bold text-brand bg-white hover:bg-emerald-50 transition-colors">
                <Mail className="w-4 h-4" /> お問い合わせ
              </a>
              <a href={CONTACT_MAILTO} className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:gap-2.5 transition-all">
                {CONTACT_EMAIL} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
