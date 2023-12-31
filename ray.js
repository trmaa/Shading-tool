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
		let a = Math.pow(this.direction.modul(),1);//this might be pow(2) :v
		let b = 2*this.origin.dot(this.direction);
		let c = Math.pow(this.origin.modul(),1)-esfera.radius*esfera.radius;//this might be pow(2) :v

		let discriminant = b*b - 4*a*c;
		let t = [];
		let h = [];

		t[0] = (Math.sqrt(discriminant)-b)/(2*a);
		t[1] = (-Math.sqrt(discriminant)-b)/(2*a);

		h[0] = this.f(t[0]);
		h[1] = this.f(t[1]); //the closest

		let normal = new vec3(
			(h[1].x - esfera.center.x),
			(h[1].y - esfera.center.y),
			(h[1].z - esfera.center.z)
		);
		normal.normal();
		normal = new vec3(
			(normal.x),
			(normal.y),
			(normal.z)
		);

		if(discriminant >= 0){
			if(discriminant > 0)
				return {proove:t[0]>=t[1]?t[0]:t[1],sol:normal};
			else
				return {proove:t[0]?t[0]:t[1],sol:normal};
		} else {
			return 0;
		}
	}
}