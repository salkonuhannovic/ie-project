import React, { Component } from 'react';
import { Modal, Row } from 'react-materialize';

import './RecipeDetails.css';
import Icon from 'react-materialize/lib/Icon';


class RecipeDetails extends Component {

    constructor(props) {
        super(props);      
    }    
  render() {
    return (
        <Modal
        className="recipeDetails"
        header={this.props.title}
        trigger={<i className="waves-effect small material-icons">library_books</i>}>
        <Row>
        <img class=" materialboxed col m5 s12"  src={this.props.thumbnail}/>

        <div className="ingredients-box left  col s12 m6">
          <h5>Ingredients:</h5>
          <ul>
            {this.props.ingredients.map((ingredient)=>(<li>{ingredient.amount} {ingredient.name}</li>))}
          </ul>
        </div>
        
        <div  className="descriptionBox  col s12">
        
            <p >{this.props.instructions}</p>            
        </div>
        </Row>
      </Modal>
    );
  }
}

export default RecipeDetails;