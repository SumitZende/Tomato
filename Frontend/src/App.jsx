import React, { useState } from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
function App() {
  const [showlogin,setShowlogin]=useState(false)

  return (
    <>
    {showlogin ? <LoginPopup setShowlogin={setShowlogin} />:<></>}
    
    <div className="m-auto w-[80%]">
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
