import React, { Component } from "react";
import navIcon from "../../images/navIcon.png";
import vector from "../../images/Vector.png";
import cartIcon from "../../images/cartIcon.png";
import { Link } from "react-router-dom";
import CartMenu from "./CartMenu";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav>
          <ul className="ul_navbar">
            <li className="li">
              <NavLink to="/" activeClassName="link_green" className="link">
                Tech
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                to="/clothes"
                activeClassName="link_green"
                className="link"
              >
                Clothes
              </NavLink>
            </li>
          </ul>
          <div className="div_middle_icon">
            <img src={navIcon} alt="icon" />
          </div>
          <ul className="ul_navbar2">
            <li className="price_cart dollar_sign">
              $ <img src={vector} alt="" />
            </li>

            <li className="price_cart">
              <Link
                to="/cartpage"
                className="nav-link  dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img src={cartIcon} alt="" />
              </Link>

              <ul className="card_dropdown hide">
                <li>
                  {" "}
                  <CartMenu />{" "}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
