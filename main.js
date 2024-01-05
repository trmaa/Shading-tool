class Main{
	static main(){
	}
	static update(){
		(Canvas.pixels!=Canvas.lastPixels) ? Canvas.repaint() : 0;
		//Camara.position.z += 0.1;
	}
}

Main.main();
setInterval(Main.update,10);
