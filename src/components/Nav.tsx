import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
          scrolled ? "bg-night-950/70 backdrop-blur-xl border-b border-white/10" : "border-b border-transparent"
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
                className="text-[13.5px] font-medium text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5 ml-auto">
            <a
              href={APP_LINKS.login}
              className="inline-flex items-center h-10 px-4 rounded-full text-[13.5px] font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              ログイン
            </a>
            <a
              href={CONTACT_MAILTO}
              className="group relative inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-[13.5px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500 hover:to-emerald-400 transition-all"
              style={{ boxShadow: "0 8px 26px -10px rgba(16,185,129,0.9)" }}
            >
              導入のご相談
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden ml-auto p-2 -mr-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-white/10 bg-night-950/95 backdrop-blur-xl">
            <div className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] font-medium text-slate-200 border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-2.5">
                <a
                  href={APP_LINKS.login}
                  className="inline-flex items-center justify-center h-11 rounded-full text-[14px] font-semibold border border-white/15 text-white"
                >
                  ログイン
                </a>
                <a
                  href={CONTACT_MAILTO}
                  className="inline-flex items-center justify-center h-11 rounded-full text-[14px] font-bold text-night-950 bg-gradient-to-r from-emerald-300 to-emerald-500"
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
