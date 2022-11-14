import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="container">
      <div className="payment">
        <div className="payment__container">
          <h2>
            Your Cart has: <Link to="/checkout">{cart?.length} item(s)</Link>
          </h2>

          {/* delivery address */}
          <div className="payment__addressSection">
            <div className="payment__title">
              <h3>Address to Deliver to</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 Main Street</p>
              <p>Seattle, Wa</p>
            </div>
          </div>

          {/* review items */}
          <div className="payment__reviewSection">
            <div className="payment__title">
              <h3>Review Cart and Delivery Address</h3>
            </div>
            <div className="payment__items">
              {/* for every item in cart, return the checkoutItem component  */}
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
            {/* payment section would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
