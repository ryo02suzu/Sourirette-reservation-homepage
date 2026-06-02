import { SouriretteLogo } from "./Logo";
import { APP_LINKS, COMPANY, CONTACT_MAILTO } from "@/lib/site";

const cols = [
  {
    heading: "会社",
    links: [
      { label: "私たちについて", href: "#about" },
      { label: "会社概要", href: "#company" },
      { label: "お問い合わせ", href: CONTACT_MAILTO },
    ],
  },
  {
    heading: "プロダクト",
    links: [
      { label: "Arche（予約・経営クラウド）", href: "#products" },
      { label: "Arche の特長", href: "#features" },
      { label: "料金プラン", href: "#pricing" },
      { label: "Arche ログイン", href: APP_LINKS.login },
    ],
  },
  {
    heading: "サポート",
    links: [{ label: "よくある質問", href: "#faq" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-white">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-12">
        <div className="grid sm:grid-cols-[1.3fr_1fr_1fr_0.8fr] gap-8">
          <div>
            <SouriretteLogo />
            <p className="mt-4 text-[12.5px] leading-[1.8] text-sub max-w-xs">
              {COMPANY.tagline}
              <br />
              歯科医院の現場をなめらかにするプロダクトをつくっています。
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-semibold text-ink">{col.heading}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[12.5px] text-sub hover:text-ink transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-black/[0.07] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-sub">© 2026 {COMPANY.name}</p>
          <p className="text-[12px] text-sub">Arche is a product of {COMPANY.name}</p>
        </div>
      </div>
    </footer>
  );
}
