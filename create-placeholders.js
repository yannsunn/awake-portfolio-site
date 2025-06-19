const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function createPlaceholderScreenshots() {
  // Install canvas first
  try {
    require('canvas');
  } catch (e) {
    console.log('Canvas not available, creating simple placeholder files instead...');
    createSimplePlaceholders();
    return;
  }

  const screenshotsDir = path.join(__dirname, 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const websites = [
    { filename: 'awake-corp-hero.jpg', title: 'Awake Inc.\nコーポレートサイト', color: '#2563eb' },
    { filename: 'apparel-ec-hero.jpg', title: 'アパレルEC\nサイト', color: '#7c3aed' },
    { filename: 'manufacturing-hero.jpg', title: '製造業\nLPサイト', color: '#dc2626' },
    { filename: 'financial-hero.jpg', title: 'FP個人\nサイト', color: '#059669' },
    { filename: 'profile-hero.jpg', title: 'プロフィール\nサイト', color: '#ea580c' }
  ];

  for (const site of websites) {
    const canvas = createCanvas(1200, 800);
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 1200, 800);
    gradient.addColorStop(0, site.color);
    gradient.addColorStop(1, '#f8fafc');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);

    // Website frame
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 100, 1100, 600);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 100, 1100, 600);

    // Header bar
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(50, 100, 1100, 40);
    
    // Browser dots
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(80, 120, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(100, 120, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(120, 120, 6, 0, 2 * Math.PI);
    ctx.fill();

    // Title text
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    const lines = site.title.split('\n');
    lines.forEach((line, index) => {
      ctx.fillText(line, 600, 350 + (index * 60));
    });

    // "実際のスクリーンショット準備中" text
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px Arial';
    ctx.fillText('実際のスクリーンショット準備中', 600, 480);

    // Save as JPEG
    const screenshotPath = path.join(screenshotsDir, site.filename);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 });
    fs.writeFileSync(screenshotPath, buffer);
    
    console.log(`Placeholder screenshot created: ${screenshotPath}`);
  }

  console.log('All placeholder screenshots created!');
}

function createSimplePlaceholders() {
  const screenshotsDir = path.join(__dirname, 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const filenames = [
    'awake-corp-hero.jpg',
    'apparel-ec-hero.jpg', 
    'manufacturing-hero.jpg',
    'financial-hero.jpg',
    'profile-hero.jpg'
  ];

  // Create minimal placeholder files
  filenames.forEach(filename => {
    const placeholderPath = path.join(screenshotsDir, filename);
    fs.writeFileSync(placeholderPath, '');
    console.log(`Empty placeholder created: ${placeholderPath}`);
  });
}

createPlaceholderScreenshots().catch(console.error);