import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import NavbarComponent from '../navbar/Navbar';
import RecipeContainer from '../recipyContainer/RecipeContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from '../home/Home';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
     
        <NavbarComponent/> 
        <Switch>
          <Route  path="/"   exact={true}   component={Home} />
          <Route path="/recipes" render={(props) => <RecipeContainer {...props} endpoint={"http://nuhanovic.at:3000/recipes"} />}  />
          <Route path="/top5Recipes"  render={(props) => <RecipeContainer {...props} endpoint={"http://nuhanovic.at:3000/recipes/top5"} />}/>
          </Switch>
     </div>
      </Router> 
    );
  }
}

export default App;
