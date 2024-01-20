#include "window.hpp"

SDL_Window* Window::window = nullptr;
SDL_Renderer* Window::renderer = nullptr;
int Window::width = 500;
int Window::height = 500;
std::vector<Pixel> Window::pixels;

void Window::init() {
    SDL_Init(SDL_INIT_VIDEO);
    Window::window = SDL_CreateWindow("renderer", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, Window::width, Window::height, SDL_WINDOW_SHOWN);
    Window::renderer = SDL_CreateRenderer(Window::window, -1, SDL_RENDERER_ACCELERATED);

    for (int y = 0; y < Window::height; y++) {
        for (int x = 0; x < Window::width; x++) {
            Pixel pixel;
            pixel.id = glm::vec2(x, y);
            pixel.color = glm::vec3(255*y/Window::height,255*x/Window::width,0);
            Window::pixels.push_back(pixel);
        }
    }
}

void Window::cleanup() {
    SDL_DestroyRenderer(Window::renderer);
    SDL_DestroyWindow(Window::window);
    SDL_Quit();
}

void Window::repaint() {
    SDL_SetRenderDrawColor(Window::renderer, 255, 255, 255, 255);
    SDL_RenderClear(Window::renderer);

    for (const auto& p : Window::pixels) {
        SDL_SetRenderDrawColor(Window::renderer, p.color.r, p.color.g, p.color.b, 255);
        SDL_Rect rect = { static_cast<int>(p.id.x), static_cast<int>(p.id.y), 1, 1 };
        SDL_RenderFillRect(Window::renderer, &rect);
    }

    SDL_RenderPresent(Window::renderer);
}