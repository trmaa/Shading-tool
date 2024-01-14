class Main{
	static main(){
	}
	static update(){
		(Canvas.pixels!=Canvas.lastPixels) ? Canvas.repaint() : Canvas.repaint();
		Camara.move();
	}
}

Main.main();
setInterval(Main.update,20);
