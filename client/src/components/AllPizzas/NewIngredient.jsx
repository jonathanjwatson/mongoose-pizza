import React, { useState } from "react";
import axios from "axios";

const NewIngredient = () => {
  const [name, setName] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [message, setMessage] = useState("");

  const saveNewIngredient = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      axios
        .post("/api/ingredients", { name, isVegetarian })
        .then((response) => {
          console.log(response.data);
          if (!response.data.error) {
            setName("");
            setIsVegetarian(false);
            setMessage(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage("Please enter a valid ingredient name.");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col s12">
          <p>{message}</p>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={saveNewIngredient}>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label htmlFor="name">Ingredient Name</label>
            </div>
            <div className="input-field col s4">
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={isVegetarian}
                    onChange={() => {
                      setIsVegetarian(!isVegetarian);
                    }}
                  />
                  <span>Is Vegetarian?</span>
                </label>
              </p>
            </div>
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

export default NewIngredient;
