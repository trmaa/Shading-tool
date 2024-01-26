import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class Controler implements KeyListener {
    public boolean wDown = false;
    public boolean sDown = false;
    public boolean aDown = false;
    public boolean dDown = false;
    public boolean qDown = false;
    public boolean eDown = false;

    public boolean uArrow = false;
    public boolean dArrow = false;
    public boolean lArrow = false;
    public boolean rArrow = false;

    public Controler() {
        initializeEventListeners();
    }

    private void initializeEventListeners() {
        Main.window.addKeyListener(this);
    }

    @Override
    public void keyPressed(KeyEvent e) {
        this.wDown = e.getKeyCode() == KeyEvent.VK_W;
        this.sDown = e.getKeyCode() == KeyEvent.VK_S;
        this.aDown = e.getKeyCode() == KeyEvent.VK_A;
        this.dDown = e.getKeyCode() == KeyEvent.VK_D;
        this.qDown = e.getKeyCode() == KeyEvent.VK_Q;
        this.eDown = e.getKeyCode() == KeyEvent.VK_E;

        this.uArrow = e.getKeyCode() == KeyEvent.VK_UP;
        this.dArrow = e.getKeyCode() == KeyEvent.VK_DOWN;
        this.lArrow = e.getKeyCode() == KeyEvent.VK_LEFT;
        this.rArrow = e.getKeyCode() == KeyEvent.VK_RIGHT;
    }

    @Override
    public void keyReleased(KeyEvent e) {
        this.wDown = e.getKeyCode() == KeyEvent.VK_W ? false : wDown;
        this.sDown = e.getKeyCode() == KeyEvent.VK_S ? false : sDown;
        this.aDown = e.getKeyCode() == KeyEvent.VK_A ? false : aDown;
        this.dDown = e.getKeyCode() == KeyEvent.VK_D ? false : dDown;
        this.qDown = e.getKeyCode() == KeyEvent.VK_Q ? false : qDown;
        this.eDown = e.getKeyCode() == KeyEvent.VK_E ? false : eDown;

        this.uArrow = e.getKeyCode() == KeyEvent.VK_UP ? false : uArrow;
        this.dArrow = e.getKeyCode() == KeyEvent.VK_DOWN ? false : dArrow;
        this.lArrow = e.getKeyCode() == KeyEvent.VK_LEFT ? false : lArrow;
        this.rArrow = e.getKeyCode() == KeyEvent.VK_RIGHT ? false : rArrow;
    }

    @Override
    public void keyTyped(KeyEvent e) {
    }
}