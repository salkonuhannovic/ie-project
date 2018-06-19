import React, { Component } from 'react';
import { Card, CardTitle, Col  } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import './Recipe.css';

import RecipeDetails from "./RecipeDetails.js"
import RecipeModal from '../recipeModal/RecipeModal';
import axios from 'axios';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
          like: false,
          dislike: false,
          totalLikes : this.props.totalLikes
        };
        this.setStateToDislike = this.setStateToDislike.bind(this);
        this.setStateToLike = this.setStateToLike.bind(this);
    }    

  patchLike(){
    axios.patch(`http://nuhanovic.at:3000/recipes/${this.props.id}/like`).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  patchDislike(){
    axios.patch(`http://nuhanovic.at:3000/recipes/${this.props.id}/dislike`).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  setStateToLike() {
    if(!this.state.like){
      this.setState({
        like: true,
        dislike: false,
        totalLikes: this.state.totalLikes +1
      });
      this.patchLike();
      
    }else{
      this.setState({
        like: false,
        totalLikes: this.state.totalLikes -1
      });
     this.patchDislike();
    }
  }

  setStateToDislike() {
   if(!this.state.dislike){
    this.setState({
      like: false,
      dislike: true,
      totalLikes: this.state.totalLikes -1
    });
    this.patchDislike();    
   }else{
    this.setState({
      dislike: false,
      totalLikes: this.state.totalLikes +1
    });
    this.patchLike();
   }
  }

  
  render() {
     let Buttons = [ 
    ];
    return (
        <Col l={3} m={6} s={12}>
        <Card 
            header={<CardTitle image={this.props.thumbnail?this.props.thumbnail:"https://react-materialize.github.io/img/sample-1.jpg"}>
             <RecipeModal edit={true} recipy={this.props}/> 
            </CardTitle>}
            actions={<div className="box">
     
            <i key="thumbup" onClick={ this.setStateToDislike} className={`right waves-effect small material-icons like-icon ${this.state.dislike ? 'dislike':'neutral'}`}>thumb_down</i>
            <span key="totalLikes" className="right like-label White-text">
              {this.state.totalLikes}
            </span>
            <i key="thumbdown" onClick={this.setStateToLike} className={`right waves-effect small material-icons like-icon ${this.state.like ? 'like':'neutral'}`}>thumb_up</i>
            <RecipeDetails thumbnail={this.props.thumbnail  } title={this.props.title} instructions={this.props.instructions} ingredients={this.props.ingredients}/>
            </div>  }
            title={this.props.title}
            >
            <div className="description">{this.props.description?this.props.description:"no description"}
            </div>
          </Card>
      </Col>
      
    );
  }
}

export default Recipe;