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

class Pixel{
	id = new vec2(0,0);
	color = "#000";

	constructor(id,color){
		this.id = id;
		this.color = color;
	}
}