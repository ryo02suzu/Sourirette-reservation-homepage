// サイト共通の定数。製品本体（Arche アプリ）へのリンクや会社情報を一元管理する。

/** Arche アプリ本体（予約・管理システム）の公開URL */
export const APP_URL = "https://arche.sourirette.jp";

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
  product: "Arche（アルケー）",
  email: CONTACT_EMAIL,
  established: "2025年",
  business: "歯科医院向けクラウド予約・管理システムの開発・運営",
} as const;

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
