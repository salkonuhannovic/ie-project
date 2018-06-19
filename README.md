# Vegan Recipes

Vegan recipes is an application where users can view/edit and rate different recipes.

# New Features!

  - Like / Dislike recipes !
  -  View and Edit recipes !
  -  Vegan recipes is now Responsive.


Vegan Recipes breaks down into a frontend and a backend project.
The backend application is a REST API using MongoDB, the frontend is a webapplication using react.js and offering the UI for browsing recipes.


### Tech

Vegan Recipes uses a number of open source projects to work properly:

* [ReactJS] - as javascript libary
* [react-materialize] - for fancy UI components
* [node.js] - evented I/O for the backend
* [Express] - as http server
* [npm] - for building and loading dependencies
* [mongoose] - to interact with MongoDB
* [axios] - promise based http client



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
