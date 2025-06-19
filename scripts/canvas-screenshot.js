// HTMLモックアップを生成してウェブサイト風の表示を作成
const fs = require('fs');
const path = require('path');

// Canvasライブラリがない場合の代替として、より詳細なHTMLモックアップを作成
function createWebsiteHTML(title, description, features = []) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; }
        
        .header { background: #1f2937; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; }
        .nav { display: flex; gap: 2rem; }
        .nav a { color: white; text-decoration: none; }
        
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 2rem; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .cta-button { background: #f59e0b; color: white; padding: 1rem 2rem; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer; }
        
        .features { padding: 4rem 2rem; background: #f8fafc; }
        .features h2 { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #1f2937; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .feature-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
        
        .contact { background: #1f2937; color: white; padding: 3rem 2rem; text-align: center; }
        .contact h2 { margin-bottom: 1rem; }
        .contact p { margin-bottom: 2rem; }
        
        .footer { background: #111827; color: #9ca3af; padding: 2rem; text-align: center; }
    </style>
</head>
<body>
    <header class="header">
        <div class="logo">${title}</div>
        <nav class="nav">
            <a href="#home">ホーム</a>
            <a href="#services">サービス</a>
            <a href="#about">会社概要</a>
            <a href="#contact">お問い合わせ</a>
        </nav>
    </header>
    
    <section class="hero">
        <h1>${title}</h1>
        <p>${description}</p>
        <button class="cta-button">詳しく見る</button>
    </section>
    
    <section class="features">
        <h2>主な特徴</h2>
        <div class="feature-grid">
            ${features.map((feature, index) => `
                <div class="feature-card">
                    <div class="feature-icon">${getFeatureIcon(index)}</div>
                    <h3>${feature}</h3>
                    <p>高品質なサービスを適正価格でご提供いたします。</p>
                </div>
            `).join('')}
        </div>
    </section>
    
    <section class="contact">
        <h2>お問い合わせ</h2>
        <p>プロジェクトのご相談はお気軽にどうぞ</p>
        <button class="cta-button">LINEで相談する</button>
    </section>
    
    <footer class="footer">
        <p>&copy; 2024 ${title}. All rights reserved.</p>
    </footer>
</body>
</html>`;
}

function getFeatureIcon(index) {
  const icons = ['💼', '🚀', '⭐', '🎯', '📱', '💡'];
  return icons[index % icons.length];
}

// 実際の画像を生成（非Canvasアプローチ）
async function generateWebsiteImages() {
  console.log('🎨 Generating realistic website mockups...');
  
  const websites = [
    {
      title: 'Awake Inc.',
      description: '適正価格でのホームページ制作でビジネスを加速させます',
      features: ['適正価格', 'スピード納品', '確実な効果'],
      filename: 'awake-corp-mockup.html'
    },
    {
      title: 'アパレルECサイト',
      description: 'OEM・ODM対応の本格的アパレルECサイトをご提供',
      features: ['商品管理', '決済システム', '在庫連携'],
      filename: 'apparel-ec-mockup.html'
    },
    {
      title: 'Vintage Iron Works',
      description: '金属加工業向け製品ギャラリー特化のランディングページ',
      features: ['製品ギャラリー', '実績訴求', '高速表示'],
      filename: 'manufacturing-lp-mockup.html'
    },
    {
      title: 'FPコンサルティング',
      description: 'ファイナンシャルプランナー個人事業サイト',
      features: ['LINE相談', 'CTA最適化', 'SEO対策'],
      filename: 'fp-site-mockup.html'
    },
    {
      title: 'プロフィールサイト',
      description: '1ページ完結型プロフィールサイト',
      features: ['SNS連携', 'スクロールアニメ', 'レスポンシブ'],
      filename: 'profile-site-mockup.html'
    }
  ];
  
  const mockupsDir = path.join(__dirname, '..', 'public', 'mockups');
  if (!fs.existsSync(mockupsDir)) {
    fs.mkdirSync(mockupsDir, { recursive: true });
  }
  
  // HTMLモックアップを生成
  for (const site of websites) {
    const html = createWebsiteHTML(site.title, site.description, site.features);
    const filePath = path.join(mockupsDir, site.filename);
    
    fs.writeFileSync(filePath, html);
    console.log(`✅ Generated HTML mockup: ${site.filename}`);
  }
  
  console.log('🎯 All website mockups generated successfully!');
  console.log('💡 You can view these mockups by opening the HTML files in a browser and taking screenshots manually.');
}

// 実行
generateWebsiteImages().catch(console.error);