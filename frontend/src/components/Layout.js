import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/login";
import Cart from "../pages/Cart";
import Orders from "../pages/Order";
import Signup from "../pages/SignUp";
import products from "../pages/data";
import { useState } from "react";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  const [product] = useState(products);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home products={product} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Layout;