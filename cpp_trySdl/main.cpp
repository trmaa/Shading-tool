#include <SDL.h>
#include <glm/glm.hpp>
#include <glm/gtc/random.hpp>
#include <iostream>
#include <vector>

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
            Main::loop();
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