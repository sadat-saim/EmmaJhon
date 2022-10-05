import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { handleAddToCart, cartItems, orderPage } = props;
  const price = cartItems?.reduce((acc, cv) => parseFloat(cv.price) + acc, 0);
  const shippingCharge = cartItems?.length ? 5 : 0;
  const tax = Math.ceil(price * 0.01);

  return (
    <div className="cart">
      <h2 className="cart-title">Order Summary</h2>
      <p>Selected items: {cartItems?.length}</p>
      <p>Total price: ${price}</p>
      <p>Total shipping charge: ${shippingCharge}</p>
      <p>Tax: ${tax}</p>
      <h2 className="cart-title txt-l">
        Grand Total: ${price + shippingCharge + tax}
      </h2>
      <button className="btn-danger" onClick={() => handleAddToCart()}>
        Clear cart
      </button>
      <Link className="btn" to={orderPage ? "/shop" : "/order"}>
        {orderPage ? "Back To Shop" : "Review Order"}
      </Link>
      <Link to="/review" className={orderPage ? "btn btn-success" : "d-none"}>
        Proceed
      </Link>
    </div>
  );
};

export default Cart;
