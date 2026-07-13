import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Register from "./pages/Register.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import NotFound from "./pages/NotFound.jsx";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import RestaurantDashboard from "./pages/dashboard/RestaurantDashboard";
import RiderDashboard from "./pages/dashboard/RiderDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Toaster />
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/contactus"} element={<ContactUs />} />

            {/* Dashboard Routes */}
            <Route path={"/user/dashboard"} element={<UserDashBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
