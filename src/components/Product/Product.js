import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { title, thumb, author, price } = props.product;
  return (
    <div className="product">
      <div className="product-thumb">
        <img src={thumb} alt="" />
      </div>
      <div className="product-description">
        <h4 className="product-name">{title}</h4>
        <p>
          <small>By: {author}</small>
        </p>
        <p>$ {price}</p>
        <Button
          className="btn btn-success main-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default Product;
