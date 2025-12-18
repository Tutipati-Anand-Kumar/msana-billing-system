import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'client', 'dist');
const destDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

try {
    console.log(`Copying build from ${srcDir} to ${destDir}...`);
    copyRecursiveSync(srcDir, destDir);
    console.log('✅ Build copied successfully.');
} catch (err) {
    console.error('❌ Error copying build:', err);
    process.exit(1);
}
