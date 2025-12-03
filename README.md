# aqa Corporate Website

心震える創造をあなたと共に / Create "being moved" with you

## 概要

aqaのコーポレートサイトです。アバター市場を基盤としたWebサービス・アプリケーションを提供する企業のWebサイトです。

**現在、アバターベースのECサイトを開発中です。**

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **多言語対応**: 日本語 / English

## 機能

- ✅ レスポンシブデザイン（モバイル完全対応）
- ✅ SEO対策（メタタグ、OGP、構造化データ）
- ✅ 多言語対応（日本語・英語切り替え）
- ✅ スプラッシュスクリーン（ブランドアニメーション）
- ✅ お問い合わせフォーム
- ✅ プライバシーポリシーページ
- ✅ スムーズスクロール
- ✅ アニメーション効果

## ファイル構成

```
/
├── app/
│   ├── layout.tsx          # ルートレイアウト（SEO設定）
│   ├── page.tsx             # メインページ
│   ├── globals.css          # グローバルスタイル
│   ├── contact/
│   │   └── page.tsx         # お問い合わせページ
│   └── privacy/
│       └── page.tsx         # プライバシーポリシー
├── components/
│   ├── Header.tsx           # ヘッダー（ナビゲーション）
│   ├── Footer.tsx           # フッター
│   ├── SplashScreen.tsx     # スプラッシュスクリーン
│   ├── LanguageContext.tsx  # 言語切り替えコンテキスト
│   └── sections/
│       ├── Hero.tsx         # ヒーローセクション
│       ├── About.tsx        # 会社概要
│       ├── Service.tsx      # サービス紹介
│       ├── News.tsx         # お知らせ
│       └── CTA.tsx          # CTAセクション
├── lib/
│   ├── i18n.ts              # 翻訳データ
│   └── news.ts              # お知らせデータ
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### 3. 本番ビルド

```bash
npm run build
npm start
```

## お知らせの更新方法

`lib/news.ts` ファイルを編集してください。

```typescript
export const newsData: NewsItem[] = [
  {
    date: '2024.12.01',
    category: 'お知らせ',
    categoryEn: 'News',
    title: '新しいお知らせのタイトル',
    titleEn: 'New announcement title',
  },
  // ...
]
```

## 翻訳の追加・編集

`lib/i18n.ts` ファイルで日本語と英語の翻訳を管理しています。

## カスタマイズ

### カラー変更

`tailwind.config.ts` でカラーパレットを変更できます：

```typescript
colors: {
  primary: {
    DEFAULT: '#AFDFE4',    // メインカラー
    dark: '#7ac4cc',       // ダークバリアント
    light: '#d4eff2',      // ライトバリアント
  },
}
```

### SEO設定

`app/layout.tsx` でメタデータを設定しています：

```typescript
export const metadata: Metadata = {
  title: 'aqa | 心震える創造をあなたと共に',
  description: '...',
  // ...
}
```

## デプロイ

Vercelでのデプロイを推奨します：

```bash
npm install -g vercel
vercel
```

## ライセンス

© 2024 aqa Inc. All Rights Reserved.
