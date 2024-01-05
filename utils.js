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

	normal(){
		let modul = this.modul();
		return new vec3(this.x/modul,this.y/modul,this.z/modul);
	}
}

class Ray{
	origin = new vec3(0,0,0);
	direction = new vec3(1,1,1);

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

	checkColissions(esfera){
		//Esfera: (bx^2 + by^2)t^2 + 2(axbx + ayby)t + (ax^2 + ay^2 - r^2) = 0
		let a = this.direction.modul();
		let b = 2*(this.origin.x*this.direction.x+this.origin.y*this.direction.y+this.origin.z*this.direction.z);
		let c = this.origin.modul()-esfera.radius;

		let discriminant = b*b - 4*a*c;
		let solutions = [];

		solutions[0] = (Math.sqrt(discriminant)-b)/(2*a);
		solutions[1] = (-Math.sqrt(discriminant)-b)/(2*a);

		if(solutions[0] || solutions[1]){
			if(solutions[0] && solutions[1])
				return solutions[0]>=solutions[1]?solutions[0]:solutions[1];
			else
				return solutions[0]?solutions[0]:solutions[1];
		} else {
			return 0;
		}
	}
}

class Pixel{
	id = new vec2(0,0);
	color = "#000";

	constructor(id,color){
		this.id = id;
		this.color = color;
	}

	getColor(id){
		let white = 255;
		//this.color = "#000";
		Camara.rays[id].checkColissions({center:new vec3(0,0,0),radius:12})!=0?this.color = `rgb(${white},${white},${white})`:0;
	}
}
