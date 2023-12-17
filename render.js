class Pixel{
  color = new color(0,0,0);
  position2 = new vec2(0,0);
  position3 = new vec3(0,0,0);
  constructor(color,position2){
    this.color = color;
    this.position2 = position2;
  }
}

class Renderer{
  static cvs = document.querySelectorAll("canvas")[0];
  static ctx = Renderer.cvs.getContext("2d");

  static fov = 25;

  static pixels = [];

  static main(){
    Renderer.cvs.width = 500;
    Renderer.cvs.height = 500;

    for(let x = 0;x < Renderer.cvs.width;x++){
      for(let y = 0;y < Renderer.cvs.height;y++){
        let id = y*Renderer.cvs.width-Renderer.cvs.width+x;
        let maxid = Renderer.cvs.height*Renderer.cvs.width;
        Renderer.pixels[id] = new Pixel(new color(0,0,0),new vec2(x,y));

        let w = x-Math.floor(Renderer.cvs.width*0.5);
        let j = y-Math.floor(Renderer.cvs.height*0.5);
        Renderer.pixels[id].position3 = new vec3(w,j,Renderer.fov);
      }
    }
  }
  
  static repaint(pixels){
    pixels.forEach(pixel=>{
      let color = pixel.color.value();
      Renderer.ctx.fillStyle = color;
      Renderer.ctx.fillRect(pixel.position2.x,pixel.position2.y,1,1);
    });
  }  
}