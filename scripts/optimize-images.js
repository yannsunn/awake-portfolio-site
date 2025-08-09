const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = null,
    quality = 85,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality: quality - 5 });
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality, progressive: true });
    }

    await pipeline.toFile(outputPath);
    
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const reduction = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(outputPath)} - Reduced by ${reduction}% (${(originalStats.size / 1024 / 1024).toFixed(2)}MB → ${(optimizedStats.size / 1024 / 1024).toFixed(2)}MB)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  // Hero画像の最適化（複数サイズ生成）
  const heroPath = path.join(imagesDir, 'hero-bg.jpg');
  
  // デスクトップ用
  await optimizeImage(heroPath, path.join(imagesDir, 'hero-bg-desktop.webp'), {
    width: 1920,
    quality: 85,
    format: 'webp'
  });
  
  // タブレット用
  await optimizeImage(heroPath, path.join(imagesDir, 'hero-bg-tablet.webp'), {
    width: 1024,
    quality: 85,
    format: 'webp'
  });
  
  // モバイル用
  await optimizeImage(heroPath, path.join(imagesDir, 'hero-bg-mobile.webp'), {
    width: 640,
    quality: 85,
    format: 'webp'
  });
  
  // AVIF版も生成（より高圧縮）
  await optimizeImage(heroPath, path.join(imagesDir, 'hero-bg-desktop.avif'), {
    width: 1920,
    quality: 80,
    format: 'avif'
  });
  
  // JPG版（フォールバック用）
  await optimizeImage(heroPath, path.join(imagesDir, 'hero-bg-optimized.jpg'), {
    width: 1920,
    quality: 85,
    format: 'jpg'
  });
  
  // スクリーンショット画像の最適化
  const screenshotsDir = path.join(imagesDir, 'screenshots');
  const screenshots = await fs.readdir(screenshotsDir);
  
  for (const file of screenshots) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(screenshotsDir, file);
      const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(screenshotsDir, outputName);
      
      await optimizeImage(inputPath, outputPath, {
        width: 800,
        quality: 85,
        format: 'webp'
      });
    }
  }
  
  console.log('\n✨ 画像最適化が完了しました！');
}

optimizeAllImages().catch(console.error);