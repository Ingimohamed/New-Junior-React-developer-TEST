import React, { Component } from 'react';
import { connect } from "react-redux";

class Cart extends Component {
    state = {  }
    render() { 
        return (<div>
            <h2>Cart</h2>

            <div className="cart_product">
                <div className="col_one">
                    <p>Name of Product</p>
                    <p>Price $</p>
                    <div className="sizes">
                        <button>S</button>
                        <button>M</button>
                    </div>
                </div>
                <div className="col_two">
                    <input type="number" />
                    <img src="" alt="" />
                </div>
               
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        ShoppingCart_Add: state.ShoppingCart.ShoppingCart,
        ShoppingCart_Remove:state.ShoppingCart.ShoppingCart
    };
  };
 
export default connect(mapStateToProps, null)(Cart);