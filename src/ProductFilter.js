import React from "react";
import "./App.css";

const ProductFilter = ({
  selectedFilters,
  setSelectedFilters,
  availableColors,
}) => {
  const handleColorChange = (color) => {
    const newColors = selectedFilters.colors.includes(color)
      ? selectedFilters.colors.filter((c) => c !== color)
      : [...selectedFilters.colors, color];
    setSelectedFilters({ ...selectedFilters, colors: newColors });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    const numericValue = Math.max(0, parseInt(value, 10) || 0);
    setSelectedFilters({
      ...selectedFilters,
      priceRange: {
        ...selectedFilters.priceRange,
        [name]: numericValue,
      },
    });
  };

  return (
    <div className="product-filter">
      <h2>Фильтры</h2>
      <div className="color-filter">
        <h4>Цвет</h4>
        {availableColors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={selectedFilters.colors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="price-filter">
        <h4>Цена</h4>
        <label>
          От:
          <input
            type="number"
            name="min"
            value={selectedFilters.priceRange.min}
            onChange={handlePriceChange}
            min="0"
          />
        </label>
        <label>
          До:
          <input
            type="number"
            name="max"
            value={selectedFilters.priceRange.max}
            onChange={handlePriceChange}
            min="0"
          />
        </label>
      </div>
    </div>
  );
};

export default ProductFilter;
