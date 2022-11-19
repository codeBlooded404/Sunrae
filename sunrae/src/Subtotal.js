//https://www.folkstalk.com/tech/use-history-react-router-v6-app-with-code-examples/
//https://reactrouter.com/en/main/hooks/use-navigate
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  //lets us use the browser history
  const navigate = useNavigate();
  const [{ cart }] = useStateValue();

  const handleClick = () => {
    navigate("/payment");
  };

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

      <button onClick={handleClick}>Go to Checkout </button>
    </div>
  );
}

export default Subtotal;
