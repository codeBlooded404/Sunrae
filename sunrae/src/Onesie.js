import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Onesie() {
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

        <div className="home__row">
          {/*products */}
          <Product
            id="4"
            title="American Bull"
            price={14.99}
            image="../images/americabullonesie.jpg"
            rating={1}
          />
          {/*products */}
          <Product
            id="5"
            title="Main Squeeze"
            price={14.99}
            image="../images/mamasmainsqueezeonsie.jpg"
            rating={5}
          />
          {/*products */}
          <Product
            id="6"
            title="Gone Fishin'"
            price={14.99}
            image="../images/fishingshirt.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          {/*products */}
          <Product
            id="4"
            title="Mama/Mini"
            price={24.99}
            image="../images/mamaminishirts.jpg"
            rating={4}
          />
          {/*products */}
          <Product
            id="5"
            title="American Hippie"
            price={14.99}
            image="../images/americanhippieshirts.jpg"
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

export default Onesie;
