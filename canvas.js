class Canvas {
    cvs = 0;
    ctx = 0;
    pixels = [];
    res = 100;

    constructor(w, h) {
        document.write(`<canvas id='canvas' width='${w * this.res}' height='${h * this.res}'></canvas>`);

        this.cvs = document.querySelector("#canvas");
        this.ctx = this.cvs.getContext("2d");

        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                this.pixels[x + w * y] = new Pixel(new vec2(x * this.res, y * this.res), `rgb(${255*y/w},0,0)`);
            }
        }
    }

    repaint() {
        this.pixels.forEach(p => {
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.id.x, p.id.y, this.res, this.res); // Ajusta el tamaño de los cuadrados
        });
    }
}
