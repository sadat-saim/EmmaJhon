import React, { useState } from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart/Cart";
import "./Shop.css";

const Shop = (props) => {
  const { products } = props;
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    product ? setCart([...cart, product]) : setCart([]);
  };
  return (
    <div className="shop-container">
      <div className="cart-container">
        <Cart cartItems={cart} handleAddToCart={handleAddToCart}></Cart>
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
