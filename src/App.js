import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SubHeadder from "./components/Subheadder";
import CartProvider from "./Store/cartProvider";

const App = () => {
  
  return<BrowserRouter>
  
    <Routes>
      <Route path="/" element={
      <>
      <Header />
      <SubHeadder />
      <Home />
      </>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
 
};

export default App;
