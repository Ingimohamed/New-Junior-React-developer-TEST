import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import navIcon from '../../images/navIcon.png';
import vector from '../../images/Vector.png';
import cartIcon from '../../images/cartIcon.png';

class Navbar extends Component {
   

   
    
    render() {
        return (
          <div id="navbar">
            <nav>
              <ul className="ul_navbar">
                <li>
                  <a className="active" href="#">WOMEN</a>
                </li>
                <li>
                  <a href="#">MEN</a>
                </li>
                <li>
                  <a href="#">KIDS</a>
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
                  <img src={cartIcon} alt="" />
                </li>
              </ul>
            </nav>
          </div>
        );
    }
}


export default Navbar;