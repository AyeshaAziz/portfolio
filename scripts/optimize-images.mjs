import sharp from "sharp";
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const IMAGES_DIR = "src/assets/images";
const MAX_SIZE_KB = 150;
const JPEG_QUALITY = 70;
const PNG_QUALITY = 60;

const files = readdirSync(IMAGES_DIR).filter((f) =>
  /\.(jpg|jpeg|png)$/i.test(f),
);

for (const file of files) {
  const filePath = join(IMAGES_DIR, file);
  const { size } = statSync(filePath);
  const sizeKB = size / 1024;

  if (sizeKB <= MAX_SIZE_KB) {
    console.log(`Skipping ${file} (${sizeKB.toFixed(0)}KB) — under limit`);
    continue;
  }

  const ext = extname(file).toLowerCase();
  const isPNG = ext === ".png";

  console.log(`Compressing ${file} (${sizeKB.toFixed(0)}KB → ...)`);

  const inputBuffer = readFileSync(filePath);
  let pipeline = sharp(inputBuffer);

  if (isPNG) {
    pipeline = pipeline.png({ quality: PNG_QUALITY, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const newSizeKB = buffer.length / 1024;
  console.log(`  → ${newSizeKB.toFixed(0)}KB (saved ${(sizeKB - newSizeKB).toFixed(0)}KB)`);

  writeFileSync(filePath, buffer);
}

console.log("\nDone!");
