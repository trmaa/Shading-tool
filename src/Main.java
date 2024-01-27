import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static Canvas canvas = new Canvas(192, 108);
    public static Window window = new Window("RayTracer", 1280, 720);
    public static Camara camara = new Camara();

    public static void main(String[] args) {
        System.out.println("¡Hola! :)");

        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                Main.update();
            }
        }, 0, 16);
    }

    public static void update(){
    	Main.camara.move();

        Main.canvas.repaint();

        System.out.println("angulos: " + Main.camara.angle.x +" - "+ Main.camara.angle.y);
        System.out.println("posicion: " + Main.camara.position.x +" - "+ Main.camara.position.z);
    }
}
