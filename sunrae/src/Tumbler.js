import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Tumbler() {
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

        <div className="home__row">
          <Product
            id="7"
            title="Tumbler: Hearts"
            price={29.99}
            image="../images/heartdrink.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="Tumbler: Mama's Coffee"
            price={29.99}
            image="../images/mamacoffeedrink.jpg"
            rating={3}
          />
          <Product
            id="9"
            title="Tumbler: Smile"
            price={29.99}
            image="../images/smiledrink.jpg"
            rating={5}
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

export default Tumbler;
