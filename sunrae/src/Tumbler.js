import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Tumbler() {
  return (
    <div className="home">
      <div className="home__container">
        <Header/>
        {/* banner */}
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "images/banner1.jpg"}
        />

        <div className="home__row">
          <Product
            id="7"
            title="Tumbler: Not in the Mood"
            price={29.99}
            image="../images/mooddrink.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="Tumbler: Cold Brew"
            price={29.99}
            image="../images/coldbrewdrink.jpg"
            rating={3}
          />
          <Product
            id="9"
            title="Tumbler: Leopard print"
            price={29.99}
            image="../images/leoparddrink.jpg"
            rating={5}
          />
        </div>
      </div>

      <div className="home__row"></div>
    </div>
  );
}

export default Tumbler;
