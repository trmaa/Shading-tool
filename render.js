class Pixel{
  color = new color(0,0,0);
  position = new vec2(0,0);
  constructor(color,position){
    this.color = color;
    this.position = position;
  }
}

class Renderer{
  static cvs = document.querySelectorAll("canvas")[0];
  static ctx = Renderer.cvs.getContext("2d");

  static pixels = [];

  static main(){
    Renderer.cvs.width = 500;
    Renderer.cvs.height = 500;

    for(let x = 0;x < Renderer.cvs.width;x++){
      for(let y = 0;y < Renderer.cvs.height;y++){
        let id = y*Renderer.cvs.width-Renderer.cvs.width+x;
        let maxid = Renderer.cvs.height*Renderer.cvs.width;
        Renderer.pixels[id] = new Pixel(new color(id*255/maxid,0,0),new vec2(x,y));
      }
    }
  }
  
  static repaint(pixels){
    pixels.forEach(pixel=>{
      let color = pixel.color.value();
      Renderer.ctx.fillStyle = color;
      Renderer.ctx.fillRect(pixel.position.x,pixel.position.y,1,1);
    });
  }  
}