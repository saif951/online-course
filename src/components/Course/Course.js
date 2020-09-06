import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Course.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Course = () => {
  const [products, setProducts] = useState(fakeData);
  const [cart, setCart] = useState([]);
  console.log(products);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="course-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Course;
