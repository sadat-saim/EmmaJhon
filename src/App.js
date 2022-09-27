import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./pages/Shop";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Shop products={products}></Shop>
    </div>
  );
}

export default App;
