class vec2{
	x = 0;
	y = 0;

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	modul(){
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

	modul(){
		return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2));
	}
}

class Ray{
	origin = new vec3(0,0,0);
	direction = new vec3(0,0,0);

	constructor(o,d){
		this.origin = o;
		this.direction = d;
	}

	f(t){
		return new vec3(
			this.origin.x + this.direction.x * t,
			this.origin.y + this.direction.y * t,
			this.origin.z + this.direction.z * t
		);
	}
}

class Pixel{
	id = new vec2(0,0);
	color = "#000";

	constructor(id,color){
		this.id = id;
		this.color = color;
	}
}