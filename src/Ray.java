public class Ray{
	public vec3 origin;
	public vec3 direction;

	public vec3 f(double t){
		return new vec3(
			this.origin.x + this.direction.x * t,
			this.origin.y + this.direction.y * t,
			this.origin.z + this.direction.z * t
		); 
	}
}