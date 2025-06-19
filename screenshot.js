const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
const path = require('path');

const websites = [
  { url: 'https://www.awakeinc.co.jp/', filename: 'awake-corp-hero.jpg' },
  { url: 'https://apparel.awakeinc.co.jp/', filename: 'apparel-ec-hero.jpg' },
  { url: 'https://vintage-iron-works-example.awakeinc.co.jp/', filename: 'manufacturing-hero.jpg' },
  { url: 'https://fp.example.awakeinc.co.jp/', filename: 'financial-hero.jpg' },
  { url: 'https://profile-example.awakeinc.co.jp/', filename: 'profile-hero.jpg' }
];

async function takeScreenshots() {
  // Ensure screenshots directory exists
  const screenshotsDir = path.join(__dirname, 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const site of websites) {
    try {
      console.log(`Taking screenshot of ${site.url}...`);
      
      const screenshotPath = path.join(screenshotsDir, site.filename);
      
      // Create a screenshot by loading the URL
      await nodeHtmlToImage({
        output: screenshotPath,
        html: `<iframe src="${site.url}" width="1200" height="800" style="border:none;"></iframe>`,
        quality: 85,
        type: 'jpeg',
        puppeteerArgs: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      });
      
      console.log(`Screenshot saved: ${screenshotPath}`);
    } catch (error) {
      console.error(`Error taking screenshot of ${site.url}:`, error.message);
    }
  }

  console.log('All screenshots completed!');
}

takeScreenshots().catch(console.error);