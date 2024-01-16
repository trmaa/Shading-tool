g++ -c main.cpp
g++ main.o -o renderer.exe -lsfml-graphics -lsfml-window -lsfml-system

rm *.o

./renderer.exe