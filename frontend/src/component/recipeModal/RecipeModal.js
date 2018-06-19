import React, { Component } from 'react';
import { Modal, Button, Row, Input } from 'react-materialize';
import './RecipeModal.css'
import Icon from 'react-materialize/lib/Icon';
import axios from 'axios';

const initialState= {
    id:"newRecipy",
    author : "",
    totalLikes : 0,
    thumbnail: "",
    title: "",
    description: "",
    instructions: "",
    ingredients: [{ name: "", amount:""}]
  }
class RecipeModal extends Component {
;
    constructor(props) {
        super(props);
        this.state = this.props.edit ?this.props.recipy:initialState;
        this.mapIngredients = this.mapIngredients.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
        this.postRecipy = this.postRecipy.bind(this);
        this.editRecipy = this.editRecipy.bind(this);
        this.cancel = this.cancel.bind(this);       
      }
    
      postRecipy(){
        const recipy = this.state;
        axios.post(`http://nuhanovic.at:3000/recipes/${this.state.id}`,recipy).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        window.jQuery("#"+this.state.id).modal('close')         
      }
      
      editRecipy(){
        const recipy = this.state;
        axios.put(`http://nuhanovic.at:3000/recipes/${this.state.id}`,recipy).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        window.jQuery("#"+this.state.id).modal('close')
      }

      cancel(){
       if(!this.props.edit) this.setState(initialState);  +
       window.jQuery("#"+this.state.id).modal('close')          
     }

      updateThumbnail(evt){
        this.setState({
            thumbnail: evt.target.value
          });  
      }
    
      updateAuthor(evt){
        this.setState({
            author: evt.target.value
          });  
      }
    
      updateDescription(evt){
        this.setState({
            description: evt.target.value
          });  
      }

      updateTitle(evt) {
        this.setState({
          title: evt.target.value
        });
      }
    
      updateInstructions(evt) {
        this.setState({
          instructions: evt.target.value
        });  
      } 
      
      addIngredients(){
        const  newIngredient = { name: "", amount:""};
        this.setState((prevState)=>({
            ingredients: [...prevState.ingredients, newIngredient]
        }));
      }

      removeIngreditens(index){
        const ingredients = this.state.ingredients;
        ingredients.splice(index, 1);
        this.setState({ ingredients: ingredients });
      }

      mapIngredients(ingredient, index){
          const name = ingredient.name;
          const amount = ingredient.amount;
          return (
          <div>
            <i className="waves-effect left deleteIngrediant Tiny material-icons col s1" onClick={(evt)=>{this.removeIngreditens(index)}} >clear</i>
          <Input 
            s={5} 
            placeholder={"Amount"}
            value={amount} 
            onChange={(evt) => this.updateInputIngrediantAmount(evt, index)}
          />
          <Input 
            s={5} 
            placeholder={"Ingredient"}
            value={name} 
            onChange={(evt) => this.updateInputIngrediantName(evt, index)}
          />
          </div>
          )
      }

      updateInputIngrediantName(evt, index){
        const newIngredient = this.state.ingredients.map((ingredients, sidx) => {
            if (index !== sidx) return ingredients;
            return { ...ingredients, name: evt.target.value };
          });
          this.setState({ ingredients: newIngredient });
      }

      updateInputIngrediantAmount(evt, index){
        const newIngredient = this.state.ingredients.map((ingredients, sidx) => {
            if (index !== sidx) return ingredients;
            return { ...ingredients, amount: evt.target.value };
          });
          this.setState({ ingredients: newIngredient });
      }
    
  render() {
    const send =this.props.edit? this.editRecipy :this.postRecipy;
    const trigger = this.props.edit?<Button className="waves-effect small material-icons" >edit</Button>:<Button floating className='addButton'large icon='add' >Modal</Button>;
    return (
        <Modal
        header='Add new recipy'
        id={this.state.id}
        trigger={
          trigger
          }
        actions={
          <div>

            <Button 
               
              waves="light" 
              flat 
              className="red-text"
                onClick={(this.cancel)}
            >
              Cancel<Icon left>close</Icon>
            </Button>

            <Button 
              waves="light" 
              flat 
              className="teal-text" 
              onClick={(evt) => {
                send();
              }}
            >
              Send<Icon left>send</Icon>
            </Button>

          </div>
        }
      >
        <Row>
          <Input value={this.state.author} s={6} placeholder={"Your name"} label="Authorname" 
          onChange={(evt) => this.updateAuthor(evt)}/>
          <Input value={this.state.thumbnail} s={8} placeholder={"Link to your Image"} label="Thumbnail"
           onChange={(evt) => this.updateThumbnail(evt)} />
          <img class="materialboxed col s4"  src={this.state.thumbnail}/>
          <Input  s={12} label="Recipy Title" placeholder={"Title"} value={this.state.title} 
            onChange={(evt) => this.updateTitle(evt)} />
          <Input value={this.state.description} s={12} placeholder={"Short description"} label="Description"
          onChange={(evt) => this.updateDescription(evt)} />
          

            

            <div className="col s12">
            <label>Ingrediants:</label>
                {this.state.ingredients.map(this.mapIngredients)}
                <Button  floating className=''large icon='add' onClick={this.addIngredients}></Button>
            </div>
                
                
          
          <Input 
            value={this.state.instructions} 
            onChange={(evt) => this.updateInstructions(evt)}
            type="textarea" 
            label="Preperation:" 
            placeholder={"Instructions"} 
            s={12} 
          />
        </Row>
      </Modal>
    );
  }
}

export default RecipeModal;