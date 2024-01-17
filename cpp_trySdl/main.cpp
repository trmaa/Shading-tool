#include <SDL.h>
#include "window.hpp"

struct Main{
    static void main(){
        Window::init();

        bool quit = false;
        SDL_Event e;
        while (!quit) {
            while (SDL_PollEvent(&e) != 0) {
                if (e.type == SDL_QUIT) {
                    quit = true;
                }
            }
            loop();
        }

        Window::cleanup();
    }
    static void loop(){
        Window::repaint();
    }
};



int main() {
    Main::main();
    return 0;
}