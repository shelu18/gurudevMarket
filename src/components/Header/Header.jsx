
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logo from '../../assets/logo/logo.jpg';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={logo} alt="Gurudev Market Logo" className="logo-mark" />
        <span className="logo-name">Gurudev Market</span>
      </div>
      <nav>
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/shops">Shops</Link>
        <Link className="nav-btn" to="/about">About</Link>
        <Link className="nav-btn" to="/contact">Contact</Link>
        <Link className="nav-cta" to="/book-shop">Book Shop</Link>
      </nav>
    </header>
  );
}
