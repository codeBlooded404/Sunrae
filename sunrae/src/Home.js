import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
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
            id="3"
            title="Mama Vibes"
            price={15.99}
            image="../images/mamavibesshirt.jpg"
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
            id="3"
            title="Mama"
            price={15.99}
            image="../images/mamashirt.jpg"
            rating={2}
          />

          <Product
            id="2"
            title="Bengal&#39;s Who Dey"
            price={19.99}
            image="../images/whodey.jpg"
            rating={3}
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
            id="9"
            title="Tumbler: Smile"
            price={29.99}
            image="../images/smiledrink.jpg"
            rating={5}
          />
        </div>

        <footer className="footer">
          <p>SunRae Designs - 2022 - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
