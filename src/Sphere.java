public class Sphere{
	public vec3 center;
	public double radius;

	public Sphere(vec3 center, double radius){
		this.center = center;
		this.radius = radius;
	}

	/*public boolean colide(Ray ray){
		//vectors will allwais be in modul

		//rr = xx + yy + zz -> return 1;
		//rr > xx + yy + zz -> return 2;
		//rr < xx + yy + zz -> return 0;

		//rr = (P-C)^2
		//rr = ((o+td)-C)^2
		//0 = ttdd+2td(o-C)+(o-C)^2-rr

		//a = dd, b = 2d(o-C), c = (o-C)^2-rr

		//t = (sqrt(bb-4ac)-b)/(2a)

		double a = ray.direction.dot();
		double b = 2*ray.direction.dot()*(ray.origin.dot()-this.center.dot());
		double c = (ray.origin.dot()-this.center.dot())*(ray.origin.dot()-this.center.dot())-this.radius*this.radius;

		double[] t = {
			(Math.sqrt(b*b-4*a*c)-b)/(2*a),
			(-Math.sqrt(b*b-4*a*c)-b)/(2*a)
		};

		if(t[0]!=0||t[1]!=0)
			return true;
		else 
			return false;
	}*/
	public boolean colide(Ray ray) {
        vec3 oc = new vec3(
        	ray.origin.x - this.center.x,
        	ray.origin.y - this.center.y,
        	ray.origin.z - this.center.z
        );
        double a = ray.direction.modul();
        double b = 2.0 * oc.x*ray.direction.x+oc.y*ray.direction.y+oc.z*ray.direction.z;
        double c = oc.modul() - this.radius * this.radius;
        double discriminant = b * b - 4 * a * c;

        return discriminant > 0;
    }
}