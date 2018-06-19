import React, { Component } from 'react';
import Row from 'react-materialize/lib/Row';
import Recipe from '../recipe/Recipe';
import axios from 'axios';
import RecipeModal from '../recipeModal/RecipeModal'

class RecipeContainer extends Component {
  constructor(props){
    super();
    this.state ={
      recipes : []
    }
  }

  componentDidMount(){
    axios.get(this.props.endpoint).then((recipes)=>{
      this.setState((prevState)=>({recipes :recipes.data }))
    })
  }
  //Picture
  //title
  //author
  //likes
  renderRecipe(recipe){
    console.log(recipe.totalLikes)
    const id = recipe._id;
    const title = recipe.title;
    const thumbnail = recipe.thumbnail;
    const description = recipe.description;
    const author = recipe.author;
    const instructions = recipe.instructions;
    const ingredients = recipe.ingredients;
    const totalLikes = recipe.totalLikes;
    const likes = recipe.likes;
    const dislikes = recipe.dislikes;
    
     return <Recipe 
              id={id}
              title={title} 
              thumbnail ={thumbnail}
              description = {description}
              author ={author}
              ingredients={ingredients}
              instructions = {instructions}
              totalLikes = {totalLikes}
              likes={likes}
              dislikes={dislikes}

              />
  }

  render() {
    return (
      <div>
        <RecipeModal />
        <Row>
          {this.state.recipes.map(this.renderRecipe)}
        </Row>
      </div>
    );
  }
}

export default RecipeContainer;