import React, { useState, useEffect } from "react";
import axios from "axios";

const NewPizza = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = () => {
    axios
      .get("/api/ingredients")
      .then((response) => {
        const checkboxIngredients = response.data.data.map((ingredient) => {
          ingredient.checked = false;
          return ingredient;
        });
        setIngredients(checkboxIngredients);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  const saveNewPizza = (event) => {
    event.preventDefault();
    const pizzaObject = {
      name: name,
      price: price,
      size: size,
      ingredients: ingredients
        .filter((ingredient) => ingredient.checked)
        .map((ingredient) => ingredient._id),
    };
    axios
      .post("/api/pizzas", pizzaObject)
      .then((response) => {
        console.log(response.data);
        if (!response.data.error) {
          setMessage(response.data.message);
          setName("");
          setPrice("");
          setSize("");
          getIngredients();
          props.getPizzas();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateIngredientsArray = (event, index) => {
    console.log("index", index);
    let newIngredientsArray = JSON.parse(JSON.stringify(ingredients));
    console.log(newIngredientsArray[index]);
    newIngredientsArray[index].checked = newIngredientsArray[index].checked
      ? !newIngredientsArray[index].checked
      : true;
    setIngredients(newIngredientsArray);
  };

  return (
    <>
      <div className="row">
        <div className="col s12">
          <p>{message}</p>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={saveNewPizza}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label htmlFor="name">Pizza Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="price"
                type="text"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <label htmlFor="name">Pizza Price</label>
            </div>
            {/* <div className="input-field col s6">
              <input
                id="size"
                type="text"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
              <label htmlFor="name">Pizza Size</label>
            </div> */}
            <div className="input-field col s6">
              <select
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                style={{ display: "block" }}
              >
                <option value="" defaultValue>
                  Choose your pizza size
                </option>
                <option value="10">10"</option>
                <option value="12">12"</option>
                <option value="15">15"</option>
              </select>
            </div>
          </div>
          <div className="row">
            {ingredients.map((ingredient, index) => (
              <p key={ingredient._id}>
                <label>
                  <input
                    type="checkbox"
                    checked={ingredient.checked}
                    onChange={(event) => {
                      updateIngredientsArray(event, index);
                    }}
                  />
                  <span>{ingredient.name}</span>
                </label>
              </p>
            ))}
          </div>
          <div className="row left-align">
            <button className="btn waves-effect waves-light" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPizza;
