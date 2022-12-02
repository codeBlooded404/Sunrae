import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Onesie() {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        {/* banner */}
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "images/banner1.jpg"}
        />

        <div className="home__row">
          {/*products */}
          <Product
            id="4"
            title="Stay Wild"
            price={14.99}
            image="../images/staywildonsie.jpg"
            rating={2}
          />
          {/*products */}
          <Product
            id="5"
            title="Wild Thang"
            price={14.99}
            image="../images/wildthangshirt.jpg"
            rating={3}
          />
          {/*products */}
          <Product
            id="6"
            title="Sweet as a Peach"
            price={14.99}
            image="../images/sweetasapeachonsie.jpg"
            rating={4}
          />
        </div>
      </div>

      <div className="home__row"></div>
    </div>
  );
}

export default Onesie;
