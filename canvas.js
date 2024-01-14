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
                Canvas.pixels[x + w * y] = new Pixel(new vec2(x * Canvas.res, y * Canvas.res), `rgb(${Math.random()*255-255*y/h},${Math.random()*255-255*x/w},0)`);
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
        Canvas.lastPixels = [];
        for(let i = 0;i < Canvas.pixels.length;i++){
            Canvas.lastPixels[i] = Canvas.pixels[i];
        }
    }
}

class Pixel{
    id = new vec2(0,0);
    color = "#000";

    constructor(id,color){
        this.id = id;
        this.color = color;
    }

    getColor(id){
        let sphere = new Sphere();
        let res = Camara.rays[id].checkColissions(sphere);

        let lightDirection = new vec3(5,2,10); //this might be -lightDirection
        lightDirection.normal();

        if(res.proove){
            let bright = 255-res.sol.dot(lightDirection);
            this.color = `rgb(${bright},${bright*0.6},${bright*0.1})`;
        } else { 
            this.color = "#000";
        }
    }
}

Canvas.main(198,108);
