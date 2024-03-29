import javax.swing.*;
import java.awt.*;

public class Canvas extends JPanel {
    public Pixel[] pixel;
    public int pWidth;
    public int pHeight;

    public Canvas(int w, int h) {
        this.pWidth = w;
        this.pHeight = h;

        this.pixel = new Pixel[w * h];

        for (int y = 0; y < h; y++) {
            for (int x = 0; x < w; x++) {
                this.pixel[x + y * w] = new Pixel(new vec2(x, y), new Color(255*y/h,255*x/w,100));
            }
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        double escalaX = (double) this.getWidth() / this.pWidth;
        double escalaY = (double) this.getHeight() / this.pHeight;

        for (Pixel p : this.pixel) {
            int x = (int) (p.id.x * escalaX);
            int y = (int) (p.id.y * escalaY);
            int ancho = (int) (1 * escalaX) + 1;
            int alto = (int) (1 * escalaY) + 1;

            p.color = Main.camara.castRays(p);

            Canvas.print(g, p.color, new vec2(x, y), new vec2(ancho, alto));
        }

        for(Ray ray : Main.camara.ray){
            Canvas.print(g, new Color(0xff0000), Main.camara.project(ray.direction), new vec2((12800/Main.camara.distance(ray.direction)*0.1f),(12800/Main.camara.distance(ray.direction)*0.1f)));
        }
        //System.out.println("COORDS: "+  Main.camara.project(Main.camara.ray[0].direction).x);

        Canvas.print(g, new Color(0x00ffff), Main.camara.project(new vec3(0,0,-10)), new vec2(20,20));
    }

    private static void print(Graphics g, Color col, vec2 pos, vec2 scale) {
        g.setColor(col);
        g.fillRect((int) pos.x, (int) pos.y, (int) scale.x, (int) scale.y);
    }
}