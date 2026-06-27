import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public";
const allowedExtensions = [".png", ".jpg", ".jpeg"];

function getImageFiles(folder) {
  const entries = fs.readdirSync(folder, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      return getImageFiles(fullPath);
    }

    const extension = path.extname(entry.name).toLowerCase();
    return allowedExtensions.includes(extension) ? [fullPath] : [];
  });
}

async function convertImages() {
  const files = getImageFiles(inputFolder);

  for (const inputPath of files) {
    const extension = path.extname(inputPath).toLowerCase();
    const outputPath = path.join(
      path.dirname(inputPath),
      `${path.basename(inputPath, extension)}.avif`
    );

    await sharp(inputPath).avif({ quality: 70 }).toFile(outputPath);

    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  }

  console.log("Done. Images converted to AVIF.");
}

convertImages().catch((error) => {
  console.error("Error converting images:", error);
});
