class Main{
	static canvas = new Canvas(10,10);

	static main(){
		Main.canvas.repaint();
	}
	static update(){

	}
}


Main.main();
setInterval(Main.update(),10);