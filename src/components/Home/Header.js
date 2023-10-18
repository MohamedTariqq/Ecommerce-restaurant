import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <button>Order Now</button>
            <button>Learn more</button>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>
    </header>
  );
};
export default Header;
