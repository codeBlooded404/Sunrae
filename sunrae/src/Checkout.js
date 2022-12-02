import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [{ cart }] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <img
        className="checkout__banner"
        src={process.env.PUBLIC_URL + "images/banner1.jpg"}
      />

      <div className="checkout">
        <div className="checkout__leftSide">
          {/* <img
          className="checkout__banner"
          src={process.env.PUBLIC_URL + "images/banner1.jpg"}
        /> */}
          <div>
            {/* <h2 className="checkout__title">Your Great Picks From SunRae</h2> */}
            {/* CartItem */}
            {cart.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__rightSide">
          <Subtotal />
          <button onClick={handleClick}>Shop Some More?</button>
          {/* <h2 className="checkout__subtotal">Subtotal Location</h2> */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
