rm renderer.jar

javac -d . $(find ./src -name "*.java")

jar cfe renderer.jar Main -C . .

find ./ -name "*.class" -exec rm {} \;

java -jar renderer.jar