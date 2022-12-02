import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function AdultTshirt() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

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
          <Product
            id="1"
            title="The Bad Mom&#39;s Club"
            price={19.99}
            image="../images/badmamaclubshirt.jpg"
            rating={5}
          />

          <Product
            id="2"
            title="Bengal&#39;s Who Dey"
            price={19.99}
            image="../images/whodey.jpg"
            rating={3}
          />

          <Product
            id="3"
            title="Cheer Mom Life"
            price={19.99}
            image="../images/cheermomlife.jpg"
            rating={2}
          />
        </div>

        <div>
          <button onClick={backToHome}>Back to Home</button>
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="American Hippie"
            price={19.99}
            image="../images/americanhippieshirts.jpg"
            rating={4}
          />

          <Product
            id="2"
            title="American Honey"
            price={19.99}
            image="../images/americanhoneyshirts.jpg"
            rating={2}
          />

          <Product
            id="3"
            title="American Pride"
            price={39.99}
            image="../images/americanprideshirts.jpg"
            rating={3}
          />
        </div>

        <div>
          <button onClick={backToHome}>Back to Home</button>
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="American Legion"
            price={19.99}
            image="../images/americanlegion.jpg"
            rating={5}
          />

          <Product
            id="3"
            title="Mama"
            price={15.99}
            image="../images/mamashirt.jpg"
            rating={2}
          />

          <Product
            id="2"
            title="American Legion (2)"
            price={19.99}
            image="../images/americanlegion2.jpg"
            rating={3}
          />
        </div>

        <div>
          <button onClick={backToHome}>Back to Home</button>
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="Mama and Mini"
            price={32.99}
            image="../images/mamaminishirts.jpg"
            rating={5}
          />

          <Product
            id="3"
            title="Mama Vibes"
            price={15.99}
            image="../images/mamavibesshirt.jpg"
            rating={3}
          />
        </div>
      </div>

      <div className="home__row"></div>
    </div>
  );
}

export default AdultTshirt;
