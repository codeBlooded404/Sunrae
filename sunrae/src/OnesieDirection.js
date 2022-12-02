import React from "react";
import { useNavigate } from "react-router-dom";

function OnesieDirection({ title, image }) {
  const navigate = useNavigate();

  const seeAll = () => {
    navigate("/onesie");
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <img className="product__image" src={image} />
      <button onClick={seeAll}>Click to See All</button>
    </div>
  );
}

export default OnesieDirection;
