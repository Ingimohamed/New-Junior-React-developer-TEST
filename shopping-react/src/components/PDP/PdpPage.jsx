import React, { Component } from "react";
import { connect } from "react-redux";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class PdpPage extends Component  {

  images = this.props.productSelected[0].gallery;
  
  imageArray = this.images.map((image) => (image));
 
  imagesArray = [
    {
      original:this.imageArray[0],
      thumbnail:this.imageArray[0]
    },
    {
      original:this.imageArray[1],
      thumbnail:this.imageArray[1]
    },
    {
      original:this.imageArray[2],
      thumbnail:this.imageArray[2]
    },
    {
      original:this.imageArray[3],
      thumbnail:this.imageArray[3]
    },
    {
      original:this.imageArray[4],
      thumbnail:this.imageArray[4]
    },
    {
      original:this.imageArray[5],
      thumbnail:this.imageArray[5]
    },
  ];



  render() {
    const someComponent = props => {
      return <div>{/* {props.someProps.objectKey} */}</div>;
    };


    let descriptionWithTags = this.props.productSelected[0].description;
    let descriptionWithoutTags = descriptionWithTags.replace(/<[^>]+>/g, '');

    const { name, prices, inStock } = this.props.productSelected[0];
    const sizes = this.props.productSelected[0].attributes[0].items[0];

    function isHex(h) {
      var a = parseInt(h,16);
      return (a.toString(16) === h)
      }

    console.log('hex of not?',isHex('#44FF03'));
 

    console.log('sizes!!!', sizes);

    console.log('images one only', this.imageArray);

    console.log("hiasd ", this.props.productSelected[0]);

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
             
              <h3 className="product_title">Title</h3>
              <h3 className="product_name">{name}</h3>
             

              
              <p className="sizes_text">{ sizes === String? 'SIZE': 'COLOR'}</p>
           
              <div className="size_section">
                {this.props.productSelected[0].attributes[0].items.map((item, index) => (
                  <button style={{background:item.value}}     key={index} className="btn_size btn_color">
                    {item.value}
                   
                 </button>
                ))}
              </div>
              <div className="prices_section">
                <p className="price_title">PRICE:</p>
                <p className="price_number">{prices[0].amount} <span>{prices[0].currency}</span></p>
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

export default connect(mapStateToProps, null)(PdpPage);

