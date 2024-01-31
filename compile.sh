javac -d . *.java

jar cfe renderer.jar Main *.class

rm *.class

java -jar renderer.jar

rm renderer.jar