import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const total = cart.reduce((total, course) => total + course.price, 0);
  const discount = total * 0.2;
  const tax = total * 0.1;

  const getRoundFigure = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="cart">
      <div className="header">
        <h4>Enrolled Summary</h4>
        <div>Course enrolled: {cart.length}</div>
      </div>
      <div className="body">
        <div>
          <span>Total Price: </span>
          <span>${getRoundFigure(total)}</span>
        </div>
        <div>
          <span>Discount (20%): </span>
          <span>${getRoundFigure(discount)}</span>
        </div>
        <div>
          <span>Tax (10%): </span>
          <span>${getRoundFigure(tax)}</span>
        </div>
        <div>
          <span>Grand total: </span>
          <span>${getRoundFigure(total + tax - discount)}</span>
        </div>
        <div className="checkout-btn">
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faShoppingBag} /> Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
