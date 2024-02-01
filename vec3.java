public class vec3{
	public double x, y, z;

	public vec3(double x, double y, double z){
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public double modul(){
		return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
	}

	public double dot(vec3 v){
		return this.x*v.x+this.y*v.y+this.z*v.z;
	}

	public vec3 add(vec3 v) {
	    return new vec3(this.x + v.x, this.y + v.y, this.z + v.z);
	}

	public vec3 product(vec3 v) {
	    return new vec3(this.x * v.x, this.y * v.y, this.z * v.z);
	}
}