import { SouriretteLogo } from "./Logo";
import { APP_LINKS, COMPANY, CONTACT_MAILTO } from "@/lib/site";

const cols = [
  {
    heading: "事業・サービス",
    links: [
      { label: "予約・経営管理「Arche」", href: "#arche" },
      { label: "Googleクチコミ増援", href: "#services" },
      { label: "ECサイト「シカエル」", href: "#services" },
      { label: "ホームページ制作", href: "#services" },
      { label: "その他 IT全般", href: "#services" },
    ],
  },
  {
    heading: "プロダクト",
    links: [
      { label: "Arche について", href: "#arche" },
      { label: "Arche ログイン", href: APP_LINKS.login },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "私たちについて", href: "#about" },
      { label: "会社概要", href: "#company" },
      { label: "ニュース", href: "#news" },
    ],
  },
  {
    heading: "お問い合わせ",
    links: [
      { label: "ご相談・お見積もり", href: CONTACT_MAILTO },
      { label: "採用情報", href: CONTACT_MAILTO },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="max-w-site mx-auto px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <SouriretteLogo light textClassName="text-[19px]" />
            <p className="mt-4 text-[12.5px] leading-[1.9] text-white/60 max-w-xs">
              {COMPANY.tagline}
              <br />
              Web制作・EC構築・自社プロダクト「Arche」。
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[12.5px] font-bold text-emerald-300">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[12.5px] text-white/70 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-white/50">© 2026 {COMPANY.name}</p>
          <div className="flex items-center gap-5 text-[11.5px] text-white/50">
            <a href={CONTACT_MAILTO} className="hover:text-white/80 transition-colors">プライバシーポリシー</a>
            <a href={CONTACT_MAILTO} className="hover:text-white/80 transition-colors">サイトのご利用にあたって</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
