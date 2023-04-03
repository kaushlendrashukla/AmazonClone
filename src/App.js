import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SubHeadder from "./components/Subheadder";
import AuthContext from "./Store/AuthContext";
import { useContext } from "react";


const App = () => {
  const authCtx = useContext(AuthContext)
  const logg = authCtx.isLoggedIn
  
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
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="cart" element={authCtx.isLoggedIn ? <Cart /> : <Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
 
};

export default App;


//<Route path="/"  element={<Navigate replace to="/login" />} />  // OR path='/login'
//<Route path='/login' element={<Login/>}