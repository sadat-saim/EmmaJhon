import React, { useState } from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart/Cart";
import "./Shop.css";

const Order = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const handleAddToCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };
  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((c) => c.id !== product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(newCart, product);
  };
  return (
    <div className="order-container">
      <div className="cart-container">
        <Cart
          cartItems={cart}
          handleAddToCart={handleAddToCart}
          orderPage
        ></Cart>
      </div>
      <div className="cards-container">
        {cart.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
            isOrderPage
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Order;
