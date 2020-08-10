import React from "react"

class Pizza extends React.Component {

  veggie = () => {
    let veggie = ""
    return this.props.pizza.vegetarian ? veggie = "Yes" : veggie = "No"
  }

  render(){
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.veggie()}</td>
        <td><button onClick={() => this.props.editPizza(this.props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
