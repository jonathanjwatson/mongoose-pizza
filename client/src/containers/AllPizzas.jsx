import React, { Component } from "react";
import axios from "axios";

import Pizza from "../components/AllPizzas/Pizza";
import Ingredient from "../components/AllPizzas/Ingredient";

class AllPizzas extends Component {
  state = {
    pizzas: [],
  };

  componentDidMount() {
    // API CALL TO GET ALL PIZZAS
    this.getPizzas();
  }
  getPizzas = () => {
    axios
      .get("/api/pizzas")
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          pizzas: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>All Pizzas</h1>
            <div className="row">
              {this.state.pizzas.map((pizza) => (
                <div key={pizza._id}>
                  <Pizza {...pizza} />
                  {/* Separated out to AllPizzas/Pizza component.
                  <h3>
                    {pizza.name} - {pizza.price}
                  </h3> */}
                  {pizza.ingredients.map((ingredient, index) => (
                    <Ingredient key={index} {...ingredient} />
                    // Separated out to AllPizzas/Ingredient component
                    // <p key={index}>
                    //   {ingredient.name}
                    //   <span> </span>
                    //   {ingredient.isVegetarian && (
                    //     <FontAwesomeIcon icon={faLeaf} />
                    //   )}
                    // </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllPizzas;
