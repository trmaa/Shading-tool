struct Pixel {
    glm::vec2 id;
    glm::vec3 color;

    Pixel() : id(glm::vec2(0.0f)), color(glm::vec3(0.0f)) {}
    Pixel(glm::vec2 id, glm::vec3 color) : id(id), color(color) {}
};

struct Window {
    static SDL_Window* window;
    static SDL_Renderer* renderer;

    static int width;
    static int height;

    static int res;

    static std::vector<Pixel> pixels;

    static void init() {
	    SDL_Init(SDL_INIT_VIDEO);
	    Window::window = SDL_CreateWindow("renderer", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, Window::width, Window::height, SDL_WINDOW_SHOWN);
	    Window::renderer = SDL_CreateRenderer(Window::window, -1, SDL_RENDERER_ACCELERATED);

	    Window::res = 1000 / ((Window::width + Window::height) / 2);

	    Window::pixels.resize(Window::width * Window::height);

	    for (int y = 0; y < Window::height; y++) {
	        for (int x = 0; x < Window::width; x++) {
	            Window::pixels[x + Window::width * y] = Pixel(glm::vec2(x * Window::res, y * Window::res), glm::vec3(glm::linearRand(glm::vec2(0.0f), glm::vec2(255.0f)), 0));
	        }
	    }
	}

    static void cleanup() {
        SDL_DestroyRenderer(Window::renderer);
        SDL_DestroyWindow(Window::window);
        SDL_Quit();
    }

    static void repaint() {
	    SDL_SetRenderDrawColor(Window::renderer, 255, 255, 255, 255);
	    SDL_RenderClear(Window::renderer);

	    SDL_SetRenderDrawColor(Window::renderer, 0, 0, 255, 255);
	    SDL_Rect rect = {50, 50, 100, 100};
	    SDL_RenderFillRect(Window::renderer, &rect);

	    SDL_RenderPresent(Window::renderer);
	}
};

SDL_Window* Window::window = nullptr;
SDL_Renderer* Window::renderer = nullptr;
int Window::width = 1280;
int Window::height = 720;
int Window::res = 1;