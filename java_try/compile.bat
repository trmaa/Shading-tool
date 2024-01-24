javac -d . *.java

jar cfe Universo.jar Main *.class

del *.class

java -jar Universo.jar