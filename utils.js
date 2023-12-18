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

function solveSystem(equations) {
  const matrix = equations.map((eq) => [eq.a, eq.b, eq.c, eq.d]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const factor = matrix[j][i] / matrix[i][i];
      for (let k = i; k < matrix[i].length; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  const solutions = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    let sum = matrix[i][matrix[i].length - 1];
    for (let j = i + 1; j < matrix[i].length - 1; j++) {
      sum -= matrix[i][j] * solutions[matrix.length - 1 - j];
    }
    solutions.unshift(sum / matrix[i][i]);
  }

  // Encuentra la solución más cercana a Renderer.pov.position
  let closestSolution = solutions[0];
  let closestDistance = distanceBetweenVectors(solutions[0], Renderer.pov.position);

  for (let i = 1; i < solutions.length; i++) {
    const currentDistance = distanceBetweenVectors(solutions[i], Renderer.pov.position);
    if (currentDistance < closestDistance) {
      closestSolution = solutions[i];
      closestDistance = currentDistance;
    }
  }

  return new vec3(closestSolution);
}

function distanceBetweenVectors(v1, v2) {
  const diffX = v1[0] - v2.x;
  const diffY = v1[1] - v2.y;
  const diffZ = v1[2] - v2.z;

  return Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
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
