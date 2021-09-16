import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import placeholder from "./placeholder.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar sticky">
        <li>
          <NavLink exact to="/home" className="nav-logo">
            Study<span style={{ fontWeight: "300" }}>App </span>
            <i className="fa fa-book"></i>
          </NavLink>
        </li>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <i class="fa fa-bars"></i>
        </label>
        <ul className="nav-links">
          <div className="left-nav-items">
            <li className="nav-item">
              <NavLink exact to="/home" className="nav-link">
                Your Sets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/createset" className="nav-link">
                <div className="navcreatebtn-container">
                  <i class="fa fa-plus fa-lg navcreatebtn"></i>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/search" className="nav-link">
                <div className="navsearchbtn-container">
                  <i class="fa fa-search navsearchbtn fa-lg"></i>
                </div>
              </NavLink>
            </li>
          </div>

          <div className="nav-right">
            <li>
              <NavLink exact to="/profile" className="nav-link">
                <img src={placeholder} className="profile-placeholder" />
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
