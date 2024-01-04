class Camara{
	static position = new vec3(0,0,0);
	static angle = new vec2(0,0);
	static rays = [];
	static fov = 50;
	static far = 200;
	static near = 1;

	static defineRays(){
		for(let i = 0;i < Canvas.pixels.length;i++){
			Camara.rays[i] = new Ray(
				Camara.position,
				new vec3(
					(Canvas.pixels[i].id.x-Canvas.cvs.innerWidth/2)*Math.cos(Camara.angle.y)*(Camara.near),
					(Canvas.pixels[i].id.y-Canvas.cvs.innerHeight/2)*Math.sin(Camara.angle.x)*(Camara.near),
					(Canvas.pixels[i].id.x-Canvas.cvs.innerWidth/2)*Math.sin(Camara.angle.y)*(Camara.near)
				)
			);
		}
	}
}

Camara.defineRays();