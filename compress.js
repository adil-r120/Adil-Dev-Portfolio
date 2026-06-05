import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const outPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        
        console.log(`Optimizing: ${entry.name}`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outPath);
            
          console.log(`✅ Created: ${path.basename(outPath)}`);
          
          // Optionally delete the original file
          await fs.unlink(fullPath);
          console.log(`🗑️ Deleted original: ${entry.name}`);
        } catch (err) {
          console.error(`❌ Failed to process ${entry.name}:`, err);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  await processDirectory(PUBLIC_DIR);
  console.log('Compression complete!');
}

main();
