import React, { Component } from 'react';
import { connect } from "react-redux";

class Cart extends Component {
    state = {  }
    render() { 
        return ( <h1>Cart</h1> );
    }
}

const mapStateToProps = (state) => {
    return {
        ShoppingCart_Add: state.ShoppingCart.ShoppingCart,
        ShoppingCart_Remove:state.ShoppingCart.ShoppingCart
    };
  };
 
export default connect(mapStateToProps, null)(Cart);