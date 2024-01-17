#include <SDL.h>

struct Window {
    static SDL_Window* window;
    static SDL_Renderer* renderer;

    static void init() {
        SDL_Init(SDL_INIT_VIDEO);
        Window::window = SDL_CreateWindow("renderer", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 1280, 720, SDL_WINDOW_SHOWN);
        Window::renderer = SDL_CreateRenderer(Window::window, -1, SDL_RENDERER_ACCELERATED);
    }

    static void cleanup() {
        SDL_DestroyRenderer(Window::renderer);
        SDL_DestroyWindow(Window::window);
        SDL_Quit();
    }
};

SDL_Window* Window::window = nullptr;
SDL_Renderer* Window::renderer = nullptr;

void render() {
    SDL_SetRenderDrawColor(Window::renderer, 255, 255, 255, 255);
    SDL_RenderClear(Window::renderer);

    SDL_SetRenderDrawColor(Window::renderer, 0, 0, 255, 255);
    SDL_Rect rect = {50, 50, 100, 100};
    SDL_RenderFillRect(Window::renderer, &rect);

    SDL_RenderPresent(Window::renderer);
}

int main() {
    Window::init();

    bool quit = false;
    SDL_Event e;

    while (!quit) {
        while (SDL_PollEvent(&e) != 0) {
            if (e.type == SDL_QUIT) {
                quit = true;
            }
        }
        render();
    }

    Window::cleanup();

    return 0;
}