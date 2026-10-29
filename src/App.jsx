
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Products from "./component/Products";
import Product from "./component/Product";
import Home from "./component/Home";
import { NavLinks } from "./component/NavLinks";
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
    alert("Added to cart!");
  }

  return (
    <div>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        />
     <Route
  path="/:id"
  element={<Product products={products} />}
/>
        <Route
          path="/cart"
          element={<h2>Cart items: {cart.length}</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
