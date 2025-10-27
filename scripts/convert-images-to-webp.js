/**
 * 画像をWebP形式に変換するスクリプト
 * portfolio.awakeinc.co.jp 用
 *
 * 使用方法:
 * 1. npm install sharp を実行（既にインストール済み）
 * 2. node scripts/convert-images-to-webp.js を実行
 *
 * 機能:
 * - JPG/PNG画像を高品質WebP形式に変換
 * - 元のファイルは保持
 * - すでにWebP形式の画像はスキップ
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 設定
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const QUALITY = 85; // WebP品質（85が推奨）
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// 統計情報
let stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0,
};

/**
 * ディレクトリを再帰的に走査して画像ファイルを見つける
 */
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // ディレクトリの場合は再帰的に処理
      findImageFiles(filePath, fileList);
    } else {
      // 画像ファイルの場合はリストに追加
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * 画像をWebP形式に変換
 */
async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');

  // すでにWebP形式が存在する場合はスキップ
  if (fs.existsSync(outputPath)) {
    console.log(`   ⏭️  スキップ: ${path.relative(PUBLIC_DIR, outputPath)} (既に存在)`);
    stats.skipped++;
    return;
  }

  try {
    // 元のファイルサイズ
    const originalSize = fs.statSync(inputPath).size;

    // WebP形式に変換
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    // 変換後のファイルサイズ
    const webpSize = fs.statSync(outputPath).size;
    const savedBytes = originalSize - webpSize;
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

    stats.savedBytes += savedBytes;

    console.log(`   ✅ ${path.relative(PUBLIC_DIR, outputPath)}`);
    console.log(`      圧縮率: ${savedPercent}% (${formatBytes(originalSize)} → ${formatBytes(webpSize)})`);
    stats.converted++;
  } catch (error) {
    console.error(`   ❌ エラー: ${path.relative(PUBLIC_DIR, inputPath)}`);
    console.error(`      ${error.message}`);
    stats.errors++;
  }
}

/**
 * バイト数を人間が読みやすい形式に変換
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * メイン処理
 */
async function main() {
  console.log('🖼️  画像をWebP形式に変換します...');
  console.log(`   対象ディレクトリ: ${PUBLIC_DIR}`);
  console.log(`   WebP品質: ${QUALITY}`);
  console.log('');

  // 画像ファイルを検索
  console.log('📂 画像ファイルを検索中...');
  const imageFiles = findImageFiles(PUBLIC_DIR);
  stats.total = imageFiles.length;

  if (imageFiles.length === 0) {
    console.log('   ⚠️  変換対象の画像が見つかりませんでした');
    return;
  }

  console.log(`   見つかった画像: ${imageFiles.length}件`);
  console.log('');

  // 各画像を変換
  console.log('🔄 変換を開始します...');
  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }

  // 結果を表示
  console.log('');
  console.log('✅ 変換が完了しました！');
  console.log('');
  console.log('📊 結果:');
  console.log(`   合計: ${stats.total}件`);
  console.log(`   変換: ${stats.converted}件`);
  console.log(`   スキップ: ${stats.skipped}件`);
  console.log(`   エラー: ${stats.errors}件`);
  console.log(`   削減サイズ: ${formatBytes(stats.savedBytes)}`);
  console.log('');

  if (stats.converted > 0) {
    console.log('📝 次のステップ:');
    console.log('1. コンポーネントでWebP形式の画像を使用するよう更新');
    console.log('2. <picture> タグでフォールバックを設定（推奨）');
    console.log('');
    console.log('例:');
    console.log('```jsx');
    console.log('<picture>');
    console.log('  <source srcSet="/images/hero.webp" type="image/webp" />');
    console.log('  <img src="/images/hero.jpg" alt="..." />');
    console.log('</picture>');
    console.log('```');
  }
}

// スクリプトを実行
main().catch((error) => {
  console.error('❌ 予期しないエラーが発生しました:', error);
  process.exit(1);
});
