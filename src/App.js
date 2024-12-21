import React, { useState, useEffect, useMemo } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import generateProducts from "./generateProducts";
import "./App.css";

const colors = ["красный", "синий", "зеленый", "черный", "белый"];

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    colors: [],
    priceRange: { min: 0, max: 9999 },
  });
  const [activeSort, setActiveSort] = useState("priceAsc");

  useEffect(() => {
    const generatedProducts = generateProducts(10);
    setProducts(generatedProducts);
    setFilteredProducts(generatedProducts);
  }, []);

  const availableColors = colors;

  const filteredData = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase());

        const matchesColor =
          selectedFilters.colors.length === 0 ||
          selectedFilters.colors.includes(product.color);

        const matchesPrice =
          product.price >= selectedFilters.priceRange.min &&
          product.price <= selectedFilters.priceRange.max;

        return matchesSearch && matchesColor && matchesPrice;
      })
      .sort((a, b) => {
        switch (activeSort) {
          case "priceAsc":
            return a.price - b.price;
          case "priceDesc":
            return b.price - a.price;
          case "ratingDesc":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [products, search, selectedFilters, activeSort]);

  useEffect(() => {
    setFilteredProducts(filteredData);
  }, [filteredData]);

  return (
    <div className="App">
      <h1 className="store-title">Интернет-магазин</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Поиск по сайту..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="main-container">
        <div className="sidebar">
          <div className="filter-sort-container">
            <ProductSort
              activeSort={activeSort}
              handleSortChange={setActiveSort}
            />
            <ProductFilter
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              availableColors={availableColors}
            />
          </div>
        </div>
        <div className="product-list-container">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
