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

	public double dot(){
		return this.x*this.x+this.y*this.y+this.z*this.z;
	}
}