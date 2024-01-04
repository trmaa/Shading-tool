class Canvas {
    static cvs = 0;
    static ctx = 0;
    static pixels = [];
    static lastPixels = [];
    static res = 1;

    static main(w, h) {
    	Canvas.res = 1000 / ((w+h)/2);

        document.write(`<canvas id='canvas' width='${w * Canvas.res}' height='${h * Canvas.res}'></canvas>`);

        Canvas.cvs = document.querySelector("#canvas");
        Canvas.ctx = Canvas.cvs.getContext("2d");

        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                Canvas.pixels[x + w * y] = new Pixel(new vec2(x * Canvas.res, y * Canvas.res), `rgb(${Math.random()*255-255*y/h},0,0)`);
            }
        }
    }

    static getPixelData() {
        return Canvas.ctx.getImageData(0, 0, Canvas.cvs.width, Canvas.cvs.height).data;
    }

    static repaint() {
        Canvas.pixels.forEach(p => {
            Canvas.ctx.fillStyle = p.color;
            Canvas.ctx.fillRect(p.id.x, p.id.y, Canvas.res, Canvas.res); // Ajusta el tamaño de los cuadrados
        });

        for(let i = 0;i < Canvas.pixels.length;i++)
            Canvas.lastPixels[i] = Canvas.pixels[i];
    }
}

Canvas.main(128,72);