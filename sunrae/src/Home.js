import React from "react";
import "./Home.css";
import TumblerDirection from "./TumblerDirection";
import TshirtDirection from "./TshirtDirection";
import Product from "./Product";
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
          {/*products */}

          <TshirtDirection
            title="Shirts"
            image={process.env.PUBLIC_URL + "images/tshirtPlaceholder.jpg"}
          />

          <OnesieDirection
            title="Onesie's"
            image={process.env.PUBLIC_URL + "images/onesiePlaceholder.jpg"}
          />
          <TumblerDirection
            title="Tumbler's"
            image={process.env.PUBLIC_URL + "images/tumblerPlaceholder.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
