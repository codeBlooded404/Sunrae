import React from "react";
import "./Home.css";
import TumblerDirection from "./TumblerDirection";
import TshirtDirection from "./TshirtDirection";
// import Product from "./Product";
import OnesieDirection from "./OnesieDirection";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* banner */}
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + "images/banner1.jpg"}
        />

        <div className="home__row">

          <TshirtDirection
            title="Shirts"
            info="Available in S - XXL"
            image={process.env.PUBLIC_URL + "images/tshirtPlaceholder.jpg"}
          />

          <OnesieDirection
            title="Onesies/Toddler"
            info="Available in 0 - 12 months"
            image={process.env.PUBLIC_URL + "images/onesiePlaceholder.jpg"}
          />
          <TumblerDirection
            title="Tumblers"
            info="Available in 16oz"
            image={process.env.PUBLIC_URL + "images/tumblerPlaceholder.jpg"}
          />
        </div>

        <footer className="footer">
        <p>
          SunRae Designs - 2022 - All Rights Reserved
        </p>
      </footer>
      </div>
    </div>
  );
}

export default Home;
