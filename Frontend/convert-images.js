import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public/images";
const outputFolder = "./public/images";

const allowedExtensions = [".png", ".jpg", ".jpeg"];

async function convertImages() {
  const files = fs.readdirSync(inputFolder);

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();

    if (!allowedExtensions.includes(extension)) continue;

    const inputPath = path.join(inputFolder, file);
    const outputName = `${path.basename(file, extension)}.avif`;
    const outputPath = path.join(outputFolder, outputName);

    await sharp(inputPath)
      .avif({ quality: 70 })
      .toFile(outputPath);

    console.log(`Convertida: ${file} → ${outputName}`);
  }

  console.log("Listo. Imágenes convertidas a AVIF.");
}

convertImages().catch((error) => {
  console.error("Error convirtiendo imágenes:", error);
});