import { Logo } from "./Logo";
import { APP_LINKS, COLORS, COMPANY, CONTACT_MAILTO } from "@/lib/site";

const TEXT = COLORS.navy;

const cols = [
  {
    heading: "Archeとは",
    links: [
      { label: "プロダクト概要", href: "#about" },
      { label: "機能の特長", href: "#features" },
      { label: "選ばれる理由", href: "#why" },
      { label: "開発者について", href: "#why" },
      { label: "よくある質問", href: "#faq" },
    ],
  },
  {
    heading: "機能",
    links: [
      { label: "オンライン予約", href: "#features" },
      { label: "患者管理", href: "#features" },
      { label: "リコール機能", href: "#features" },
      { label: "リマインダー配信", href: "#features" },
      { label: "経営分析レポート", href: "#features" },
    ],
  },
  {
    heading: "ご利用",
    links: [
      { label: "料金プラン", href: "#pricing" },
      { label: "無料で始める", href: APP_LINKS.signup },
      { label: "デモを見る", href: APP_LINKS.demo },
      { label: "ログイン", href: APP_LINKS.login },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "会社概要", href: "#company" },
      { label: "ミッション・ビジョン", href: "#company" },
      { label: "お問い合わせ", href: CONTACT_MAILTO },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#F7F8FA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div className="flex items-start justify-between gap-8 mb-10 pb-8 border-b border-gray-200">
          <a href="#top">
            <Logo size={36} textClassName="text-[17px]" />
          </a>
          <p className="text-[12px] text-gray-400 italic hidden md:block">dental-friendly</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[12.5px] font-black mb-4 flex items-center gap-1.5" style={{ color: TEXT }}>
                {col.heading}
                <span className="text-gray-300">→</span>
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[12.5px] text-gray-500 hover:text-gray-800 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pb-8 border-b border-gray-200">
          {[
            { label: "料金プラン", href: "#pricing" },
            { label: "デモを試す", href: APP_LINKS.demo },
            { label: "無料で始める", href: APP_LINKS.signup },
            { label: "お問い合わせ", href: CONTACT_MAILTO },
          ].map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[12.5px] font-medium border border-gray-300 text-gray-600 hover:border-gray-400 transition-all bg-white">
              {l.label} →
            </a>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="#top">
              <Logo size={28} textClassName="text-[14px]" />
            </a>
            <p className="text-[11px] text-gray-400">by {COMPANY.name}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#company" className="text-[11.5px] text-gray-400 hover:text-gray-600 transition-colors">会社情報</a>
            <a href={CONTACT_MAILTO} className="text-[11.5px] text-gray-400 hover:text-gray-600 transition-colors">お問い合わせ</a>
          </div>
          <p className="text-[11px] text-gray-400">© 2026 {COMPANY.name}</p>
        </div>
      </div>
    </footer>
  );
}
