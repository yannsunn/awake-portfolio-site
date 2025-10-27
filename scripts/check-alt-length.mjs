// 画像alt属性の長さチェック

const heroAlt = '株式会社Awake ホームページ制作・AIチャットボット開発サービス - 東大和市のweb制作会社';
console.log('📊 画像alt属性の長さチェック\n');
console.log('1. HeroSection:');
console.log(`   長さ: ${heroAlt.length}文字`);
console.log(`   評価: ${heroAlt.length <= 125 ? '✅ OK' : '⚠️ 長すぎます'}\n`);

// WorksSection examples
const works = [
  { title: 'Vintage Iron Works', description: '職人が作るアイアン製品の世界観を表現した、温かみのあるデザイン' },
  { title: 'コーポレートサイト', description: '会社概要・サービス詳細・FAQ・お問い合わせを統合。' },
  { title: 'アパレルECサイト', description: 'OEM・ODM対応。商品管理・決済・在庫管理を統合したフルスペックサイト。' },
  { title: 'FP個人サイト', description: 'LINE相談への導線に特化。' },
  { title: 'プロフィールサイト', description: '1ページ完結型。Instagram・Google Map埋め込み対応。' },
  { title: 'ランディングページ', description: 'シンプルで効果的なランディングページ。コンバージョン重視の設計。' },
];

console.log('2. WorksSection:');
let maxLength = 0;
let maxProject = '';
works.forEach((project) => {
  const alt = `${project.title} - ${project.description} | 株式会社Awake制作実績`;
  const length = alt.length;
  console.log(`   ${project.title}: ${length}文字 ${length <= 125 ? '✅' : '⚠️'}`);
  if (length > maxLength) {
    maxLength = length;
    maxProject = project.title;
  }
});

// IllustrationSection
const illustrations = [
  { title: 'CLEMIRA製品紹介', category: 'ECサイト', description: '身体機能向上をサポートする革新的製品CLEMIRAの直販サイト' },
  { title: '保険相談LP', category: 'ランディングページ', description: '「もっと早く相談していれば...」温かみのあるコピーと柔らかな色調' },
];

console.log('\n3. IllustrationSection:');
illustrations.forEach((item) => {
  const alt = `${item.title} - ${item.description} | ${item.category}デザイン制作実績`;
  const length = alt.length;
  console.log(`   ${item.title}: ${length}文字 ${length <= 125 ? '✅' : '⚠️'}`);
  if (length > maxLength) {
    maxLength = length;
    maxProject = item.title;
  }
});

console.log(`\n📊 サマリー:`);
console.log(`   最長: ${maxLength}文字 (${maxProject})`);
console.log(`   推奨: 125文字以内`);
console.log(`   結果: ${maxLength <= 125 ? '✅ すべてOK' : '⚠️ 改善が必要'}\n`);

if (maxLength <= 125) {
  console.log('✨ すべての画像alt属性がSEOベストプラクティスに準拠しています！');
} else {
  console.log('⚠️ 一部のalt属性が長すぎます。短縮を検討してください。');
}
