import javax.swing.*;
import java.awt.*;

public class Pixel {
    public Color color = new Color(0x000000);
    public vec2 id = new vec2(0, 0);

    public Pixel(vec2 id, Color col) {
        this.color = col;
        this.id = id;
    }
}