import javax.swing.*;
import java.awt.*;

public class Camara{
	public vec3 position = new vec3(0,0,-600);
	public vec2 angle = new vec2(1,-0.5);
	public Ray[] ray = new Ray[Main.canvas.pixel.length];
	public Controler controls = new Controler();

	public Color castRays(Pixel pixel){
		int id = (int) (pixel.id.x+pixel.id.y*Main.canvas.pWidth);

		this.ray[id] = new Ray(
			this.position,
			new vec3(
				(pixel.id.x-Main.canvas.pWidth/2)*Math.cos(this.angle.y),
				(pixel.id.y-Main.canvas.pHeight/2)*Math.sin(this.angle.x),
				Math.sin(this.angle.y)
			)
		);

		Sphere bola = new Sphere(new vec3(0,0,-10),5); //-10, 10

		return bola.colide(this.ray[id])?new Color(0xffffff):new Color((int)(255*pixel.id.y/108),(int)(255*pixel.id.x/192),100);
	}

	public static double distance(vec3 point) {
        return Math.sqrt(
            Math.pow(point.x - Main.camara.position.x, 2) +
            Math.pow(point.y - Main.camara.position.y, 2) +
            Math.pow(point.z - Main.camara.position.z, 2)
        );
    }

    public static vec3 translete(vec3 point) {
        // para angulo y (x,z)
        double a = Math.atan2(point.x - Main.camara.position.x, point.z - Main.camara.position.z);
        double b = Math.PI-a-Math.PI/2;
        double c = Main.camara.angle.y - Math.PI/2 - b;

        double h = (point.z - Main.camara.position.z) / Math.cos(a);

        // para angulo x (y)
        double d = Math.atan2(h, point.y - Main.camara.position.y);
        double e = Math.PI-d-Math.PI/2;
        double f = Main.camara.angle.x - Math.PI/2 - e;

        double i = (point.y - Main.camara.position.y) / Math.cos(d);

        return new vec3(
                Math.cos(c) * h,
                Math.cos(f) * i,
                Math.sin(c) * h);
    }

    public static vec2 project(vec3 point) {
        vec3 p = Main.camara.translete(point);
        if (p.z <= 0)
            return new vec2(
                    p.x*(12800/Main.camara.distance(point)*0.1f),
                    p.y*(12800/Main.camara.distance(point)*0.1f));
        else
            return new vec2(1000, 1000);
    }

	public void move(){
		if(this.controls.wDown){
			this.position.x += Math.cos(this.angle.y);
			this.position.z += Math.sin(this.angle.y);
		} 
		if(this.controls.sDown){
			this.position.x -= Math.cos(this.angle.y);
			this.position.z -= Math.sin(this.angle.y);
		}
		if(this.controls.dDown){
			this.position.x -= Math.cos(this.angle.y+Math.PI/2);
			this.position.z -= Math.sin(this.angle.y+Math.PI/2);
		} 
		if(this.controls.aDown){
			this.position.x += Math.cos(this.angle.y+Math.PI/2);
			this.position.z += Math.sin(this.angle.y+Math.PI/2);
		}
		this.position.y += this.controls.eDown?1:0;
		this.position.y -= this.controls.qDown?1:0;

		this.angle.x += this.controls.uArrow?0.1:0;
		this.angle.x -= this.controls.dArrow?0.1:0;
		this.angle.y -= this.controls.rArrow?0.1:0;
		this.angle.y += this.controls.lArrow?0.1:0;
	}
}