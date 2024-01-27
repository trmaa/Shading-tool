public class Ray{
	public vec3 origin, direction;

	public Ray(vec3 origin, vec3 direction){
		this.origin = origin;
		this.direction = direction;
	}

	public vec3 f(double t){
		return new vec3(
			this.origin.x + this.direction.x * t,
			this.origin.y + this.direction.y * t,
			this.origin.z + this.direction.z * t
		); 
	}
}