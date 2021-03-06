# cca-frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge:
Create a single page app that displays class information, and allows students to register for open classes and see which classes they have registered for. No database neccessary. 

## About:
This is the React frontend for the app. The backend for this app was built with Django and can be found on another
<a href='https://github.com/natalie-poulson/cca'>repo</a>


## Getting Started:
Visit the <a href='https://github.com/natalie-poulson/cca'>backend repo</a> to learn how to get started.
 
 
## Features:
* An API that displays a JSON file containing information on classes and serves as the endpoint for front-end server requests
* Displays a list of classes and basic information about that class
  * If there is space available in the class, there is a "REGISTER" button
    * When user clicks "REGISTER", the "Available" count goes down by one and that class information is displayed on the user's "Registered Classes" list
  * If a class is full, the class reads "CLOSED" and the user cannot register for it
* Responsive Design
* Sticky "Registered Classes" box, so user can see what classes they are registered for as they scoll through a list of classes



## Screenshots:
### On larger devices:
<img src="screenshots/1.png">


### On smaller devices:
<img src="screenshots/2.png">
