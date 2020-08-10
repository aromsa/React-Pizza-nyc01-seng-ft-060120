import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    let pizza = this.props.pizzaArr.map(pizza => <Pizza key={pizza.id} pizza={pizza} editPizza={this.props.editPizza} />)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          { pizza }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
