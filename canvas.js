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
                Canvas.pixels[x + w * y] = new Pixel(new vec2(x * Canvas.res, y * Canvas.res), `rgb(${255*y/h},${255*x/w},0)`);
            }
        }
    }

    static getPixelData() {
        return Canvas.ctx.getImageData(0, 0, Canvas.cvs.width, Canvas.cvs.height).data;
    }

    static repaint() {
        for(let i = 0;i < Canvas.pixels.length;i++){
            Canvas.pixels[i].getColor(i);
            //aquí se tiran los rayos
            
            Canvas.ctx.fillStyle = Canvas.pixels[i].color;
            Canvas.ctx.fillRect(Canvas.pixels[i].id.x, Canvas.pixels[i].id.y, Canvas.res, Canvas.res);
        }
        for(let i = 0;i < Canvas.pixels.length;i++){
            Canvas.lastPixels[i] = Canvas.pixels[i];
        }
    }
}

Canvas.main(1280,720);