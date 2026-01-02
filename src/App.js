import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import ThankYou from "./pages/ThankYou";

function App() {

  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };



  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<Detail addToCart={addToCart} />}/>
          <Route path="/thank-you/:orderId" element={<ThankYou />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
