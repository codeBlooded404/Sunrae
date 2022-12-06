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
          className="tshirt__image"
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

        <div>
          <button className="back__btn" onClick={backToHome}>
            Click to See All Products
          </button>
        </div>

        <footer className="footer">
          <p>SunRae Designs - 2022 - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default AdultTshirt;
