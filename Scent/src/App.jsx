import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductGrid from './Components/ProductGrid';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import About from './Components/About';
import Payment from './Components/Payment';
import { CartProvider } from './Components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/mens" element={<ProductGrid gender="men" />} />
          <Route path="/womens" element={<ProductGrid gender="women" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
