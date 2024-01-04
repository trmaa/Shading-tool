class Main{
	static main(){
	}
	static update(){
		(Canvas.pixels!=Canvas.lastPixels) ? Canvas.repaint() : 0;
	}
}


Main.main();
setInterval(Main.update,10);