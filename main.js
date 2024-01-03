class Main{
	static canvas = new Canvas(128,72);

	static main(){
		Main.canvas.repaint();
	}
	static update(){

	}
}


Main.main();
setInterval(Main.update(),10);