import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const handleAddToCart = (product) => {
    product ? setCart([...cart, product]) : setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
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
    </div>
  );
};

export default Shop;
