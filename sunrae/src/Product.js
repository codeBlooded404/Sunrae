import React from "react";
import "./Product.css";

//accepting {props} deconstructs and you get access to the properties of the component
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <span>$</span>
          <strong>{price}</strong>
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
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
