import React, { Component } from 'react';
import productA from '../../images/ProductA.png';
import Products from './Products';

class ItemsList extends Component {
    state = {  }
    render() { 
        return (
            
            <div className="grid_items">
                <div className="card">
                    <img className="card_img" src={productA} alt="item" />
                    <div className="card_text">
                    
                        <figcaption className="item_name">name of item</figcaption>
                        <figcaption className="item_price">Price</figcaption>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ItemsList;