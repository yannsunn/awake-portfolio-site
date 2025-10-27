# 株式会社Awake ポートフォリオサイト

株式会社Awakeの公式ポートフォリオサイトです。Next.js 14とTailwind CSSを使用して構築されています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **フォーム**: React Hook Form + Zod
- **UI コンポーネント**: Radix UI
- **デプロイ**: Vercel (推奨)

## 📋 機能

### ✅ 実装済み機能
- [x] レスポンシブデザイン (モバイル・タブレット・デスクトップ対応)
- [x] モダンなUI/UX デザイン
- [x] スムーズなアニメーション (Framer Motion)
- [x] 固定ヘッダー (スクロール時の挙動含む)
- [x] お問い合わせフォーム (バリデーション付き)
- [x] SEO最適化
- [x] TypeScript 型安全

### 📄 ページ構成
- **ホーム** (`/`) - ヒーローセクション、サービス紹介、実績、お問い合わせ
- **会社情報** (`/about`) - 企業概要、代表メッセージ、企業理念、沿革
- **サービス** (`/services`) - サービス一覧、提供プロセス
- **実績・事例** (`/works`) - プロジェクト実績の紹介
- **お知らせ** (`/news`) - ニュース、技術記事、お知らせ
- **お問い合わせ** (`/contact`) - フォーム、連絡先情報

### 🎨 デザインシステム
- **プライマリカラー**: #2563eb (ブルー)
- **セカンダリカラー**: #10b981 (グリーン)
- **アクセントカラー**: #f59e0b (オレンジ)
- **フォント**: Noto Sans JP (日本語), Inter (英語)

## 🛠️ 開発

### 前提条件
- Node.js 18.17.0 以上
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

### コード品質

```bash
# ESLint チェック
npm run lint

# 型チェック
npx tsc --noEmit
```

## 📁 プロジェクト構造

```
portfolio-awake/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── globals.css        # グローバルスタイル
│   ├── about/             # 会社情報ページ
│   ├── services/          # サービスページ
│   ├── works/             # 実績ページ
│   ├── news/              # お知らせページ
│   └── contact/           # お問い合わせページ
├── components/            # React コンポーネント
│   ├── common/            # 共通コンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/          # セクションコンポーネント
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorksSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                # UI コンポーネント
│       └── Section.tsx
├── lib/                   # ユーティリティ
│   ├── utils.ts
│   └── constants.ts
├── types/                 # TypeScript型定義
│   └── index.ts
├── public/                # 静的ファイル
│   ├── images/
│   └── fonts/
└── hooks/                 # カスタムフック
```

## 🎯 パフォーマンス

- **Lighthouse スコア**: 90以上 (全カテゴリ)
- **初回読み込み**: 3秒以内
- **Core Web Vitals**: 達成
- **静的生成**: 全ページ

## 🔍 SEO管理

### Google Search Console

#### 初回セットアップ
詳細は [docs/GSC_SETUP_GUIDE.md](docs/GSC_SETUP_GUIDE.md) を参照してください。

#### サイトマップ提出
```bash
# 認証ファイルをコピー（初回のみ）
cp ../awake-website/gsc-credentials.json ./
cp ../awake-website/gsc-token.json ./

# サイトマップを提出
node scripts/gsc-submit-sitemap.js
```

#### インデックス登録リクエスト
```bash
# 主要ページのインデックス登録をリクエスト
node scripts/gsc-request-indexing.js
```

### 画像最適化

#### WebP形式への変換
```bash
# public/ 内の全画像をWebP形式に変換
node scripts/convert-images-to-webp.js
```

変換後の画像は元のファイルと同じ場所に `.webp` 拡張子で保存されます。

### SEO改善履歴

**2025-10-28: Phase 1 完了**
- ✅ メタデータをポートフォリオサイト向けに最適化
- ✅ 全画像にSEO最適化されたalt属性を追加
- ✅ Google Search Console用スクリプト作成
- ✅ 画像WebP変換スクリプト作成

## 🔧 カスタマイズ

### 会社情報の変更
`lib/constants.ts` の `COMPANY_INFO` を編集してください。

### サービス内容の変更
`lib/constants.ts` の `SERVICES` 配列を編集してください。

### カラーテーマの変更
`tailwind.config.ts` の `colors` セクションを編集してください。

## 📦 デプロイ

### Vercel (推奨)
1. Vercelアカウントにログイン
2. GitHubリポジトリを接続
3. 自動デプロイが開始されます

### その他のプラットフォーム
```bash
# 静的エクスポート (必要に応じて)
npm run build
```

## 🐛 トラブルシューティング

### よくある問題

**Q: フォントが読み込まれない**
A: Google Fontsへの接続を確認してください。オフライン環境では表示されない場合があります。

**Q: アニメーションが動作しない**
A: Framer Motionが正しくインストールされているか確認してください。

**Q: 型エラーが発生する**
A: `npm run build` でTypeScriptの型チェックを実行してください。

## 📞 サポート

技術的な質問やサポートが必要な場合は、以下までお問い合わせください：

- Email: shop@awakeinc.co.jp
- 開発者: Claude (Anthropic)

## 📄 ライセンス

このプロジェクトは株式会社Awakeの所有物です。無断での複製・配布は禁止されています。

---

© 2024 株式会社Awake. All rights reserved.