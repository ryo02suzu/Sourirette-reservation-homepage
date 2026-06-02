import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SouriretteLogo } from "./Logo";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";

const links = [
  { label: "私たちについて", href: "#about" },
  { label: "事業・プロダクト", href: "#products" },
  { label: "会社情報", href: "#company" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.06]" : "bg-white/0 border-b border-transparent"
        }`}
      >
        <nav className="max-w-site mx-auto px-5 lg:px-8 h-[52px] flex items-center">
          <a href="#top" aria-label="Sourirette トップへ">
            <SouriretteLogo />
          </a>

          <div className="hidden lg:flex items-center gap-8 mx-auto">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-ink/80 hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <a href={APP_LINKS.login} className="text-[13px] text-ink/80 hover:text-ink transition-colors">
              Arche ログイン
            </a>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center h-8 px-4 rounded-full text-[12.5px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              お問い合わせ
            </a>
          </div>

          <button className="lg:hidden ml-auto p-2 -mr-2 text-ink" onClick={() => setOpen((v) => !v)} aria-label="メニュー">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-xl">
            <div className="px-5 py-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[15px] text-ink border-b border-black/5">
                  {l.label}
                </a>
              ))}
              <div className="py-4 grid grid-cols-2 gap-2.5">
                <a href={APP_LINKS.login} className="inline-flex items-center justify-center h-11 rounded-full text-[14px] font-semibold border border-hair text-ink">
                  Arche ログイン
                </a>
                <a href={CONTACT_MAILTO} className="inline-flex items-center justify-center h-11 rounded-full text-[14px] font-semibold text-white bg-emerald-600">
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
