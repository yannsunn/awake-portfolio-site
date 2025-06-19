const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// スクリーンショットを取得する関数
async function takeScreenshot(url, filename) {
  let browser;
  try {
    console.log(`📸 Taking screenshot of: ${url}`);
    
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });
    
    const page = await browser.newPage();
    
    // ビューポートを設定
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1
    });
    
    // ページに移動（タイムアウト設定）
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // 少し待機してページを完全に読み込む
    await page.waitForTimeout(2000);
    
    // スクリーンショットを撮影
    const outputPath = path.join(__dirname, '..', 'public', 'images', 'screenshots', filename);
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 85,
      clip: {
        x: 0,
        y: 0,
        width: 800,
        height: 600
      }
    });
    
    console.log(`✅ Screenshot saved: ${filename}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error taking screenshot of ${url}:`, error.message);
    return false;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// メイン関数
async function main() {
  console.log('🚀 Starting screenshot automation...');
  
  // スクリーンショットディレクトリを確認
  const screenshotsDir = path.join(__dirname, '..', 'public', 'images', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  
  // 取得するURLリスト
  const urls = [
    {
      url: 'https://www.awakeinc.co.jp/',
      filename: 'real-awake-corp.jpg'
    },
    {
      url: 'https://apparel.awakeinc.co.jp/',
      filename: 'real-apparel-ec.jpg'
    },
    {
      url: 'https://vintage-iron-works-example.awakeinc.co.jp/',
      filename: 'real-manufacturing-lp.jpg'
    },
    {
      url: 'https://fp.example.awakeinc.co.jp/',
      filename: 'real-fp-site.jpg'
    },
    {
      url: 'https://profile-example.awakeinc.co.jp/',
      filename: 'real-profile-site.jpg'
    }
  ];
  
  // フォールバック用のテスト
  const testUrls = [
    {
      url: 'https://example.com',
      filename: 'test-example.jpg'
    },
    {
      url: 'https://httpbin.org/html',
      filename: 'test-httpbin.jpg'
    }
  ];
  
  let successCount = 0;
  
  // 各URLのスクリーンショットを取得
  for (const site of urls) {
    const success = await takeScreenshot(site.url, site.filename);
    if (success) successCount++;
    
    // 少し間隔を空ける
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // メインURLが失敗した場合、テストURLで動作確認
  if (successCount === 0) {
    console.log('🔄 Trying test URLs...');
    for (const site of testUrls) {
      const success = await takeScreenshot(site.url, site.filename);
      if (success) successCount++;
    }
  }
  
  console.log(`🎯 Screenshot automation completed! ${successCount} screenshots taken.`);
}

// スクリプト実行
main().catch(console.error);