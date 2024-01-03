class Canvas {
    cvs = 0;
    ctx = 0;
    pixels = [];
    lastPixels = [];
    res = 1;

    constructor(w, h) {
    	this.res = 1000 / ((w+h)/2);

        document.write(`<canvas id='canvas' width='${w * this.res}' height='${h * this.res}'></canvas>`);

        this.cvs = document.querySelector("#canvas");
        this.ctx = this.cvs.getContext("2d");

        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                this.pixels[x + w * y] = new Pixel(new vec2(x * this.res, y * this.res), `rgb(${Math.random()*255-255*y/h},0,0)`);
            }
        }
    }

    getPixelData() {
        return this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height).data;
    }

    repaint() {
        this.pixels.forEach(p => {
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.id.x, p.id.y, this.res, this.res); // Ajusta el tamaño de los cuadrados
        });

        for(let i = 0;i < this.pixels.length;i++)
            this.lastPixels[i] = this.pixels[i];
    }
}
