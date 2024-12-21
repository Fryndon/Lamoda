import React from "react";
import "./App.css";

const ProductSort = ({ activeSort, handleSortChange }) => {
  const sortOptions = [
    { value: "priceAsc", label: "Сначала дешевые" },
    { value: "priceDesc", label: "Сначала дорогие" },
    { value: "ratingDesc", label: "Сначала популярные" },
  ];

  return (
    <div className="sort-container">
      <h2>Сортировать по:</h2>
      <select
        value={activeSort}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSort;
