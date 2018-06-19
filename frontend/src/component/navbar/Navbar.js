import React, { Component } from 'react';
import { Navbar ,NavItem } from 'react-materialize';
import "./Navbar.css"


class NavbarComponent extends Component {

  render() {
    return (
     <Navbar 
        className="nab"
        left
        fixed
        >
           <NavItem className="navItem" href='/'>Home</NavItem>
            <NavItem className="navItem" href='/recipes'>Recipes</NavItem>
            <NavItem className="navItem" href='/top5Recipes'>Top 5 Recipes</NavItem>
        </Navbar>
    );
  }
}

export default NavbarComponent;