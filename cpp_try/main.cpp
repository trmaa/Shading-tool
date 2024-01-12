#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <iostream>

// Vertex Shader
const char* vertexShaderSource = R"(
    #version 330 core
    layout(location = 0) in vec3 aPos;
    void main() {
        gl_Position = vec4(aPos, 1.0);
    }
)";

// Fragment Shader
const char* fragmentShaderSource = R"(
    #version 330 core
    out vec4 FragColor;
    void main() {
        FragColor = vec4(1.0, 0.5, 0.2, 1.0); // Color naranja
    }
)";

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

    // Imprime la versión de OpenGL
    const GLubyte* version = glGetString(GL_VERSION);
    printf("Versión de OpenGL: %s\n", version);

    // Vertex Shader
    unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);
    glCompileShader(vertexShader);

    // Verifica errores de compilación del Vertex Shader
    int success;
    char infoLog[512];
    glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);
    if (!success) {
        glGetShaderInfoLog(vertexShader, 512, nullptr, infoLog);
        std::cerr << "Error al compilar el Vertex Shader:\n" << infoLog << std::endl;
    }

    // Fragment Shader
    unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);
    glCompileShader(fragmentShader);

    // Verifica errores de compilación del Fragment Shader
    glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);
    if (!success) {
        glGetShaderInfoLog(fragmentShader, 512, nullptr, infoLog);
        std::cerr << "Error al compilar el Fragment Shader:\n" << infoLog << std::endl;
    }

    // Vincula shaders a un programa
    unsigned int shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    // Verifica errores de enlace del programa de shaders
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
    if (!success) {
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);
        std::cerr << "Error al enlazar el programa de shaders:\n" << infoLog << std::endl;
    }

    // Borra memoria de shaders (ya no son necesarios después de vincularlos)
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Bucle principal
    while (!glfwWindowShouldClose(window)) {
        // Procesa eventos
        glfwPollEvents();

        // Renderiza aquí

        // Usa el programa de shaders
        glUseProgram(shaderProgram);

        // Intercambia los buffers de la ventana
        glfwSwapBuffers(window);
    }

    // Termina GLFW
    glfwTerminate();

    return 0;
}