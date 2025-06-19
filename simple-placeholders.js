const fs = require('fs');
const path = require('path');

function createSimplePlaceholders() {
  const screenshotsDir = path.join(__dirname, 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const websites = [
    { filename: 'awake-corp-hero.jpg', title: 'Awake Inc. コーポレートサイト' },
    { filename: 'apparel-ec-hero.jpg', title: 'アパレルECサイト' },
    { filename: 'manufacturing-hero.jpg', title: '製造業LPサイト' },
    { filename: 'financial-hero.jpg', title: 'FP個人サイト' },
    { filename: 'profile-hero.jpg', title: 'プロフィールサイト' }
  ];

  // Create an SVG-based placeholder for each site
  websites.forEach(site => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f8fafc;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#grad1)"/>
      <rect x="50" y="100" width="1100" height="600" fill="white" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="100" width="1100" height="40" fill="#f1f5f9"/>
      <circle cx="80" cy="120" r="6" fill="#ef4444"/>
      <circle cx="100" cy="120" r="6" fill="#f59e0b"/>
      <circle cx="120" cy="120" r="6" fill="#10b981"/>
      <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#1f2937">${site.title}</text>
      <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#6b7280">実際のスクリーンショット準備中</text>
    </svg>`;
    
    const placeholderPath = path.join(screenshotsDir, site.filename.replace('.jpg', '.svg'));
    fs.writeFileSync(placeholderPath, svgContent);
    console.log(`SVG placeholder created: ${placeholderPath}`);
  });

  console.log('All SVG placeholders created!');
}

createSimplePlaceholders();