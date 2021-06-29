import React from "react";
import { buyProduct } from '../../redux';
import { connect } from 'react-redux';


 function CartPage(props) {
  return (
    <div>
      <div className="container">
              <h1 className="title">{props.cartProducts}</h1>
              <button onClick={props.buyProduct}>Buy Product</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        cartProducts:state.cartProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyProduct:() => dispatch(buyProduct())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

