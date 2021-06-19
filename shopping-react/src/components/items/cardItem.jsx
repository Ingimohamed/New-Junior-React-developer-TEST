import React, { Component } from 'react';


class CardItem extends Component {
    state = {
        id:this.props.id,
        image: this.props.image,
        imageIcon: this.props.imageIcon,
        descriptio: this.props.description,
        price: this.props.price,
    }

    render() {
        return (
            <div className="card">
                <div className="card_image">
                    <img key={this.state.id}  src={this.state.image} alt="item" />
                    <img key={this.state.id}  src={this.state.imageIcon} alt="cardIcon" />
                </div>
                <p key={this.state.id} className="description">{this.state.descriptio}</p>
                <p key={this.state.id} className="price">{this.state.price}</p>

            </div>
        );
    }
}

export default CardItem;