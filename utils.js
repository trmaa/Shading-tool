class vec2{
  x = 0;
  y = 0;
  z = 0;

  constructor(x,y,z){
    this.x = x;
    this.y = y;
  }

  module(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
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
