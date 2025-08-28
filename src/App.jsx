import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import SingleProduct from "./pages/SingleProduct";
import Header from "./componet/Header";
import Auth from "./pages/Auth";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/Forgotpassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
