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
                this.pixel[x + y * w] = new Pixel(new vec2(x, y), new Color((int) (255*x/w), (int) (255*y/h), 0));
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

            Canvas.print(g, p.color, new vec2(x, y), new vec2(ancho, alto));
        }
    }

    private static void print(Graphics g, Color col, vec2 pos, vec2 scale) {
        g.setColor(col);
        g.fillRect((int) pos.x, (int) pos.y, (int) scale.x, (int) scale.y);
    }
}