# Vegan Recipes

Vegan recipes is an application where users can view/edit and rate different recipes.

# New Features!

  - Like / Dislike recipes !
  -  View and Edit recipes !
  -  Vegan recipes is now Responsive.


Vegan Recipes breaks down into a frontend and a backend project.
The backend application is a REST API using MongoDB, the frontend is a webapplication using react.js and offering the UI for browsing recipes.

The REST API is implemented with the MVC architecture paradigm, the controller (recipe.controller.js) holds the funtions which offer the CRUD operations on the MongoDB. The model (recipe.model.js) defines the schema of the recipe and the view (recipe.routes.js) defines the endpoints which are offered by the REST API. Once starte the poject runs on port 3000, this cann be changed in the server.js file (line 35). The URL to the MongoDB can be find in the config folder.

The webapplication consists of a router (which is responsible for loading different components) and the navigation bar (which is responsible for navigation within the app). 
The home page which is the entrypoint just contains the welcome text and the contact via e-mail. 
The top5recipe and recipe page, are containing the recipyContainer component. Main tasks of the recipyContainer is fetching of the recipes from the backend and mapping the fetched jsons to the recipe component. Furthermore the recipyContainer offers a form to add a new recipes. 


### Tech

Vegan Recipes uses a number of open source projects to work properly:

* [ReactJS] - as javascript libary
* [react-materialize] - for fancy UI components
* [node.js] - evented I/O for the backend
* [Express] - as http server
* [npm] - for building and loading dependencies
* [mongoose] - to interact with MongoDB
* [axios] - promise based http client for calling the REST API



### Installation

Vegan Recipes requires node.js, npm and mongoDB.

Install the dependencies in frontend and backend folder.

```sh
$ cd frontend
$ npm install
```
```sh
$ cd backend
$ npm install
```

And than run the applications:

Backend
```sh
$ mongod
$ node server.js
```

Frontend
```sh
$ npm start
```


### Todos

 - Write tests
 - Add security concept



   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [ReactJS]: <https://reactjs.org/>
   [npm]: <https://www.npmjs.com/>
   [mongoose]: <http://mongoosejs.com/>
   [axios]: <https://github.com/axios/axios>
   [react-materialize]: <https://react-materialize.github.io/#/>
