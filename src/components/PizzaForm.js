import React from "react"

class PizzaForm extends React.Component {

  render(){
    return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={this.props.editButton} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                this.props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={this.props.editButton} name="size" value={this.props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">

            <input name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" 
            
            checked={this.props.vegetarian === true} 
            onChange={() => this.props.setVegetarian(true)}/>

            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input  name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" 

            checked={this.props.vegetarian === false} 
            onChange={() => this.props.setVegetarian(false)}/>
            
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.updatePizza}>Submit</button>
        </div>
      </div>
    )
  }
}

export default PizzaForm
