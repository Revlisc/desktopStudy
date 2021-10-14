import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class NavbarLogin extends Component {
  render() {
    return (
      <nav className="NavbarLogin sticky">
        <li>
          <NavLink exact to="/home" className="nav-logo">
            Study<span style={{ fontWeight: "300" }}>App </span>
            <i className="fa fa-book"></i>
          </NavLink>
        </li>

        <ul className="login-link">
          <li className="login-item">
            <NavLink exact to="/login" className="nav-link login-btn">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavbarLogin;
