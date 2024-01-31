import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class Window extends JFrame{
    public Window(String titulo, int w, int h){
        this.setTitle(titulo);

        this.setSize(w, h);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        ImageIcon ico = new ImageIcon("foto.png");
        this.setIconImage(ico.getImage());

        this.getContentPane().add(Main.canvas);
        Main.canvas.setSize(w, h);
        
        this.setVisible(true);
    }
}