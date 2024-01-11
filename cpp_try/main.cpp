#include <GL/glew.h>
#include <GLFW/glfw3.h>

int main() {
    // Inicializa GLFW
    if (!glfwInit()) {
        return -1;
    }

    // Configura GLFW para usar OpenGL 3.3
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);

    // Crea una ventana
    GLFWwindow* window = glfwCreateWindow(800, 600, "Mi Escena OpenGL", nullptr, nullptr);
    if (!window) {
        glfwTerminate();
        return -1;
    }

    // Hace que el contexto de OpenGL sea el contexto actual de la ventana
    glfwMakeContextCurrent(window);

    // Inicializa GLEW
    if (glewInit() != GLEW_OK) {
        return -1;
    }

    // Bucle principal
    while (!glfwWindowShouldClose(window)) {
        // Procesa eventos
        glfwPollEvents();

        // Renderiza aquí

        // Intercambia los buffers de la ventana
        glfwSwapBuffers(window);
    }

    // Termina GLFW
    glfwTerminate();

    return 0;
}