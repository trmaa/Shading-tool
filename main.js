class Main{
	static canvas = new Canvas(128,72);

	static main(){
	}
	static update(){
		(Main.canvas.pixels!=Main.canvas.lastPixels) ? Main.canvas.repaint() : 0;
	}
}


Main.main();
setInterval(Main.update,10);