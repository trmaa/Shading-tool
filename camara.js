class Camara{
	static position = new vec3(0,0,-150);
	static angle = new vec2(0,0);
	static rays = [];
	static aspect = Canvas.cvs.width/Canvas.cvs.height;
	static fov = 50;
	static far = 1500;
	static near = 5;

	static defineRays(){
		for (let i = 0; i < Canvas.pixels.length; i++) {
		    Camara.rays[i] = new Ray(Camara.position, 
		    	new vec3(
		    		Canvas.pixels[i].id.x-Canvas.cvs.width/2,
		    		Canvas.pixels[i].id.y-Canvas.cvs.height/2,
		    		Camara.near
		    	)
		    );
		}
	}
}

Camara.defineRays();
