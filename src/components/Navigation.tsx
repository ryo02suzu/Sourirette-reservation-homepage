import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { APP_LINKS, COLORS, CONTACT_MAILTO } from "@/lib/site";

const navLinks = [
  { label: "Archeとは", href: "#about" },
  { label: "機能", href: "#features" },
  { label: "選ばれる理由", href: "#why" },
  { label: "料金", href: "#pricing" },
  { label: "会社情報", href: "#company" },
  { label: "よくある質問", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 上部ユーティリティバー（デスクトップのみ） */}
      <div className="hidden md:block bg-white border-b border-gray-200/60">
        <div className="max-w-site mx-auto px-5 h-[34px] flex items-center justify-between">
          <span className="text-[12px] text-gray-500">
            歯科医院専用クラウド予約・管理システム
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#company"
              className="text-[12px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              会社情報
            </a>
            <a
              href={CONTACT_MAILTO}
              className="text-[12px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              お問い合わせ
            </a>
            <a
              href={APP_LINKS.login}
              className="text-[12px] text-gray-500 hover:text-gray-700 font-medium flex items-center gap-0.5"
            >
              ログイン <span className="text-[11px]">⇒</span>
            </a>
          </div>
        </div>
      </div>

      {/* メインナビ */}
      <nav
        className={`bg-white transition-shadow duration-150 ${
          scrolled
            ? "shadow-[0_1px_6px_rgba(0,0,0,0.10)]"
            : "border-b border-gray-200/60"
        }`}
      >
        <div className="max-w-site mx-auto px-5">
          <div className="flex items-center h-[62px] gap-10">
            <a href="#top" className="mr-2">
              <Logo />
            </a>

            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] font-medium whitespace-nowrap text-gray-600 hover:text-navy transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2.5 ml-auto">
              <a
                href={APP_LINKS.demo}
                className="inline-flex items-center px-[18px] h-[40px] rounded-full text-[13px] font-bold text-white hover:opacity-85 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: COLORS.navy }}
              >
                デモを見る
              </a>
              <a
                href={APP_LINKS.signup}
                className="inline-flex items-center px-[18px] h-[40px] rounded-full text-[13px] font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: COLORS.brand, color: "#2A221A" }}
              >
                無料で始める
              </a>
            </div>

            <button
              className="lg:hidden ml-auto p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="メニュー"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={APP_LINKS.demo}
                  className="block text-center py-3 rounded-full text-[14px] font-bold text-white"
                  style={{ backgroundColor: COLORS.navy }}
                >
                  デモを見る
                </a>
                <a
                  href={APP_LINKS.signup}
                  className="block text-center py-3 rounded-full text-[14px] font-bold"
                  style={{ backgroundColor: COLORS.brand, color: "#2A221A" }}
                >
                  無料で始める
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
