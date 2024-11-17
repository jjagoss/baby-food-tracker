// scripts/optimize-images.ts
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/original-images';
const outputDir = 'public/images/foods';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each image
fs.readdirSync(inputDir).forEach(file => {
  // Skip non-image files
  if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
    console.log(`Skipping ${file} - not an image`);
    return;
  }

  const outputFile = path.join(outputDir, `${path.parse(file).name}.webp`);
  
  sharp(path.join(inputDir, file))
    .resize(300, 300, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ 
      quality: 80,
      effort: 6  // Higher effort = better compression but slower
    })
    .toFile(outputFile)
    .then(info => {
      console.log(`✅ Processed ${file}:`, {
        width: info.width,
        height: info.height,
        size: `${(info.size / 1024).toFixed(2)}KB`
      });
    })
    .catch(err => {
      console.error(`❌ Error processing ${file}:`, err);
    });
});

console.log('Processing images... Please wait.');