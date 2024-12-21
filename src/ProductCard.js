import React from "react";
import "./App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.imageUrl || "https://via.placeholder.com/250"}
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price} руб.</p>
        <div className="product-rating">
          <span className="rating-stars">★★★★★</span>
          <span className="rating-value">({product.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
