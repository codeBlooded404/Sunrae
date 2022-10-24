//this contains the body code
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__background">
      <div className="home">
        <div className="home__container">
          {/* banner */}
          <img className="home__image" src={process.env.PUBLIC_URL+"images/banner1.jpg"} />

          <div className="home__row">
            {/*products */}
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
