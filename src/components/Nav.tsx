import { useEffect, useState } from "react";
import { Menu, X, LogIn, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { APP_LINKS, CONTACT_MAILTO } from "@/lib/site";

const links = [
  { label: "特長", href: "#features" },
  { label: "課題と解決", href: "#solutions" },
  { label: "導入の流れ", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "開発の背景", href: "#story" },
  { label: "会社情報", href: "#company" },
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
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-emerald-100 shadow-[0_1px_0_rgba(5,150,105,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-site mx-auto px-5 lg:px-8 h-[68px] flex items-center gap-8">
          <a href="#top" aria-label="Arche トップへ">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-7 ml-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-ink-soft hover:text-emerald-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5 ml-auto">
            <a
              href={APP_LINKS.login}
              className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full text-[13.5px] font-semibold text-ink-soft hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              ログイン
            </a>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-[13.5px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-[0_8px_20px_-8px_rgba(5,150,105,0.8)] transition-colors"
            >
              導入のご相談
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden ml-auto p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-emerald-100 bg-white">
            <div className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] font-medium text-ink border-b border-gray-100"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-2.5">
                <a
                  href={APP_LINKS.login}
                  className="inline-flex items-center justify-center gap-1.5 h-11 rounded-full text-[14px] font-semibold border border-emerald-200 text-emerald-700"
                >
                  <LogIn className="w-4 h-4" />
                  ログイン
                </a>
                <a
                  href={CONTACT_MAILTO}
                  className="inline-flex items-center justify-center gap-1.5 h-11 rounded-full text-[14px] font-bold text-white bg-emerald-600"
                >
                  導入のご相談
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
