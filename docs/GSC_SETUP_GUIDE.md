# Google Search Console 設定ガイド
**ポートフォリオサイト（portfolio.awakeinc.co.jp）用**

作成日: 2025-10-28

---

## 📌 概要

このガイドでは、portfolio.awakeinc.co.jp を Google Search Console に登録し、
サイトマップを提出してインデックス登録をリクエストする手順を説明します。

---

## ✅ 事前準備

### 必要なもの
- [ ] Googleアカウント（メインサイトと同じアカウント推奨）
- [ ] メインサイトの `gsc-credentials.json`
- [ ] メインサイトの `gsc-token.json`

### 認証ファイルのコピー

```bash
# メインサイト（awake-website）から認証ファイルをコピー
cp ../awake-website/gsc-credentials.json ./
cp ../awake-website/gsc-token.json ./
```

**重要**: これらのファイルは `.gitignore` に含まれているため、Gitにコミットされません。

---

## 📝 手順

### Step 1: Google Search Console にプロパティを追加

#### 1-1. Google Search Console にアクセス

https://search.google.com/search-console

#### 1-2. プロパティを追加

1. 左上の「プロパティを選択」→「プロパティを追加」
2. **URLプレフィックス**を選択
3. 以下のURLを入力:
   ```
   https://portfolio.awakeinc.co.jp
   ```
4. 「続行」をクリック

#### 1-3. 所有権の確認

以下のいずれかの方法で所有権を確認します:

##### 方法A: HTMLファイルをアップロード（推奨）

1. Google Search Console が提供する HTML ファイルをダウンロード
   - ファイル名例: `google1234567890abcdef.html`
2. ファイルをプロジェクトの `public/` ディレクトリに配置
   ```bash
   # ダウンロードしたファイルを public/ にコピー
   cp ~/Downloads/google1234567890abcdef.html ./public/
   ```
3. Vercel にデプロイ
   ```bash
   git add public/google*.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```
4. デプロイ完了後、Google Search Console で「確認」をクリック

##### 方法B: HTMLタグを追加

1. Google Search Console が提供する meta タグをコピー
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXX" />
   ```
2. `app/layout.tsx` の `<head>` セクションに追加
3. デプロイして「確認」をクリック

##### 方法C: DNSレコードを追加

1. Google Search Console が提供する TXT レコードをコピー
2. ドメイン管理画面（お名前.com等）にログイン
3. DNS設定で以下を追加:
   - ホスト名: `portfolio.awakeinc.co.jp`
   - タイプ: `TXT`
   - 値: `google-site-verification=XXXXXXXX`
4. 保存後、Google Search Console で「確認」をクリック

**推奨**: 方法A（HTMLファイル）が最も簡単で確実です。

---

### Step 2: サイトマップを提出

#### 2-1. 自動提出（スクリプト使用）

```bash
# Node.jsパッケージのインストール（初回のみ）
npm install googleapis

# サイトマップ提出スクリプトを実行
node scripts/gsc-submit-sitemap.js
```

**成功すると以下のメッセージが表示されます**:
```
✅ サイトマップの提出が完了しました！
```

#### 2-2. 手動提出（スクリプトが使えない場合）

1. Google Search Console にアクセス
2. 左メニューの「サイトマップ」を選択
3. 「新しいサイトマップの追加」に以下を入力:
   ```
   sitemap.xml
   ```
4. 「送信」をクリック

---

### Step 3: インデックス登録をリクエスト

#### 3-1. 自動リクエスト（スクリプト使用）

```bash
# インデックス登録リクエストスクリプトを実行
node scripts/gsc-request-indexing.js
```

**対象URL**:
- `https://portfolio.awakeinc.co.jp` （トップページ）
- `https://portfolio.awakeinc.co.jp/contact` （お問い合わせ）
- `https://portfolio.awakeinc.co.jp/#portfolio` （ポートフォリオ）
- `https://portfolio.awakeinc.co.jp/#illustrations` （デザイン制作）
- `https://portfolio.awakeinc.co.jp/#pricing` （料金）

#### 3-2. 手動リクエスト（スクリプトが使えない場合）

1. Google Search Console にアクセス
2. 左メニューの「URL検査」を選択
3. 各URLを入力して「インデックス登録をリクエスト」をクリック

**主要ページ**:
```
https://portfolio.awakeinc.co.jp
https://portfolio.awakeinc.co.jp/contact
```

---

## 📊 確認方法

### インデックス状況の確認

1. Google Search Console にアクセス
2. 「概要」または「インデックス作成」→「ページ」で確認

**注意**: インデックス登録には数日から数週間かかる場合があります。

### サイトマップの状況確認

1. 左メニューの「サイトマップ」を選択
2. 送信したサイトマップのステータスを確認
   - ✅ 成功: 緑色のチェックマーク
   - ⚠️ 警告: 黄色の警告マーク
   - ❌ エラー: 赤色のエラーマーク

---

## 🔧 トラブルシューティング

### エラー: 403 Forbidden

**原因**: Google Search Console にプロパティが登録されていない

**対処方法**:
1. Step 1 を実施してプロパティを追加
2. 所有権確認を完了する

### エラー: 認証ファイルが見つかりません

**原因**: `gsc-credentials.json` または `gsc-token.json` が存在しない

**対処方法**:
```bash
# メインサイトからコピー
cp ../awake-website/gsc-credentials.json ./
cp ../awake-website/gsc-token.json ./
```

### サイトマップが読み込めない

**原因**: サイトマップのURLが間違っている、またはアクセスできない

**確認方法**:
```bash
# ブラウザで以下のURLにアクセス
https://portfolio.awakeinc.co.jp/sitemap.xml
```

正常に表示されれば、サイトマップは正しく生成されています。

---

## 📅 定期メンテナンス

### 週次（毎週月曜日）
- [ ] Google Search Console で新しいエラーをチェック
- [ ] インデックス登録数を確認

### 月次（毎月1日）
- [ ] 検索パフォーマンスをレビュー
- [ ] 新しいページを追加した場合、インデックス登録をリクエスト

---

## 🔗 関連リンク

- **Google Search Console**: https://search.google.com/search-console
- **サイトマップURL**: https://portfolio.awakeinc.co.jp/sitemap.xml
- **メインサイトのGSC設定**: `../awake-website/docs/INDEXING_API_SETUP.md`

---

## 📞 サポート

問題が解決しない場合:
- メインサイト（awake-website）のClaude Codeセッションに質問
- または、Googleサポートに問い合わせ

---

**最終更新**: 2025-10-28
