#include <SDL.h>
#include <glm/glm.hpp>
#include <glm/gtc/random.hpp>
#include <vector>

struct Pixel {
    glm::vec2 id;
    glm::vec3 color;
};

struct Window {
    static SDL_Window* window;
    static SDL_Renderer* renderer;

    static int width;
    static int height;

    static std::vector<Pixel> pixels; 

    static void init();
    static void cleanup();
    static void repaint();
};