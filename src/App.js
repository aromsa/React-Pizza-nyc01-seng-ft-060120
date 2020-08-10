import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaURL = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzaArr: [],
    editPizza: {},
    topping:"",
    size:"",
    vegetarian: null
  }

  componentDidMount(){
    fetch(pizzaURL)
    .then(resp => resp.json())
    .then(data => this.setState({
      pizzaArr: data
    }))
  }

  editPizza = (pizza) => {
    this.setState({
      editPizza: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  editButton = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  setVegeterian = (boolean) => {
    if(boolean === true) {
      this.setState({ vegetarian: true })
    } else if (boolean === false) {
      this.setState({ vegetarian: false })
    }
  }


  updatePizza = () => {
    fetch(pizzaURL + `/${this.state.editPizza.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian
      })
    })
    .then(resp => resp.json())
    .then(pizza => this.renderNewPizza(pizza))
  }

  renderNewPizza = (pizza) => {
    let updatedPizza = this.state.pizzaArr.map(p => {
      if (p.id === pizza.id){
        return {...pizza, topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian}
      }else{
        return p
      }
    })  
    this.setState({
      pizzaArr: updatedPizza
    }) 
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm updatePizza={this.updatePizza} setVegetarian={this.setVegeterian} editButton={this.editButton} pizza={this.state.editPizza} topping={this.state.topping} 
        size={this.state.size} vegetarian={this.state.vegetarian}/>
        <PizzaList editPizza={this.editPizza} pizzaArr={this.state.pizzaArr} />
      </Fragment>
    );
  }
}

export default App;
