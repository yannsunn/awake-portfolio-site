// 簡単なHTMLスクリーンショット代替案
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// シンプルなHTMLフェッチ関数
async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// プレースホルダー画像を生成する関数（SVGベース）
function generatePlaceholderSvg(title, description, width = 800, height = 600) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)"/>
    
    <!-- Header -->
    <rect x="0" y="0" width="100%" height="80" fill="#1f2937"/>
    <text x="40" y="50" font-family="Arial, sans-serif" font-size="24" fill="white" font-weight="bold">${title}</text>
    
    <!-- Navigation -->
    <rect x="0" y="80" width="100%" height="50" fill="#374151"/>
    <text x="40" y="110" font-family="Arial, sans-serif" font-size="14" fill="#e5e7eb">ホーム | サービス | 実績 | 会社概要 | お問い合わせ</text>
    
    <!-- Main Content -->
    <rect x="40" y="160" width="720" height="300" fill="white" stroke="#d1d5db" stroke-width="1"/>
    <text x="60" y="200" font-family="Arial, sans-serif" font-size="32" fill="#1f2937" font-weight="bold">${title}</text>
    <text x="60" y="240" font-family="Arial, sans-serif" font-size="16" fill="#6b7280">${description}</text>
    
    <!-- CTA Button -->
    <rect x="60" y="280" width="160" height="40" fill="#1f2937" rx="5"/>
    <text x="130" y="305" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">詳しく見る</text>
    
    <!-- Sidebar -->
    <rect x="480" y="340" width="280" height="120" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
    <text x="500" y="365" font-family="Arial, sans-serif" font-size="14" fill="#374151" font-weight="bold">お問い合わせ</text>
    <text x="500" y="385" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">TEL: 03-0000-0000</text>
    <text x="500" y="405" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">Email: info@example.com</text>
    
    <!-- Footer -->
    <rect x="0" y="520" width="100%" height="80" fill="#1f2937"/>
    <text x="400" y="565" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af" text-anchor="middle">© 2024 ${title}. All rights reserved.</text>
  </svg>`;
}

// メイン処理
async function generateScreenshots() {
  console.log('🎨 Generating website placeholder screenshots...');
  
  const websites = [
    {
      title: 'Awake Inc.',
      description: '適正価格でのホームページ制作でビジネスを加速',
      filename: 'awake-corp-placeholder.svg'
    },
    {
      title: 'アパレルECサイト',
      description: 'OEM・ODM対応の本格的アパレルECサイト',
      filename: 'apparel-ec-placeholder.svg'
    },
    {
      title: 'Vintage Iron Works',
      description: '金属加工業向け製品ギャラリー特化サイト',
      filename: 'manufacturing-lp-placeholder.svg'
    },
    {
      title: 'FPコンサルティング',
      description: 'ファイナンシャルプランナー個人事業サイト',
      filename: 'fp-site-placeholder.svg'
    },
    {
      title: 'プロフィールサイト',
      description: '1ページ完結型プロフィールサイト',
      filename: 'profile-site-placeholder.svg'
    }
  ];
  
  // スクリーンショットディレクトリを確認
  const screenshotsDir = path.join(__dirname, '..', 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  
  // 各サイトのプレースホルダーを生成
  for (const site of websites) {
    const svg = generatePlaceholderSvg(site.title, site.description);
    const filePath = path.join(screenshotsDir, site.filename);
    
    fs.writeFileSync(filePath, svg);
    console.log(`✅ Generated: ${site.filename}`);
  }
  
  console.log('🎯 All placeholder screenshots generated successfully!');
}

// 実行
generateScreenshots().catch(console.error);