/**
 * Google Search Console - インデックス登録リクエストスクリプト
 * portfolio.awakeinc.co.jp 用
 *
 * 使用方法:
 * 1. gsc-credentials.json と gsc-token.json をプロジェクトルートに配置
 * 2. npm install googleapis を実行
 * 3. node scripts/gsc-request-indexing.js を実行
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 設定
const SITE_URL = 'https://portfolio.awakeinc.co.jp';

// インデックス登録をリクエストするURL一覧
const URLS_TO_INDEX = [
  SITE_URL,                    // トップページ
  `${SITE_URL}/contact`,       // お問い合わせページ
  `${SITE_URL}/#portfolio`,    // ポートフォリオセクション
  `${SITE_URL}/#illustrations`, // デザイン制作セクション
  `${SITE_URL}/#pricing`,      // 料金セクション
];

// 認証情報の読み込み
const CREDENTIALS_PATH = path.join(process.cwd(), 'gsc-credentials.json');
const TOKEN_PATH = path.join(process.cwd(), 'gsc-token.json');

async function requestIndexing() {
  try {
    // 認証情報の確認
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.error('❌ gsc-credentials.json が見つかりません');
      console.log('📝 メインサイト（awake-website）から gsc-credentials.json をコピーしてください');
      process.exit(1);
    }

    if (!fs.existsSync(TOKEN_PATH)) {
      console.error('❌ gsc-token.json が見つかりません');
      console.log('📝 メインサイト（awake-website）から gsc-token.json をコピーしてください');
      process.exit(1);
    }

    // 認証情報の読み込み
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));

    // OAuth2クライアントの作成
    const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;
    const oauth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    oauth2Client.setCredentials(token);

    // Search Console APIクライアントの作成
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: oauth2Client,
    });

    console.log('📤 インデックス登録をリクエストしています...');
    console.log(`   サイト: ${SITE_URL}`);
    console.log(`   対象URL数: ${URLS_TO_INDEX.length}`);
    console.log('');

    // 各URLに対してインデックス登録をリクエスト
    for (const url of URLS_TO_INDEX) {
      try {
        console.log(`   処理中: ${url}`);

        // URL検査をリクエスト
        await searchconsole.urlInspection.index.inspect({
          requestBody: {
            inspectionUrl: url,
            siteUrl: SITE_URL,
          },
        });

        console.log(`   ✅ ${url}`);
      } catch (error) {
        console.log(`   ⚠️ ${url} - ${error.message}`);
      }
    }

    console.log('');
    console.log('✅ インデックス登録リクエストが完了しました！');
    console.log('');
    console.log('📊 Google Search Console で確認:');
    console.log('   https://search.google.com/search-console?resource_id=' + encodeURIComponent(SITE_URL));
    console.log('');
    console.log('📝 注意:');
    console.log('   - インデックス登録には数日から数週間かかる場合があります');
    console.log('   - Google Search Consoleで進捗を確認できます');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);

    if (error.code === 403) {
      console.log('');
      console.log('🔧 対処方法:');
      console.log('1. Google Search Consoleにポートフォリオサイトのプロパティを追加');
      console.log('2. 所有権確認を完了する');
      console.log('   URL: https://search.google.com/search-console');
    }

    process.exit(1);
  }
}

requestIndexing();
