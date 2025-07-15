import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/components/Home';
import GearUp from './src/components/GearUp';
import { CartProvider } from './src/components/CartContext';
// import Cart from './src/components/Cart';
import Women from './src/components/Women';
import Men from './src/components/Men';
// import Navbar2 from './src/components/Navbar2';
// import OrderDetails from './src/components/OrderDetails';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import './src/styles/App.css';
import Cart from './src/components/Cart';
// import 'sweetalert2/dist/sweetalert2.min.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-layout">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/gearup" element={<GearUp />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/orderdetails" element={<OrderDetails />} /> */}
            </Routes>
          </div>
          <Footer />  
        </div>
      </Router>
    </CartProvider>
  ); 
}

export default App;
