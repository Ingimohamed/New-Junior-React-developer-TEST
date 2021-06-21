import React, { Component } from 'react';
import navIcon from '../../images/navIcon.png';
import vector from '../../images/Vector.png';
import cartIcon from '../../images/cartIcon.png';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
   
    render() {
        return (
          <div id="navbar">
            <nav>
              <ul className="ul_navbar">
                <li>
                  <Link to="/women" className="link">Women</Link>
                </li>
                <li>
                  <Link to="/men" className="link">MEN</Link>
                </li>
                <li>
                  <Link to="/kids" className="link">KIDS</Link>
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