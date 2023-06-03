const { dirname, join } = require('path');
const { fileURLToPath } = require('url');

const { readFileSync } = require('fs');
const readdirp = require('readdirp');

const { loadImage, createCanvas } = require('canvas');

const assetsDir = '../src/assets';


function compress(img) {
    if (img.width > 53) throw new Error(`Image width too large: ${img.width}`);

    // console.log('img', img.width, img.height);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // console.log('imageData', imageData.data.slice(0, 16));
    // console.log('min pixel:', imageData.data.filter(val => val != 0).reduce((a, b) => Math.min(a, b), Infinity));

    const compressed = [];
    let lineBuffer = 0;
    // console.log('imageData', imageData.width, imageData.height);
    // console.log('imageData.data.length', imageData.data.length);
    for (let lineStart = 0; lineStart < imageData.data.length; lineStart += canvas.width * 4) {
        // console.log('lineStart', lineStart);
        lineBuffer = 0;
        for (let col = 0; col < canvas.width; col++) {
            const pixel = imageData.data[lineStart + col * 4];
            if (pixel > 0) lineBuffer += 1 << col;
        }
        compressed.push(lineBuffer);
    }

    return [img.width, ...compressed];
}

function decompress(bitArray2D, color = '#fff') {
    const [width, ...compressed] = bitArray2D;

    const canvas = createCanvas(width, compressed.length); // in client side, replace with `document.createElement('canvas')`
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;

    for (let y = 0; y < compressed.length; y++) {
        for (let x = 0; x < width; x++) {
            const pixel = compressed[y] & (1 << x);
            if (pixel) ctx.fillRect(x, y, 1, 1);
        }
    }

    return canvas.toDataURL('image/png');
}

async function main() {
    // read all files under this directory
    const dir = await readdirp.promise(join(__dirname, assetsDir));
    const paths = dir.map(d => d.path);
    paths.sort();

    // debug string is skipped this time
    let debugStr = '';

    // this is the final result we print out
    let resultStr = '';
    for (const path of paths) {
        const imgName = /(tile\d+.*?)\./.exec(path)[1];
        const imgSrc = join(__dirname, assetsDir, path);
        // console.log(imgSrc);

        // source file in different formats
        const imgFile = readFileSync(imgSrc); // file for size comparison
        const img = await loadImage(imgSrc); // actual image object to compress

        // transform image into 2 formats
        const base64 = 'data:image/png;base64,' + Buffer.from(imgFile).toString('base64');
        const compressed = JSON.stringify(compress(img));
        const compressedWithoutZero = JSON.stringify(compress(img)).replace(/\b0\b/g, ''); // this can only be used in js, not json

        // paste decompressed image base64 uri to html to check the result
        const decompressed = decompress(JSON.parse(compressed));

        debugStr += [
            path,
            'Base64:',
            base64,
            '1-bit compressed:',
            compressed,
            '1-bit decompressed:',
            decompressed,
            '',
            '',
        ].join('\n');

        resultStr += `/* ${path.padEnd(22, ' ')} */ export const ${imgName} = ${compressedWithoutZero};\n`;
    }

    console.log(resultStr);
}

main();