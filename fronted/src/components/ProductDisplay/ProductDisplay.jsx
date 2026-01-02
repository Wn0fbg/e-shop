import React from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="product_display">
      <div className="product_display-left">
        <div className="product_display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_display-img">
          <img
            className="product_display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="product_display-right">
        <h1>{product.name}</h1>
        <div className="product_display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product_display-right-prices">
          <div className="product_display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product_display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product_display-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam neque
          adipisci perspiciatis sint, odio quos.
        </div>
        <div className="product_display-right-size">
          <h1>Select Size</h1>
          <div className="product_display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add to card</button>
        <p className="product_display-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="product_display-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
