// サイト共通の定数。製品本体（Arche アプリ）へのリンクや会社情報を一元管理する。

/** Arche アプリ本体（予約・管理システム）の公開URL */
export const APP_URL = "https://arche.sourirette.jp";

/** アプリ本体の主要導線 */
export const APP_LINKS = {
  signup: `${APP_URL}/signup`,
  demo: `${APP_URL}/demo-login`,
  login: `${APP_URL}/login`,
};

/** 問い合わせ先メールアドレス */
export const CONTACT_EMAIL = "sourirette.consulting@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Arche%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B`;

/** ブランドカラー（Tailwind 設定と一致） */
export const COLORS = {
  brand: "#C4B5A1",
  brandDark: "#8B7B68",
  brandLight: "#FAF5ED",
  brandBorder: "#DDD0BF",
  navy: "#1a1a2e",
  ink: "#0A0F1E",
  accent: "#F5C400",
} as const;

/** 会社情報 */
export const COMPANY = {
  name: "Sourirette合同会社",
  product: "Arche（アルケー）",
  email: CONTACT_EMAIL,
  established: "2025年",
  business: "歯科医院向けクラウド予約・管理システムの開発・運営",
} as const;
