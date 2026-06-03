// サイト共通の定数。製品本体（Arche アプリ）へのリンクや会社情報を一元管理する。

/** Arche アプリ本体（予約・管理システム）の公開URL */
export const APP_URL = "https://arche.sourirette.jp";

/** public/ 配下のアセットURL（GitHub Pages のサブパス配信に対応） */
export const asset = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

/**
 * アプリ本体の導線。
 * 注: 現在の本体は自己サインアップを閉じており（/signup・/ は /login へリダイレクト、
 * /demo-login は廃止）、導入は問い合わせ起点。ログインのみ外部リンクとして使う。
 */
export const APP_LINKS = {
  login: `${APP_URL}/login`,
};

/** 問い合わせ先メールアドレス */
export const CONTACT_EMAIL = "sourirette.consulting@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Archeの導入相談",
)}&body=${encodeURIComponent(
  "医院名：\nお名前：\nご連絡先：\nご相談内容（導入希望時期・スタッフ人数・気になる機能など）：\n",
)}`;

/** ブランドカラー（Tailwind 設定と一致：Arche テーマの緑 #15803d を基調） */
export const COLORS = {
  emerald: "#059669",
  emeraldDark: "#047857",
  emeraldDeep: "#064e3b",
  mint: "#ecfdf5",
  ink: "#08110d",
  accent: "#10b981",
} as const;

/** 会社情報 */
export const COMPANY = {
  name: "Sourirette合同会社",
  reading: "スーリレット",
  tagline: "ほほえみが続く毎日を、テクノロジーで。",
  product: "Arche（アルケー）",
  email: CONTACT_EMAIL,
  established: "2025年",
  business:
    "予約・経営管理システム「Arche」、Googleクチコミ増援サービス、ECサイト「シカエル」、ホームページ制作、その他IT全般",
} as const;

/** 事業・サービス（実サービス） */
export const SERVICES = [
  {
    key: "arche",
    no: "01",
    name: "予約・経営管理システム「Arche」",
    en: "Reservation & Management",
    desc: "歯科医院向けのオンライン予約に加え、リコール・リマインダー・経営分析まで。予約から医院経営までまるごとサポートします。",
    img: "img/clinic-wide.jpg",
    href: "#arche",
    cta: "Arche を見る",
  },
  {
    key: "review",
    no: "02",
    name: "Googleクチコミ増援サービス",
    en: "Review Boost",
    desc: "来院後のアンケートで満足度を測り、高評価の方をGoogleクチコミへご案内。低評価は院内へのフィードバックに。評判づくりと改善を同時に進めます。",
    img: "img/smile.jpg",
    href: CONTACT_MAILTO,
    cta: "相談する",
  },
  {
    key: "ec",
    no: "03",
    name: "ECサイト「シカエル」",
    en: "E-Commerce",
    desc: "ネットショップの立ち上げから運用まで。自社EC「シカエル」で培ったノウハウで、売れるオンラインストアをご一緒します。",
    img: "img/ec.jpg",
    href: CONTACT_MAILTO,
    cta: "相談する",
  },
  {
    key: "web",
    no: "04",
    name: "ホームページ制作",
    en: "Web Production",
    desc: "デザインから実装・公開まで一貫対応。成果につながる、速くて美しいサイトを制作します。",
    img: "img/web.jpg",
    href: CONTACT_MAILTO,
    cta: "制作を相談する",
  },
  {
    key: "it",
    no: "05",
    name: "その他 IT全般",
    en: "IT Support",
    desc: "業務効率化・ツール導入・自動化など、「ITのことならなんでも」。お困りごとからご相談ください。",
    img: "img/team.jpg",
    href: CONTACT_MAILTO,
    cta: "相談する",
  },
] as const;

/** ニュース（サンプル：実情報に差し替え可） */
export const NEWS = [
  { date: "2026.05.20", cat: "プロダクト", title: "歯科向け予約・経営クラウド「Arche」のβ版提供を開始しました。" },
  { date: "2026.04.01", cat: "会社", title: "Sourirette合同会社のコーポレートサイトを公開しました。" },
  { date: "2026.03.10", cat: "サービス", title: "ホームページ制作・ECサイト構築のご相談受付を開始しました。" },
] as const;

/** 会社のミッション/ビジョン */
export const VALUES = [
  {
    title: "Mission",
    heading: "現場の負担を、テクノロジーで軽くする。",
    body: "電話・紙・手作業に追われる医療現場の負担を減らし、スタッフが患者と向き合う時間を増やします。",
  },
  {
    title: "Vision",
    heading: "規模に関係なく、誰もが使えるDXを。",
    body: "医院のDXを、予算や規模に関係なく誰もが始められるものに。地域医療を支えるインフラを目指します。",
  },
  {
    title: "Value",
    heading: "現場を知る人間が、現場のためにつくる。",
    body: "歯学部に在籍する開発者が、21名の現役開業医の監修のもとで開発。机上ではなく現場の声から磨きます。",
  },
] as const;

/** Sourirette が手がけるプロダクト（将来の拡張枠を含む） */
export const PRODUCTS = [
  {
    key: "arche",
    name: "Arche",
    reading: "アルケー",
    category: "歯科医院向け 予約・経営クラウド",
    desc: "オンライン予約・患者管理・リコール・リマインダー・口コミ獲得・QR受付・経営分析を、ひとつに。",
    status: "提供中",
    href: "#arche",
    live: true,
  },
  {
    key: "next",
    name: "次のプロダクト",
    reading: "",
    category: "準備中",
    desc: "歯科の現場をなめらかにする、新しい仕組みを開発しています。",
    status: "Coming soon",
    href: CONTACT_MAILTO,
    live: false,
  },
] as const;

/** プラン定義（本体 server/plans.ts と一致させること） */
export const PLANS = [
  {
    key: "free",
    name: "フリー",
    price: "¥0",
    period: "ずっと無料",
    tagline: "まず試したい医院に",
    featured: false,
    points: ["スタッフ 1名", "月間予約 50件まで", "オンライン予約ページ", "メール通知"],
  },
  {
    key: "standard",
    name: "スタンダード",
    price: "¥9,800",
    period: "/ 月（税込）",
    tagline: "一般的な医院の主力プラン",
    featured: false,
    points: ["スタッフ 5名", "予約 無制限", "SMS通知", "CSVエクスポート", "問診デジタル化"],
  },
  {
    key: "pro",
    name: "プロ",
    price: "¥19,800",
    period: "/ 月（税込）",
    tagline: "“稼ぐ”3点セットで本格運用",
    featured: true,
    points: [
      "スタッフ 無制限",
      "LINE通知",
      "リコール自動化",
      "経営分析レポート",
      "口コミ獲得・QR受付",
    ],
  },
  {
    key: "enterprise",
    name: "エンタープライズ",
    price: "要相談",
    period: "複数院・法人向け",
    tagline: "グループ医院・カスタム対応",
    featured: false,
    points: ["複数院の一括管理", "プロの全機能", "専任サポート", "請求書払い・SLA"],
  },
] as const;
