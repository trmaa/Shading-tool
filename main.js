class Main{
	static main(){
	}
	static update(){
		(Canvas.pixels!=Canvas.lastPixels) ? Canvas.repaint() : Canvas.repaint();
		//Camara.position.z -= 10;
		console.log(Camara.position.z)
	}
}

Main.main();
setInterval(Main.update,10);
