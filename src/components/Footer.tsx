import { APP_LINKS, COMPANY, CONTACT_MAILTO } from "@/lib/site";

const cols = [
  {
    heading: "プロダクト",
    links: [
      { label: "特長", href: "#features" },
      { label: "料金プラン", href: "#pricing" },
      { label: "よくある質問", href: "#faq" },
    ],
  },
  {
    heading: "会社",
    links: [
      { label: "開発の背景", href: "#story" },
      { label: "会社概要", href: "#company" },
      { label: "お問い合わせ", href: CONTACT_MAILTO },
    ],
  },
  {
    heading: "ご利用中の方",
    links: [{ label: "ログイン", href: APP_LINKS.login }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-white">
      <div className="max-w-site mx-auto px-5 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
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
          <p className="text-[12px] text-sub">Arche — 歯科医院のための予約・経営クラウド</p>
        </div>
      </div>
    </footer>
  );
}
