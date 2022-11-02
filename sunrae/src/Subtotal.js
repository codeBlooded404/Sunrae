import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";


function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Your subtotal for {cart.length} items:</p>
            <p>{`${value}`} </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandsSeparater={true}
        prefix={"$"}
      />

      <button>Go to Checkout </button>
    </div>
  );
}

export default Subtotal;
