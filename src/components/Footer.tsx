import { Logo } from "./Logo";
import { APP_LINKS, COMPANY, CONTACT_MAILTO } from "@/lib/site";

const cols = [
  {
    heading: "プロダクト",
    links: [
      { label: "特長", href: "#features" },
      { label: "課題と解決", href: "#solutions" },
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
    <footer className="bg-ink text-white">
      <div className="max-w-site mx-auto px-5 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Logo onDark textClassName="text-[20px]" />
            <p className="mt-4 text-[13px] leading-[1.9] text-white/60 max-w-xs">
              歯科医院のための予約・患者管理クラウド。予約から経営まで、医院の“まわす仕事”をひとつに。
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-bold tracking-wider text-emerald-300 uppercase">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/50">© 2026 {COMPANY.name}</p>
          <p className="text-[12px] text-white/40">Arche — dental clinic cloud</p>
        </div>
      </div>
    </footer>
  );
}
