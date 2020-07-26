import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Ingredient = ({ name, isVegetarian }) => {
  return (
    <p>
      {name}
      <span> </span>
      {isVegetarian && <FontAwesomeIcon icon={faLeaf} />}
    </p>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
};

export default Ingredient;
