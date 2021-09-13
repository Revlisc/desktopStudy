import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar sticky">
        <ul className="nav-links-left">
          <li>
            <NavLink exact to="/" className="nav-logo">
              StudyApp <i className="fa fa-book"></i>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact to="/" className="nav-links">
              Your Sets
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" className="nav-links">
              <div className="navcreatebtn-container">
                <i class="fa fa-plus navcreatebtn"></i>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" className="nav-links">
              <div className="navsearchbtn-container">
                <i class="fa fa-search navsearchbtn"></i>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
