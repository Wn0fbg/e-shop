import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cart_items">
      <div className="cart_item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart_items-format cart_item-format-main">
                <img className="cart_icon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart_item-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart_items-down">
        <div className="cart_items-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cart_items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <hr />
          <div className="cart_items-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart_items-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>proceed to checkout</button>
        </div>
        <div className="cart_items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart_items-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
