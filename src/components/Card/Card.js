import React from "react";
import "./Card.css";

const Card = ({
  handleAddToCart,
  handleRemoveFromCart,
  product,
  isOrderPage,
}) => {
  const { price, name, img, seller } = product;
  return (
    <div className="card-container" style={img ? {} : { display: "none" }}>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card-txt">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <div className="card-info">
          <p>Manufacturer: {seller}</p>
          <p>Rating: 3</p>
        </div>
        <button
          className="card-btn"
          onClick={() => {
            isOrderPage
              ? handleRemoveFromCart(product)
              : handleAddToCart(product);
          }}
        >
          {isOrderPage ? "Remove from Cart" : " Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
