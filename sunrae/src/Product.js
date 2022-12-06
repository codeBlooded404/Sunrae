import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

//accepting {props} deconstructs and you get access to the properties of the component
function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  //  console.log("Cart: ", cart);
  const addToCart = () => {
    //send item to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <span>$</span>
          <small>{price}</small>
        </p>
      </div>
      <img className="product__image" src={image} />
      <div className="product__rating">
        {/* array of stars to fill in number of stars; https://stackoverflow.com/questions/64774508/can-anyone-expalin-this-code-in-javascript */}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
