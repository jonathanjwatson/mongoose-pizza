import React from "react";
import PropTypes from "prop-types";

const Pizza = ({ name, price, size }) => {
  return (
    <h3>
      {size}" - {name} - {price}
    </h3>
  );
};

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Pizza;
