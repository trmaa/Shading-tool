class Main{
	static main(){
	}
	static update(){
		(Canvas.pixels!=Canvas.lastPixels) ? Canvas.repaint() : Canvas.repaint();
		Camara.move();
		console.log(Camara.position.z)
	}
}

Main.main();
setInterval(Main.update,10);
