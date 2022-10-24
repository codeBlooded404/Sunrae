//contains the products info
import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title of product goes here</p>
        <p className="product__price">
          <strong>$19.99</strong>
        </p>
      </div>
      <img className="product__image" src={process.env.PUBLIC_URL+"images/placeholder.png"} />
      <div className="product__rating">
        <p>&#11088;</p>
        <p>&#11088;</p>
        <p>&#11088;</p>
      </div>
      <button>Purchase Item</button>
    </div>
  );
}

export default Product;