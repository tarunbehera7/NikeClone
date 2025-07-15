import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/SharedLayout.css';

const MensGear = () => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    price: []
  });

  const products = [
    {
      id: 1,
      name: "Nike Dri-FIT Training T-Shirt",
      price: 35,
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b9c0c0c-0c0c-0c0c-0c0c-0c0c0c0c0c0c/dri-fit-training-t-shirt.jpg",
      category: "Tops",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Gray"]
    },
    // Add more products here
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="gear-up-container">
      <div className="sidebar">
        <div className="header-container">
          <h2>Men's Gear</h2>
        </div>
        <div className="sidebar-panel">
          <h3>Category</h3>
          <ul>
            <li>
              <input type="checkbox" id="tops" />
              <label htmlFor="tops">Tops</label>
            </li>
            <li>
              <input type="checkbox" id="bottoms" />
              <label htmlFor="bottoms">Bottoms</label>
            </li>
            <li>
              <input type="checkbox" id="accessories" />
              <label htmlFor="accessories">Accessories</label>
            </li>
          </ul>
        </div>
        <div className="sidebar-panel">
          <h3>Size</h3>
          <ul>
            <li>
              <input type="checkbox" id="s" />
              <label htmlFor="s">S</label>
            </li>
            <li>
              <input type="checkbox" id="m" />
              <label htmlFor="m">M</label>
            </li>
            <li>
              <input type="checkbox" id="l" />
              <label htmlFor="l">L</label>
            </li>
            <li>
              <input type="checkbox" id="xl" />
              <label htmlFor="xl">XL</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="products-list">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensGear; 