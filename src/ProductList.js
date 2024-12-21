import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        <div className="product-list-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-products">По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
};

export default ProductList;
