class Camara{
	static position = new vec3(0,0,22);
	static angle = new vec2(0,0);
	static rays = [];
	static aspect = Canvas.cvs.width/Canvas.cvs.height;
	static fov = 50;
	static far = 1500;
	static near = -2;

	static move(){
		wDown?Camara.position.z+=1:0;
		sDown?Camara.position.z-=1:0;
		aDown?Camara.position.x+=1:0;
		dDown?Camara.position.x-=1:0;
		eDown?Camara.position.y+=1:0;
		qDown?Camara.position.y-=1:0;
	}

	static defineRays(){
		for (let i = 0; i < Canvas.pixels.length; i++) {
		    Camara.rays[i] = new Ray(Camara.position, 
		    	new vec3(
		    		Canvas.pixels[i].id.x-Canvas.cvs.width/(2/*Canvas.res*/),
		    		Canvas.pixels[i].id.y-Canvas.cvs.height/(2/*Canvas.res*/),
		    		Camara.near
		    	)
		    );
		}
	}
}

Camara.defineRays();
