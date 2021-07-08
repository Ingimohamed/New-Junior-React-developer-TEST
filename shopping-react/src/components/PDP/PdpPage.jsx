import React, { Component } from "react";
import { connect } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ShoppingCart_Add } from '../../redux/Actions/Actions';

  
  class PdpPage extends Component {
  images = this.props.productSelected[0].gallery;

  imageArray = this.images.map((image) => image);

  imagesArray = [
    {
      original: this.imageArray[0],
      thumbnail: this.imageArray[0],
    },
    {
      original: this.imageArray[1],
      thumbnail: this.imageArray[1],
    },
    {
      original: this.imageArray[2],
      thumbnail: this.imageArray[2],
    },
    {
      original: this.imageArray[3],
      thumbnail: this.imageArray[3],
    },
    {
      original: this.imageArray[4],
      thumbnail: this.imageArray[4],
    },
    {
      original: this.imageArray[5],
      thumbnail: this.imageArray[5],
    },
  ];

  render() {
    const someComponent = (props) => {
      return <div>{/* {props.someProps.objectKey} */}</div>;
    };

    let descriptionWithTags = this.props.productSelected[0].description;
    let descriptionWithoutTags = descriptionWithTags.replace(/<[^>]+>/g, "");

    const { name, prices, inStock } = this.props.productSelected[0];

    function isValidHex(color) {
      if (!color || typeof color !== "string") return false;

      // Validate hex values
      if (color.substring(0, 1) === "#") color = color.substring(1);

      switch (color.length) {
        case 3:
          return /^[0-9A-F]{3}$/i.test(color);
        case 6:
          return /^[0-9A-F]{6}$/i.test(color);
        case 8:
          return /^[0-9A-F]{8}$/i.test(color);
        default:
          return false;
      }

      return false;
    }

    const chooseSize = (index) => {
      document.getElementById(index).style.backgroundColor = "black";
      document.getElementById(index).style.color = "white";

    };

    return (
      <div>
        <div className="container_pdp">
          <div className="pdp_grid">
            <div className="col_one">
              <ImageGallery
                items={this.imagesArray}
                additionalClass="image_gallery app-image-gallery"
                infinite={true}
                isRTL={false}
                showBullets={false}
                showIndex={false}
                showThumbnails={true}
                showNav={false}
                thumbnailPosition="left"
                showFullscreenButton={true}
                showGalleryFullscreenButton={true}
                useWindowKeyDown={true}
                lazyLoad={true}
                showPlayButton={false}
                renderCustomControls={someComponent}
                autoPlay={false}
              />
            </div>
            <div className="col_two">
              <h3 className="product_name">{name}</h3>

              {this.props.productSelected[0].attributes.length !== 0 ?
                <p className="sizes_text">{isValidHex(this.props.productSelected[0].attributes[0].items[0].value) ? "COLOR" : "SIZE"}</p>
                : <p></p>}

              <div className={
                this.props.productSelected[0].attributes.length !== 0?
                isValidHex(this.props.productSelected[0].attributes[0].items[0].value) ?
                "color_section" : "size_section"
                : <p>hello from size section</p>}>
                
                {this.props.productSelected[0].attributes.length !== 0 ? (
                  this.props.productSelected[0].attributes[0].items.map(
                    (item, index) => (
                      <button
                        style={{ background: item.value }}
                        key={index}
                        id={index}
                        className={isValidHex(item.value) ? "btn_color" : "btn_size"}
                        onClick={() => chooseSize(index)}>
                        
                        {isValidHex(item.value) ? (<span className="choose_color"> </span>)
                          : (item.value)}
                      </button>
                    ))):(<h2></h2>)}
              </div>

              <div className="prices_section">
                <p className="price_title">PRICE:</p>
                <p className="price_number">
                  {prices[0].amount} <span>{prices[0].currency}</span>
                </p>
              </div>

              <div className="stock">
                <p>{inStock === true ? "In Stock" : "out of stock"}</p>
              </div>

              <button className="add_to_card">ADD TO CARD</button>

              <p> {descriptionWithoutTags}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productSelected: state.Selected_Product.Select_product,
  };
};
const dispatchTocart = (dispatch) => {
  return {
    addToCart: (add)=>dispatch(ShoppingCart_Add(add)),
  };
}

export default connect(mapStateToProps, dispatchTocart)(PdpPage);
