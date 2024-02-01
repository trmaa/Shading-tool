public class vec2{
	public double x, y;

	public vec2(double x, double y){
		this.x = x;
		this.y = y;
	}

	public double modul(){
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}

	public double dot(vec2 v){
		return this.x*v.x+this.y*v.y;
	}

	public vec3 add(vec2 v) {
	    return new vec2(this.x + v.x, this.y + v.y);
	}

	public vec3 product(vec2 v) {
	    return new vec2(this.x * v.x, this.y * v.y);
	}
}