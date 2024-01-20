rm renderer.exe

g++ -o renderer.exe *.cpp $(pkg-config --cflags --libs sdl2)

./renderer.exe