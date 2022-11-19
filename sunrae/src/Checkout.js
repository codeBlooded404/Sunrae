import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__leftSide">
      {/* <img
          className="checkout__banner"
          src={process.env.PUBLIC_URL + "images/banner1.jpg"}
        /> */}
        <div>
          {/* <h2 className="checkout__title">Your shopping cart location</h2> */}
          {/* CartItem */}
          {cart.map((item) => (
              <CheckoutItem
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
              />
            ))}
        </div>
      </div>

      <div className="checkout__rightSide">
       <Subtotal/>
        {/* <h2 className="checkout__subtotal">Subtotal Location</h2> */}
        </div>
        
    </div>
  );
}

export default Checkout;
