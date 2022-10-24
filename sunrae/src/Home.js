import React from "react";
import "./Home.css";
import Product from "./Product";

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
          <Product
            id="1"
            title="The Bad Mom&#39;s Club"
            price={19.99}
            image="../images/badmamaclubshirt.jpg"
            rating={5}
          />
          {/*products */}
          <Product
            id="2"
            title="Bengal&#39;s Who Dey"
            price={19.99}
            image="../images/whodey.jpg"
            rating={3}
          />
          {/*products */}
          <Product
            id="3"
            title="Cheer Mom Life"
            price={19.99}
            image="../images/cheermomlife.jpg"
            rating={2}
          />
        </div>

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
            id="7"
            title="Tumbler: Not in the Mood"
            price={29.99}
            image="../images/mooddrink.jpg"
            rating={4}
          />
          {/*products */}
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
          {/*products */}
          {/*products */}
        </div>
      </div>
    </div>
  );
}

export default Home;
