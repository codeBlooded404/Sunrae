//https://stripe.com/docs/api/payment_intents
import React, { useState, useEffect } from "react";
import "./Payment.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import Sizing from "./Sizing";

//import { db } from "./firebase";

function Payment() {
  const [{ cart, user }] = useStateValue();
  const history = useNavigate();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [userSecret, setUserSecret] = useState(true);

  //payment hooks
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generates stripe secret - allows charging the customer
    const getUserSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expecting total currencies format so mult by 100
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setUserSecret(response.data.userSecret);
    };
    getUserSecret();
  }, [cart]);

  // console.log("User Secret: ", userSecret);
  // console.log("User: ", user);

  const handleSubmit = async (e) => {
    //stripe working
    e.preventDefault();
    //prevents user from clicking buy button more than once
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(userSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // dispatch({
        //   type: "EMPTY_CART",
        // });

        history("/orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    //stripe working
    //listen for changes and display errors of cc details
    //if the event is empty disable button
    setDisabled(e.empty);
    //if the event has an error show the error or show nothing
    setError(e.error ? e.error.message : "");
  };

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
              <h3>Delivery Address:</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              {/* <p>123 Main Street</p>
              <p>Seattle, Wa</p> */}
              <input type="text" placeholder="Street Address"></input>
              <br />
              <input type="text" placeholder="City State, Zip"></input>
              <br />
              <br />
              <input type="text" placeholder="Specify Tshirt sizes"></input>
              <br />
              <input type="text" placeholder="Specify Onesie/Toddler sizes"></input>
            </div>
          </div>

          {/* review items */}
          <div className="payment__reviewSection">
            <div className="payment__title">
              <h3>Review Cart:</h3>
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
          </div>

          {/* payment section would go here */}
          <div className="payment__paymentSection">
            <div className="payment__title">
              <h3>Payment:</h3>
            </div>
            <div className="payment__details">
              {/* Stripe magic will go */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  {/* <button disabled={processing || disabled || succeeded}>
                    <span>
                      {processing ? <p>Processing.....</p> : "Buy This Now"}
                    </span>
                  </button> */}
                </div>

                {/* if error show this div with error */}
                {error && <div>{error}</div>}
              </form>
              <button className="payment__btn">Confirm Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
