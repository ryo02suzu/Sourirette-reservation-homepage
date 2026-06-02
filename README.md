# Sourirette-reservation-homepage

歯科医院向けクラウド予約・患者管理システム **Arche（アルケー）** と、運営会社 **Sourirette合同会社** の公式ホームページ（ランディングページ）です。

製品アプリ本体（予約・管理システム）は別リポジトリ [`dental-reservation-app`](https://github.com/ryo02suzu/dental-reservation-app) で開発しており、本サイトの各CTA（「無料で始める」「デモを見る」「ログイン」）は本番アプリ `https://arche.sourirette.jp` に接続します。

## 技術スタック

- **React 18** + **TypeScript**
- **Vite 5**（ビルド / 開発サーバー）
- **Tailwind CSS 3**
- **lucide-react**（アイコン）

デザインは本体アプリ内のランディング（Archeブランド：ベージュ `#C4B5A1` / ネイビー `#1a1a2e`、フォント Noto Sans JP / DM Sans / Inter）を踏襲しています。

## セットアップ

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果のプレビュー
npm run typecheck # 型チェックのみ
```

## 構成

単一ページのランディングサイトで、ナビゲーションのアンカーで各セクションへスクロールします。

| セクション | 内容 |
| --- | --- |
| `Hero` | ファーストビュー / 製品サマリ |
| `Problems` | 解決できる課題 |
| `ValueProps` | 予約 × 患者データ × 経営分析の価値 |
| `Features` | 主要機能の紹介 |
| `HowItWorks` | 選ばれる理由・導入の流れ |
| `Pricing` | 料金プラン（フリー/スターター/プロ/エンタープライズ） |
| `Founder` | 開発者について |
| `Company` | 運営会社（Sourirette合同会社）の会社概要・ミッション |
| `Faq` | よくある質問 |
| `Cta` | 最終CTA |
| `Footer` | フッター |

サイト共通の定数（アプリURL・連絡先・会社情報・ブランドカラー）は [`src/lib/site.ts`](src/lib/site.ts) で一元管理しています。
