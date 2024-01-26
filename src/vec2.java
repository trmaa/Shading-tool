public class vec2{
	public double x, y;

	public vec2(double x, double y){
		this.x = x;
		this.y = y;
	}

	public double modul(){
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}
}