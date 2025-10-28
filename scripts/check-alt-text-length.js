/**
 * 画像alt属性の長さをチェックするスクリプト
 *
 * SEOベストプラクティス:
 * - 推奨: 125文字以内
 * - 最適: 50-100文字
 */

const { WORKS } = require('../lib/constants');

console.log('📊 画像alt属性の長さチェック\n');

// HeroSection
const heroAlt = '株式会社Awake ホームページ制作・AIチャットボット開発サービス - 東大和市のweb制作会社';
console.log('1. HeroSection:');
console.log(`   alt="${heroAlt}"`);
console.log(`   長さ: ${heroAlt.length}文字`);
console.log(`   評価: ${heroAlt.length <= 125 ? '✅ OK' : '⚠️ 長すぎます'}\n`);

// WorksSection
console.log('2. WorksSection (プロジェクトごと):');
let maxLength = 0;
let maxProject = null;

WORKS.forEach((project, index) => {
  const alt = `${project.title} - ${project.description} | 株式会社Awake制作実績`;
  const length = alt.length;

  console.log(`   ${index + 1}. ${project.title}`);
  console.log(`      alt="${alt}"`);
  console.log(`      長さ: ${length}文字`);
  console.log(`      評価: ${length <= 125 ? '✅ OK' : '⚠️ 長すぎます'}\n`);

  if (length > maxLength) {
    maxLength = length;
    maxProject = project.title;
  }
});

// IllustrationSection
const illustrations = [
  {
    title: 'CLEMIRA製品紹介',
    category: 'ECサイト',
    description: '身体機能向上をサポートする革新的製品CLEMIRAの直販サイト',
  },
  {
    title: '保険相談LP',
    category: 'ランディングページ',
    description: '「もっと早く相談していれば...」温かみのあるコピーと柔らかな色調',
  },
];

console.log('3. IllustrationSection:');
illustrations.forEach((illustration, index) => {
  const alt = `${illustration.title} - ${illustration.description} | ${illustration.category}デザイン制作実績`;
  const length = alt.length;

  console.log(`   ${index + 1}. ${illustration.title}`);
  console.log(`      alt="${alt}"`);
  console.log(`      長さ: ${length}文字`);
  console.log(`      評価: ${length <= 125 ? '✅ OK' : '⚠️ 長すぎます'}\n`);
});

// サマリー
console.log('📊 サマリー:');
console.log(`   最長alt属性: ${maxLength}文字 (${maxProject})`);
console.log(`   推奨値: 125文字以内`);
console.log(`   結果: ${maxLength <= 125 ? '✅ すべてOK' : '⚠️ 改善が必要'}\n`);

if (maxLength <= 125) {
  console.log('✨ すべての画像alt属性がSEOベストプラクティスに準拠しています！');
} else {
  console.log('⚠️ 一部のalt属性が長すぎます。短縮を検討してください。');
}
