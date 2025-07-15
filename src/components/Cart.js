// import React from 'react';
// import { useCart } from './CartContext';
// import '../styles/Cart.css';
// import Swal from 'sweetalert2';

// const Cart = () => {
//   const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

//   const parsePrice = (price) => {
//     if (typeof price === 'number') return price;
//     // Remove currency and commas, then parse
//     return parseFloat(price.replace(/[^\d.]/g, ''));
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => {
//       return total + parsePrice(item.price) * (item.quantity || 1);
//     }, 0);
//   };

//   const handleRemoveFromCart = (item) => {
//     removeFromCart(item.id);
//     Swal.fire({
//       title: "Removed!",
//       text: `${item.name} has been removed from your cart`,
//       icon: "error",
//       timer: 1500,
//       showConfirmButton: false
//     });
//   };

//   const handleIncreaseQuantity = (item) => {
//     increaseQuantity(item.id);
//     Swal.fire({
//       title: "Updated!",
//       text: `Increased quantity of ${item.name}`,
//       icon: "success",
//       timer: 1500,
//       showConfirmButton: false
//     });
//   };

//   const handleDecreaseQuantity = (item) => {
//     if (item.quantity > 1) {
//       decreaseQuantity(item.id);
//       Swal.fire({
//         title: "Updated!",
//         text: `Decreased quantity of ${item.name}`,
//         icon: "success",
//         timer: 1500,
//         showConfirmButton: false
//       });
//     }
//   };

//   return (
//     <div className="cart-container">
//       <h1>Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <div className="empty-cart">
//           <p>Your cart is empty</p>
//         </div>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="item-details">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹{parsePrice(item.price).toLocaleString('en-IN')}</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => handleDecreaseQuantity(item)} disabled={item.quantity <= 1}>-</button>
//                     <span>{item.quantity || 1}</span>
//                     <button onClick={() => handleIncreaseQuantity(item)}>+</button>
//                   </div>
//                 </div>
//                 <button 
//                   className="remove-btn"
//                   onClick={() => handleRemoveFromCart(item)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <h2>Order Summary</h2>
//             <div className="summary-row">
//               <span>Subtotal:</span>
//               <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
//             </div>
//             <div className="summary-row">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-row total">
//               <span>Total:</span>
//               <span>₹{calculateTotal().toLocaleString('en-IN')}</span>
//             </div>
//             <button 
//               className="checkout-btn"
//               onClick={() => Swal.fire({
//                 title: "Proceeding to Checkout",
//                 text: "You will be redirected to the checkout page",
//                 icon: "info",
//                 timer: 2000,
//                 showConfirmButton: false
//               })}
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;






import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate
import '../styles/Cart.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // 👈 Initialize navigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: '',
  });

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    return total + price * item.quantity;
  }, 0).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.paymentMethod) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    // Save order details and items to localStorage
    const order = {
      ...formData,
      items: cart,
      total: totalPrice,
    };
    localStorage.setItem('orderDetails', JSON.stringify(order));

    Swal.fire({
      title: 'Order Placed!',
      text: 'Your order has been successfully placed.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      clearCart();
      setFormData({ name: '', email: '', address: '', paymentMethod: '' });

      // Redirect to order details page
      navigate('/orderdetails');
    });
  };

  return cart.length === 0 ? (
    <div className="empty-cart-message">
      <h2>Your cart is empty.</h2>
    </div>
  ) : (
    <div className="cart-container">
      <button className="clear-cart-btn" onClick={clearCart}>
        Clear Cart
      </button>
      <div className="cart-and-checkout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <span>Quantity: {item.quantity}</span>
                  <button
                    className="increase-quantity-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="decrease-quantity-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>
                </div>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="checkout-container1">
          <h2>Checkout</h2>
          <p className="total-price">Total Price: ₹ {totalPrice}</p>
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="">Select a payment method</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="upi">UPI</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;