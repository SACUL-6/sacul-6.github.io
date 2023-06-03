import * as imageList from './imageList';
import { colors } from './colors'

export async function loadImages() {
    return {
        basicEnemyPhysical: decompress(imageList.tile028, colors.darkGray),
        basicEnemySpectral: decompress(imageList.tile028, colors.gray),
        basicEnemyOrange: decompress(imageList.tile028, colors.darkOrange),

        shooterEnemyPhysical: decompress(imageList.tile080, colors.darkGray),
        shooterEnemySpectral: decompress(imageList.tile080, colors.gray),

        ghostFirePhysical: decompress(imageList.tile505, colors.white),
        ghostFireSpectral: decompress(imageList.tile505, colors.lightGray),
        ghostFireZero: decompress(imageList.tile505, colors.zero),

        playerPhysical: decompress(imageList.tile077, colors.darkGray),
        playerSpectral: decompress(imageList.tile077, colors.lightGray),
        playerSpectralDash: decompress(imageList.tile077, colors.blue),
        playerZero: decompress(imageList.tile077, colors.zero),

        // boxWhite: decompress(imageList.tile121, colors.white),
        // boxDarkGray: decompress(imageList.tile121, colors.lightGray),

        dualPistolOrange: decompress(imageList.tile478_c, colors.orange),
        machineGunOrange: decompress(imageList.tile481, colors.orange),
        shotgunOrange: decompress(imageList.tile480, colors.orange),
        // spiritRevolverBlue: decompress(imageList.tile479, colors.blue),

        floorTile1: decompress(imageList.tile002, colors.lightGray),
        // floorTile2: decompress(imageList.tile002, colors.lightGray),
    };
}


function decompress(bitArray2D, color = '#fff') {
    const [width, ...compressed] = bitArray2D;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = compressed.length;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;

    for (let y = 0; y < compressed.length; y++) {
        for (let x = 0; x < width; x++) {
            const pixel = compressed[y] & (1 << x);
            if (pixel) ctx.fillRect(x, y, 1, 1);
        }
    }

    // return canvas.toDataURL('image/png');
    return canvas;
}

// async function createImageAsync(src) {
//     const image = new Image();
//     await new Promise(resolve => {
//         image.src = src;
//         image.onload = resolve;
//     });

//     return image;
// }