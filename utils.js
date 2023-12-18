class vec2{
  x = 0;
  y = 0;

  constructor(x,y,z){
    this.x = x;
    this.y = y;
  }

  module(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  }

  f(x){
    return new vec2(x*this.x/Renderer.fov,x*this.y/Renderer.fov);
  }

  ecuation() {
    let a = this.x;
    let b = this.y;
    let c = Math.pow(this.x, 2) + Math.pow(this.y, 2);

    return { a, b, c };
  }
}

class vec3{
  x = 0;
  y = 0;
  z = 0;

  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  module(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2));
  }

  f(x){
    return new vec3(x*this.x/Renderer.fov,x*this.y/Renderer.fov,x*this.z/Renderer.fov);
  }

  ecuation() {
    let a = this.x;
    let b = this.y;
    let c = this.z;
    let d = Math.pow(this.x, 3) + Math.pow(this.y, 3) + Math.pow(this.z, 3);

    return { a, b, c, d };
  }
}

class color{
  r = 0;
  g = 0;
  b = 0;

  constructor(x,y,z){
    this.r = x;
    this.g = y;
    this.b = z;
  }

  brightness(){
    return (this.r+this.g+this.b)/3;
  }

  value(){
    return `rgb(${this.r},${this.g},${this.b})`;
  }
}
