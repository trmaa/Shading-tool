g++ -o renderer.exe main.cpp $(pkg-config --cflags --libs sdl2)

./renderer.exe