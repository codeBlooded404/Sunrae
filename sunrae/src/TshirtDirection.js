import React from "react";
import { useNavigate } from "react-router-dom";

function HomeDirection({ title, image, info }) {
  const navigate = useNavigate();

  const seeAll = () => {
    navigate("/tshirt");
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>{info}</small>
      </div>
      <img className="product__image" src={image} />
      <button onClick={seeAll}>See All</button>
    </div>
  );
}

export default HomeDirection;
