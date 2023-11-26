# This is the front end for the java-todo-app

[java-todo-app can be found here](https://github.com/ilyaflaks/java-todo-app)
This is the React front end part of the full stack app. To run the app

1. clone this repo to your machine
2. clone java-todo-app to your machine
3. install Eclipse and Docker Desktop if you don't have it yet
4. In Eclipe, go to the top of the screen where it says File -> Import -> Existing Maven Projects -> Browse to where you cloned the repo to -> Click Finish
5. From the command line run the following command:

**docker run --detach --env MYSQL_ROOT_PASSWORD=dummypassword --env MYSQL_USER=todos-user --env MYSQL_PASSWORD=dummytodos --env MYSQL_DATABASE=todos --name mysql --publish 3306:3306 mysql:8-oracle**

If you get an error, you probably have some other process on port 3306. Kill it and try again.

6. In Eclipse, open **RestfulWebServicesApplication.java** file of the java-todo-app, right click on the code, select Run As -> 1 Java Application
   It should sayd "Application runing on port 8080" on the Eclipse console

7. In the command line, **cd** to the folder where you cloned this repo. Make sure the folder you are in is the one with the **package.json** file. Run the command **"npm install"**. Wait for the node modules to finish installing. Then run the command **"npm start"**

8. Go to [http://localhost:3000](http://localhost:3000) and start playing around with the Todo app.

9. The username and password are hardcoded for now, use the combination "in28minutes" and "dummy" respectively

# Features

- The backend is created with Spring Boot 3.2.0, Java 17 and Maven
- The backend is using a MySQL database that is running on a Docker Container
- Front end: JWT Authentication configured with Spring Security
- Front end: JWT Authentication added to every HTTP request with Axios interceptors
- Single Page React application
- Bootstrap visual styles

# Sources

This project is a part of [Master Spring Boot 3 & Spring Framework 6 with Java](https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners) from **in28minutes**. All the credit goes to the in28minutes team.
