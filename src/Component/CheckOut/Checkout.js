import React from "react";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css"
import CheckOutProduct from "./CheckOutProduct/CheckOutProduct";

function Checkout() {
  const [state,dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {state.basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              rating={item.rating}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
