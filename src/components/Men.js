import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productData } from '../utils/mproduct-data';
import { useCart } from '../components/CartContext'; 
import '../styles/Men.css';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';


const Men = () => {

  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart from context

  useEffect(() => {
    // Sidebar toggle
    const headers = document.querySelectorAll('.sidebar-panel h3');
    headers.forEach(header => {
      header.addEventListener('click', function (e) {
        if (e.target.classList.contains('dropdown-icon') || e.target.tagName === 'H3' || e.target === this) {
          const ul = this.nextElementSibling;
          if (ul && ul.tagName === 'UL') {
            const isOpen = ul.style.display === 'block';
            ul.style.display = isOpen ? 'none' : 'block';
            this.classList.toggle('open', !isOpen);
          }
        }
      });
    });

    // Add event listener for the color checkbox
    const colorCheckbox = document.querySelector('.color-checkbox');
    if (colorCheckbox) {
      colorCheckbox.addEventListener('change', function () {
        if (this.checked) {
          window.location.reload();
        }
      });
    }

    // Add filtering logic
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    priceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterProducts);
    });

    function filterProducts() {
      const selectedPriceRanges = Array.from(priceCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach(card => {
        card.style.display = 'block';
      });

      if (selectedPriceRanges.length > 0) {
        productCards.forEach(card => {
          const productId = card.getAttribute('data-product-id');
          const product = productData.find(p => p.id == productId);
          const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));

          const shouldDisplay = selectedPriceRanges.some((range) => {
            if (range.includes('-')) {
              const [min, max] = range.split('-').map(Number);
              return price >= min && price <= max;
            } 
            else {
              return price > 13000;
            }
          });

          card.style.display = shouldDisplay ? 'block' : 'none';
        });
      }
    }
  }, [navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: "Added to Cart!",
      // text: `${product.name} has been added to your cart`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
  };
  
  
  if (!productData) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <main className="gear-up-container">
        <aside className="sidebar">
          <div className="header-container">
            <h2>Filters</h2>
          </div>
          <div className="sidebar-panel">
            {/* <h3>
              Gender<span className="dropdown-icon">▼</span>
            </h3>
            <ul>
              <li>
                <input type="checkbox" id="item1" />
                <label htmlFor="item1">Men</label>
              </li>
            </ul> */}
            <h3>
              Shop by Price<span className="dropdown-icon">▼</span>
            </h3>
            <ul>
              <li>
                <input type="checkbox" id="price1" name="price" value="2501-7500" />
                <label htmlFor="price1">₹ 2,501.00 - ₹ 7,500.00</label>
              </li>
              <li>
                <input type="checkbox" id="price2" name="price" value="7501-12999" />
                <label htmlFor="price2">₹ 7,501.00 - ₹ 12,999.00</label>
              </li>
              <li>
                <input type="checkbox" id="price3" name="price" value="13000" />
                <label htmlFor="price3">Over ₹ 13,000.00</label>
              </li>
            </ul>
          </div>
        </aside>

        <section className="products-list">
          <div className="header-container">
            <h2>Featured Products</h2>
          </div>
          <div className="product-grid">
            {productData.map(product => (
              <div
                key={product.id}
                className="product-card"
                data-product-id={product.id}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Men;