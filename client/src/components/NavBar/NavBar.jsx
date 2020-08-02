import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Mongoose Pizza
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/pizza/new">New Pizza</Link>
          </li>
          <li>
            <Link to="/ingredient/new">New Ingredient</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
