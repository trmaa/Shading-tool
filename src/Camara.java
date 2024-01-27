public class Camara{
	public vec3 position = new vec3(0,0,0);
	public vec2 angle = new vec2(0,0);
	public Ray[] ray = new Ray[Main.canvas.pixel.length];
	public Controler controls = new Controler();

	public void initRays(){
		for(Pixel pixel : Main.canvas.pixel){
			this.ray[(int) (pixel.id.x+pixel.id.y*Main.canvas.pWidth)] = new Ray(
				this.position,
				new vec3(
					this.position.x+pixel.id.x*Math.cos(this.angle.y),
					this.position.y+pixel.id.y*Math.sin(this.angle.x),
					this.position.z+Math.sin(this.angle.y)
				)
			);
		}
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
			this.position.x += Math.cos(this.angle.y+Math.PI/2);
			this.position.z += Math.sin(this.angle.y+Math.PI/2);
		} 
		if(this.controls.aDown){
			this.position.x -= Math.cos(this.angle.y+Math.PI/2);
			this.position.z -= Math.sin(this.angle.y+Math.PI/2);
		}
		this.position.y += this.controls.eDown?1:0;
		this.position.y -= this.controls.qDown?1:0;

		this.angle.x += this.controls.uArrow?0.1:0;
		this.angle.x -= this.controls.dArrow?0.1:0;
		this.angle.y += this.controls.rArrow?0.1:0;
		this.angle.y -= this.controls.lArrow?0.1:0;
	}
}