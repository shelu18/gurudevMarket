import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/landingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs/contactus.jsx";
import Shops from "./pages/Shops";
import BookShop from "./pages/BookShop";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import './i18n';

 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book-shop" element={<BookShop />} />
       
        {/* Add more routes as needed */}
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}
export default App;
