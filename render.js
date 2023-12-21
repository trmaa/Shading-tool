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

  static fov = 50;
  static pov = {position:new vec3(0,0,0),angle:new vec2(0,0)};

  static pixels = [];

  static main(){
    Renderer.cvs.width = 500;
    Renderer.cvs.height = 500;

    for(let x = 0;x < Renderer.cvs.width;x++){
      for(let y = 0;y < Renderer.cvs.height;y++){
        let id = y*Renderer.cvs.width-Renderer.cvs.width+x;
        let maxid = Renderer.cvs.height*Renderer.cvs.width;
        Renderer.pixels[id] = new Pixel(new color(255,255-id*255/maxid,id*255/maxid),new vec2(x,y));

        //es un pov cuadrado porque las magnitudes solo son afectadas por un angulo. si fueran afectadas por las dos: seria redondo.
        let w = Math.floor(Math.cos(Renderer.pov.angle.y+(x/Renderer.cvs.width)-1/2)*Renderer.fov);
        let j = Math.floor(Math.sin(Renderer.pov.angle.x+(y/Renderer.cvs.height)-1/2)*Renderer.fov);
        let k = Math.floor(Math.sin(Renderer.pov.angle.y+(x/Renderer.cvs.width)-1/2)*Renderer.fov);
        Renderer.pixels[id].position3 = new vec3(w,j,k);
      }
    }
  }
  
  static repaint(pixels){
    pixels.forEach(pixel=>{
      pixel.init = Renderer.pov.position;
      let color = pixel.color.value();
      Renderer.ctx.fillStyle = color;
      Renderer.ctx.fillRect(pixel.position2.x,pixel.position2.y,1,1);
    });
  }  
}