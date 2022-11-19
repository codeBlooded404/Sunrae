import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";

function CheckoutItem({ id, title, image, price }) {
  const [dispatch] = useStateValue();

  const RemoveFromYourCart = () => {
    //remove from cart
    dispatch({
      type: "REMOVE_FROM_YOUR_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutItem">
      <img className="checkoutItem__image" src={image} alt="" />
      <div className="checkoutItem__info">
        <p className="checkoutItem__title">{title}</p>
        <p className="checkoutItem__price">
          <strong>${price}</strong>
        </p>

        <button onClick={RemoveFromYourCart}>Remove From Your Cart</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
