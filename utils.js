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

class Sphere{
	center = new vec3(0,0,0);
	radius = 4;
}
