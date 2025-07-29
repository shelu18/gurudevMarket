import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/landingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs/contactus.jsx";
import './i18n';

// import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
