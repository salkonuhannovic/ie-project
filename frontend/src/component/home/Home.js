import React, { Component } from 'react';
import "./Home.css";


class Home extends Component {

  render() {
    return (
        
       <div className="container home">
            <header id='header'>
             <h1 class='mainheader'>Jamacain Vegan Lighthouse</h1>
             <h2 class='subheader'>A classic pastry turned vegan</h2>
            </header>
            <div className="text">
            Hello, 

we are a team of four young, innovative students with a passion for delicious, cruelty-free foods.

We created this blog with the intention of providing a familiar space for like-minded individuals.

The <a href="recipes">recipes</a> you'll find on this website range from veganised meals you know from home to innovative creations. Indulgent to healthy and rich in nutrients. Everything plantbased and cruelty-free. 

If you have any questions, don't hesitate to <a href="mailto:office@jamacainveganlighthouse.at?subject=Recipes"> contact</a> us (or visit our Instagram page). 

  
            </div>
        </div>
    );
  }
}

export default Home;