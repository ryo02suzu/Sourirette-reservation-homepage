import { useEffect, useState } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { SouriretteLogo } from "./Logo";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";

const links = [
  { label: "事業・サービス", href: "#services" },
  { label: "プロダクト", href: "#arche" },
  { label: "ニュース", href: "#news" },
  { label: "会社情報", href: "#company" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-line">
      {/* ユーティリティバー */}
      <div className="hidden lg:block border-b border-line">
        <div className="max-w-site mx-auto px-6 h-9 flex items-center justify-end gap-6 text-[12px] text-sub">
          <a href="#company" className="hover:text-ink transition-colors">会社情報</a>
          <a href={CONTACT_MAILTO} className="hover:text-ink transition-colors">採用情報</a>
          <a href={APP_LINKS.login} className="hover:text-ink transition-colors">Arche ログイン</a>
          <span className="text-line">|</span>
          <a href={CONTACT_MAILTO} className="hover:text-ink transition-colors">お問い合わせ</a>
        </div>
      </div>

      {/* メインヘッダー */}
      <nav className={`max-w-site mx-auto px-5 lg:px-6 flex items-center transition-all ${scrolled ? "h-14" : "h-16"}`}>
        <a href="#top" aria-label="Sourirette トップへ">
          <SouriretteLogo size={28} textClassName="text-[19px]" />
        </a>

        <div className="hidden lg:flex items-stretch h-full ml-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative inline-flex items-center px-5 text-[14px] font-medium text-ink/85 hover:text-brand transition-colors"
            >
              {l.label}
              <span className="absolute left-5 right-5 bottom-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button className="text-sub hover:text-brand transition-colors" aria-label="検索">
            <Search className="w-[18px] h-[18px]" />
          </button>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-1 h-10 px-5 rounded-sm text-[13.5px] font-bold text-white bg-brand hover:bg-brand-dark transition-colors"
          >
            お問い合わせ <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <button className="lg:hidden ml-auto p-2 -mr-2 text-ink" onClick={() => setOpen((v) => !v)} aria-label="メニュー">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="px-5 py-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-3.5 text-[15px] text-ink border-b border-line">
                {l.label}
                <ChevronRight className="w-4 h-4 text-sub" />
              </a>
            ))}
            <div className="flex items-center justify-between py-3.5 text-[14px] text-sub border-b border-line">
              <a href={APP_LINKS.login} onClick={() => setOpen(false)}>Arche ログイン</a>
            </div>
            <a href={CONTACT_MAILTO} onClick={() => setOpen(false)} className="mt-4 mb-3 inline-flex w-full items-center justify-center h-12 rounded-sm text-[15px] font-bold text-white bg-brand">
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
