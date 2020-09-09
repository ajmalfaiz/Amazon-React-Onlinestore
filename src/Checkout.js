import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/A21TJRUUN4KGV/499e3754c44e20a3c5fc3546674fc0e5.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg"
          alt=""
        />
        <div>
        <h2 className="checkout__title"> Your Shopping Basket</h2>
       
      </div>
      </div>
      
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
