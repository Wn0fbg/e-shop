import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu nav__menu-is-active">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" className="nav-menu-link">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" className="nav-menu-link">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens" className="nav-menu-link">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" className="nav-menu-link">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;