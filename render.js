class Renderer{
  static cvs = document.querySelectorAll("canvas")[0];
  static ctx = Renderer.cvs.getContext("2d");

  static main(){
    Renderer.cvs.width = 500;
    Renderer.cvs.height = 500;
  }
  
  static repaint(pixels){
    pixels.forEach(pixel=>{
      let color = pixel.color.value();
      Renderer.ctx.fillStyle = color;
      Renderer.ctx.fillRect(pixel.position.x,pixel.position.y,1,1);
    });
  }  
}
Renderer.main();

class pixel{
  constructor(color,position){
    this.color = color;
    this.position = position;
  }
}

let pixels = [];
for(let x = 0;x < Renderer.cvs.width;x++){
  for(let y = 0;y < Renderer.cvs.height;y++){
    pixels[y*Renderer.cvs.width-Renderer.cvs.width+x] = new pixel(new color(0,Math.floor(Math.random()*255),255),new vec2(x,y));
  }
}

Renderer.repaint(pixels);
