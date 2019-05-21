# demo-eStore
Demo simple eStore app using Grails 3.3.6 &amp; AngularJS profile.

# Features
This app demonstrate the usage of ng-* commands, here are the list of commands used to create 'product' module:
```
create-ng-module product
create-ng-domain demo.estore.product.product
create-ng-controller demo.estore.product.product
create-ng-directive demo.estore.product.card
```


# Running on Cloud9
Here are the steps you need to do in order to get grails up and running:
```
$> sudo apt-get update
$> sudo apt-get install default-jdk
$> javac -version
$> which javac
$> ll /usr/bin/javac 
$> echo 'export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64/' >> ~/.bashrc
$> echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
$> source ~/.bashrc
$> echo $JAVA_HOME
$> wget https://services.gradle.org/distributions/gradle-3.5-bin.zip
$> mv gradle-3.5-bin.zip ..
$> cd ..
$> unzip gradle-3.5-bin.zip 
$> rm gradle-3.5-bin.zip 
$> cd gradle-3.5/
$> echo 'export GRADLE_HOME=/home/ubuntu/gradle-3.5' >> ~/.bashrc
$> echo 'export GRAILS_GRADLE_HOME=$GRADLE_HOME' >> ~/.bashrc
$> echo 'export PATH=$GRAILS_GRADLE_HOME/bin:$PATH' >> ~/.bashrc
$> source ~/.bashrc
$> cd workspace/
$> ./grailsw compile
$> ./grailsw run-app
```
You also run the app using gradle's commands:
```
$> gradle bootRun
