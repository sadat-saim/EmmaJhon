import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { handleAddToCart } = props;
  const price = props.cartItems.reduce(
    (acc, cv) => parseFloat(cv.price) + acc,
    0
  );
  const shippingCharge = props.cartItems.length ? 5 : 0;
  const tax = Math.ceil(price * 0.01);

  return (
    <div className="cart">
      <h2 className="cart-title">Order Summary</h2>
      <p>Selected items: {props.cartItems.length}</p>
      <p>Total price: ${price}</p>
      <p>Total shipping charge: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <h2 className="cart-title txt-l">
        Grand Total: ${price + shippingCharge + tax}
      </h2>
      <button className="btn-danger" onClick={() => handleAddToCart()}>
        Clear cart
      </button>
      <button>Review Order</button>
    </div>
  );
};

export default Cart;
